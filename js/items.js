/*
      ::::::::::: ::::::::::: ::::::::::   :::   :::
         :+:         :+:     :+:         :+:+: :+:+:
        +:+         +:+     +:+        +:+ +:+:+ +:+
       +#+         +#+     +#++:++#   +#+  +:+  +#+
      +#+         +#+     +#+        +#+       +#+
     #+#         #+#     #+#        #+#       #+#
###########     ###     ########## ###       ###
*/
class Item {
    constructor(options) {
        // Options
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
    }
    use(user, xaim, yaim, mode) {
    }
}

/*
      ::::::::: ::::::::::: :::::::: ::::::::::: ::::::::  :::
     :+:    :+:    :+:    :+:    :+:    :+:    :+:    :+: :+:
    +:+    +:+    +:+    +:+           +:+    +:+    +:+ +:+
   +#++:++#+     +#+    +#++:++#++    +#+    +#+    +:+ +#+
  +#+           +#+           +#+    +#+    +#+    +#+ +#+
 #+#           #+#    #+#    #+#    #+#    #+#    #+# #+#
###       ########### ########     ###     ########  ##########
*/
class Pistol extends Item {
    constructor(options) {
        super(options);
        this.type = 'ballistic';
        this.shootSFX = new Audio('sfx/laser_01.wav');
        this.reloadReadySFX = new Audio('sfx/pickup01.wav');
        this.projectileSpeed = 20;
        this.range = 300;
        this.coolDown = 10;
        this.reloadTime = 60;
        this.nextCool = 0;
        this.ammo = 10;
        this.ammoMax = 10;
        this.icon = new Image();
        this.icon.src = 'img/icons/inventory/pistol_active.png';
        this.iconInactive = new Image();
        this.iconInactive.src = 'img/icons/inventory/pistol_inactive.png';
        // Options
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
    }
    use(user, aimX, aimY, aimZ, mode) {
        // Check cooldown
        if (ticks > this.nextCool) {
            // Set next cooldown
            this.nextCool = ticks + this.coolDown;
            // Check ammo
            if (this.ammo > 0) {
                this.ammo--; // consume a bullet
                this.shootSFX.play(); // play shoot sound
                //find the distance from player to mouse with pythagorean theorem
                let distance = ((aimX ** 2) + (aimY ** 2)) ** 0.5;
                //Normalize the dimension distance by the real distance (ratio)
                aimX = (aimX / distance);
                aimY = (aimY / distance);
                aimZ = (aimZ / distance);
                // Add the user's speed and multiply speed BEFORE spread for satisfying flamer
                let spreadMagnitude = user.accuracy; // Apply spread and user accuracy
                // Randomize spread
                let spreadX = (Math.random() * 2 - 1) * spreadMagnitude;
                let spreadY = (Math.random() * 2 - 1) * spreadMagnitude;
                let spreadZ = (Math.random() * 2 - 1) * spreadMagnitude;
                // Add spread to aim
                aimX += spreadX;
                aimY += spreadY;
                aimZ += spreadZ;
                // Multiply by this missile's speed
                aimX *= this.projectileSpeed;
                aimY *= this.projectileSpeed;
                aimZ *= this.projectileSpeed;
                // Add missile to map
                game.match.map.missiles.push(
                    new Missile(
                        allID++, // ID
                        user.HB.pos.x, user.HB.pos.y, user.HB.pos.z, 4, 4, 0, user, // Position and size
                        {
                            speed: new Vect3(aimX, aimY, 0), //aimZ doesn't work
                            color: user.color
                        }
                    )
                );
            } else {
                if (user.ammo.ballistic > 0) {
                    this.ammo = this.ammoMax;   // reload
                    this.nextCool = ticks + this.reloadTime; // set reload time
                    user.ammo.ballistic--;      // consume a clip from a user
                } else {
                    //play empty click sound
                }
            }
        }
    }
}

/*
      :::::::::  ::::::::::: :::::::::: :::        ::::::::::
     :+:    :+:     :+:     :+:        :+:        :+:
    +:+    +:+     +:+     +:+        +:+        +:+
   +#++:++#:      +#+     :#::+::#   +#+        +#++:++#
  +#+    +#+     +#+     +#+        +#+        +#+
 #+#    #+#     #+#     #+#        #+#        #+#
###    ### ########### ###        ########## ##########
*/
class Rifle extends Item {
    constructor(options) {
        super(options);
        this.type = 'plasma';
        this.shootSFX = new Audio('sfx/rifle_shoot.wav');
        this.projectileSpeed = 30;
        this.damage = 40;
        this.range = 500;
        this.coolDown = 30;
        this.reloadTime = 180;
        this.nextCool = 0;
        this.ammo = 3;
        this.ammoMax = 3;
        this.icon = new Image();
        this.icon.src = 'img/icons/inventory/rifle_active_p.png';
        this.iconInactive = new Image();
        this.iconInactive.src = 'img/icons/inventory/rifle_inactive_p.png';
        // Options
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
    }
    use(user, aimX, aimY, aimZ, mode) {
        // Check cooldown
        if (ticks > this.nextCool) {
            // Set next cooldown
            this.nextCool = ticks + this.coolDown;
            // Check ammo
            if (this.ammo > 0) {
                let xaim = aimX;
                let yaim = aimY;
                let zaim = aimZ;
                this.ammo--; // consume a bullet
                this.shootSFX.play(); // play shoot sound
                //find the distance from player to mouse with pythagorean theorem
                let distance = ((xaim ** 2) + (yaim ** 2)) ** 0.5;
                //Normalize the dimension distance by the real distance (ratio)
                xaim = (xaim / distance);
                yaim = (yaim / distance);
                zaim = (zaim / distance);
                // Multiply by this missile's speed
                xaim *= this.projectileSpeed;
                yaim *= this.projectileSpeed;
                zaim *= this.projectileSpeed;
                // Add the user's speed and multiply speed BEFORE spread for satisfying flamer ???
                // Add missile to map
                game.match.map.missiles.push(
                    new Missile(
                        allID++, // ID
                        user.HB.pos.x, user.HB.pos.y, user.HB.pos.z, 4, 4, 0, user, // Position and size
                        {
                            speed: new Vect3(xaim, yaim, 0), //zaim doesn't work
                            color: user.color,
                            damage: this.damage,
                            livetime: 300,
                            touchSFX: new Audio('sfx/hit03.wav')
                        }));
                // get the last item in the missiles array and push an empty function to the runFunc array
                game.match.map.missiles[game.match.map.missiles.length - 1].runFunc.push(
                    function () {
                        let tempx = ((Math.random() * 1) - 0.5) * 2;
                        let tempy = ((Math.random() * 1) - 0.5) * 2;
                        let tempz = ((Math.random() * 1) - 0.5) * 2;
                        game.match.map.debris.push(
                            new Block(
                                allID++,
                                this.HB.pos.x,
                                this.HB.pos.y,
                                this.HB.pos.z,
                                1, 1, 1,
                                {
                                    speed: new Vect3(tempx, tempy, tempz),
                                    HB: new Cube(new Vect3(this.HB.pos.x, this.HB.pos.y, this.HB.pos.z), new Vect3(4, 4, 4)),
                                    z: this.HB.pos.z,
                                    color: [220, 220, 200],
                                    livetime: 15,
                                    dying: true,
                                    shadowDraw: false,
                                    solid: false,
                                }));
                    }.bind(game.match.map.missiles[game.match.map.missiles.length - 1])
                );

                // Push player back by the negative of the aim vector
                console.log(aimX, aimY, aimZ, xaim, yaim, zaim);
                user.speed.x -= (aimX / distance) * 10;
                user.speed.y -= (aimY / distance) * 10;
                user.speed.z -= (aimZ / distance) * 10;
                
            } else {
                if (user.ammo[this.type] > 0) {
                    this.ammo = this.ammoMax;   // reload
                    this.nextCool = ticks + this.reloadTime; // set reload time
                    user.ammo[this.type]--;      // consume a clip from a user
                } else {
                    //play empty click sound
                }
            }
        }
    }
}

/*
      :::::::::: :::            :::       :::   :::   :::::::::: :::::::::
     :+:        :+:          :+: :+:    :+:+: :+:+:  :+:        :+:    :+:
    +:+        +:+         +:+   +:+  +:+ +:+:+ +:+ +:+        +:+    +:+
   :#::+::#   +#+        +#++:++#++: +#+  +:+  +#+ +#++:++#   +#++:++#:
  +#+        +#+        +#+     +#+ +#+       +#+ +#+        +#+    +#+
 #+#        #+#        #+#     #+# #+#       #+# #+#        #+#    #+#
###        ########## ###     ### ###       ### ########## ###    ###
*/
class Flamer extends Item {
    constructor(options) {
        super(options);
        this.type = 'plasma';
        this.shootSFX = new Audio('sfx/hit_02.wav');
        this.projectileSpeed = 10;
        this.range = 200;
        this.coolDown = 6;
        this.reloadTime = 60;
        this.nextCool = 0;
        this.ammo = 5;
        this.ammoMax = 5;
        this.icon = new Image();
        this.icon.src = 'img/icons/inventory/flamer_active.png';
        this.iconInactive = new Image();
        this.iconInactive.src = 'img/icons/inventory/flamer_inactive.png';
        // Options
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
    }
    use(user, aimX, aimY, mode) {
        // Check cooldown
        if (ticks > this.nextCool) {
            user.parent.controller.buttons.fire.last = 0;
            // Set next cooldown
            this.nextCool = ticks + this.coolDown;
            // Check ammo
            if (this.ammo > 0) {
                this.ammo--; // consume a bullet
                this.shootSFX.play(); // play shoot sound
                for (let i = 0; i < 5; i++) {
                    let distance = Math.sqrt(aimX ** 2 + aimY ** 2);
                    aimX = (aimX / distance) * (this.projectileSpeed + user.speed.x);
                    aimY = (aimY / distance) * (this.projectileSpeed + user.speed.y);

                    let spreadMagnitude = user.accuracy * 30;

                    let spreadX = (Math.random() * 2 - 1) * spreadMagnitude;
                    let spreadY = (Math.random() * 2 - 1) * spreadMagnitude;

                    aimX += spreadX;
                    aimY += spreadY;
                    // Add missiles to map
                    game.match.map.missiles.push(
                        new Missile(
                            allID++, // ID
                            user.HB.pos.x, user.HB.pos.y, user.HB.pos.z, 4, 4, 0, user, // Position and size
                            {
                                livetime: 14,
                                speed: new Vect3(aimX, aimY, 0),
                                color: user.color,
                                damage: 10
                            }
                        )
                    );
                }
            } else {
                if (user.ammo.plasma > 0) {
                    this.ammo = this.ammoMax;   // reload
                    this.nextCool = ticks + this.reloadTime; // set reload time
                    user.ammo.plasma--;      // consume a clip from a user
                } else {
                    //play empty click sound
                }
            }
        }
    }
}

