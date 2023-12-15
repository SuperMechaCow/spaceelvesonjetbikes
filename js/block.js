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

        // Graphics
        this.imgFile = '';  // Leave blank to add collision to a background
        this.opacity = 1;
        this.color = [200, 200, 200];    // Leave blank to add collision to a background
        this.colorSide = ''; //The color of the wall of the block
        this.img = new Image();
        this.img.src = this.imgFile;
        this.shadow = {
            img: new Image()
        }
        this.shadow.img.src = 'img/sprites/shadow.png';

        this.pattern = false;

        // Options
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
        this.img.src = this.imgFile;
        this.startDelay = this.startDelay + ticks
    }

    step() {
        for (const func of this.runFunc) {
            func();
        }
    }

    draw() {
        if (game.player.camera._3D) {
            this.draw3D();
        } else {

            let compareX = game.player.camera.x - this.HB.pos.x;
            let compareY = game.player.camera.y - this.HB.pos.y;
            ctx.globalAlpha = 0.5;
            ctx.drawImage(
                this.shadow.img,
                game.window.w / 2 - compareX,
                game.window.h / 2 - compareY,
                this.HB.volume.x,
                this.HB.volume.y
            );
            ctx.globalAlpha = 1;
            if (this.imgFile) {
                ctx.drawImage(this.img, game.window.w / 2 - compareX, game.window.h / 2 - compareY - this.HB.pos.z, this.HB.volume.x, this.HB.volume.y);
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

    draw3D() {
        let compareX = game.player.camera.x - this.HB.pos.x;
        let compareY = game.player.camera.y - this.HB.pos.y;
        // if (
        //     game.window.h / 2 - (compareY * game.player.camera.angle) - this.HB.pos.z - (this.HB.volume.z * (1 - game.player.camera.angle)) + (this.HB.volume.y * game.player.camera.angle) + this.HB.volume.z * (1 - game.player.camera.angle)
        //     >
        //     (game.window.h / 2) * (1 - game.player.camera.angle)
        // ) {

        //     if (
        //         game.window.h / 2 - (compareY * game.player.camera.angle) - this.HB.pos.z - (this.HB.volume.z * (1 - game.player.camera.angle)) + (this.HB.volume.y * game.player.camera.angle)
        //         <
        //         (game.window.h / 2) + ((game.window.h / 2) * (game.player.camera.angle))
        //     ) {
                //
                // DRAW SHADOW ON BOTTOM
                //
                ctx.globalAlpha = 0.5;
                ctx.drawImage(
                    this.shadow.img,
                    game.window.w / 2 - compareX,
                    game.window.h / 2 - (compareY * game.player.camera.angle),
                    this.HB.volume.x,
                    this.HB.volume.y * game.player.camera.angle
                );
                ctx.globalAlpha = 1;
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
        //     }
        // }
    }

    trigger(actor, side) {
        return
    }

}

/*
      ::::::::   ::::::::      :::     :::
    :+:    :+: :+:    :+:   :+: :+:   :+:
   +:+        +:+    +:+  +:+   +:+  +:+
  :#:        +#+    +:+ +#++:++#++: +#+
 +#+   +#+# +#+    +#+ +#+     +#+ +#+
#+#    #+# #+#    #+# #+#     #+# #+#
########   ########  ###     ### ##########
*/

class Goal extends Block {
    constructor(id, x, y, options) {
        super(id, x, y, options);
        this.tags = ['immobile', 'nocollide']; //Made it nocollide so you can enter the space
        this.activeGoal = false;
        this.type = 'goal';
        this.touchSFX = new Audio('sfx/coin_01.wav');
    }

    collide(colliders, options) {
        // custom collide code "activates" the powerup
        for (const c of colliders) {
            if (c != this) {
                //Goals collide infinitely upwards
                if (Math.abs(this.x - c.x) < this.w / 2 + (c.w / 2) && Math.abs(this.y - c.y) < this.h / 2 + (c.h / 2)) {
                    if (this.activeGoal && !c.bot) {
                        game.match.goalIndex++;
                        this.touchSFX.play();
                    } else
                        if (this == c.target) {
                            if (game.match.goals.indexOf(this) + 1 >= game.match.goals.length)
                                c.target = game.match.goals[0]
                            else
                                c.target = game.match.goals[game.match.goals.indexOf(this) + 1]
                        }
                }
            }
        }
    }
}

/*
    :::       :::     :::     :::     ::: ::::::::::
   :+:       :+:   :+: :+:   :+:     :+: :+:
  +:+       +:+  +:+   +:+  +:+     +:+ +:+
 +#+  +:+  +#+ +#++:++#++: +#+     +:+ +#++:++#
+#+ +#+#+ +#+ +#+     +#+  +#+   +#+  +#+
#+#+# #+#+#  #+#     #+#   #+#+#+#   #+#
###   ###   ###     ###     ###     ##########
*/

class Wave extends Block {
    constructor(id, x, y, options) {
        super(id, x, y, options);
        this.zforce = 1;
        this.xyforce = 0.05;
        this.tags = ['immobile', 'nocollide']; //Made it nocollide so you can enter the space
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
        this.img.src = this.imgFile;
        this.startDelay = this.startDelay + ticks
    }

    collide(colliders, options) {
        if (this.active && ticks >= this.startDelay) {
            for (const c of colliders) {
                if (c != this) {
                    if (!c.tags.includes('immobile') && Math.abs(this.x - c.x) < this.w / 2 + (c.w / 2) && Math.abs(this.y - c.y) < this.h / 2 + (c.h / 2) && this.z < c.d && c.z < this.d) {
                        let compareX = c.x - this.x;
                        let compareY = c.y - this.y;
                        let xpeak = 1 - Math.abs(compareX) / (this.w / 2);
                        if (xpeak < 0) xpeak = 0;
                        let ypeak = 1 - Math.abs(compareY) / (this.h / 2);
                        if (ypeak < 0) ypeak = 0;
                        // USE ( comparison != comparison) condition instead
                        if (this.xspeed != 0 && Math.abs(this.xspeed) >= Math.abs(this.yspeed)) {
                            // X
                            //Same direction
                            if ((c.xspeed >= 0 && this.xspeed >= 0) || (c.xspeed < 0 && this.xspeed < 0))
                                c.zspeed += Math.abs(this.zforce * xpeak) * Math.abs(c.xspeed)
                            //Opposite
                            else if ((c.xspeed >= 0 && this.xspeed < 0) || (c.xspeed < 0 && this.xspeed >= 0))
                                c.zspeed += this.zforce * xpeak * Math.abs(c.xspeed) * 3
                        } else if (this.yspeed != 0) {
                            // Y
                            //Same direction
                            if ((c.yspeed >= 0 && this.yspeed >= 0) || (c.yspeed < 0 && this.yspeed < 0))
                                c.zspeed += Math.abs(this.zforce * ypeak) * Math.abs(c.yspeed)
                            //Opposite
                            else if ((c.yspeed >= 0 && this.yspeed < 0) || (c.yspeed < 0 && this.yspeed >= 0))
                                c.zspeed += Math.abs(this.zforce * ypeak) * Math.abs(c.yspeed) * 3

                        } else {
                            c.zspeed += Math.abs(this.zforce * ypeak) * ((Math.abs(c.xspeed) + Math.abs(c.yspeed)) / 2)
                        }
                        c.xspeed += this.xspeed * this.xyforce * xpeak
                        c.yspeed += this.yspeed * this.xyforce * xpeak
                    }
                }
            }
        }
    }

    draw(options) {
        if (this.active && ticks >= this.startDelay) {
            let compareX = game.player.camera.x - this.x;
            let compareY = game.player.camera.y - this.y;
            //Get rid of these next two lines if you want an annoying error
            if (isNaN(compareX)) compareX = 0;
            if (isNaN(compareY)) compareY = 0;

            if (this.imgFile) {
                ctx.drawImage(this.img, game.window.w / 2 - compareX - (this.w / 2), game.window.h / 2 - compareY - (this.h / 2) - this.z, this.w, this.h);
            } else if (this.color) {
                if (game.debug) {
                    ctx.fillStyle = "#00FF00";
                    ctx.fillRect(game.window.w / 2 - compareX - (this.w / 2), game.window.h / 2 - compareY - (this.h / 2), this.w, this.h);
                    ctx.fillStyle = "#000000";
                    ctx.fillRect(game.window.w / 2 - compareX - 2, game.window.h / 2 - compareY - 2, 4, 4);
                } else {
                    // Create gradient
                    let grd = ctx.createLinearGradient(game.window.w / 2 - compareX - (this.w / 2), 0, game.window.w / 2 - compareX - (this.w / 2) + this.w, 0);
                    grd.addColorStop(0, "rgba(0, 0, 255, 0.2)");
                    grd.addColorStop(0.5, "rgba(255, 255, 255, 0.8)"); //Crest point
                    grd.addColorStop(1, "rgba(0, 0, 255, 0.2)");
                    // Fill with gradient
                    ctx.fillStyle = grd;
                    ctx.fillRect(game.window.w / 2 - compareX - (this.w / 2), game.window.h / 2 - compareY - (this.h / 2), this.w, this.h);

                }
            }
        }
    }
}

/*
      :::::::::  :::::::::: :::::::::  :::::::::  ::::::::::: ::::::::
     :+:    :+: :+:        :+:    :+: :+:    :+:     :+:    :+:    :+:
    +:+    +:+ +:+        +:+    +:+ +:+    +:+     +:+    +:+
   +#+    +:+ +#++:++#   +#++:++#+  +#++:++#:      +#+    +#++:++#++
  +#+    +#+ +#+        +#+    +#+ +#+    +#+     +#+           +#+
 #+#    #+# #+#        #+#    #+# #+#    #+#     #+#    #+#    #+#
#########  ########## #########  ###    ### ########### ########
*/

class Debris extends Block {
    constructor(id, x, y, options) {
        super(id, x, y, options);
        this.tags = ['nocollide', 'immobile', 'debris'];
        this.cleanup = true;
        this.blown = false;
        this.z = 0;
        this.xspeed = 0;
        this.yspeed = 0;
        this.zspeed = 0;
        this.dxspeed = 0;
        this.dyspeed = 0;
        this.hover = 0;
        this.weight = 0.2;
        this.terminalVel = 1;
        this.dying = false;
        this.livetime = 300;
        this.gravity = true;
        this.landable = true;
        this.wind = true;
        this.contained = false; //Cannot leave the map boundaries
        this.jetphys = false; //Can the speed of this be changed?
        this.speedChange = true; //Can this have its speed changed from dspeed?
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
        this.img.src = this.imgFile;
    }

    collide(colliders, options) {
        if (this.active && ticks >= this.startDelay) {
            // can be blown around
            if (this.blown) {
                for (const c of colliders) {
                    if (c != this && c.team != undefined) {
                        if (Math.abs(this.x - c.x) < this.w / 2 + (c.w / 2) && Math.abs(this.y - c.y) < this.h / 2 + (c.h / 2) && this.z < c.d && c.z < this.d) {
                            // this.xspeed += c.xspeed * this.weight;
                            // this.yspeed += c.yspeed * this.weight;
                            // this.zspeed += c.zspeed * this.weight;
                        }
                    }
                }
            }
        }
    }

}

/*
      :::::::::      :::     :::        :::
     :+:    :+:   :+: :+:   :+:        :+:
    +:+    +:+  +:+   +:+  +:+        +:+
   +#++:++#+  +#++:++#++: +#+        +#+
  +#+    +#+ +#+     +#+ +#+        +#+
 #+#    #+# #+#     #+# #+#        #+#
#########  ###     ### ########## ##########
*/

// class Ball extends Block {
//     constructor(id, x, y, options) {
//         super(id, x, y, options);
//         this.tags = ['nodamage']; //Made it nocollide so you can enter the space
//         this.type = 'ball';
//         this.xspeed = 0;
//         this.yspeed = 0;
//         this.zspeed = 0;
//         this.frictionMulti = 1.005;
//     }

//     step() {
//         if (this.active) {
//             // Friction
//             this.xspeed *= game.match.map.friction * this.frictionMulti;
//             this.yspeed *= game.match.map.friction * this.frictionMulti;
//             if (this.z > 0) this.zspeed -= game.match.map.gravity;
//             if (this.z < 0) this.zspeed += game.match.map.gravity;
//             if (Math.abs(this.z) < 4) this.zspeed *= 0.8
//             if (Math.abs(this.zspeed) < 0.2 && Math.abs(this.z) < 2) {
//                 this.zspeed = 0;
//                 this.z = 0;
//             }
//             this.zspeed *= game.match.map.gravityFriction * this.frictionMulti;
//             // Slow down when hitting max speed
//             if (this.xspeed > game.match.map.maxSpeed) this.xspeed = game.match.map.maxSpeed;
//             else if (this.xspeed < game.match.map.maxSpeed * -1) this.xspeed = game.match.map.maxSpeed * -1;
//             if (this.yspeed > game.match.map.maxSpeed) this.yspeed = game.match.map.maxSpeed;
//             else if (this.yspeed < game.match.map.maxSpeed * -1) this.yspeed = game.match.map.maxSpeed * -1;
//             // Make the move
//             this.x += this.xspeed;
//             this.y += this.yspeed;
//             // Gravity
//             this.z += this.zspeed;
//             if (this.z < this.hover * -1) {
//                 this.z = this.hover * -1;
//                 this.zspeed *= -1;
//                 if (game.debug) game.match.map.blocks.push(new Block(this.x, this.y, { color: '#0000FF', tags: ['immobile', 'nocollide'] }))
//             }

//             // Check for out of bounds
//             if (this.x + (this.w / 2) > game.match.map.w) {
//                 this.x = game.match.map.w - (this.w / 2);
//                 if (Math.abs(this.xspeed) > game.match.map.collideDamageSpeed) this.hp -= Math.abs(this.xspeed);
//                 this.xspeed *= -1;
//             }
//             if (this.x < (this.w / 2)) {
//                 this.x = (this.w / 2);
//                 if (Math.abs(this.xspeed) > game.match.map.collideDamageSpeed) this.hp -= Math.abs(this.xspeed);
//                 this.xspeed *= -1;
//             }
//             if (this.y + (this.h / 2) > game.match.map.h) {
//                 this.y = game.match.map.h - (this.h / 2);
//                 if (Math.abs(this.yspeed) > game.match.map.collideDamageSpeed) this.hp -= Math.abs(this.yspeed);
//                 this.yspeed *= -1;
//             }
//             if (this.y < (this.h / 2)) {
//                 this.y = (this.h / 2);
//                 if (Math.abs(this.yspeed) > game.match.map.collideDamageSpeed) this.hp -= Math.abs(this.yspeed);
//                 this.yspeed *= -1;
//             }
//         }
//     }
// }

/*
      :::::::::     :::     ::::::::: ::::::::::: ::::::::::: ::::::::  :::    ::: :::            ::: ::::::::::: ::::::::  :::::::::   ::::::::
     :+:    :+:  :+: :+:   :+:    :+:    :+:         :+:    :+:    :+: :+:    :+: :+:          :+: :+:   :+:    :+:    :+: :+:    :+: :+:    :+:
    +:+    +:+ +:+   +:+  +:+    +:+    +:+         +:+    +:+        +:+    +:+ +:+         +:+   +:+  +:+    +:+    +:+ +:+    +:+ +:+
   +#++:++#+ +#++:++#++: +#++:++#:     +#+         +#+    +#+        +#+    +:+ +#+        +#++:++#++: +#+    +#+    +:+ +#++:++#:  +#++:++#++
  +#+       +#+     +#+ +#+    +#+    +#+         +#+    +#+        +#+    +#+ +#+        +#+     +#+ +#+    +#+    +#+ +#+    +#+        +#+
 #+#       #+#     #+# #+#    #+#    #+#         #+#    #+#    #+# #+#    #+# #+#        #+#     #+# #+#    #+#    #+# #+#    #+# #+#    #+#
###       ###     ### ###    ###    ###     ########### ########   ########  ########## ###     ### ###     ########  ###    ###  ########
*/
class Particulator extends Block {
    constructor(id, x, y, options) {
        super(id, x, y, options);
        this.tags = ['immobile', 'nocollide']; //Made it nocollide so you can enter the space

    }



}

/*
      :::::::::      :::      :::::::: ::::::::::: ::::::::          :::::::::     :::     :::::::::   ::::::::
     :+:    :+:   :+: :+:   :+:    :+:    :+:    :+:    :+:         :+:    :+:  :+: :+:   :+:    :+: :+:    :+:
    +:+    +:+  +:+   +:+  +:+           +:+    +:+                +:+    +:+ +:+   +:+  +:+    +:+ +:+
   +#++:++#+  +#++:++#++: +#++:++#++    +#+    +#+                +#++:++#+ +#++:++#++: +#+    +:+ +#++:++#++
  +#+    +#+ +#+     +#+        +#+    +#+    +#+                +#+       +#+     +#+ +#+    +#+        +#+
 #+#    #+# #+#     #+# #+#    #+#    #+#    #+#    #+#         #+#       #+#     #+# #+#    #+# #+#    #+#
#########  ###     ###  ######## ########### ########          ###       ###     ### #########   ########
*/

class JumpPad extends Block {
    constructor(id, x, y, options) {
        super(id, x, y, options);
        this.tags = ['immobile', 'nocollide']; //Made it nocollide so you can enter the space
        this.jumpBoost = 3;
        // Options
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
    }

    collide(colliders, options) {
        if (this.active && ticks >= this.startDelay) {
            // custom collide code "activates" the powerup
            for (const c of colliders) {
                if (c != this) {
                    if (!c.tags.includes('immobile') && Math.abs(this.x - c.x) < this.w / 2 + (c.w / 2) && Math.abs(this.y - c.y) < this.h / 2 + (c.h / 2) && this.z < c.d && c.z < this.d) {
                        // if (Math.abs(c.z) <= 1)
                        c.zspeed += this.jumpBoost * ((Math.abs(c.xspeed) + Math.abs(c.yspeed)) / 2)
                    }
                }
            }
        }
    }
}

class SpeedPad extends Block {
    constructor(id, x, y, options) {
        super(id, x, y, options);
        this.tags = ['immobile', 'nocollide']; //Made it nocollide so you can enter the space
    }

    collide(colliders, options) {
        // custom collide code "activates" the powerup
        for (const c of colliders) {
            if (c != c.team != undefined) {
                if (!c.tags.includes('immobile') && Math.abs(this.x - c.x) < this.w / 2 + (c.w / 2) && Math.abs(this.y - c.y) < this.h / 2 + (c.h / 2) && this.z < c.d && c.z < this.d) {
                    c.xspeed *= 1.1
                    c.yspeed *= 1.1
                }
            }
        }
    }
}

class AmmoPickup extends Block {
    constructor(id, x, y, options) {
        super(id, x, y, options);
        this.w = this.h = 32;
        this.color = '#FF00FF';
        this.ammoType = 'pistol';
        this.ammoAmount = 25;
        this.tags = ['immobile', 'nocollide']; //Made it nocollide so you can enter the space
        // Options
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
    }

    collide(colliders, options) {
        // custom collide code "activates" the powerup
        for (const c of colliders) {
            if (this.active) {
                if (c != c.team != undefined) {
                    if (!c.tags.includes('immobile') && Math.abs(this.x - c.x) < this.w / 2 + (c.w / 2) && Math.abs(this.y - c.y) < this.h / 2 + (c.h / 2) && this.z < c.d && c.z < this.d) {
                        c.ammo[this.ammoType] += this.ammoAmount;
                        this.active = false;
                    }
                }
            }
        }
    }
}

class HealthBlock extends Block {
    constructor(id, x, y, options) {
        super(id, x, y, options);
        this.tags = ['nocollide', 'immobile'];
        this.healthCollide = 0;
        this.powerCollide = 0;
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
    }

    collide(colliders, options) {
        for (const c of colliders) {
            if (c != this)
                if (Math.abs(this.x - c.x) < this.w / 2 + (c.w / 2) && Math.abs(this.y - c.y) < this.h / 2 + (c.h / 2) && this.z < c.d && c.z < this.d) { //depth of the block
                    c.hp += this.healthCollide;
                    c.power += this.powerCollide;
                }
            if (c.hp > c.hp_max) c.hp = c.hp_max;
            if (c.power > c.power_max) c.power = c.power_max;
        }
    }
}

// class HealthItem extends Block {
//     constructor(id, x, y, options) {
//         super(id, x, y, options);
//         this.tags = ['immobile', 'nocollide']; //Made it nocollide so you can enter the space
//         this.healing = 50;
//     }
//     collide(colliders, options) {
//         // custom collide code "activates" the powerup
//         for (const c of colliders) {
//             if (c != this) {
//                 if (Math.abs(this.x - c.x) < this.w  / 2 + (c.w /2) && Math.abs(this.y - c.y) < this.h / 2  + (c.h /2) && this.z < c.d && c.z < this.d) {
//                     if (!c.bot) {
//                         c.hp += this.healing;
//                         game.match.map.blocks.splice(arr.findIndex(block => {return block.id === 3;})
//                     }
//                 }
//             }
//         }
//     }
// }

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





class Missile extends Block {
    constructor(id, x, y, options) {
        super(id, x, y, options);
        this.w = 8;
        this.h = 8;
        this.d = 8;
        this.dying = true;
        this.livetime = 100,
            this.type = 'missile';
        this.color = '#FF0000';
        this.tags = ['nocollide']; //Made it nocollide so you can enter the space
        this.touchSFX = new Audio('sfx/hit_01.wav');
        this.damage = 10;
        this.runFunc = function () {
            let tempx = (Math.random() * 1) - 0.5;
            let tempy = (Math.random() * 1) - 0.5;
            if (ticks % 2 == 0) game.match.map.debris.push(new Debris(allID++, this.x, this.y,
                {
                    w: 4,
                    h: 4,
                    xspeed: tempx,
                    yspeed: tempy,
                    z: this.z,
                    color: '#dddd00',
                    livetime: 15,
                    dying: true,
                    landable: false
                }));
        }
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }

    }

    collide(colliders, options) {
        if (this.active && ticks >= this.startDelay) {
            // custom collide code "activates" the powerup
            for (const c of colliders) {
                if (c != this && c.team != this.parent.team && !c.tags.includes('nocollide')) {
                    //Goals collide infinitely upwards
                    if (Math.abs(this.x - c.x) < this.w / 2 + (c.w / 2) && Math.abs(this.y - c.y) < this.h / 2 + (c.h / 2)) {
                        c.hp -= this.damage;
                        this.active = false;
                        this.cleanup = true;
                        this.touchSFX.play();
                        for (let parts = 0; parts < 10; parts++) {
                            let tempx = (Math.random() * 4) - 2;
                            let tempy = (Math.random() * 4) - 2;
                            let tempC = Math.ceil(Math.random() * 255);
                            game.match.map.debris.push(new Debris(allID++, this.x, this.y,
                                {
                                    w: 2,
                                    h: 2,
                                    xspeed: tempx,
                                    yspeed: tempy,
                                    z: this.z,
                                    color: '#ff' + tempC.toString(16) + '00',
                                    livetime: 20,
                                    dying: true,
                                    landable: false
                                }));
                        }
                    }
                }
            }
        }
    }
}