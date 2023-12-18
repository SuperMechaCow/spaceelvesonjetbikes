//Variables
let canvas;
let ctx;
//Create Game variables

let gameLoop;
let game;
let allID = 0;
let ticks = 0;
let lastTimestamp = 0;
let fps = 0;


/*
      ::::::::  :::::::::: ::::::::::: :::    ::: :::::::::
    :+:    :+: :+:            :+:     :+:    :+: :+:    :+:
   +:+        +:+            +:+     +:+    +:+ +:+    +:+
  +#++:++#++ +#++:++#       +#+     +#+    +:+ +#++:++#+
        +#+ +#+            +#+     +#+    +#+ +#+
#+#    #+# #+#            #+#     #+#    #+# #+#
########  ##########     ###      ########  ###
*/

window.onload = function () {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");

    setupInputs();

    //Game
    game = new Game();
    game.debug = false;

    game.match = new Match();
    game.match.map = new Map();

    //Player
    game.player = new Player();
    game.player.character = new Character(allID++, 0, 0, game.player, { name: 'Cpt. Fabius', gfx: 'img/sprites/jetbike', hover: 16, airAccel: new Vect3(0.15, 0.15, 1) });
    game.player.camera = new Camera({ target: game.player.character });
    game.player.character.HB = new Cylinder(new Vect3((game.match.map.w / 2), (game.match.map.h / 2) + 200, 0), 29, 37);

    makeGame();

    game.match.map.buildNavMesh();

    //start game loop
    //Run the step() function every 16ms (60fps)
    gameLoop = setInterval(step, 16);

    draw();

}

/*
      :::::::: ::::::::::: :::::::::: :::::::::
    :+:    :+:    :+:     :+:        :+:    :+:
   +:+           +:+     +:+        +:+    +:+
  +#++:++#++    +#+     +#++:++#   +#++:++#+
        +#+    +#+     +#+        +#+
#+#    #+#    #+#     #+#        #+#
########     ###     ########## ###
*/

function step() {
    // The next two lines will always max screen
    game.window.h = window.innerHeight;
    game.window.w = window.innerWidth;
    game.player.camera.radius = Math.sqrt((game.window.w / 2) ** 2 + (game.window.h / 2) ** 2)

    canvas.width = game.window.w;
    canvas.height = game.window.h;

    //Put Bot player characters into a list
    let npcs = [];
    for (const npc in game.match.bots) {
        npcs.push(game.match.bots[npc].character);
    }

    if (!game.paused) {

        game.match.step();
        game.match.map.step();

        //Do all steps and movement
        game.player.controller.read();
        game.player.character.step(game.player.controller);

        for (const bot of game.match.bots) {
            bot.AI();
            bot.character.step(bot.controller);
        }
        for (const block of game.match.map.blocks) {
            block.step();
        }
        for (const missile of game.match.map.missiles) {
            missile.step();
        }

        ticks++;

    } else {
        game.player.controller.read();

    }

    // Move camera to next sensible target when player character is inactive or missing
    if (!game.player.character.active) {
        game.gameover = true;
        if (game.player.character.lastColNPC)
            if (game.player.character.lastColNPC.active)
                game.player.camera.target = game.player.character.lastColNPC
            else
                for (const npc of npcs) {
                    if (npc.active && npc.team == game.player.character.team)
                        game.player.camera.target = npc
                }
        if (!game.player.camera.target)
            for (const npc of npcs) {
                if (npc.active)
                    game.player.camera.target = npc
            }
    }

    //Update Camera Position
    if (game.player.camera.target) {
        game.player.camera.x = game.player.camera.target.HB.pos.x;
        game.player.camera.y = game.player.camera.target.HB.pos.y;
    }

    //Performance Check
    const currentTimestamp = performance.now();
    const elapsedMilliseconds = currentTimestamp - lastTimestamp;
    fps = Math.round(1000 / elapsedMilliseconds);

    // Update last timestamp
    lastTimestamp = currentTimestamp;

    //Draw game
    draw();

}

/*
      :::::::::  :::::::::      :::     :::       :::
     :+:    :+: :+:    :+:   :+: :+:   :+:       :+:
    +:+    +:+ +:+    +:+  +:+   +:+  +:+       +:+
   +#+    +:+ +#++:++#:  +#++:++#++: +#+  +:+  +#+
  +#+    +#+ +#+    +#+ +#+     +#+ +#+ +#+#+ +#+
 #+#    #+# #+#    #+# #+#     #+#  #+#+# #+#+#
#########  ###    ### ###     ###   ###   ###
*/

function draw() {

    // game.player.camera.angle = sineAnimate(0.5, 0.01) + 0.5;

    //Clear the canvas 
    // ctx.fillStyle = "#000000";
    // ctx.fillRect(0, 0, game.window.w, game.window.h);

    //Draw Map
    game.match.map.draw(game.player.character);

    //Put Bot player characters into a list
    let npcs = [];
    for (const npc in game.match.bots) {
        npcs.push(game.match.bots[npc].character);
    }

    let renderList =
        [game.player.character, ...npcs, ...game.match.map.blocks, ...game.match.map.missiles]
            .sort((a, b) => {
                if (a.HB.pos.y + a.HB.pos.z < b.HB.pos.y + b.HB.pos.z) return -1;
                if (a.HB.pos.y + a.HB.pos.z > b.HB.pos.y + b.HB.pos.z) return 1;
                return 0;
            });
    for (const entity of renderList) {
        entity.draw(game.player.character);
    }

    //Draw Map Lighting
    game.match.map.lighting();

    //Draw HUD
    game.player.interface.drawHUD();

    //Draw Controller HUD
    game.player.controller.draw();
}

/*
      ::::::::      :::       :::   :::   ::::::::::            :::   :::    ::::::::  :::::::::  :::::::::: ::::::::
    :+:    :+:   :+: :+:    :+:+: :+:+:  :+:                  :+:+: :+:+:  :+:    :+: :+:    :+: :+:       :+:    :+:
   +:+         +:+   +:+  +:+ +:+:+ +:+ +:+                 +:+ +:+:+ +:+ +:+    +:+ +:+    +:+ +:+       +:+
  :#:        +#++:++#++: +#+  +:+  +#+ +#++:++#            +#+  +:+  +#+ +#+    +:+ +#+    +:+ +#++:++#  +#++:++#++
 +#+   +#+# +#+     +#+ +#+       +#+ +#+                 +#+       +#+ +#+    +#+ +#+    +#+ +#+              +#+
#+#    #+# #+#     #+# #+#       #+# #+#                 #+#       #+# #+#    #+# #+#    #+# #+#       #+#    #+#
########  ###     ### ###       ### ##########          ###       ###  ########  #########  ########## ########
*/

function makeGame(type) {
    game.match.map.blocks.push(new Block(allID++, (game.match.map.w / 2) - 300, (game.match.map.h / 2) - 0, 0, 128, 128, 64, { color: [101, 101, 101], colorSide: [201, 201, 201] }))
    // game.match.map.blocks[game.match.map.blocks.length - 1].HB.pos.z = 100;

    game.match.map.blocks.push(new Block(allID++, (game.match.map.w / 2), (game.match.map.h / 2), 0, 10, 10, 128, { color: [101, 101, 101], colorSide: [201, 201, 201] }))

    for (let i = 0; i < 30; i++) {
        let ran = function () { return Math.floor(Math.random() * 4) + 1 }
        game.match.map.blocks.push(new Block(allID++, Math.round(Math.random() * game.match.map.w), Math.round(Math.random() * game.match.map.h), 0, ran() * 32, ran() * 32, ran() * 32, { color: [101, 101, 101], colorSide: [201, 201, 201] }))
    }

    //ammo
    for (let i = 0; i < 20; i++) {
        game.match.map.blocks.push(new Ammo_Ballistic(allID++, Math.round(Math.random() * game.match.map.w), Math.round(Math.random() * game.match.map.h), 0, 128, 128, 64))
        game.match.map.blocks.push(new Ammo_Plasma(allID++, Math.round(Math.random() * game.match.map.w), Math.round(Math.random() * game.match.map.h), 0, 128, 128, 64))
        game.match.map.blocks.push(new HealthPickup(allID++, Math.round(Math.random() * game.match.map.w), Math.round(Math.random() * game.match.map.h), 0, 128, 128, 64))
    }

    // //wave
    // game.match.map.blocks.push(new Block(
    //     allID++,
    //     (game.match.map.w / 2) + 100,
    //     (game.match.map.h / 2) + 100,
    //     0, 32, 32, 16,
    //     { color: [50, 50, 255], colorSide: [150, 150, 250], solid: false, opacity: 0.5 }
    // ));
    // game.match.map.blocks[game.match.map.blocks.length - 1].runFunc.push(
    //     function () {
    //         this.HB.pos.z = sineAnimate(10, 0.05) + 10;
    //     }.bind(game.match.map.blocks[game.match.map.blocks.length - 1])
    // );
    // game.match.map.blocks[game.match.map.blocks.length - 1].trigger =
    //     function (actor, side) {
    //         actor.speed.z += sineAnimate(0.5, 0.05) + 0.5
    //     }.bind(game.match.map.blocks[game.match.map.blocks.length - 1]); //end wave

    // //wave
    // game.match.map.blocks.push(new Block(
    //     allID++,
    //     (game.match.map.w / 2) + 100,
    //     (game.match.map.h / 2) + 164,
    //     0, 32, 32, 16,
    //     { color: [50, 50, 255], colorSide: [150, 150, 250], solid: false, opacity: 0.5 }
    // ));
    // game.match.map.blocks[game.match.map.blocks.length - 1].runFunc.push(
    //     function () {
    //         this.HB.pos.z = sineAnimate(10, 0.05, 60) + 10 + 16;
    //     }.bind(game.match.map.blocks[game.match.map.blocks.length - 1])
    // );
    // game.match.map.blocks[game.match.map.blocks.length - 1].trigger =
    //     function (actor, side) {
    //         if (actor.HB.pos.z >= this.HB.pos.z)
    //             actor.speed.z += sineAnimate(0.5, 0.05) + 0.5
    //     }.bind(game.match.map.blocks[game.match.map.blocks.length - 1]); //end wave

    game.match.map.runFunc.push(
        () => {
            if (game.player.character.active && ticks % 3600 == 0) {
                game.match.waves++;
                for (let i = 0; i < Math.floor(ticks / 7200) + 1; i++) {
                    game.match.bots.push(new Bot()) //Kevin / Jae'Sin
                    game.match.bots[game.match.bots.length - 1].character = new Character(
                        allID++,
                        (game.match.map.w / 2),
                        (game.match.map.h / 2),
                        game.match.bots[game.match.bots.length - 1],
                        // { target: game.player.character, name: 'Jaysin', gfx: 'img/sprites/dark2', team: 1 }
                        {
                            target: game.player.character,
                            // target: game.match.bots[game.match.bots.length - 1].character,
                            name: getName(), team: 1, gfx: 'img/sprites/dark2', color: [0, 0, 255],
                            hover: 16, airAccel: new Vect3(0.15, 0.15, 1),
                            runFunc: [
                                function () { }.bind(game.match.bots[game.match.bots.length - 1].character)
                            ]
                        }
                    );
                    game.match.bots[game.match.bots.length - 1].character.HB = new Cylinder(new Vect3(Math.round(Math.random() * game.match.map.w), Math.round(Math.random() * game.match.map.h), 0), 29, 37);
                }
                for (let i = 0; i < Math.floor(ticks / 14400) + 1; i++) {
                    // Friendly
                    game.match.bots.push(new Bot()) //Big ounce / Loh'Ghan
                    game.match.bots[game.match.bots.length - 1].character = new Character(
                        allID++,
                        (game.match.map.w / 2),
                        (game.match.map.h / 2),
                        game.match.bots[game.match.bots.length - 1],
                        {
                            target: null,
                            // target: game.match.bots[game.match.bots.length - 1].character,
                            name: getName(), team: 0, gfx: 'img/sprites/dark1', color: [0, 255, 0],
                            hover: 16, airAccel: new Vect3(0.15, 0.15, 1),
                            runFunc: [
                                function () { }.bind(game.match.bots[game.match.bots.length - 1].character)
                            ]
                        }
                    );
                    game.match.bots[game.match.bots.length - 1].character.HB = new Cylinder(new Vect3(Math.round(Math.random() * game.match.map.w), Math.round(Math.random() * game.match.map.h), 0), 29, 37);
                }
            }
        }
    )
}