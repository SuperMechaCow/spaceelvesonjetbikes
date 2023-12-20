class Match {
    constructor() {
        this.startTicks = ticks;
        this.map = new Map();
        this.bots = [];
        this.blocks = []; // Different from map blocks. Think powerups and dropped items
        this.runFuncs = []; // A list of functions to run every step
    }

    step() {
        for (const e of this.bots) {
            if (e.cleanup && !e.active) {
                //Remove npcs
                this.npcs = this.npcs.filter(function (el) { return el != e; });
            }
        }

        // Run all runFuncs
        for (const func in this.runFucts) {
            func();
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




/*
 #       ####### #     # #######    #     #    #    ######  ######  ### ####### ######
 #       #     # ##    # #          #  #  #   # #   #     # #     #  #  #     # #     #
 #       #     # # #   # #          #  #  #  #   #  #     # #     #  #  #     # #     #
 #       #     # #  #  # #####      #  #  # #     # ######  ######   #  #     # ######
 #       #     # #   # # #          #  #  # ####### #   #   #   #    #  #     # #   #
 #       #     # #    ## #          #  #  # #     # #    #  #    #   #  #     # #    #
 ####### ####### #     # #######     ## ##  #     # #     # #     # ### ####### #     #

*/
class Match_LoneWarrior extends Match {
    constructor() {
        super();
        this.map = new Map_FieldCity();
        this.name = "The Lone Warrior";
        this.description = "Survive against the endless waves of enemies.";
        this.waves = 0;
        this.waveTime = 2700; // 1 wave every 45 seconds  
        this.setup();
    }

    setup() {

        /*
           ___                  __  __         _       ___
          / __|__ _ _ __  ___  |  \/  |___  __| |___  | _ ) __ _ _ _  _ _  ___ _ _
         | (_ / _` | '  \/ -_) | |\/| / _ \/ _` / -_) | _ \/ _` | ' \| ' \/ -_) '_|
          \___\__,_|_|_|_\___| |_|  |_\___/\__,_\___| |___/\__,_|_||_|_||_\___|_|

        */
        game.player.interface.drawFunc.push(
            function () {
                if (ticks - this.startTicks < 240) {
                    let alpha = 1 - (ticks - this.startTicks) / 240;
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
            }.bind(this)
        )

        /*
          ___     _            __                 _      _    _ _ _   _
         |_ _|_ _| |_ ___ _ _ / _|__ _ __ ___    /_\  __| |__| (_) |_(_)___ _ _  ___
          | || ' \  _/ -_) '_|  _/ _` / _/ -_)  / _ \/ _` / _` | |  _| / _ \ ' \(_-<
         |___|_||_\__\___|_| |_| \__,_\__\___| /_/ \_\__,_\__,_|_|\__|_\___/_||_/__/

        */
        game.player.interface.drawFunc.push(
            function () {
                // loop through all the bots and count enemies
                let enemies = 0;
                for (let i = 0; i < game.match.bots.length; i++) {
                    if (game.match.bots[i].character.team != game.player.character.team) enemies++;
                }
                let matchBox = new Vect2((game.window.w / 2) - 150, game.window.h - 280);
                ctx.textAlign = "left";
                //Draw waves in top right hand corner
                ctx.font = '16px Jura';
                // first draw the text lines in black to create a shadow
                ctx.fillStyle = "#000000";
                ctx.fillText(`Wave:  ${game.match.waves}`, matchBox.x + 2, matchBox.y + 52);
                ctx.fillText(`Enemy: ${enemies}`, matchBox.x + 2, matchBox.y + 72);
                ctx.fillText(`Next: ${Math.floor((game.match.waveTime / 60)) - Math.floor((ticks % game.match.waveTime) / 60)}`, matchBox.x + 2, matchBox.y + 92);
                // then draw the text lines in white            
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(`Wave:  ${game.match.waves}`, matchBox.x, matchBox.y + 50);
                ctx.fillText(`Enemy: ${enemies}`, matchBox.x, matchBox.y + 70);
                ctx.fillText(`Next: ${Math.floor((game.match.waveTime / 60)) - Math.floor((ticks % game.match.waveTime) / 60)}`, matchBox.x, matchBox.y + 90);
            }.bind(this)
        )

        /*
            _      _    _   ___ _         _
           /_\  __| |__| | | _ ) |___  __| |__ ___
          / _ \/ _` / _` | | _ \ / _ \/ _| / /(_-<
         /_/ \_\__,_\__,_| |___/_\___/\__|_\_\/__/

        */
        for (let i = 0; i < 50; i++) {
            let ran = function () { return Math.floor(Math.random() * 4) + 1 }
            this.map.blocks.push(new Block(allID++, Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0, ran() * 32, ran() * 32, ran() * 32, { color: [101, 101, 101], colorSide: [201, 201, 201] }))
        }

        /*
          ___
         | _ \_____ __ _____ _ _ _  _ _ __ ___
         |  _/ _ \ V  V / -_) '_| || | '_ (_-<
         |_| \___/\_/\_/\___|_|  \_,_| .__/__/
                                     |_|
        */
        for (let i = 0; i < 10; i++) {
            this.map.blocks.push(new Ammo_Ballistic(allID++, Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0, 128, 128, 64))
            this.map.blocks.push(new Ammo_Plasma(allID++, Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0, 128, 128, 64))
            this.map.blocks.push(new HealthPickup(allID++, Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0, 128, 128, 64))
        }

        /*
         #     #                    #
         ##   ##   ##   # #    #    #        ####   ####  #####
         # # # #  #  #  # ##   #    #       #    # #    # #    #
         #  #  # #    # # # #  #    #       #    # #    # #    #
         #     # ###### # #  # #    #       #    # #    # #####
         #     # #    # # #   ##    #       #    # #    # #
         #     # #    # # #    #    #######  ####   ####  #

        */
        this.map.runFunc.push(
            () => {
                /*
                  ___                _
                 | __|_ _  ___ _ __ (_)___ ___
                 | _|| ' \/ -_) '  \| / -_|_-<
                 |___|_||_\___|_|_|_|_\___/__/

                */
                if (game.player.character.active && ticks % this.waveTime == 0) {
                    this.waves++; // 1 wave every 60 seconds

                    for (let i = 0; i < Math.ceil(this.waves / 2); i++) {
                        this.bots.push(new Bot()) //Kevin / Jae'Sin
                        this.bots[this.bots.length - 1].character = new Character(
                            allID++,
                            (this.map.w / 2),
                            (this.map.h / 2),
                            this.bots[this.bots.length - 1],
                            // { target: game.player.character, name: 'Jaysin', gfx: 'img/sprites/dark2', team: 1 }
                            {
                                target: game.player.character,
                                // target: this.bots[this.bots.length - 1].character,
                                name: getName(), team: 1, gfx: 'img/sprites/dark2', color: [0, 0, 255],
                                hover: 16, airAccel: new Vect3(0.15, 0.15, 1),
                                runFunc: [
                                    function () { }.bind(this.bots[this.bots.length - 1].character)
                                ]
                            }
                        );
                        this.bots[this.bots.length - 1].character.HB = new Cylinder(
                            new Vect3(
                                Math.round(Math.random() * this.map.w),
                                Math.round(Math.random() * this.map.h),
                                0),
                            29, 37);

                        /*
                          ___
                         | _ \_____ __ _____ _ _ _  _ _ __ ___
                         |  _/ _ \ V  V / -_) '_| || | '_ (_-<
                         |_| \___/\_/\_/\___|_|  \_,_| .__/__/
                                                     |_|
                        */
                        for (let i = 0; i < 5; i++) {
                            this.map.blocks.push(new Ammo_Ballistic(allID++, Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0, 128, 128, 64))
                            this.map.blocks.push(new Ammo_Plasma(allID++, Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0, 128, 128, 64))
                            this.map.blocks.push(new HealthPickup(allID++, Math.round(Math.random() * this.map.w), Math.round(Math.random() * this.map.h), 0, 128, 128, 64))
                        }
                    }
                    /*
                      ___    _             _
                     | __| _(_)___ _ _  __| |___
                     | _| '_| / -_) ' \/ _` (_-<
                     |_||_| |_\___|_||_\__,_/__/

                    */
                    if (ticks % this.waveTime * 2 == 0) {
                        let spawns = (this.waves > 1) ? Math.floor(this.waves / 4) : 1;
                        for (let i = 0; i < spawns; i++) {
                            // Friendly
                            this.bots.push(new Bot()) //Big ounce / Loh'Ghan
                            this.bots[this.bots.length - 1].character = new Character(
                                allID++,
                                (this.map.w / 2),
                                (this.map.h / 2),
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
                        }
                    }
                }
            }
        )
    }
}


// this.map.blocks.push(new Block(allID++, (this.map.w / 2) - 300, (this.map.h / 2) - 0, 0, 128, 128, 64, { color: [101, 101, 101], colorSide: [201, 201, 201] }))
// this.map.blocks[this.map.blocks.length - 1].HB.pos.z = 100;

// this.map.blocks.push(new Block(allID++, (this.map.w / 2), (this.map.h / 2), 0, 10, 10, 128, { color: [101, 101, 101], colorSide: [201, 201, 201] }))

// //wave
// this.map.blocks.push(new Block(
//     allID++,
//     (this.map.w / 2) + 100,
//     (this.map.h / 2) + 100,
//     0, 32, 32, 16,
//     { color: [50, 50, 255], colorSide: [150, 150, 250], solid: false, opacity: 0.5 }
// ));
// this.map.blocks[this.map.blocks.length - 1].runFunc.push(
//     function () {
//         this.HB.pos.z = sineAnimate(10, 0.05) + 10;
//     }.bind(this.map.blocks[this.map.blocks.length - 1])
// );
// this.map.blocks[this.map.blocks.length - 1].trigger =
//     function (actor, side) {
//         actor.speed.z += sineAnimate(0.5, 0.05) + 0.5
//     }.bind(this.map.blocks[this.map.blocks.length - 1]); //end wave

// //wave
// this.map.blocks.push(new Block(
//     allID++,
//     (this.map.w / 2) + 100,
//     (this.map.h / 2) + 164,
//     0, 32, 32, 16,
//     { color: [50, 50, 255], colorSide: [150, 150, 250], solid: false, opacity: 0.5 }
// ));
// this.map.blocks[this.map.blocks.length - 1].runFunc.push(
//     function () {
//         this.HB.pos.z = sineAnimate(10, 0.05, 60) + 10 + 16;
//     }.bind(this.map.blocks[this.map.blocks.length - 1])
// );
// this.map.blocks[this.map.blocks.length - 1].trigger =
//     function (actor, side) {
//         if (actor.HB.pos.z >= this.HB.pos.z)
//             actor.speed.z += sineAnimate(0.5, 0.05) + 0.5
//     }.bind(this.map.blocks[this.map.blocks.length - 1]); //end wave