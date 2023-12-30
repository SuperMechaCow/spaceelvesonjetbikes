class Match {
    constructor() {
        this.setup();
    }

    reset() {

    }

    setup() {
        this.ticks = -1;
        this.spmp = 'sp' // 'sp' single player, 'ss' split screen, 'mp' multiplayer
        this.paused = false;
        this.map = new Map();
        this.bots = [];
        this.blocks = []; // Different from map blocks. Think pickups and dropped items
        this.runFunc = []; // A list of functions to run every step
        game.player.interface.drawFunc = []; // clear other interface draw functions
        this.menus = {
            tooSmall: new Menu([], new Rect(0, 0, 350, 50), { text: 'Window too small to play.' }),
        }
        this.menu = null;
    }

    step() {
        if (!this.paused) {

            game.player.character.step();

            for (const bot of this.bots) {
                bot.AI();
                bot.character.step();
            }

            for (const block of this.map.blocks) {
                block.step();
            }

            for (const bullet of this.map.bullets) {
                bullet.step();
            }

            for (const debris of this.map.debris) {
                debris.step();
            }

            game.match.map.step();

            // Run all runFunc
            for (const func of this.runFunc) {
                func();
            }

            // Remove old bots
            for (const e of this.bots) {
                if (e.character.cleanup && !e.character.active && e.character.type != 'player') {
                    //Remove npcs
                    this.bots = this.bots.filter(function (el) { return el != e; });
                }
            }

            this.ticks++;

        }

        // for every menu in the player's interface
        for (const menu in game.player.interface.menus) {
            game.player.interface.menus[menu].step();
        }

    }

    draw() {

    }
}

/*
  #####                                #####
 #     # #####   ##   #####  #####    #     #  ####  #####  ###### ###### #    #
 #         #    #  #  #    #   #      #       #    # #    # #      #      ##   #
  #####    #   #    # #    #   #       #####  #      #    # #####  #####  # #  #
       #   #   ###### #####    #            # #      #####  #      #      #  # #
 #     #   #   #    # #   #    #      #     # #    # #   #  #      #      #   ##
  #####    #   #    # #    #   #       #####   ####  #    # ###### ###### #    #

*/
class Start_Screen extends Match {
    constructor() {
        super();
    }

    reset() {
        super.reset();

    }

    setup() {
        super.setup();
        this.map = new Map_Deathbox();
        this.name = "Game Menu";
        this.description = "";
        this.despawnTimer = 360;
        game.player.character.active = false;
        this.map.blocks.push(new Block(
            allID++,
            new Vect3((this.map.w / 2) - 0, (this.map.h / 2), 0),
            new Vect3(0, 0, 0),
            { color: [101, 101, 101], colorSide: [201, 201, 201] }))
        game.player.camera.target = this.map.blocks[this.map.blocks.length - 1];
        // loop twice
        for (let i = 0; i < 2; i++) {
            this.bots.push(new Bot()) //Kevin / Jae'Sin
            this.bots[this.bots.length - 1].character = new Jetbike(
                allID++,
                new Vect3(Math.random() * this.map.w, Math.random() * this.map.h),
                this.bots[this.bots.length - 1],
                { name: getName(), team: 1, gfx: 'img/sprites/dark2', color: [0, 0, 255], muted: true }
            );
            this.bots[this.bots.length - 1].character.inventory.push(new Pistol());
            this.bots.push(new Bot()) //Kevin / Jae'Sin
            this.bots[this.bots.length - 1].character = new Jetbike(
                allID++,
                new Vect3(Math.random() * this.map.w, Math.random() * this.map.h),
                this.bots[this.bots.length - 1],
                { name: getName(), team: 0, gfx: 'img/sprites/dark1', color: [0, 128, 0], muted: true }
            );
            this.bots[this.bots.length - 1].character.inventory.push(new Pistol());
        }
        game.menu = game.menus.main;
    }

    step = () => {
        super.step();
        // counter number of bot characters on each team
        let team0 = 0;
        let team1 = 0;
        for (let i = 0; i < this.bots.length; i++) {
            if (this.bots[i].character.team == 0) team0++;
            if (this.bots[i].character.team == 1) team1++;
        }
        // if there are more bots on team 0 than team 1, add a bot to team 1
        if (team0 > team1) {
            this.bots.push(new Bot()) //Kevin / Jae'Sin
            this.bots[this.bots.length - 1].character = new Jetbike(
                allID++,
                new Vect3(Math.random() * this.map.w, Math.random() * this.map.h),
                this.bots[this.bots.length - 1],
                { name: getName(), team: 1, gfx: 'img/sprites/dark2', color: [0, 0, 255], muted: true }
            );
            this.bots[this.bots.length - 1].character.inventory.push(new Pistol());
        }
        // if there are more bots on team 1 than team 0, add a bot to team 0
        if (team1 > team0) {
            this.bots.push(new Bot()) //Kevin / Jae'Sin
            this.bots[this.bots.length - 1].character = new Jetbike(
                allID++,
                new Vect3(Math.random() * this.map.w, Math.random() * this.map.h),
                this.bots[this.bots.length - 1],
                { name: getName(), team: 0, gfx: 'img/sprites/dark1', color: [0, 0, 255], muted: true }
            );
            this.bots[this.bots.length - 1].character.inventory.push(new Pistol());
        }
    }

    draw() {
        // draw a vignette with a gradient
        let gradient = ctx.createRadialGradient(game.window.w / 2, game.window.h / 2, 0, game.window.w / 2, game.window.h / 2, game.window.w / 2);
        gradient.addColorStop(0, "rgba(20,0,20,0)");
        gradient.addColorStop(1, "rgba(20,0,20,1)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, game.window.w, game.window.h);
        // draw the title
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "36px Jura";
        ctx.textAlign = "center";
        // first draw the text in black to create a shadow
        ctx.fillStyle = "#000000";
        ctx.fillText(`Space Elves on Jetbikes`, game.window.w / 2 + 2, game.window.h / 2 - 88);
        ctx.fillStyle = "#FFFFFF";
        // then draw the text in white
        ctx.fillText(`Space Elves on Jetbikes`, game.window.w / 2, game.window.h / 2 - 90);
    }
}

/*
 ######                              #     #
 #     # ###### #####  #    #  ####  ##   ##   ##   #####  ####  #    #
 #     # #      #    # #    # #    # # # # #  #  #    #   #    # #    #
 #     # #####  #####  #    # #      #  #  # #    #   #   #      ######
 #     # #      #    # #    # #  ### #     # ######   #   #      #    #
 #     # #      #    # #    # #    # #     # #    #   #   #    # #    #
 ######  ###### #####   ####   ####  #     # #    #   #    ####  #    #

*/
class DebugMatch extends Match {
    constructor() {
        super();
        this.map = new Map();
        this.name = "Debug Match";
        this.description = "A match for debugging purposes.";
        this.setup();
    }

    setup = () => {
        game.debug = true;

        game.player.character = new Jetbike(
            allID++,
            new Vect3((this.map.w / 2), (this.map.h / 2), 0),
            game.player,
            { name: 'Cpt. Fabius', gfx: 'img/sprites/jetbike' });
        game.player.camera.target = game.player.character;
        for (let i = 0; i < 5; i++) {
            this.map.blocks.push(new Ammo_Ballistic(
                allID++,
                new Vect3(Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0),
                new Vect3(128, 128, 64)));
            this.map.blocks.push(new Ammo_Plasma(
                allID++,
                new Vect3(Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0),
                new Vect3(128, 128, 64)));
        }
        this.map.blocks.push(new WeaponPickup(
            allID++,
            new Vect3((this.map.w / 2) + 200, (this.map.h / 2), 0),
            new Vect3(0, 0, 0, { weapon: 'rifle', pickupDelay: 0 })));

        // this.bots.push(new Bot()) //Kevin / Jae'Sin
        // this.bots[this.bots.length - 1].character = new Jetbike(
        //     allID++,
        //     new Vect3((this.map.w / 2) - 1000, (this.map.h / 2) - 1000, 0),
        //     this.bots[this.bots.length - 1],
        //     { name: getName(), team: 1, gfx: 'img/sprites/dark2', color: [0, 0, 255] }
        // );
        // // add a pistol to the last bot's character's inventory
        // this.bots[this.bots.length - 1].character.inventory.push(new Pistol())

        this.map.blocks.push(new Block(
            allID++,
            new Vect3((this.map.w / 2) - 300, (this.map.h / 2) - 0, 0),
            new Vect3(128, 128, 64),
            { color: [101, 101, 101], colorSide: [201, 201, 201] }))
        // this.map.blocks[this.map.blocks.length - 1].HB.pos.z = 100;
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

/*
 #######                   #####
 #        ####  #####     #     # #####  ###### ###### #####
 #       #    # #    #    #       #    # #      #      #    #
 #####   #    # #    #     #####  #    # #####  #####  #    #
 #       #    # #####           # #####  #      #      #    #
 #       #    # #   #     #     # #      #      #      #    #
 #        ####  #    #     #####  #      ###### ###### #####

*/

class Match_ForSpeed extends Match {
    constructor() {
        super();
        this.setup();
    }

    reset() {
        super.reset();
        this.bots = [];
        this.setup();
    }

    setup() {
        super.setup();

        super.setup();
        this.map = new Map_FieldCity({ w: 9600, h: 9600, startBlocks: 200 });
        this.map.tileSet = new Tileset({ generate: true, size: new Vect2(200, 200) })
        this.name = "For Speed";
        this.description = "A deadly race to the finish.";

        // Add player 1
        game.player.character = new Jetbike(
            allID++,
            new Vect3((this.map.w / 2) + 4500, (this.map.h / 2)),
            game.player,
            {
                name: 'Cpt. Fabius', gfx: 'img/sprites/jetbike',
                laps: -1, lapsTimes: [], lapTime: 0, lapBest: null, startTime: null, endTime: null,
                hp: 250, hp_max: 250
            });
        game.player.camera.target = game.player.character

        //place 16 blocks in a circle around the center of the map
        //distributed 22.5 degrees apart
        //starting 100 pixels above the center of the map
        //by pushing a new Block object to the map.blocks array
        this.goals = [];
        for (let i = 1; i < 17; i++) {
            let ranX = Math.round(Math.random() * 200) - 100;
            let ranY = Math.round(Math.random() * 200) - 100;
            this.map.blocks.push(new Block(
                allID++,
                new Vect3((this.map.w / 2) + (4000 + ((ranX + 500) * (i % 2))) * Math.cos(i * -22.5 * Math.PI / 180), (this.map.h / 2) + (4000 + ((ranY + 500) * (i % 2))) * Math.sin(i * -22.5 * Math.PI / 180), 0),
                new Vect3(128, 128, 64),
                { color: [101, 101, 101], colorSide: [201, 201, 201], solid: false, opacity: 0.25 }
            ));
            this.map.blocks[this.map.blocks.length - 1].trigger = function (actor, side) {
                // if the person who touched this is tracking goals
                if (actor.goal >= 0)
                    //if the actor's goal is the same as this block
                    if (actor.goals[actor.goal] === this) {
                        if (actor == game.player.character) { // Only play for the player until sound ranges are implemented
                            sounds.wallhit.currentTime = 0;
                            if (!this.muted) sounds.goal.play();
                        }
                        if (actor.goal == 0) {
                            // Start new lap
                            game.match.newLap(actor);
                        }
                        actor.goal++;
                        if (actor.goal >= actor.goals.length) {
                            actor.goal = 0;
                        }
                    }
            }.bind(this.map.blocks[this.map.blocks.length - 1]);
            this.map.blocks[this.map.blocks.length - 1].runFunc.push(function () {
                // get the index of this block and the player's goal in their goals array
                let index = game.player.character.goals.indexOf(this);
                let goal = game.player.character.goal;
                // if the index of this block is less than the index of the player's goal in their goals array
                if (index < goal) {
                    this.color = [128, 128, 0];
                    this.colorSide = [255, 255, 0];
                }
                // else if it's the same index
                else if (index == goal) {
                    this.color = [0, 128, 0];
                    this.colorSide = [0, 255, 0];
                }
                // else
                else {
                    this.color = [0, 0, 128];
                    this.colorSide = [0, 0, 255];
                }

            }.bind(this.map.blocks[this.map.blocks.length - 1]));
            this.goals.push(this.map.blocks[this.map.blocks.length - 1]);

            game.player.character.goals = this.goals;
            game.player.character.goal = 0;
        }

    }

    step() {
        super.step();
        if (game.player.character.active) {
            game.player.character.target = game.player.character.goals[game.player.character.goal];
        } else {
            game.player.character.target = null;
            if (game.player.character.endTime == null) game.player.character.endTime = this.ticks;
            if (game.player.controller.buttons.inventory1.current)
                this.reset();
        }
    }

    draw() {
        super.draw();

        if (game.player.character.active) {

            if (game.match.ticks < 240) {
                let alpha = 1 - (game.match.ticks) / 240;
                //first draw the text in black to create a shadow
                ctx.fillStyle = "rgba(0,0,0," + alpha + ")";
                ctx.font = "30px Jura";
                ctx.textAlign = "center";
                ctx.fillText(this.name, game.window.w / 2 + 2, game.window.h / 2 - 138);
                ctx.font = "20px Jura";
                ctx.fillText(this.description, game.window.w / 2 + 2, game.window.h / 2 - 98);
                //then draw the text in white
                ctx.fillStyle = "rgba(255,255,255," + alpha + ")";
                ctx.font = "30px Jura";
                ctx.textAlign = "center";
                ctx.fillText(this.name, game.window.w / 2, game.window.h / 2 - 140);
                ctx.font = "20px Jura";
                ctx.fillText(this.description, game.window.w / 2, game.window.h / 2 - 100);
            }

            let matchBox = new Vect2((game.window.w / 2) - 150, game.window.h - 280);

            // draw the lap counter in the matchBox
            ctx.fillStyle = "#FFFFFF";
            ctx.font = "16px Jura";
            ctx.textAlign = "left";
            // first draw the text in black to create a shadow
            ctx.fillStyle = "#000000";
            ctx.fillStyle = "#FFFFFF";
            if (game.player.character.startTime) {
                ctx.fillStyle = "#000000";
                ctx.fillText(`Lap ${game.player.character.laps + 1} of 3`, matchBox.x + 2, matchBox.y + 52);
                ctx.fillText(`Time: ${formatTicks(game.match.ticks - game.player.character.lapTime)}`, matchBox.x + 2, matchBox.y + 72);
                ctx.fillText(`Total: ${formatTicks(this.ticks - game.player.character.startTime)}`, matchBox.x + 2, matchBox.y + 92);
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(`Lap ${game.player.character.laps + 1} of 3`, matchBox.x, matchBox.y + 50);
                ctx.fillText(`Time: ${formatTicks(game.match.ticks - game.player.character.lapTime)}`, matchBox.x, matchBox.y + 70);
                ctx.fillText(`Total: ${formatTicks(this.ticks - game.player.character.startTime)}`, matchBox.x, matchBox.y + 90);
            }
        } else {
            // draw "Finished!" or "You failed!" in the top center of the screen in green or red
            ctx.font = "36px Jura";
            ctx.textAlign = "center";
            // first draw the text in black to create a shadow
            ctx.fillStyle = "#000000";
            let state, color;
            if (game.player.character.laps >= 3) { color = "#00FF00"; state = "Finished!"; }
            else { color = "#FF0000"; state = "Failed!"; }
            ctx.fillText(state, game.window.w / 2 + 2, 92);
            ctx.fillStyle = color;
            ctx.fillText(state, game.window.w / 2, 90);
            // Draw the player's time
            ctx.fillStyle = "#FFFFFF";
            ctx.font = "16px Jura";
            ctx.textAlign = "center";
            // first draw the text in black to create a shadow
            ctx.fillStyle = "#000000";
            ctx.fillText(`Best Lap: ${formatTicks(game.player.character.lapBest)}`, game.window.w / 2 + 2, 132);
            ctx.fillText(`Total: ${formatTicks(game.player.character.endTime - game.player.character.startTime)}`, game.window.w / 2 + 2, 152);
            ctx.fillStyle = "#FFFFFF";
            ctx.fillText(`Best Lap: ${formatTicks(game.player.character.lapBest)}`, game.window.w / 2, 130);
            ctx.fillText(`Total: ${formatTicks(game.player.character.endTime - game.player.character.startTime)}`, game.window.w / 2, 150);
            // draw restart prompt
            let promptButton;
            switch (game.player.controller.type) {
                case 'keyboard':
                    promptButton = 'Q';
                    break;
                case 'touch':
                    promptButton = 'Weapon';
                    break;
                case 'gamepad':
                    promptButton = 'X';
                    break;
                default:
                    promptButton = 'Weapon';
                    break;
            }
            ctx.font = "20px Jura";
            ctx.textAlign = "center";
            // first draw the text in black to create a shadow
            ctx.fillStyle = "#000000";
            ctx.fillText(`Press [ ${promptButton} ] to restart`, game.window.w / 2 + 2, 192);
            ctx.fillStyle = "#FFFFFF";
            // then draw the text in white
            ctx.fillText(`Press [ ${promptButton} ] to restart`, game.window.w / 2, 190);
            if (game.player.controller.type == 'touch') {
                let img = new Image();
                img.src = 'img/sprites/inventory/sword_inactive.png';
                ctx.drawImage(img, (game.window.w / 2) - 150, game.window.h - 64, 64, 64);
            }
        }
    }

    newLap(who) {

        this.spawnBot();

        who.laps++;

        if (who.laps) {
            // push previous time to the laps array
            who.lapsTimes.push(this.ticks - who.lapTime);
        } else {
            // set the start time
            who.startTime = this.ticks;
        }

        // best lap
        if (this.ticks - who.lapTime < who.lapBest || who.lapBest == null) {
            who.lapBest = this.ticks - who.lapTime;
        }

        who.lapTime = this.ticks;

        if (who.laps >= 3) {
            who.endTime = this.ticks;
            who.active = false;
        } else {
            for (let i = 1; i < 16; i++) {
                let ranX = Math.round(Math.random() * 200) - 100;
                let ranY = Math.round(Math.random() * 200) - 100;
                if (i % 2) {
                    // put a powerup between every other block
                    // offset by 11.25 degrees
                    let pickupVect = new Vect3((this.map.w / 2) + (4000 + ((ranX + 500) * (i % 2))) * Math.cos((i * -22.5 - 11.25) * Math.PI / 180), (this.map.h / 2) + (4000 + ((ranY + 500) * (i % 2))) * Math.sin((i * -22.5 - 11.25) * Math.PI / 180), 0);
                    let ranPickup = Math.floor(Math.random() * 4);
                    // switch picks which pickup to add
                    switch (ranPickup) {
                        case 0:
                            this.map.blocks.push(new Ammo_Ballistic(allID++, pickupVect, new Vect3(128, 128, 64), { livetime: 3600, dying: true }));
                            break;
                        case 1:
                            this.map.blocks.push(new Ammo_Plasma(allID++, pickupVect, new Vect3(128, 128, 64), { livetime: 3600, dying: true }));
                            break;
                        case 2:
                            this.map.blocks.push(new HealthPickup(allID++, pickupVect, new Vect3(128, 128, 64), { livetime: 3600, dying: true }));
                            break;
                        case 3:
                            ranPickup = Math.floor(Math.random() * 4);
                            let choice;
                            switch (ranPickup) {
                                case 0:
                                    choice = 'pistol';
                                    break;
                                case 1:
                                    choice = 'rifle';
                                    break;
                                case 2:
                                    choice = 'flamer';
                                    break;
                                case 3:
                                    choice = 'lance';
                                    break;
                                default:
                                    console.log('skip');
                                    break;
                            }
                            this.map.blocks.push(new WeaponPickup(allID++, pickupVect, new Vect3(128, 128, 64), { weapon: choice, pickupDelay: 0 }));
                            break;
                        default:
                            console.log('skip');
                            break;
                    }
                    this.map.blocks.push(new HealthPickup(allID++, pickupVect, new Vect3(128, 128, 64), { livetime: 360, dying: true }));
                }
            }

        }
    }

    spawnBot() {
        // add an enemy bot to the map
        this.bots.push(new Bot()) //Kevin / Jae'Sin
        this.bots[this.bots.length - 1].character = new Jetbike(
            allID++,
            new Vect3((this.map.w / 2) + 4000, (this.map.h / 2) + 1000, 0),
            this.bots[this.bots.length - 1],
            {
                target: game.player.character,
                // target: this.bots[this.bots.length - 1].character,
                name: getName(), team: 1, gfx: 'img/sprites/dark2', color: [0, 0, 255],
                hp: 60, hp_max: 60
            }
        );
        let rand = Math.floor(Math.random() * 4);
        switch (rand) {
            case 0:
                this.bots[this.bots.length - 1].character.inventory.push(new Pistol())
                break;
            case 1:
                this.bots[this.bots.length - 1].character.inventory.push(new Rifle())
                break;
            case 2:
                this.bots[this.bots.length - 1].character.inventory.push(new Flamer())
                break;
            case 3:
                this.bots[this.bots.length - 1].character.inventory.push(new Lance())
                break;
        }
        this.bots[this.bots.length - 1].character.item = Math.round(Math.random());
        this.bots[this.bots.length - 1].character.goals = this.goals;
        this.bots[this.bots.length - 1].character.goal = 0;
    }

}


/*
 #######                  #     #
 #        ####  #####     #     #  ####  #    #  ####  #####
 #       #    # #    #    #     # #    # ##   # #    # #    #
 #####   #    # #    #    ####### #    # # #  # #    # #    #
 #       #    # #####     #     # #    # #  # # #    # #####
 #       #    # #   #     #     # #    # #   ## #    # #   #
 #        ####  #    #    #     #  ####  #    #  ####  #    #

*/
class Match_ForHonor extends Match {
    constructor() {
        super();
        this.setup();
    }

    reset() {
        super.reset();

        this.lastWinner = null;

        // filter out all blocks that are not 'block'
        this.map.blocks = this.map.blocks.filter(function (el) { return el.type == 'block'; });

        game.player.character.active = true;
        game.player.character.HB.pos.x = (this.map.w / 2) - 800;
        game.player.character.HB.pos.y = (this.map.h / 2);
        game.player.character.HB.pos.z = 0;
        game.player.character.speed.x = 0;
        game.player.character.speed.y = 0;
        game.player.character.speed.z = 0;
        game.player.character.hp = game.player.character.hp_max;
        game.player.character.inventory = [new Sword()];
        game.player.character.item = 0;
        game.player.character.pp = game.player.character.pp_max;
        game.player.character.ammo.ballistic = 1;
        game.player.character.ammo.plasma = 1;
        this.bots[0].character.active = true;
        this.bots[0].character.HB.pos.x = (this.map.w / 2) + 800;
        this.bots[0].character.HB.pos.y = (this.map.h / 2);
        this.bots[0].character.HB.pos.z = 0;
        this.bots[0].character.speed.x = 0;
        this.bots[0].character.speed.y = 0;
        this.bots[0].character.speed.z = 0;
        this.bots[0].character.hp = this.bots[0].character.hp_max;
        this.bots[0].character.inventory = [new Sword()];
        this.bots[0].character.item = 0;
        this.bots[0].character.pp = this.bots[0].character.pp_max;
        this.bots[0].character.ammo.ballistic = 1;
        this.bots[0].character.ammo.plasma = 1;

        // Add health pickups to each side fothe map
        this.map.blocks.push(new HealthPickup(
            allID++,
            new Vect3((this.map.w / 2) - 800, (this.map.h / 2) + 96, 0),
            new Vect3(128, 128, 64)));
        this.map.blocks.push(new HealthPickup(
            allID++,
            new Vect3((this.map.w / 2) + 800, (this.map.h / 2) - 96, 0),
            new Vect3(128, 128, 64)));
        // add both ammo pickups to top and bottom of map
        this.map.blocks.push(new Ammo_Ballistic(
            allID++,
            new Vect3((this.map.w / 2) - 500, (this.map.h / 2) - 400, 0),
            new Vect3(128, 128, 64)));
        this.map.blocks.push(new Ammo_Plasma(
            allID++,
            new Vect3((this.map.w / 2) + 472, (this.map.h / 2) + 400, 0),
            new Vect3(128, 128, 64)));
        this.map.blocks.push(new Ammo_Ballistic(
            allID++,
            new Vect3((this.map.w / 2) + 378, (this.map.h / 2) + 400, 0),
            new Vect3(128, 128, 64)));
        this.map.blocks.push(new Ammo_Plasma(
            allID++,
            new Vect3((this.map.w / 2) - 408, (this.map.h / 2) - 400, 0),
            new Vect3(128, 128, 64)));


        // add weapons to the center of the map
        this.map.blocks.push(new WeaponPickup(
            allID++,
            new Vect3((this.map.w / 2), (this.map.h / 2), 0),
            new Vect3(0, 0, 0),
            { weapon: 'pistol', pickupDelay: 0 }));
        this.map.blocks.push(new WeaponPickup(
            allID++,
            new Vect3((this.map.w / 2), (this.map.h / 2), 0),
            new Vect3(0, 0, 0),
            { weapon: 'lance', pickupDelay: 0 }));
        this.map.blocks.push(new WeaponPickup(
            allID++,
            new Vect3((this.map.w / 2), (this.map.h / 2), 0),
            new Vect3(0, 0, 0),
            { weapon: 'rifle', pickupDelay: 0 }));
        this.map.blocks.push(new WeaponPickup(
            allID++,
            new Vect3((this.map.w / 2), (this.map.h / 2) + 0, 0),
            new Vect3(0, 0, 0),
            { weapon: 'flamer', pickupDelay: 0 }));

        // for every block in the blocks array
        // if the block's type is not 'block'
        // add one to the counter
        let blockCounter = 0;
        for (const block of this.map.blocks) {
            if (block.type == 'weapon') {
                block.sineOffset = blockCounter++;
                block.runFunc.push(
                    function (bc) {
                        this.HB.pos.x = this.spawn.x + sineAnimate(100, 0.025, (this.sineOffset * 60));
                        this.HB.pos.y = this.spawn.y + sineAnimate(100, 0.025, (this.sineOffset * 60) + 60);
                    }.bind(block)
                );
            }
        }

    }

    setup() {
        super.setup();
        this.map = new Map_Deathbox();
        this.name = "For Honor";
        this.description = "A duel to the death.";

        // Add player 1
        game.player.character = new Jetbike(
            allID++,
            new Vect3((this.map.w / 2) - 800, (this.map.h / 2), 0),
            game.player,
            { name: 'Cpt. Fabius', gfx: 'img/sprites/jetbike' });
        game.player.interface = new Interface_LocalMP(game.player, 0, 0);

        // Add player 2
        this.bots.push(new Player()) //Kevin / Jae'Sin
        this.bots[this.bots.length - 1].character = new Jetbike(
            allID++,
            new Vect3((this.map.w / 2) + 800, (this.map.h / 2), 0),
            this.bots[this.bots.length - 1],
            { name: getName(), team: 1, gfx: 'img/sprites/dark2', color: [0, 0, 255] }
        );
        // Change to local multiplayer interaface
        this.bots[this.bots.length - 1].interface = new Interface_LocalMP(this.bots[this.bots.length - 1], () => { return game.window.w - 280 }, 0);

        // Create a block to attach the camera to
        this.bots[this.bots.length - 1].name = 'Player 2';
        this.blocks.push(new Block(
            allID++,
            new Vect3((this.map.w / 2), (this.map.h / 2), 0),
            new Vect3(0, 0, 0),
            { solid: false, visible: false }));
        // Attach the camera to the block
        game.player.camera.target = this.blocks[this.blocks.length - 1];

        this.reset();
    }

    step() {
        super.step();
        if (game.window.w < 1720 || game.window.h < 920) {
            this.paused = true;
            this.menu = this.menus.tooSmall;
        } else if (this.menu) {
            this.paused = false;
            this.menu = null;
        }

        // TODO: handle more than two players
        if (!game.player.character.active || !this.bots[0].character.active) {
            this.lastWinner = (game.player.character.active) ? game.player.name : this.bots[0].name;
            if (game.player.controller.buttons.inventory1.current) {
                this.reset();
            }
        }

        if (this.menu)
            this.menu.step();

    }

    draw() {
        super.draw();
        if (this.lastWinner) {
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fillRect(0, 0, game.window.w, game.window.h);
            ctx.fillStyle = "#FFFFFF";
            ctx.font = "36px Jura";
            ctx.textAlign = "center";
            // first draw the text in black to create a shadow
            ctx.fillStyle = "#000000";
            ctx.fillText(`${this.lastWinner} wins!`, game.window.w / 2 + 2, game.window.h / 2 - 88);
            ctx.fillStyle = "#FFFFFF";
            // then draw the text in white
            ctx.fillText(`${this.lastWinner} wins!`, game.window.w / 2, game.window.h / 2 - 90);
            // draw restart prompt
            let promptButton;
            switch (game.player.controller.type) {
                case 'keyboard':
                    promptButton = 'Q';
                    break;
                case 'touch':
                    promptButton = 'Weapon';
                    break;
                case 'gamepad':
                    promptButton = 'X';
                    break;
                default:
                    promptButton = 'Weapon';
                    break;
            }
            ctx.font = "20px Jura";
            ctx.textAlign = "center";
            // first draw the text in black to create a shadow
            ctx.fillStyle = "#000000";
            ctx.fillText(`Press [ ${promptButton} ] to restart`, game.window.w / 2 + 2, game.window.h / 2 + 42);
            ctx.fillStyle = "#FFFFFF";
            // then draw the text in white
            ctx.fillText(`Press [ ${promptButton} ] to restart`, game.window.w / 2, game.window.h / 2 + 40);
            if (game.player.controller.type == 'touch') {
                let img = new Image();
                img.src = 'img/sprites/inventory/sword_inactive.png';
                ctx.drawImage(img, (game.window.w / 2) - 150, game.window.h - 64, 64, 64);
            }
        }
        if (this.menu)
            this.menu.draw();
    }
}

/*
 #######
 #        ####  #####  ###### #    # ###### #####
 #       #    # #    # #      #    # #      #    #
 #####   #    # #    # #####  #    # #####  #    #
 #       #    # #####  #      #    # #      #####
 #       #    # #   #  #       #  #  #      #   #
 #        ####  #    # ######   ##   ###### #    #
*/
class Match_ForEver extends Match {
    constructor() {
        super();
    }

    reset() {
        super.reset();

    }

    setup() {
        super.setup();
        this.map = new Map_FieldCity();
        this.name = "Forever";
        this.description = "Survive against the endless waves of enemies.";
        this.waves = 0;
        this.waveTime = 2700; // 1 wave every 45 seconds  

        game.player.character = new Jetbike(
            allID++,
            new Vect3((this.map.w / 2), (this.map.h / 2) + 200),
            game.player,
            { name: 'Cpt. Fabius', gfx: 'img/sprites/jetbike' });
        game.player.camera.target = game.player.character

        /*
          ___
         | _ \_____ __ _____ _ _ _  _ _ __ ___
         |  _/ _ \ V  V / -_) '_| || | '_ (_-<
         |_| \___/\_/\_/\___|_|  \_,_| .__/__/
                                     |_|
        */
        for (let i = 0; i < 10; i++) {
            this.map.blocks.push(new Ammo_Ballistic(
                allID++,
                new Vect3(Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0),
                new Vect3(128, 128, 64),
                { livetime: this.waveTime, dying: true }))
            this.map.blocks.push(new Ammo_Plasma(
                allID++,
                new Vect3(Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0),
                new Vect3(128, 128, 64),
                { livetime: this.waveTime, dying: true }))
            this.map.blocks.push(new HealthPickup(
                allID++,
                new Vect3(Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0),
                new Vect3(128, 128, 64),
                { livetime: this.waveTime, dying: true }))
        }

    }

    /*
      __  __      _        _
     |  \/  |__ _(_)_ _   | |   ___  ___ _ __
     | |\/| / _` | | ' \  | |__/ _ \/ _ \ '_ \
     |_|  |_\__,_|_|_||_| |____\___/\___/ .__/
                                        |_|
    */
    step() {
        super.step();
        if (game.player.character.active && game.match.ticks % this.waveTime == 0) {
            this.waves++; // 1 wave every 60 seconds

            /*
              ___                _
             | __|_ _  ___ _ __ (_)___ ___
             | _|| ' \/ -_) '  \| / -_|_-<
             |___|_||_\___|_|_|_|_\___/__/

            */
            for (let i = 0; i < Math.ceil(this.waves / 2); i++) {
                this.bots.push(new Bot()) //Kevin / Jae'Sin
                this.bots[this.bots.length - 1].character = new Jetbike(
                    allID++,
                    new Vect3(Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0),
                    this.bots[this.bots.length - 1],
                    {
                        target: game.player.character,
                        // target: this.bots[this.bots.length - 1].character,
                        name: getName(), team: 1, gfx: 'img/sprites/dark2', color: [0, 0, 255],
                    }
                );
                let rand = Math.floor(Math.random() * 4);
                switch (rand) {
                    case 0:
                        this.bots[this.bots.length - 1].character.inventory.push(new Pistol())
                        break;
                    case 1:
                        this.bots[this.bots.length - 1].character.inventory.push(new Rifle())
                        break;
                    case 2:
                        this.bots[this.bots.length - 1].character.inventory.push(new Flamer())
                        break;
                    case 3:
                        this.bots[this.bots.length - 1].character.inventory.push(new Lance())
                        break;
                }
                this.bots[this.bots.length - 1].character.item = Math.round(Math.random());
            }

            /*
              ___
             | _ \_____ __ _____ _ _ _  _ _ __ ___
             |  _/ _ \ V  V / -_) '_| || | '_ (_-<
             |_| \___/\_/\_/\___|_|  \_,_| .__/__/
                                         |_|
            */
            for (let i = 0; i < 5; i++) {
                this.map.blocks.push(new Ammo_Ballistic(
                    allID++,
                    new Vect3(Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0),
                    new Vect3(128, 128, 64),
                    { livetime: this.waveTime * 3, dying: true }))
                this.map.blocks.push(new Ammo_Plasma(
                    allID++,
                    new Vect3(Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0),
                    new Vect3(128, 128, 64),
                    { livetime: this.waveTime * 3, dying: true }))
                this.map.blocks.push(new HealthPickup(
                    allID++,
                    new Vect3(Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0),
                    new Vect3(128, 128, 64),
                    { livetime: this.waveTime * 3, dying: true }))
            }

            // Random weapon pickup in the middle of the map
            let rand = Math.floor(Math.random() * 4);
            switch (rand) {
                case 0:
                    this.map.blocks.push(new WeaponPickup(
                        allID++,
                        new Vect3((this.map.w / 2), (this.map.h / 2), 0),
                        new Vect3(0, 0, 0),
                        { weapon: 'pistol', pickupDelay: 0, livetime: this.waveTime * 3, dying: true }))
                    break;
                case 1:
                    this.map.blocks.push(new WeaponPickup(
                        allID++,
                        new Vect3((this.map.w / 2), (this.map.h / 2), 0),
                        new Vect3(0, 0, 0),
                        { weapon: 'rifle', pickupDelay: 0, livetime: this.waveTime * 3, dying: true }))
                    break;
                case 2:
                    this.map.blocks.push(new WeaponPickup(
                        allID++,
                        new Vect3((this.map.w / 2), (this.map.h / 2), 0),
                        new Vect3(0, 0, 0),
                        { weapon: 'flamer', pickupDelay: 0, livetime: this.waveTime * 3, dying: true }))
                    break;
                case 3:
                    this.map.blocks.push(new WeaponPickup(
                        allID++,
                        new Vect3((this.map.w / 2), (this.map.h / 2), 0),
                        new Vect3(0, 0, 0),
                        { weapon: 'lance', pickupDelay: 0, livetime: this.waveTime * 3, dying: true }))
                    break;
            }

            /*
              ___    _             _
             | __| _(_)___ _ _  __| |___
             | _| '_| / -_) ' \/ _` (_-<
             |_||_| |_\___|_||_\__,_/__/

            */
            if (game.match.ticks % this.waveTime * 2 == 0) {
                let spawns = (this.waves > 1) ? Math.floor(this.waves / 4) : 1;
                for (let i = 0; i < spawns; i++) {
                    // Friendly
                    this.bots.push(new Bot()) //Big ounce / Loh'Ghan
                    this.bots[this.bots.length - 1].character = new Character(
                        allID++,
                        new Vect3((this.map.w / 2), (this.map.h / 2)),
                        this.bots[this.bots.length - 1],
                        {
                            target: null,
                            // target: this.bots[this.bots.length - 1].character,
                            name: getName(), team: 0, gfx: 'img/sprites/dark1', color: [0, 255, 0],
                            hover: 16, airAccel: new Vect3(0.15, 0.15, 1),
                            runFunc: [
                                function () { }.bind(this.bots[this.bots.length - 1].character)
                            ]
                        }
                    );
                    this.bots[this.bots.length - 1].character.HB = new Cylinder(new Vect3(Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0), 29, 37);
                    let rand = Math.floor(Math.random() * 3);
                    if (rand == 0) {
                        let rand = Math.floor(Math.random() * 4);
                        this.bots[this.bots.length - 1].character.inventory.push(new Pistol())
                        switch (rand) {
                            case 0:
                                this.bots[this.bots.length - 1].character.inventory.push(new Pistol())
                                break;
                            case 1:
                                this.bots[this.bots.length - 1].character.inventory.push(new Rifle())
                                break;
                            case 2:
                                this.bots[this.bots.length - 1].character.inventory.push(new Flamer())
                                break;
                            case 3:
                                this.bots[this.bots.length - 1].character.inventory.push(new Flamer())
                                break;
                        }
                        this.bots[this.bots.length - 1].character.item = Math.round(Math.random());
                    }
                }
            }
        }

        /*
          ___        _            _     __  __      _      _
         | _ \___ __| |_ __ _ _ _| |_  |  \/  |__ _| |_ __| |_
         |   / -_|_-<  _/ _` | '_|  _| | |\/| / _` |  _/ _| ' \
         |_|_\___/__/\__\__,_|_|  \__| |_|  |_\__,_|\__\__|_||_|

        */
        if (!game.player.character.active) {
            if (game.match.bots.length) {
                // loop through all the bots and mute their characters
                for (let i = 0; i < game.match.bots.length; i++) {
                    game.match.bots[i].character.muted = true;
                }
                game.player.camera.target = game.match.bots[0].character; // set camera to first bot
            }
            if (game.player.controller.buttons.inventory1.current) {
                game.match.setup();
            }

        }
    }

    /*

     #####  #####    ##   #    #
     #    # #    #  #  #  #    #
     #    # #    # #    # #    #
     #    # #####  ###### # ## #
     #    # #   #  #    # ##  ##
     #####  #    # #    # #    #

    */
    draw() {
        super.draw();

        /*
           ___                  __  __         _       ___
          / __|__ _ _ __  ___  |  \/  |___  __| |___  | _ ) __ _ _ _  _ _  ___ _ _
         | (_ / _` | '  \/ -_) | |\/| / _ \/ _` / -_) | _ \/ _` | ' \| ' \/ -_) '_|
          \___\__,_|_|_|_\___| |_|  |_\___/\__,_\___| |___/\__,_|_||_|_||_\___|_|

        */
        if (game.match.ticks < 240) {
            let alpha = 1 - (game.match.ticks) / 240;
            //first draw the text in black to create a shadow
            ctx.fillStyle = "rgba(0,0,0," + alpha + ")";
            ctx.font = "30px Jura";
            ctx.textAlign = "center";
            ctx.fillText(this.name, game.window.w / 2 + 2, game.window.h / 2 - 138);
            ctx.font = "20px Jura";
            ctx.fillText(this.description, game.window.w / 2 + 2, game.window.h / 2 - 98);
            //then draw the text in white
            ctx.fillStyle = "rgba(255,255,255," + alpha + ")";
            ctx.font = "30px Jura";
            ctx.textAlign = "center";
            ctx.fillText(this.name, game.window.w / 2, game.window.h / 2 - 140);
            ctx.font = "20px Jura";
            ctx.fillText(this.description, game.window.w / 2, game.window.h / 2 - 100);
        }


        /*
          ___     _            __                 _      _    _ _ _   _
         |_ _|_ _| |_ ___ _ _ / _|__ _ __ ___    /_\  __| |__| (_) |_(_)___ _ _  ___
          | || ' \  _/ -_) '_|  _/ _` / _/ -_)  / _ \/ _` / _` | |  _| / _ \ ' \(_-<
         |___|_||_\__\___|_| |_| \__,_\__\___| /_/ \_\__,_\__,_|_|\__|_\___/_||_/__/

        */
        // Score
        if (game.player.character.active) {
            // loop through all the bots and count enemies
            let enemies = 0;
            for (let i = 0; i < game.match.bots.length; i++) {
                if (game.match.bots[i].character.team != game.player.character.team) enemies++;
            }
            let matchBox = new Vect2((game.window.w / 2) - 150, game.window.h - 280);
            ctx.textAlign = "left";
            ctx.font = '16px Jura';
            // first draw the text lines in black to create a shadow
            ctx.fillStyle = "#000000";
            ctx.fillText(`Wave:  ${game.match.waves}`, matchBox.x + 2, matchBox.y + 52);
            ctx.fillText(`Enemy: ${enemies}`, matchBox.x + 2, matchBox.y + 72);
            ctx.fillText(`Next: ${Math.floor((game.match.waveTime / 60)) - Math.floor((game.match.ticks % game.match.waveTime) / 60)}`, matchBox.x + 2, matchBox.y + 92);
            // then draw the text lines in white            
            ctx.fillStyle = "#FFFFFF";
            ctx.fillText(`Wave:  ${game.match.waves}`, matchBox.x, matchBox.y + 50);
            ctx.fillText(`Enemy: ${enemies}`, matchBox.x, matchBox.y + 70);
            ctx.fillText(`Next: ${Math.floor((game.match.waveTime / 60)) - Math.floor((game.match.ticks % game.match.waveTime) / 60)}`, matchBox.x, matchBox.y + 90);
        }


        // Waves when dead

        if (!game.player.character.active && !game.paused) {
            // draw number of waves to center of screen
            ctx.fillStyle = "#FFFFFF";
            ctx.font = "36px Jura";
            ctx.textAlign = "center";
            // first draw the text in black to create a shadow
            ctx.fillStyle = "#000000";
            ctx.fillText(`Waves: ${game.match.waves}`, game.window.w / 2 + 2, game.window.h / 2 + 2);
            ctx.fillStyle = "#FFFFFF";
            // then draw the text in white
            ctx.fillText(`Waves: ${game.match.waves}`, game.window.w / 2, game.window.h / 2);
            // draw restart prompt
            let promptButton;
            switch (game.player.controller.type) {
                case 'keyboard':
                    promptButton = 'Q';
                    break;
                case 'touch':
                    promptButton = 'Weapon';
                    break;
                case 'gamepad':
                    promptButton = 'X';
                    break;
                default:
                    promptButton = 'Weapon';
                    break;
            }
            ctx.font = "20px Jura";
            ctx.textAlign = "center";
            // first draw the text in black to create a shadow
            ctx.fillStyle = "#000000";
            ctx.fillText(`Press [ ${promptButton} ] to restart`, game.window.w / 2 + 2, game.window.h / 2 + 42);
            ctx.fillStyle = "#FFFFFF";
            // then draw the text in white
            ctx.fillText(`Press [ ${promptButton} ] to restart`, game.window.w / 2, game.window.h / 2 + 40);
            if (game.player.controller.type == 'touch') {
                let img = new Image();
                img.src = 'img/sprites/inventory/sword_inactive.png';
                ctx.drawImage(img, (game.window.w / 2) - 150, game.window.h - 64, 64, 64);
            }
        }
    }
}