class Map {
    constructor(options) {
        this.w = 5096; //7200
        this.h = 5096; //4800
        this.tileSize = 48; //32
        this.tileSet = [[]]
        this.nodes = [];

        this.friction = {
            air: 0.01,
            ground: 0.1
        }

        this.gravity = 1;
        this.stopZone = 0.1;
        this.grace = 10;
        this.floor = 0;
        this.collideReflect = 0.2;

        this.bgimg = new Image();
        this.bgimg.src = "img/tiles/tile001.png";

        this.blocks = [];
        this.lastBlock = () => { return this.blocks[this.blocks.length - 1]; }
        this.missiles = [];
        this.debris = [];

        this.lightValue = [0, 0, 0, 0.0];
        // this.lightValue = [0, 0, 128, 0.25];

        this.runFunc = []; // A list of functions to run during the step

        this.setup = () => { };

        if (typeof options == 'object')
            for (const setting of Object.keys(options)) {
                if (this[setting] !== undefined)
                    this[setting] = options[setting];
            }

    }

    /*
                                   #     #               #     #
     #####  #    # # #      #####  ##    #   ##   #    # ##   ## ######  ####  #    #
     #    # #    # # #      #    # # #   #  #  #  #    # # # # # #      #      #    #
     #####  #    # # #      #    # #  #  # #    # #    # #  #  # #####   ####  ######
     #    # #    # # #      #    # #   # # ###### #    # #     # #           # #    #
     #    # #    # # #      #    # #    ## #    #  #  #  #     # #      #    # #    #
     #####   ####  # ###### #####  #     # #    #   ##   #     # ######  ####  #    #

    */
    buildNavMesh() {
        for (let x = 0; x < this.w / this.tileSize; x++) {
            for (let y = 0; y < this.h / this.tileSize; y++) {
                this.nodes.push(new Node(x * this.tileSize, y * this.tileSize))
                for (const block of game.match.map.blocks) {
                    if (this.nodes[this.nodes.length - 1].pos.collideCube(block.HB)) {
                        this.nodes[this.nodes.length - 1].pass = false;
                    } else {
                    }
                }
            }
        }
    }

    /*
  #####
 #     # ##### ###### #####
 #         #   #      #    #
  #####    #   #####  #    #
       #   #   #      #####
 #     #   #   #      #
  #####    #   ###### #

*/
    step() {

        for (const e of this.blocks) {
            if (e.cleanup && !e.active) {
                //Remove block
                this.blocks = this.blocks.filter(function (el) { return el != e; });
            }
        }

        for (const e of game.match.bots) {
            if (e.character.cleanup && !e.character.active) {
                //Remove bot
                game.match.bots = game.match.bots.filter(function (el) { return el != e; });
            }
        }

        for (const e of this.missiles) {
            if (e.cleanup && !e.active) {
                //Remove missile
                this.missiles = this.missiles.filter(function (el) { return el != e; });
            }
        }

        for (const e of this.debris) {
            if (e.cleanup && !e.active) {
                //Remove missile
                this.debris = this.debris.filter(function (el) { return el != e; });
            }
        }

        // Run all runFunc
        for (const func of this.runFunc) {
            func();
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

        /*
           ___                      _     ___ _            _   _         _                                   _
          / __|_ _ ___ _  _ _ _  __| |   / __| |___  _    | | | |_ _  __| |___ _ _ __ _ _ _ ___ _  _ _ _  __| |
         | (_ | '_/ _ \ || | ' \/ _` |_  \__ \ / / || |_  | |_| | ' \/ _` / -_) '_/ _` | '_/ _ \ || | ' \/ _` |
          \___|_| \___/\_,_|_||_\__,_( ) |___/_\_\\_, ( )  \___/|_||_\__,_\___|_| \__, |_| \___/\_,_|_||_\__,_|
                                     |/           |__/|/                          |___/
        */
        //Ground
        ctx.fillStyle = "#333300";
        ctx.fillRect(0, 0, game.window.w, game.window.h);

        //If in 3D mode, draw the sky (This overdraws things past the horizon, even if visible)
        if (game.player.camera._3D) {
            ctx.fillStyle = "#8cb8ff";
            ctx.fillRect(0, 0, game.window.w, (game.window.h / 2) /* * (1 - game.player.camera.angle)) */);
        }

        // If in 3D mode, draw the underground (This overdraws things past the underground, even if visible)
        if (game.player.camera._3D) {
            ctx.fillStyle = "#281800";
            ctx.fillRect(0, (game.window.h / 2) /* +  ((game.window.h / 1)  * (game.player.camera.angle) ) */, game.window.w, game.window.h);
        }

        /*
          _____ _ _
         |_   _(_) |___ ___
           | | | | / -_|_-<
           |_| |_|_\___/__/

        */
        // For every column that the map can make from the total space
        let count = 0;
        for (let x = 0; x < this.w / this.tileSize; x++) {
            let compareX = game.player.camera.x - (x * this.tileSize);
            //For every row
            for (let y = 0; y < this.h / this.tileSize; y++) {
                let compareY = game.player.camera.y - (y * this.tileSize);
                //If the tile is within the camera's viewable radius and the horizon
                // TODO: horizon count doesn't actually line up with the horizon. sky overdraws it
                let horizonCalc = 0;
                if (game.player.camera._3D)
                    horizonCalc = (game.window.h / 2) * (1 - game.player.camera.angle)
                if (game.player.camera.radius > Math.abs(compareX) && game.player.camera.radius > Math.abs(compareY) - horizonCalc) {
                    count++;
                    // Adjust y and h if 3D draw mode
                    if (game.player.camera._3D)
                        ctx.drawImage(
                            this.bgimg,
                            game.window.w / 2 - compareX,
                            game.window.h / 2 - (compareY * game.player.camera.angle),
                            this.tileSize,
                            this.tileSize * game.player.camera.angle
                        );
                    //Otherwise, draw normally
                    else
                        ctx.drawImage(
                            this.bgimg,
                            game.window.w / 2 - compareX,
                            game.window.h / 2 - compareY,
                            this.tileSize,
                            this.tileSize
                        );
                }
            }

        }
        // console.log("Drew a total of " + count + " tiles");

        /*
          ___             _            ___  _     _        _
         | _ \___ _ _  __| |___ _ _   / _ \| |__ (_)___ __| |_ ___
         |   / -_) ' \/ _` / -_) '_| | (_) | '_ \| / -_) _|  _(_-<
         |_|_\___|_||_\__,_\___|_|    \___/|_.__// \___\__|\__/__/
                                               |__/
        */
        //Put Bot player characters into a list
        let npcs = [];
        for (const npc in game.match.bots) {
            npcs.push(game.match.bots[npc].character);
        }

        let renderList =
            [game.player.character, ...npcs, ...game.match.map.blocks, ...game.match.map.missiles, ...game.match.map.debris]
                .sort((a, b) => {
                    if (a.HB.pos.y < b.HB.pos.y + b.HB.pos.z) return -1;
                    if (a.HB.pos.y > b.HB.pos.y + b.HB.pos.z) return 1;
                    return 0;
                });
        for (const entity of renderList) {
            // if the entity is within the camera's viewable radius
            let compareX = game.player.camera.x - entity.HB.pos.x;
            let compareY = game.player.camera.y - entity.HB.pos.y;
            let horizonCalc = 0;
            if (game.player.camera._3D)
                horizonCalc = (game.window.h / 2) * (1 - game.player.camera.angle)
            if (game.player.camera.radius > Math.abs(compareX) && game.player.camera.radius > Math.abs(compareY) - horizonCalc)
                entity.draw(game.player.character);
        }

        /*
          ___                         _                _                                   _
         | __|__  __ _   __ _ _ _  __| |  _  _ _ _  __| |___ _ _ __ _ _ _ ___ _  _ _ _  __| |
         | _/ _ \/ _` | / _` | ' \/ _` | | || | ' \/ _` / -_) '_/ _` | '_/ _ \ || | ' \/ _` |
         |_|\___/\__, | \__,_|_||_\__,_|  \_,_|_||_\__,_\___|_| \__, |_| \___/\_,_|_||_\__,_|
                 |___/                                          |___/
        */
        // Overdraw the sky as a gradient from the half of the top of the screen to the horizon to the horizon
        if (game.player.camera._3D) {
            let grd = ctx.createLinearGradient(
                0,
                (game.window.h / 4) * (1 - game.player.camera.angle),
                0,
                (game.window.h / 4) * (1 - game.player.camera.angle) + (game.window.h / 6) * (1 - game.player.camera.angle));
            grd.addColorStop(0, "rgba(140, 184, 255, 1)");
            grd.addColorStop(1, "rgba(140, 184, 255, 0)");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, game.window.w, (game.window.h / 2) * (1 - game.player.camera.angle));
        }

        // overdraw the underground as a gradient from the bottom of the screen to the underground horizon
        if (game.player.camera._3D) {
            let grd = ctx.createLinearGradient(
                0,
                (game.window.h / 2) + ((game.window.h / 1) * (game.player.camera.angle)) + (game.window.h / 8) * (game.player.camera.angle),
                0,
                (game.window.h / 2) + ((game.window.h / 1) * (game.player.camera.angle))
            );
            grd.addColorStop(0, "rgba(40, 24, 0, 1)");
            // grd.addColorStop(0.5, "rgba(40, 24, 0, 0.5)");
            grd.addColorStop(1, "rgba(40, 24, 0, 0)");
            ctx.fillStyle = grd;
            ctx.fillRect(0, (game.window.h / 2) + ((game.window.h / 1) * (game.player.camera.angle)), game.window.w, game.window.h);
        }

        /*
             _     _
          __| |___| |__ _  _ __ _
         / _` / -_) '_ \ || / _` |
         \__,_\___|_.__/\_,_\__, |
                            |___/
        */
        //If debugging, show node grid
        if (game.debug)
            for (const node of this.nodes) {
                node.draw();
            }
    }

    /*

     #      #  ####  #    # ##### # #    #  ####
     #      # #    # #    #   #   # ##   # #    #
     #      # #      ######   #   # # #  # #
     #      # #  ### #    #   #   # #  # # #  ###
     #      # #    # #    #   #   # #   ## #    #
     ###### #  ####  #    #   #   # #    #  ####

    */
    lighting() {
        // ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = `rgba(${this.lightValue[0]}, ${this.lightValue[1]}, ${this.lightValue[2]}, ${this.lightValue[3]})`
        ctx.fillRect(0, 0, game.window.w, game.window.h);
        // ctx.globalCompositeOperation = "source-over";
    }

}


/*
      ::::    :::  ::::::::  :::::::::  ::::::::::
     :+:+:   :+: :+:    :+: :+:    :+: :+:
    :+:+:+  +:+ +:+    +:+ +:+    +:+ +:+
   +#+ +:+ +#+ +#+    +:+ +#+    +:+ +#++:++#
  +#+  +#+#+# +#+    +#+ +#+    +#+ +#+
 #+#   #+#+# #+#    #+# #+#    #+# #+#
###    ####  ########  #########  ##########
*/
class Node {
    constructor(x, y, w = game.match.map.tileSize, h = game.match.map.tileSize) {
        this.pos = new Rect(x, y, w, h)
        this.pass = true;
    }

    draw() {
        if (this.pass)
            ctx.strokeStyle = "#0000FF"
        else
            ctx.strokeStyle = "#FF0000"
        let compareX = game.player.camera.x - this.pos.x;
        let compareY = game.player.camera.y - this.pos.y;
        if (game.player.camera.radius > Math.max(Math.abs(compareX), Math.abs(compareY))) {
            ctx.lineWidth = 0.2;
            if (game.player.camera._3D)
                ctx.strokeRect(
                    game.window.w / 2 - compareX,
                    game.window.h / 2 - (compareY * game.player.camera.angle),
                    this.pos.w,
                    this.pos.h * game.player.camera.angle
                );
            else
                ctx.strokeRect(game.window.w / 2 - compareX, game.window.h / 2 - compareY, this.pos.w, this.pos.h);

        }
    }
}

class Map_FieldCity extends Map {
    constructor() {
        super();
    }
}