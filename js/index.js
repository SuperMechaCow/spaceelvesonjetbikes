//Variables
let canvas;
let ctx;
//Create Game variables

let gameLoop;
let game;
let allID = 0;
let ticks = 0;


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
    // game.match.map.postLoad();

    //Player
    game.player = new Player();
    game.player.controller = new Controller();
    // game.player.character = new Character(allID++, 24, 24);
    game.player.character = new Character(allID++, (game.match.map.w / 2), (game.match.map.h / 2));
    game.player.camera = new Camera({ target: game.player.character });

    makeGame(['lonewarrior', 'randommap']);

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

    // Resize screen if needed
    // if (window.innerWidth < game.window.dw) {
    //     game.window.w = window.innerWidth;
    //     game.window.h = game.window.w * (2 / 3)
    //     if (window.innerHeight >= game.window.h)
    //         game.window.h = window.innerHeight;
    // }
    // if (window.innerHeight < game.window.dh) {
    //     game.window.h = window.innerHeight;
    //     game.window.w = game.window.h / (2 / 3);
    // }

    // The next two lines will always max screen (comment out above)
    game.window.h = window.innerHeight;
    game.window.w = window.innerWidth;

    canvas.width = game.window.w;
    canvas.height = game.window.h;

    if (!game.paused) {
        //Handle goals and collisions
        for (const goal of game.match.goals) {
            if (game.match.goalIndex >= game.match.goals.length) {
                game.match.goalIndex = 0;
                game.match.lapEnd = ticks;
                if (game.player.best.lap == 0 || game.player.best.lap > game.match.lapEnd - game.match.lapStart) game.player.best.lap = game.match.lapEnd - game.match.lapStart;
                game.match.lapStart = ticks;
            }
            goal.activeGoal = false;
            if (game.match.goals.indexOf(goal) == game.match.goalIndex)
                goal.activeGoal = true;
            goal.collide([game.player.character, ...game.match.npcs])
        }

        game.match.step();
        game.match.map.step();

        //Do all collision. It has to be in this order, or else pads/blocks won't activate for players and npcs
        for (const block of game.match.map.blocks) {
            block.collide([game.player.character, ...game.match.npcs, ...game.match.map.blocks])
        }
        for (const missile of game.match.map.missiles) {
            missile.collide([game.player.character, ...game.match.npcs, ...game.match.map.blocks])
        }
        for (const debris of game.match.map.debris) {
            debris.collide([game.player.character, ...game.match.npcs, ...game.match.map.debris])
        }
        game.player.character.collide([...game.match.npcs, ...game.match.map.blocks, ...game.match.map.debris])
        for (const npc of game.match.npcs) {
            npc.collide([game.player.character, ...game.match.npcs, ...game.match.map.blocks, ...game.match.map.debris])
        }

        //Do all steps and movement
        game.player.controller.read();
        game.player.character.step(game.player.controller);
        for (const npc of game.match.npcs) {
            npc.step(game.player.controller);
        }
        for (const block of game.match.map.blocks) {
            block.step();
        }
        for (const missile of game.match.map.missiles) {
            missile.step();
        }
        for (const debris of game.match.map.debris) {
            if (debris.active)
                debris.step();
        }
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
                for (const npc of game.match.npcs) {
                    if (npc.active && npc.team == game.player.character.team)
                        game.player.camera.target = npc
                }
        if (!game.player.camera.target)
            for (const npc of game.match.npcs) {
                if (npc.active)
                    game.player.camera.target = npc
            }
    }
    //Update Camera Position
    if (game.player.camera.target) {
        game.player.camera.x = game.player.camera.target.x;
        game.player.camera.y = game.player.camera.target.y;
    }

    //Draw game
    draw();
    ticks++;
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
    //Clear the canvas 
    ctx.fillStyle = "#333300";
    ctx.fillRect(0, 0, game.window.w, game.window.h);

    //Draw Map
    game.match.map.draw(game.player.character);

    let renderList =
        [game.player.character, ...game.match.map.blocks, ...game.match.map.missiles, ...game.match.goals, ...game.match.map.debris, ...game.match.npcs]
            .sort((a, b) => {
                if (a.y + a.z < b.y + b.z) return -1;
                if (a.y + a.z > b.y + b.z) return 1;
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
      ::::::::::: ::::    ::: :::::::::  :::    ::: ::::::::::: ::::::::
         :+:     :+:+:   :+: :+:    :+: :+:    :+:     :+:    :+:    :+:
        +:+     :+:+:+  +:+ +:+    +:+ +:+    +:+     +:+    +:+
       +#+     +#+ +:+ +#+ +#++:++#+  +#+    +:+     +#+    +#++:++#++
      +#+     +#+  +#+#+# +#+        +#+    +#+     +#+           +#+
     #+#     #+#   #+#+# #+#        #+#    #+#     #+#    #+#    #+#
########### ###    #### ###         ########      ###     ########
*/
// Collect all input data and send it to the controller for better handling
function setupInputs() {
    document.addEventListener("keydown", function (event) {
        game.player.controller.touch.enabled = false;
        if (event.shiftKey) {
            game.player.controller.shiftKey = Number(event.shiftKey)
        }
        if (event.altKey) {
            event.preventDefault();
            game.player.controller.altKey = Number(event.altKey)
        }
        if (event.key.toLocaleLowerCase() === "w" || event.key === "ArrowUp") game.player.controller.upKey = 1;
        if (event.key.toLocaleLowerCase() === "a" || event.key === "ArrowLeft") game.player.controller.leftKey = 1;
        if (event.key.toLocaleLowerCase() === "s" || event.key === "ArrowDown") game.player.controller.downKey = 1;
        if (event.key.toLocaleLowerCase() === "d" || event.key === "ArrowRight") game.player.controller.rightKey = 1;
        if (event.key.toLocaleLowerCase() === " ") game.player.controller.spaceKey = 1;
        if (event.key === "Escape" || event.key === "Escape") game.paused = !game.paused;
    });
    document.addEventListener("keyup", function (event) {
        game.player.controller.shiftKey = Number(event.shiftKey)
        game.player.controller.altKey = Number(event.altKey)
        if (event.key.toLocaleLowerCase() === "w" || event.key === "ArrowUp") game.player.controller.upKey = 0;
        if (event.key.toLocaleLowerCase() === "a" || event.key === "ArrowLeft") game.player.controller.leftKey = 0;
        if (event.key.toLocaleLowerCase() === "s" || event.key === "ArrowDown") game.player.controller.downKey = 0;
        if (event.key.toLocaleLowerCase() === "d" || event.key === "ArrowRight") game.player.controller.rightKey = 0;
        if (event.key.toLocaleLowerCase() === " ") game.player.controller.spaceKey = 0;
    });
    window.addEventListener('gamepadconnected', (event) => {
        game.player.controller.gamePad = event.gamepad.index;
    });
    window.addEventListener('gamepaddisconnected', (event) => {
        game.player.controller.gamePad = null;
    });
    window.addEventListener('touchstart', (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        game.player.controller.touch.enabled = true;
        getTouch(event);
    }, { passive: false });

    window.addEventListener('touchmove', (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        getTouch(event, 'move');
    }, { passive: false });

    window.addEventListener('touchend', (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        getTouch(event, 'end');
    }, { passive: false });

    window.addEventListener('touchcancel', (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        getTouch(event);
    }, { passive: false });
    window.addEventListener("mousedown", (event) => {
        let coords = getCanvasRelative(event, false); // from top-left
        game.player.controller.fireX = coords.x;
        game.player.controller.fireY = coords.y;
        coords = getCanvasRelative(event, true); // relative to center
        game.player.controller.rclickX = coords.x;
        game.player.controller.rclickY = coords.y;
        // Get which mousebutton they clicked
        if (event.button == 0)
            game.player.controller.clickButton = 1
        else if (event.button == 2)
            game.player.controller.rclickButton = 1
    });
    window.addEventListener("mouseup", (event) => {
        if (event.button == 0)
            game.player.controller.clickButton = 0;
        else if (event.button == 2)
            game.player.controller.rclickButton = 0;
    });
    window.addEventListener("wheel", (event) => {
        game.player.controller.wheelUp = (event.wheelDelta > 0) * 1;
        game.player.controller.wheelDown = (event.wheelDelta < 0) * 1;
    });
    window.addEventListener('mousemove', (event) => {
        let coords = getCanvasRelative(event, true);
        game.player.controller.aimX = coords.x
        game.player.controller.aimY = coords.y
    });
    window.addEventListener("contextmenu", e => e.preventDefault());
}

function getCanvasRelative(e, center) {
    bx = canvas.getBoundingClientRect();
    if (center) {
        let compareX = e.clientX - this.x;
        let compareY = e.clientY - this.y;
        return {
            x: e.clientX - (bx.width / 2),
            y: e.clientY - (bx.height / 2),
            bx: bx
        };
    } else {
        return {
            x: e.clientX - bx.left,
            y: e.clientY - bx.top,
            bx: bx
        };
    }
}


/*
  ::::::::::: ::::::::  :::    :::  ::::::::  :::    :::
     :+:    :+:    :+: :+:    :+: :+:    :+: :+:    :+:
    +:+    +:+    +:+ +:+    +:+ +:+        +:+    +:+
   +#+    +#+    +:+ +#+    +:+ +#+        +#++:++#++
  +#+    +#+    +#+ +#+    +#+ +#+        +#+    +#+
 #+#    #+#    #+# #+#    #+# #+#    #+# #+#    #+#
###     ########   ########   ########  ###    ###
*/

function getTouch(event, type) {
    if (event.target == canvas) {
        let touchLeftFound = false;
        for (const touch of event.targetTouches) {
            let touchCoord = getCanvasRelative(touch);
            let touchX = touchCoord.x - game.player.controller.touch.left.centerX
            let touchY = touchCoord.y - game.player.controller.touch.left.centerY
            if ((Math.abs(touchX) < game.player.controller.touch.left.w / 2 && Math.abs(touchY) < game.player.controller.touch.left.h / 2) || type == 'move') {
                touchLeftFound = true
                if (touchX < 0) {
                    game.player.controller.leftTouch = (touchX / (game.player.controller.touch.left.w / 2)) * -1;
                    if (game.player.controller.leftTouch > 1) game.player.controller.leftTouch = 1;
                    game.player.controller.rightTouch = 0;
                }
                else if (touchX > 0) {
                    game.player.controller.rightTouch = (touchX / (game.player.controller.touch.left.w / 2));
                    if (game.player.controller.rightTouch > 1) game.player.controller.rightTouch = 1;
                    game.player.controller.leftTouch = 0;
                }
                if (touchY < 0) {
                    game.player.controller.upTouch = (touchY / (game.player.controller.touch.left.h / 2)) * -1;
                    if (game.player.controller.upTouch < 1) game.player.controller.upTouch = 1;
                    game.player.controller.downTouch = 0;
                }
                else if (touchY > 0) {
                    game.player.controller.downTouch = (touchY / (game.player.controller.touch.left.h / 2));
                    if (game.player.controller.downTouch > 1) game.player.controller.downTouch = 1;
                    game.player.controller.upTouch = 0;
                }
            }
        }
        if (!touchLeftFound) {
            game.player.controller.rightTouch = 0;
            game.player.controller.leftTouch = 0;
            game.player.controller.upTouch = 0;
            game.player.controller.downTouch = 0;
        }
    }
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

    if (type.includes('pool')) {
        game.match.map.blocks.push(new PolyBlock(allID++, (game.match.map.w / 2), (game.match.map.h / 2), { coords: [[0, 200], [300, 500], [0, 800], [-300, 500]], splash: '#ccccee', color: '#3366ff' }))
        game.match.map.blocks.push(new PolyBlock(allID++, (game.match.map.w / 2), (game.match.map.h / 2), { coords: [[0, 800], [300, 1100], [0, 1400], [-300, 1100]], splash: '#ccccee', color: '#3366ff' }))
    }
    if (type.includes('randommap')) {
        // Random Map
        for (let i = 0; i < 100; i++) {
            let tempx = (Math.floor(Math.random() * (game.match.map.w / 48)) * 48) + 24
            let tempy = (Math.floor(Math.random() * (game.match.map.h / 48)) * 48) + 24
            let tempw = (Math.ceil(Math.random() * 2) * 48)
            let temph = (Math.ceil(Math.random() * 2) * 48)
            game.match.map.blocks.push(new Block(allID++, tempx, tempy, { color: '#333333', colorSide: '#666666', w: tempw, h: temph, d: 64 }))
        }
        for (let i = 0; i < 25; i++) {
            let tempx = (Math.floor(Math.random() * (game.match.map.w / 48)) * 48) + 24
            let tempy = (Math.floor(Math.random() * (game.match.map.h / 48)) * 48) + 24
            game.match.map.blocks.push(new JumpPad(allID++, tempx, tempy, { color: '#FF6600' }))
        }
        for (let i = 0; i < 25; i++) {
            let tempx = (Math.floor(Math.random() * (game.match.map.w / 48)) * 48) + 24
            let tempy = (Math.floor(Math.random() * (game.match.map.h / 48)) * 48) + 24
            game.match.map.blocks.push(new SpeedPad(allID++, tempx, tempy, { color: '#9999FF' }))
        }
        for (let i = 0; i < 25; i++) {
            let tempx = (Math.floor(Math.random() * (game.match.map.w / 48)) * 48) + 24
            let tempy = (Math.floor(Math.random() * (game.match.map.h / 48)) * 48) + 24
            game.match.map.blocks.push(new AmmoPickup(allID++, tempx, tempy))
        }
        for (let i = 0; i < 25; i++) {
            let tempx = (Math.floor(Math.random() * (game.match.map.w / 48)) * 48) + 24
            let tempy = (Math.floor(Math.random() * (game.match.map.h / 48)) * 48) + 24
            game.match.map.blocks.push(new AmmoPickup(allID++, tempx, tempy, { ammoType: 'flamer', ammoAmount: 25, color: "#FFFF00" }))
        }
        for (let i = 0; i < 10; i++) {
            let tempx = (Math.floor(Math.random() * (game.match.map.w / 48)) * 48) + 24
            let tempy = (Math.floor(Math.random() * (game.match.map.h / 48)) * 48) + 24
            game.match.map.blocks.push(new HealthBlock(allID++, tempx, tempy, { color: '#660000', healthCollide: -2 }))
        }
        for (let i = 0; i < 20; i++) {
            let tempx = (Math.floor(Math.random() * (game.match.map.w / 48)) * 48) + 24
            let tempy = (Math.floor(Math.random() * (game.match.map.h / 48)) * 48) + 24
            game.match.map.blocks.push(new HealthBlock(allID++, tempx, tempy, { color: '#006600', healthCollide: 1, powerCollide: 2 }))
        }
    }
    if (type.includes('track')) {
        // Race Track
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2) - 24, (game.match.map.h / 2) - 1000, { color: '#000066', colorActive: '#0000FF', w: 24, h: 144 }))
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2) - 500, (game.match.map.h / 2) - 1000, { color: '#000066', colorActive: '#0000FF', w: 24, h: 144 }))
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2) - 1000, (game.match.map.h / 2) - 1000, { color: '#000066', colorActive: '#0000FF', w: 24, h: 144 }))
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2) - 1250, (game.match.map.h / 2) - 500, { color: '#000066', colorActive: '#0000FF', w: 144, h: 24 }))
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2) - 1000, (game.match.map.h / 2), { color: '#000066', colorActive: '#0000FF', w: 144, h: 24 }))
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2) - 1250, (game.match.map.h / 2) + 750, { color: '#000066', colorActive: '#0000FF', w: 144, h: 24 }))
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2) - 1000, (game.match.map.h / 2) + 1000, { color: '#000066', colorActive: '#0000FF', w: 24, h: 144 }))
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2) - 500, (game.match.map.h / 2) + 750, { color: '#000066', colorActive: '#0000FF', w: 24, h: 144 }))
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2), (game.match.map.h / 2) + 1000, { color: '#000066', colorActive: '#0000FF', w: 24, h: 144 }))
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2) + 500, (game.match.map.h / 2) + 750, { color: '#000066', colorActive: '#0000FF', w: 24, h: 144 }))
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2) + 1000, (game.match.map.h / 2) + 1000, { color: '#000066', colorActive: '#0000FF', w: 24, h: 144 }))
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2) + 1250, (game.match.map.h / 2) + 750, { color: '#000066', colorActive: '#0000FF', w: 144, h: 24 }))
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2) + 1000, (game.match.map.h / 2), { color: '#000066', colorActive: '#0000FF', w: 144, h: 24 }))
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2) + 1250, (game.match.map.h / 2) - 500, { color: '#000066', colorActive: '#0000FF', w: 144, h: 24 }))
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2) + 1000, (game.match.map.h / 2) - 1000, { color: '#000066', colorActive: '#0000FF', w: 24, h: 144 }))
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2) + 500, (game.match.map.h / 2) - 1000, { color: '#000066', colorActive: '#0000FF', w: 24, h: 144 }))
        game.match.goals.push(new Goal(allID++, (game.match.map.w / 2) + 24, (game.match.map.h / 2) - 1000, { color: '#000066', colorActive: '#0000FF', w: 24, h: 144 }))

        // game.match.npcs.push(new NPC(allID++, (game.match.map.w / 2) + 1000, (game.match.map.h / 2), { target: game.match.goals[0], nameTag: 'Rais', team: 0, gfx: 'img/sprites/dark1' })) //racer

        // game.player.camera.target = game.match.npcs[game.match.npcs.length - 1] //race-vision
    }
    if (type.includes('blocks')) {
        //Blocks
        game.match.map.blocks.push(new Block(allID++, (game.match.map.w / 2) + 100, (game.match.map.h / 2), { color: '#0000FF' }))
        game.match.map.blocks.push(new Block(allID++, (game.match.map.w / 2), (game.match.map.h / 2), { color: '#FF9900', w: 48, h: 96 }))
        game.match.map.blocks.push(new JumpPad(allID++, (game.match.map.w / 2) + 100, (game.match.map.h / 2) + 300, { color: '#FF9900' }))
        game.match.map.blocks.push(new HealthBlock(allID++, (game.match.map.w / 2) + 500, (game.match.map.h / 2) + 500, { color: '#990000', healthCollide: 2 }))
        game.match.map.blocks.push(new HealthBlock(allID++, (game.match.map.w / 2) + 200, (game.match.map.h / 2) + 200, { color: '#996666', healthCollide: 20, tags: ['immobile'] }))
        game.match.map.blocks.push(new HealthBlock(allID++, (game.match.map.w / 2) + 200, (game.match.map.h / 2) + 200, { color: '#66FF66', healthCollide: -1 }))
        // Speed Strip
        for (let i = 0; i < game.match.map.w / 48; i++) {
            game.match.map.blocks.push(new SpeedPad(allID++, (i * 48 * 10) + 24, (game.match.map.h / 2), { color: '#0066FF' }))
        }
        //Ball
        game.match.map.blocks.push(new Ball(allID++, (game.match.map.w / 2) - 200, (game.match.map.h / 2) + 200, { color: '#FFFFFF' }))
    }
    if (type.includes('debris')) {
        //Debris
        for (let i = 0; i < 1000; i++) {
            let tempx = Math.floor(Math.random() * game.match.map.w);
            let tempy = Math.floor(Math.random() * game.match.map.h);
            let tempt = Math.floor(Math.random() * 2000);
            game.match.map.debris.push(new Debris(allID++, tempx, tempy, { imgFile: 'img/sprites/leaf1.png', w: 12, h: 12, z: tempt }));
        }
        game.match.map.debris.push(new Debris(allID++, (game.match.map.w / 2), (game.match.map.h / 2), { imgFile: 'img/sprites/leaf1.png', w: 12, h: 12, z: 100 }));
    }
    if (type.includes('waves')) {
        game.match.map.blocks.push(new Wave(allID++, 0, (game.match.map.h / 2), { color: '#aaaaFF', w: 100, h: game.match.map.h, xspeed: 6, dxspeed: 6, repeat: true, startDelay: 0 }))
        game.match.map.blocks.push(new Wave(allID++, 0, (game.match.map.h / 2), { color: '#aaaaFF', w: 100, h: game.match.map.h, xspeed: 6, dxspeed: 6, repeat: true, startDelay: 300 }))
        game.match.map.blocks.push(new Wave(allID++, 0, (game.match.map.h / 2), { color: '#aaaaFF', w: 100, h: game.match.map.h, xspeed: 6, dxspeed: 6, repeat: true, startDelay: 360 }))
    }
    if (type.includes('fortnite')) {
        for (let i = 0; i < 50; i++) {
            let tempx = Math.floor(Math.random() * game.match.map.w);
            let tempy = Math.floor(Math.random() * game.match.map.h);
            game.match.npcs.push(new NPC(allID++, tempx, tempy, { target: game.player.character, nameTag: 'Kevin ' + (i + 1), gfx: 'img/sprites/dark2' })) //Kevin
        }
        for (let i = 0; i < 50; i++) {
            let tempx = Math.floor(Math.random() * game.match.map.w);
            let tempy = Math.floor(Math.random() * game.match.map.h);
            game.match.npcs.push(new NPC(allID++, tempx, tempy, { target: null, nameTag: 'Frendo ' + (i + 1), team: 0 })) //Anti-Kevin
        }
    }
    if (type.includes('lonewarrior')) {
        game.match.map.runFuncs.push(() => {
            if (ticks % 1600 == 0) {
                let tempx = Math.floor(Math.random() * game.match.map.w);
                let tempy = Math.floor(Math.random() * game.match.map.h);
                game.match.npcs.push(new NPC(allID++, tempx, tempy, { item: Math.round(Math.random()), target: game.player.character, nameTag: 'Kevin' + allID, gfx: 'img/sprites/dark2' })) //Kevin
            }
        })
    }
    if (type.includes('ramps')) {
        game.match.map.blocks.push(new Wave(allID++, 7200 / 4, (game.match.map.h / 2), { color: '#aaaaFF', w: 100, h: 400 }))
        game.match.map.blocks.push(new Wave(allID++, 7200 / 2, (game.match.map.h / 2), { color: '#aaaaFF', w: 100, h: 400 }))
        game.match.map.blocks.push(new Wave(allID++, 7200 / 4 + 7200 / 2, (game.match.map.h / 2), { color: '#aaaaFF', w: 100, h: 400 }))
    }
    if (type.includes('dummy')) {
        game.match.npcs.push(new NPC(allID++, (game.match.map.w / 2) + 100, (game.match.map.h / 2) - 100, { active: false, cleanup: false, target: game.player.character, nameTag: 'Kevin', gfx: 'img/sprites/dark2' })) //Kevin
    }
    if (type.includes('2v2')) {
        game.match.npcs.push(new NPC(allID++, (game.match.map.w / 2) + 1000, (game.match.map.h / 2) - 1000, { target: game.player.character, nameTag: 'Jaysin', gfx: 'img/sprites/dark2' })) //Kevin
        game.match.npcs.push(new NPC(allID++, (game.match.map.w / 2) + 1000, (game.match.map.h / 2) + 1000, { target: game.match.npcs[game.match.npcs.length - 2], nameTag: 'Jason', gfx: 'img/sprites/dark2' })) //Kevin
        game.match.npcs.push(new NPC(allID++, (game.match.map.w / 2) - 1000, (game.match.map.h / 2) - 1000, { color: '#006600', target: game.player.character, nameTag: 'Logan', team: 0 })) //Anti-Kevin
    }
    if (type.includes('4v4')) {
        game.match.npcs.push(new NPC(allID++, (game.match.map.w / 2) + 1000, (game.match.map.h / 2) - 1000, { target: game.player.character, nameTag: 'Jaysin', gfx: 'img/sprites/dark2' })) //Kevin
        game.match.npcs.push(new NPC(allID++, (game.match.map.w / 2) + 1000, (game.match.map.h / 2) - 2000, { target: game.match.npcs[game.match.npcs.length - 1], nameTag: 'Jayson', gfx: 'img/sprites/dark2' })) //Kevin
        game.match.npcs.push(new NPC(allID++, (game.match.map.w / 2) + 1000, (game.match.map.h / 2) + 1000, { target: game.match.npcs[game.match.npcs.length - 2], nameTag: 'Jason', gfx: 'img/sprites/dark2' })) //Kevin
        game.match.npcs.push(new NPC(allID++, (game.match.map.w / 2) + 1000, (game.match.map.h / 2) + 2000, { target: game.match.npcs[game.match.npcs.length - 3], nameTag: 'Jacob', gfx: 'img/sprites/dark2' })) //Kevin
        game.match.npcs.push(new NPC(allID++, (game.match.map.w / 2) - 1000, (game.match.map.h / 2) - 1500, { target: game.player.character, nameTag: 'Logan', team: 0 })) //Anti-Kevin
        game.match.npcs.push(new NPC(allID++, (game.match.map.w / 2) - 1000, (game.match.map.h / 2), { target: game.player.character, nameTag: 'Logan', team: 0 })) //Anti-Kevin
        game.match.npcs.push(new NPC(allID++, (game.match.map.w / 2) - 1000, (game.match.map.h / 2) + 1500, { target: game.player.character, nameTag: 'Logan', team: 0 })) //Anti-Kevin
    }
}


// Takes two regions from object.getRegion()
function collideRect(entity, collider) {
    let left = (entity.x + entity.w > x && entity.x < x.collider) * -1; // Left (x - 1)
    let rear = (entity.y + entity.h > collider.y && entity.y < collider.y) * -1; // Rear (y - 1)
    let under = (entity.z + entity.d > collider.z && entity.z < collider.z) * -1; // Under (z - 1)
    let right = (entity.x < entity.x + collider.w && entity.x > collider.x) * 1; // Right (x + 1)
    let front = (entity.y < entity.y + collider.h && entity.y > collider.y) * 1; // Front (y + 1)
    let top = (entity.z < entity.z + collider.d && entity.z > collider.z) * 1; // Top (z + 1)
    let withinX = (entity.x + entity.w > collider.x && entity.x + entity.w < collider.x + collider.w) * 1; // wholly within X (x ??)
    let withinY = (entity.y + entity.h > collider.y && entity.y + entity.h < collider.y + collider.h) * 1; // wholly within Y (y ??)
    let withinZ = (entity.z + entity.d > collider.z && entity.z + entity.d < collider.z + collider.d) * 1; // whilly within Z (z ??)
    let contains = (withinX * withinY * withinZ); // wholly within collider
    let contained = (left + right == 0) ? 1 : 0; // Collider is wholly within
    return {
        left: left,
        rear: rear,
        under: under,
        right: right,
        front: front,
        top: top,
        withinX: withinX,
        withinY: withinY,
        withinZ: withinZ,
        contains: contains,
        contained: contained
    }
}

class Vect3 {
    constructor(x, y, z) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }
    compare(target) {
        let xd = target.x - this.x;
        let yd = target.y - this.y;
        let zd = target.z - this.z;
        let dist2 = Math.sqrt(xd ** 2 + yd ** 2);
        let dist3 = Math.sqrt(xd ** 2 + yd ** 2 + zd ** 2);
        return {
            angle2: new Vect3(xd / dist2, yd / dist2, 0),
            angle3: new Vect3(xd / dist3, yd / dist3, zd / dist3),
            difference: new Vect3(xd, yd, zd),
            distance2: dist2,
            distance3: dist3
        }
    }
}

class Cube {
    constructor(origin, width) {
        this.pos = origin;
        this.width = width;
        this.end = new Vect3(origin.x + width.x, origin.y + width.y, origin.z + width.z);
    }
    half() {
        return new Vect3(this.width.x / 2, this.width.y / 2, this.width.z / 2)
    }
    center() {
        return new Vect3(this.pos.x + (this.width.x / 2), this.pos.x + (this.width.y / 2), this.pos.x + (this.width.z / 2))
    }
}

class Cylinder {
    constructor(origin, radius, height) {
        this.pos = origin;
        this.radius = radius;
        this.height = height;
    }
}