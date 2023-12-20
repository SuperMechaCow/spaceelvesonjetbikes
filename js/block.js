/*
      :::::::::  :::        ::::::::   ::::::::  :::    :::
     :+:    :+: :+:       :+:    :+: :+:    :+: :+:   :+:
    +:+    +:+ +:+       +:+    +:+ +:+        +:+  +:+
   +#++:++#+  +#+       +#+    +:+ +#+        +#++:++
  +#+    +#+ +#+       +#+    +#+ +#+        +#+  +#+
 #+#    #+# #+#       #+#    #+# #+#    #+# #+#   #+#
#########  ########## ########   ########  ###    ###
*/

class Block {
    constructor(id, x, y, z, vx, vy, vz, options) {
        // Position
        this.spawn = new Vect3(x, y, z)
        this.HB = new Cube(new Vect3(x, y, z), new Vect3(vx, vy, vz))
        this.aim = new Vect3(0, 0, 0);
        this.angle = new Vect3(0, 0, 0);
        this.speed = new Vect3(0, 0, 0);

        // Lifespan
        this.id = id;
        this.parent = {};   // Who does this belong to?
        this.active = true; //Are we tracking this in the game?
        this.dying = false; //Is the lifespan counting down?
        this.cleanup = true; //Is this ready to be removed from the game?
        this.startDelay = 0; //Reset after {options}
        this.livetime = -1; //Number of frames to live (-1 forever)
        this.repeat = 0;

        // Properties
        this.target = {};   // What is it chasing?
        this.mobile = false;
        this.solid = true;
        this.gravity = false;
        this.visible = true;
        this.runFunc = [];
        this.reflection = 0.5;
        this.friction = 0.5;

        // Graphics
        this.imgFile = '';  // Leave blank to add collision to a background
        this.imgFileSide = '';
        this.opacity = 1;
        this.color = [100, 100, 100];    // Leave blank to add collision to a background
        this.colorSide = [200, 200, 200]; //The color of the wall of the block
        this.img = new Image();
        this.img.src = this.imgFile;
        this.imgSide = new Image();
        this.imgSide.src = this.imgFileSide;
        this.shadowDraw = false;
        this.shadow = new Image();
        this.shadow.src = 'img/sprites/shadow.png';
        // Options
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
        this.img.src = this.imgFile;
        this.startDelay = this.startDelay + ticks
    }

    step() {
        /*
                                          _
          _ __  _____ _____ _ __  ___ _ _| |_
         | '  \/ _ \ V / -_) '  \/ -_) ' \  _|
         |_|_|_\___/\_/\___|_|_|_\___|_||_\__|

        */
        if (ticks >= this.startDelay && this.livetime != 0) {
            this.HB.pos.x += this.speed.x;
            this.HB.pos.y += this.speed.y;
            this.HB.pos.z += this.speed.z;
            this.livetime--;
            for (const func of this.runFunc) {
                func();
            }
        } else if (this.livetime == 0) {
            this.active = false;
        }
    }

    /*
     ######
     #     # #####    ##   #    #
     #     # #    #  #  #  #    #
     #     # #    # #    # #    #
     #     # #####  ###### # ## #
     #     # #   #  #    # ##  ##
     ######  #    # #    # #    #

    */
    draw() {
        if (game.player.camera._3D) {
            this.draw3D();
        } else {

            let compareX = game.player.camera.x - this.HB.pos.x;
            let compareY = game.player.camera.y - this.HB.pos.y;

            /*
                 _                           _ _         _
              __| |_ _ __ ___ __ __  __ _  _| (_)_ _  __| |___ _ _
             / _` | '_/ _` \ V  V / / _| || | | | ' \/ _` / -_) '_|
             \__,_|_| \__,_|\_/\_/  \__|\_, |_|_|_||_\__,_\___|_|
                                        |__/
            */
            if (this.HB instanceof Cylinder) {
                // Draw shadow
                if (this.shadowDraw) {
                    ctx.globalAlpha = 0.4;
                    ctx.drawImage(
                        this.shadow,
                        game.window.w / 2 - compareX,
                        game.window.h / 2 - compareY,
                        this.HB.radius,
                        this.HB.radius
                    );
                    ctx.globalAlpha = 1;
                }
                if (this.imgFile) {
                    ctx.drawImage(this.img, game.window.w / 2 - compareX, game.window.h / 2 - compareY - this.HB.pos.z, this.HB.radius, this.HB.radius);
                } else {
                    //SIDE
                    ctx.fillStyle = `rgba(${this.colorSide[0]}, ${this.colorSide[1]}, ${this.colorSide[2]}, ${this.opacity})`;
                    ctx.beginPath();
                    ctx.ellipse(
                        game.window.w / 2 - compareX,
                        game.window.h / 2 - compareY - this.HB.pos.z - this.HB.height + this.HB.radius,
                        this.HB.radius,
                        this.HB.radius,
                        0, 0, 2 * Math.PI
                    );
                    ctx.fill();
                    ctx.beginPath();
                    ctx.fillRect(
                        game.window.w / 2 - compareX - this.HB.radius,
                        game.window.h / 2 - compareY - this.HB.pos.z - this.HB.radius,
                        this.HB.radius * 2,
                        this.HB.height
                    );
                    ctx.fill();
                    //TOP
                    ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.opacity})`;
                    ctx.beginPath();
                    ctx.ellipse(
                        game.window.w / 2 - compareX,
                        game.window.h / 2 - compareY - this.HB.height - this.HB.pos.z,
                        this.HB.radius,
                        this.HB.radius,
                        0, 0, 2 * Math.PI
                    );
                    ctx.fill();

                }
            }
            /*
                 _                           _
              __| |_ _ __ ___ __ __  __ _  _| |__  ___
             / _` | '_/ _` \ V  V / / _| || | '_ \/ -_)
             \__,_|_| \__,_|\_/\_/  \__|\_,_|_.__/\___|

            */
            if (this.HB instanceof Cube) {
                // Draw shadow
                if (this.shadowDraw) {
                    ctx.globalAlpha = 0.4;
                    ctx.drawImage(
                        this.shadow,
                        game.window.w / 2 - compareX,
                        game.window.h / 2 - compareY,
                        this.HB.volume.x,
                        this.HB.volume.y
                    );
                    ctx.globalAlpha = 1;
                }
                // Box shadow
                // ctx.fillStyle = 'rgba(0,0,0,0.2)'
                // ctx.fillRect(
                //     game.window.w / 2 - compareX,
                //     game.window.h / 2 - compareY,
                //     this.HB.volume.x,
                //     this.HB.volume.y
                // );
                if (this.imgFile) {
                    ctx.drawImage(
                        this.img,
                        game.window.w / 2 - compareX,
                        game.window.h / 2 - compareY - this.HB.volume.z - this.HB.pos.z,
                        this.HB.volume.x,
                        this.HB.volume.y
                    );
                    ctx.drawImage(
                        this.imgSide,
                        game.window.w / 2 - compareX,
                        game.window.h / 2 - compareY - this.HB.pos.z - this.HB.volume.z + this.HB.volume.y,
                        this.HB.volume.x,
                        this.HB.volume.z
                    );
                } else {
                    //TOP
                    ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.opacity})`;
                    ctx.fillRect(
                        game.window.w / 2 - compareX,
                        game.window.h / 2 - compareY - this.HB.volume.z - this.HB.pos.z,
                        this.HB.volume.x,
                        this.HB.volume.y
                    );
                    //SIDE
                    ctx.fillStyle = `rgba(${this.colorSide[0]}, ${this.colorSide[1]}, ${this.colorSide[2]}, ${this.opacity})`;
                    ctx.fillRect(
                        game.window.w / 2 - compareX,
                        game.window.h / 2 - compareY - this.HB.pos.z - this.HB.volume.z + this.HB.volume.y,
                        this.HB.volume.x,
                        this.HB.volume.z
                    );
                }
            }
        }
    }

    /*
     ######                        #####  ######
     #     # #####    ##   #    # #     # #     #
     #     # #    #  #  #  #    #       # #     #
     #     # #    # #    # #    #  #####  #     #
     #     # #####  ###### # ## #       # #     #
     #     # #   #  #    # ##  ## #     # #     #
     ######  #    # #    # #    #  #####  ######

    */
    draw3D() {
        let compareX = game.player.camera.x - this.HB.pos.x;
        let compareY = game.player.camera.y - this.HB.pos.y;
        /*
                         _                           _ _         _
                      __| |_ _ __ ___ __ __  __ _  _| (_)_ _  __| |___ _ _
                     / _` | '_/ _` \ V  V / / _| || | | | ' \/ _` / -_) '_|
                     \__,_|_| \__,_|\_/\_/  \__|\_, |_|_|_||_\__,_\___|_|
                                                |__/
                    */
        if (this.HB instanceof Cylinder) {
            // Draw shadow
            if (this.shadowDraw) {
                ctx.globalAlpha = 0.4;
                ctx.drawImage(
                    this.shadow,
                    game.window.w / 2 - compareX,
                    game.window.h / 2 - compareY,
                    this.HB.radius,
                    this.HB.radius
                );
                ctx.globalAlpha = 1;
            }
            if (this.imgFile) {
                ctx.drawImage(this.img, game.window.w / 2 - compareX, game.window.h / 2 - compareY - this.HB.pos.z, this.HB.radius, this.HB.radius);
            } else {
                //SIDE
                ctx.beginPath();
                ctx.fillStyle = `rgba(${this.colorSide[0]}, ${this.colorSide[1]}, ${this.colorSide[2]}, ${this.opacity})`;
                ctx.ellipse(
                    game.window.w / 2 - compareX,
                    game.window.h / 2 - (compareY * game.player.camera.angle) - (this.HB.pos.z * (1 - game.player.camera.angle)),
                    this.HB.radius,
                    this.HB.radius * game.player.camera.angle,
                    0, 0, 2 * Math.PI
                );
                ctx.fill();
                ctx.beginPath();
                ctx.fillRect(
                    game.window.w / 2 - compareX - this.HB.radius,
                    game.window.h / 2 - (compareY * game.player.camera.angle) - (this.HB.height * (1 - game.player.camera.angle)) - (this.HB.pos.z * (1 - game.player.camera.angle)),
                    this.HB.radius * 2,
                    this.HB.height * (1 - game.player.camera.angle)
                );
                ctx.fill();
                //TOP
                ctx.beginPath();
                ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.opacity})`;
                ctx.ellipse(
                    game.window.w / 2 - compareX,
                    game.window.h / 2 - (compareY * game.player.camera.angle) - (this.HB.height * (1 - game.player.camera.angle)) - (this.HB.pos.z * (1 - game.player.camera.angle)),
                    this.HB.radius,
                    this.HB.radius * game.player.camera.angle,
                    0, 0, 2 * Math.PI
                );
                ctx.fill();
            }
        }
        /*
             _                           _
          __| |_ _ __ ___ __ __  __ _  _| |__  ___
         / _` | '_/ _` \ V  V / / _| || | '_ \/ -_)
         \__,_|_| \__,_|\_/\_/  \__|\_,_|_.__/\___|
 
        */
        if (this.HB instanceof Cube) {
            // Draw shadow
            if (this.shadowDraw) {
                ctx.globalAlpha = 0.4;
                ctx.drawImage(
                    this.shadow,
                    game.window.w / 2 - compareX,
                    game.window.h / 2 - (compareY * game.player.camera.angle),
                    this.HB.volume.x,
                    this.HB.volume.y * game.player.camera.angle
                );
                ctx.globalAlpha = 1;
            }
            if (this.imgFile) {
                // ctx.drawImage(this.img, game.window.w / 2 - compareX, game.window.h / 2 - compareY - this.HB.pos.z, this.HB.volume.x, this.HB.volume.y);
            } else if (this.color) {
                ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.opacity})`;
                ctx.fillRect(
                    game.window.w / 2 - compareX,
                    game.window.h / 2 - (compareY * game.player.camera.angle) - (this.HB.volume.z * (1 - game.player.camera.angle)) - (this.HB.pos.z * (1 - game.player.camera.angle)),
                    this.HB.volume.x,
                    this.HB.volume.y * game.player.camera.angle
                );
                if (this.colorSide) {
                    ctx.fillStyle = `rgba(${this.colorSide[0]}, ${this.colorSide[1]}, ${this.colorSide[2]}, ${this.opacity})`;
                    ctx.fillRect(
                        game.window.w / 2 - compareX,
                        game.window.h / 2 - (compareY * game.player.camera.angle) - (this.HB.pos.z * (1 - game.player.camera.angle)) - (this.HB.volume.z * (1 - game.player.camera.angle)) + (this.HB.volume.y * game.player.camera.angle),
                        this.HB.volume.x,
                        this.HB.volume.z * (1 - game.player.camera.angle)
                    );
                }
            }
        }
    }

    /*
     #######
        #    #####  #  ####   ####  ###### #####
        #    #    # # #    # #    # #      #    #
        #    #    # # #      #      #####  #    #
        #    #####  # #  ### #  ### #      #####
        #    #   #  # #    # #    # #      #   #
        #    #    # #  ####   ####  ###### #    #

    */
    trigger(actor, side) {
        return
    }

}


/*
      :::::::::   ::::::::  :::     :::   ::: :::::::::  :::        ::::::::   ::::::::  :::    :::
     :+:    :+: :+:    :+: :+:     :+:   :+: :+:    :+: :+:       :+:    :+: :+:    :+: :+:   :+:
    +:+    +:+ +:+    +:+ +:+      +:+ +:+  +:+    +:+ +:+       +:+    +:+ +:+        +:+  +:+
   +#++:++#+  +#+    +:+ +#+       +#++:   +#++:++#+  +#+       +#+    +:+ +#+        +#++:++
  +#+        +#+    +#+ +#+        +#+    +#+    +#+ +#+       +#+    +#+ +#+        +#+  +#+
 #+#        #+#    #+# #+#        #+#    #+#    #+# #+#       #+#    #+# #+#    #+# #+#   #+#
###         ########  ########## ###    #########  ########## ########   ########  ###    ###
*/
class PolyBlock {
    constructor(id, x, y, options) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.d = 16;
        this.tags = [];
        this.coords = [];
        this.color = '';
        this.splash = '';
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
    }

    draw() {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.pt(game.player.camera, 'x', this.coords[0][0]), this.pt(game.player.camera, 'y', this.coords[0][1]));
        for (const coords of this.coords) {
            ctx.lineTo(this.pt(game.player.camera, 'x', coords[0]), this.pt(game.player.camera, 'y', coords[1]));
        }
        ctx.closePath();
        ctx.fill();
    }

    pt(origin, axis, offset) {
        let compare = origin[axis] - this[axis];
        let dimension = 'w';
        if (axis == 'y') dimension = 'h';
        return game.window[dimension] / 2 - compare + offset;
    }

    step() {

    }

    collide(colliders) {
        for (const c of colliders) {
            if (c != this && c.type != 'block') {
                // Honestly, I just watched this:
                // https://www.youtube.com/watch?v=01E0RGb2Wzo
                let intersections = 0;
                for (const coord of this.coords) {
                    let nextcoord = this.coords[this.coords.indexOf(coord) + 1];
                    if (!nextcoord) nextcoord = this.coords[0];
                    let x1 = coord[0] + this.x;
                    let x2 = nextcoord[0] + this.x;
                    let y1 = coord[1] + this.y;
                    let y2 = nextcoord[1] + this.y;
                    if (c.y < y1 != c.y < y2 &&
                        c.x < (x2 - x1) * (c.y - y1) / (y2 - y1) + x1 &&
                        c.z < this.d)
                        intersections++;
                }

                if (intersections % 2) {
                    c.xspeed *= 0.96;
                    c.yspeed *= 0.96
                    let tempx = (Math.random() * 6) - 3;
                    let tempz = (Math.random() * 6) - 3;
                    if (this.color) {
                        if (ticks % 4 == 0) {
                            game.match.map.debris.push(new Debris(allID++, c.x, c.y + (c.h / 2), { wind: false, w: 16, h: 12, z: c.z, color: this.splash, livetime: 12, dying: true, landable: true }))
                        }
                        game.match.map.debris.push(new Debris(allID++, c.x, c.y + (c.h / 2), { wind: false, w: 6, h: 6, xspeed: tempx, zspeed: 3 + tempz, z: c.z + c.hover, color: this.splash, livetime: 30, dying: true, landable: true }))
                    }
                }
            }
        }
    }
}


/*
        :::   :::   ::::::::::: ::::::::   :::::::: ::::::::::: :::        ::::::::::
      :+:+: :+:+:      :+:    :+:    :+: :+:    :+:    :+:     :+:        :+:
    +:+ +:+:+ +:+     +:+    +:+        +:+           +:+     +:+        +:+
   +#+  +:+  +#+     +#+    +#++:++#++ +#++:++#++    +#+     +#+        +#++:++#
  +#+       +#+     +#+           +#+        +#+    +#+     +#+        +#+
 #+#       #+#     #+#    #+#    #+# #+#    #+#    #+#     #+#        #+#
###       ### ########### ########   ######## ########### ########## ##########
*/
class Missile extends Block {
    constructor(id, x, y, z, vx, vy, vz, user, options) {
        super(id, x, y, z, vx, vy, vz, options);
        this.user = user;
        this.HB = new Cylinder(new Vect3(x, y, z), vx, vy);
        this.dying = true;
        this.livetime = 100;
        this.type = 'missile';
        this.color = [255, 0, 0];
        this.colorSide = [255, 128, 0];
        this.touchSFX = new Audio('sfx/hit_01.wav');
        this.damage = 10;
        this.force = 0.15; // How much of this projectile's speed is applied to the target
        this.shadowDraw = true;
        this.runFunc = [
            // Create Debris
            () => {
                let tempx = ((Math.random() * 1) - 0.5) * 2;
                let tempy = ((Math.random() * 1) - 0.5) * 2;
                let tempz = ((Math.random() * 1) - 0.5) * 2;
                if (ticks % 4 == 0) game.match.map.debris.push(
                    new Block(
                        allID++,
                        this.HB.pos.x,
                        this.HB.pos.y,
                        this.HB.pos.z,
                        1, 1, 1,
                        {
                            speed: new Vect3(tempx, tempy, tempz),
                            HB: new Cube(new Vect3(this.HB.pos.x, this.HB.pos.y, this.HB.pos.z), new Vect3(2, 2, 2)),
                            z: this.HB.pos.z,
                            color: [255, 255, 0],
                            livetime: 15,
                            dying: true,
                            shadowDraw: false,
                            solid: false
                        }));
            }
        ]
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
    }

    step() {
        if (this.active && ticks >= this.startDelay) {
            if (ticks >= this.startDelay && this.livetime != 0) {
                // Move
                this.HB.pos.x += this.speed.x;
                this.HB.pos.y += this.speed.y;
                this.HB.pos.z += this.speed.z;

                this.hitSplash = () => {
                    for (let parts = 0; parts < 10; parts++) {
                        let tempx = (Math.random() * 4) - 2;
                        let tempy = (Math.random() * 4) - 2;
                        let tempz = (Math.random() * 4) - 2;
                        let tempC = Math.ceil(Math.random() * 255);
                        game.match.map.debris.push(
                            new Block(
                                allID++,
                                this.HB.pos.x,
                                this.HB.pos.y,
                                this.HB.pos.z,
                                1, 1, 1,
                                {
                                    speed: new Vect3(tempx, tempy, tempz),
                                    HB: new Cube(new Vect3(this.HB.pos.x, this.HB.pos.y, this.HB.pos.z), new Vect3(2, 1, 1)),
                                    z: this.HB.pos.z,
                                    color: [255, tempC, 0],
                                    livetime: 20,
                                    dying: true,
                                    shadowDraw: false,
                                    solid: false
                                }));
                    }
                }
                /*
                   ___     _ _         _
                  / __|  _| (_)_ _  __| |___ _ _
                 | (_| || | | | ' \/ _` / -_) '_|
                  \___\_, |_|_|_||_\__,_\___|_|
                      |__/
                */
                for (let c of [game.player, ...game.match.bots]) {
                    if (c.character === this.user) //Don't collide with yourself
                        continue;
                    c = c.character; //Get the character from the bot
                    let side = this.HB.collide(c.HB); //Check for collision
                    if (side && c.solid && c.team !== this.user.team) {
                        //play hit2 sound
                        this.touchSFX.play();
                        if (!c.invulnerable)
                            c.hp -= this.damage;
                        c.speed.x += this.speed.x * this.force;
                        c.speed.y += this.speed.y * this.force;
                        c.speed.z += this.speed.z * this.force;
                        c.trigger(this, side);
                        this.active = false;
                        this.hitSplash();
                    }
                }

                /*
                  ___ _         _
                 | _ ) |___  __| |__ ___
                 | _ \ / _ \/ _| / /(_-<
                 |___/_\___/\__|_\_\/__/
     
                */
                for (const c of game.match.map.blocks) { //For each block
                    let side = this.HB.collide(c.HB); //Check for collision
                    if (c.solid && side) { //If the block is solid and you collided
                        switch (side) { //see which side you collided on
                            case 'front':
                                //Move the character to the edge of the block
                                this.HB.pos.y = c.HB.pos.y + c.HB.volume.y + this.HB.radius;
                                break;
                            case 'rear':
                                this.HB.pos.y = c.HB.pos.y - this.HB.radius;
                                break;
                            case 'right':
                                this.HB.pos.x = c.HB.pos.x + c.HB.volume.x + this.HB.radius;
                                break;
                            case 'left':
                                this.HB.pos.x = c.HB.pos.x - this.HB.radius;
                                break;
                            case 'top':
                                this.HB.pos.z = c.HB.pos.z + c.HB.volume.z;
                                break;
                            case 'bottom':
                                this.HB.pos.z = c.HB.pos.z - this.HB.height;
                                break;
                            default:
                                //break if you didn't collide
                                break;
                        }
                        //play hit sound
                        this.touchSFX.play();
                        this.active = false;
                        c.trigger(this, side); //Trigger the block's trigger function
                        this.hitSplash();
                    }
                }

                for (const func of this.runFunc) {
                    func();
                }
                this.livetime--;
            } else if (this.livetime == 0) {
                this.active = false;
            }
        }
    }

}

/*
      :::::::::   ::::::::  :::       ::: :::::::::: :::::::::         :::    ::: :::::::::
     :+:    :+: :+:    :+: :+:       :+: :+:        :+:    :+:        :+:    :+: :+:    :+:
    +:+    +:+ +:+    +:+ +:+       +:+ +:+        +:+    +:+        +:+    +:+ +:+    +:+
   +#++:++#+  +#+    +:+ +#+  +:+  +#+ +#++:++#   +#++:++#:         +#+    +:+ +#++:++#+
  +#+        +#+    +#+ +#+ +#+#+ +#+ +#+        +#+    +#+        +#+    +#+ +#+
 #+#        #+#    #+#  #+#+# #+#+#  #+#        #+#    #+#        #+#    #+# #+#
###         ########    ###   ###   ########## ###    ###         ########  ###
*/

class PowerUp extends Block {
    constructor(id, x, y, z, vx, vy, vz, options) {
        super(id, x, y, z, vx, vy, vz, options);
        this.HB = new Cube(new Vect3(x, y, z + 16), new Vect3(32, 32, 16));
        this.type = 'powerup';
        this.touchSFX = new Audio('sfx/coin_01.wav');
        this.solid = false;
        this.shadowDraw = true;
        this.runFunc = [
            (actor, side) => {
                this.HB.pos.z = sineAnimate(5, 0.05) + 10;
            }
        ]
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
        this.img.src = this.imgFile;

    }

    trigger(actor, side) {
        if (actor instanceof Character) {
            this.active = false;
            // if this actor's target was this powerup, set it to null
            if (actor.target == this) actor.target = null;
            //run every runFunc
            for (const func of this.runFunc) {
                func(actor, side);
            }

        }
    }
}

class Ammo_Ballistic extends PowerUp {
    constructor(id, x, y, z, vx, vy, vz, options) {
        super(id, x, y, z, vx, vy, vz, options);
        this.type = 'powerup';
        this.subtype = 'ammo_ballistic';
        this.imgFile = 'img/sprites/powerups/ammo_ballistic_top.png';
        this.imgFileSide = 'img/sprites/powerups/ammo_ballistic_side.png';
        this.color = [255, 0, 0];
        this.colorSide = [255, 128, 128];
        this.shadowDraw = true;
        this.runFunc.push((actor, side) => {
            if (actor instanceof Character)
                if (actor.ammo.ballistic < actor.ammo.ballisticMax) {
                    actor.ammo.ballistic++; // Add ballistic ammo
                    // play coin_01 sound
                    this.touchSFX.play();
                } else {
                    this.active = true; // Turn this back on if the player is full ammo
                }
        });
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
        this.img.src = this.imgFile;
        this.imgSide.src = this.imgFileSide;
    }
}

class Ammo_Plasma extends PowerUp {
    constructor(id, x, y, z, vx, vy, vz, options) {
        super(id, x, y, z, vx, vy, vz, options);
        this.type = 'powerup';
        this.subtype = 'ammo_plasma';
        this.imgFile = 'img/sprites/powerups/ammo_plasma_top.png';
        this.imgFileSide = 'img/sprites/powerups/ammo_plasma_side.png';
        this.img.src = this.imgFile;
        this.color = [255, 0, 255];
        this.colorSide = [255, 128, 255];
        this.shadowDraw = true;
        this.runFunc.push((actor, side) => {
            if (actor instanceof Character)
                if (actor.ammo.plasma < actor.ammo.plasmaMax) {
                    // play coin_01 sound
                    this.touchSFX.play();
                    actor.ammo.plasma++; // Add plasma ammo
                } else {
                    this.active = true; // Turn this back on if the player is full ammo
                }
        });
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
        this.img.src = this.imgFile;
        this.imgSide.src = this.imgFileSide;
    }
}

class HealthPickup extends PowerUp {
    constructor(id, x, y, z, vx, vy, vz, options) {
        super(id, x, y, z, vx, vy, vz, options);
        this.type = 'powerup';
        this.subtype = 'health';
        this.imgFile = 'img/sprites/powerups/health_top.png';
        this.imgFileSide = 'img/sprites/powerups/health_side.png';
        this.color = [0, 255, 0];
        this.colorSide = [128, 255, 128];
        //if health is not full
        this.runFunc.push((actor, side) => {
            if (actor instanceof Character)
                if (actor.hp < actor.hp_max) {
                    // play coin_01 sound
                    this.touchSFX.play();
                    actor.hp = Math.min(actor.hp + 50, actor.hp_max); // Add health
                }
                else {
                    this.active = true; // Turn this back on if the player is full health
                }
        });
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
        this.img.src = this.imgFile;
        this.imgSide.src = this.imgFileSide;
    }
}

class Buff extends Block {
    constructor(id, x, y, z, vx, vy, vz, options) {
        super(id, x, y, z, vx, vy, vz, options);
        this.HB = new Cube(new Vect3(x, y, z), new Vect3(vx, vy, vz));
        this.target = null;
        this.rotateRadius = 50
        this.type = 'buff';
        this.solid = false;
        this.shadowDraw = true;
        this.runFunc = [
            (actor, side) => {
                if (this.target != null) {
                    this.HB.pos.x = this.target.HB.pos.x + sineAnimate(this.rotateRadius, 0.05) - this.HB.volume.x / 2;
                    this.HB.pos.y = this.target.HB.pos.y + sineAnimate(this.rotateRadius, 0.05, 30);
                    this.HB.pos.z = this.target.HB.pos.z;
                }
            }
        ]
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
        this.img.src = this.imgFile;

    }

    trigger(actor, side) {

    }
}