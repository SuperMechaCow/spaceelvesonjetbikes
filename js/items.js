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
    step() {
        if (ticks == this.nextCool) {
            if (this.reloading) {
                this.reloading = false;
                if (this.owner instanceof Player)
                    this.reload_done.play();
            }
        }
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
        this.name = 'Pluton Pistol';
        this.weapon = 'pistol';
        this.shootSFX = new Audio('sfx/laser_01.wav');
        this.reload_empty = sounds.reload_empty;
        this.reload_done = sounds.reload_done;
        this.projectileSpeed = 20;
        this.range = 300;
        this.coolDown = 10;
        this.reloadTime = 60;
        this.nextCool = 0;
        this.reloading = false;
        this.ammo = 10;
        this.ammoMax = 10;
        this.icon = new Image();
        this.icon.src = 'img/sprites/inventory/pistol_active.png';
        this.iconInactive = new Image();
        this.iconInactive.src = 'img/sprites/inventory/pistol_inactive.png';
        // Options
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
    }

    use(user, aimX, aimY, aimZ, mode) {
        // Check cooldown
        if (ticks > this.nextCool) {
            // Stop reloading
            this.reloading = false;
            // Check ammo
            if (this.ammo > 0) {
                // Set next cooldown
                this.nextCool = ticks + this.coolDown;
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
                // Multiply by this bullet's speed
                aimX *= this.projectileSpeed;
                aimY *= this.projectileSpeed;
                aimZ *= this.projectileSpeed;
                // Add bullet to map
                game.match.map.bullets.push(
                    new Bullet(
                        allID++, // ID
                        user.HB.pos.x, user.HB.pos.y, user.HB.pos.z, 4, 4, 0, user, // Position and size
                        {
                            speed: new Vect3(aimX, aimY, 0), //aimZ doesn't work
                            color: user.color
                        }
                    )
                );
            } else {
                if (this.owner instanceof Player)
                    this.reload_empty.play();
                if (user.ammo[this.type] > 0 && !this.reloading) {
                    this.reloading = true;    // set reloading to true
                    this.ammo = this.ammoMax;   // reload
                    this.nextCool = ticks + this.reloadTime; // set reload time
                    user.ammo[this.type]--;      // consume a clip from a user
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
        this.type = 'ballistic';
        this.name = 'Mercury Rifle';
        this.weapon = 'rifle';
        this.shootSFX = new Audio('sfx/rifle_shoot.wav');
        this.reload_empty = sounds.reload_empty;
        this.reload_done = sounds.reload_done;
        this.projectileSpeed = 30;
        this.damage = 40;
        this.range = 600;
        this.coolDown = 40;
        this.reloadTime = 180;
        this.nextCool = 0;
        this.reloading = false;
        this.ammo = 3;
        this.ammoMax = 3;
        this.icon = new Image();
        this.icon.src = 'img/sprites/inventory/rifle_active.png';
        this.iconInactive = new Image();
        this.iconInactive.src = 'img/sprites/inventory/rifle_inactive.png';
        // Options
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
    }

    use(user, aimX, aimY, aimZ, mode) {
        // Check cooldown
        if (ticks > this.nextCool) {
            // Stop reloading
            this.reloading = false;
            // Check ammo
            if (this.ammo > 0) {
                // Set next cooldown
                this.nextCool = ticks + this.coolDown;
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
                // Multiply by this bullet's speed
                xaim *= this.projectileSpeed;
                yaim *= this.projectileSpeed;
                zaim *= this.projectileSpeed;
                // Add the user's speed and multiply speed BEFORE spread for satisfying flamer ???
                // Add bullet to map
                game.match.map.bullets.push(
                    new Bullet(
                        allID++, // ID
                        user.HB.pos.x, user.HB.pos.y, user.HB.pos.z, 4, 4, 0, user, // Position and size
                        {
                            speed: new Vect3(xaim, yaim, 0), //zaim doesn't work
                            color: user.color,
                            damage: this.damage,
                            livetime: 300,
                            touchSFX: new Audio('sfx/hit03.wav')
                        }));
                // Change bullet runfunc
                game.match.map.bullets[game.match.map.bullets.length - 1].runFunc.push(
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
                    }.bind(game.match.map.bullets[game.match.map.bullets.length - 1])
                );
                //Change hitSpash
                game.match.map.bullets[game.match.map.bullets.length - 1].hitSplash = function () {
                    for (let parts = 0; parts < 20; parts++) {
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
                                    speed: new Vect3(tempx + (this.speed.x * 0.25), tempy + (this.speed.y * 0.25), tempz + (this.speed.z * 0.25)),
                                    HB: new Cube(new Vect3(this.HB.pos.x, this.HB.pos.y, this.HB.pos.z), new Vect3(6, 3, 1)),
                                    z: this.HB.pos.z,
                                    color: [0, tempC, 255],
                                    livetime: 20,
                                    dying: true,
                                    shadowDraw: false,
                                    solid: false
                                }));
                    }
                }.bind(game.match.map.bullets[game.match.map.bullets.length - 1])

                // Push player back by the negative of the aim vector
                user.speed.x -= (aimX / distance) * 10;
                user.speed.y -= (aimY / distance) * 10;
                user.speed.z -= (aimZ / distance) * 10;

            } else {
                if (this.owner instanceof Player)
                    this.reload_empty.play();
                if (user.ammo[this.type] > 0 && !this.reloading) {
                    this.reloading = true;    // set reloading to true
                    this.ammo = this.ammoMax;   // reload
                    this.nextCool = ticks + this.reloadTime; // set reload time
                    user.ammo[this.type]--;      // consume a clip from a user
                    if (this.owner instanceof Player)
                        this.reload_empty.play();
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
        this.name = 'Venusian Lotus';
        this.weapon = 'flamer';
        this.shootSFX = new Audio('sfx/hit_02.wav');
        this.reload_empty = sounds.reload_empty;
        this.reload_done = sounds.reload_done;
        this.projectileSpeed = 10;
        this.range = 200;
        this.coolDown = 6;
        this.reloadTime = 60;
        this.nextCool = 0;
        this.reloading = false;
        this.ammo = 6;
        this.ammoMax = 6;
        this.icon = new Image();
        this.icon.src = 'img/sprites/inventory/flamer_active.png';
        this.iconInactive = new Image();
        this.iconInactive.src = 'img/sprites/inventory/flamer_inactive.png';
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
            // Check ammo
            if (this.ammo > 0) {
                // Stop reloading
                this.reloading = false;
                // Set next cooldown
                this.nextCool = ticks + this.coolDown;
                this.ammo--; // consume a bullet
                this.shootSFX.play(); // play shoot sound
                for (let i = 0; i < 5; i++) {

                    // There's a serious bug here.
                    // The first bullet always shoots in the direction of the cursor
                    // The rest will spread out weirdly

                    let distance = Math.sqrt(aimX ** 2 + aimY ** 2);
                    aimX = (aimX / distance) * (this.projectileSpeed + user.speed.x);
                    aimY = (aimY / distance) * (this.projectileSpeed + user.speed.y);

                    let spreadMagnitude = user.accuracy * 30;

                    let spreadX = (Math.random() * 2 - 1) * spreadMagnitude;
                    let spreadY = (Math.random() * 2 - 1) * spreadMagnitude;

                    aimX += spreadX;
                    aimY += spreadY;
                    // Add bullets to map
                    game.match.map.bullets.push(
                        new Bullet(
                            allID++, // ID
                            user.HB.pos.x, user.HB.pos.y, user.HB.pos.z, 4, 4, 0, user, // Position and size
                            {
                                livetime: 16,
                                speed: new Vect3(aimX, aimY, 0),
                                color: user.color,
                                damage: 10,
                                touchSFX: sounds.hit_flamer
                            }
                        )
                    );
                }
            } else {
                if (this.owner instanceof Player)
                    this.reload_empty.play();
                if (user.ammo[this.type] > 0 && !this.reloading) {
                    this.reloading = true;    // set reloading to true
                    this.ammo = this.ammoMax;   // reload
                    this.nextCool = ticks + this.reloadTime; // set reload time
                    user.ammo[this.type]--;      // consume a clip from a user
                    if (this.owner instanceof Player)
                        this.reload_empty.play();
                }
            }
        }
    }
}

/*
      :::            :::     ::::    :::  ::::::::  ::::::::::
     :+:          :+: :+:   :+:+:   :+: :+:    :+: :+:
    +:+         +:+   +:+  :+:+:+  +:+ +:+        +:+
   +#+        +#++:++#++: +#+ +:+ +#+ +#+        +#++:++#
  +#+        +#+     +#+ +#+  +#+#+# +#+        +#+
 #+#        #+#     #+# #+#   #+#+# #+#    #+# #+#
########## ###     ### ###    ####  ########  ##########
*/
class Lance extends Item {
    constructor(options) {
        super(options);
        this.type = 'plasma';
        this.name = 'Martian Lance';
        this.weapon = 'lance';
        this.shootSFX = sounds.shoot_lance;
        this.reload_empty = sounds.reload_empty;
        this.reload_done = sounds.reload_done;
        this.boostSpeed = 15;
        this.range = 300;
        this.coolDown = 120;
        this.reloadTime = 60;
        this.nextCool = 0;
        this.reloading = false;
        this.ammo = 4;
        this.ammoMax = 4;
        this.icon = new Image();
        this.icon.src = 'img/sprites/inventory/lance_active.png';
        this.iconInactive = new Image();
        this.iconInactive.src = 'img/sprites/inventory/lance_inactive.png';
        // Options
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
    }

    use(user, aimX, aimY, aimZ, mode) {
        // Check cooldown
        if (ticks > this.nextCool) {
            // Stop reloading
            this.reloading = false;
            // Check ammo
            if (this.ammo > 0) {
                // Set next cooldown
                this.nextCool = ticks + this.coolDown;
                this.ammo--; // consume a bullet
                this.shootSFX.play(); // play shoot sound
                //find the distance from player to mouse with pythagorean theorem
                let distance = ((aimX ** 2) + (aimY ** 2)) ** 0.5;
                //Normalize the dimension distance by the real distance (ratio)
                aimX = (aimX / distance) * this.boostSpeed;
                aimY = (aimY / distance) * this.boostSpeed;
                aimZ = (aimZ / distance) * this.boostSpeed;

                // add aim to user speed
                user.speed.x += aimX;
                user.speed.y += aimY;
                user.speed.z += aimZ;

                // Add a new missile at this user's position
                game.match.map.bullets.push(
                    new Bullet(
                        allID++, // ID
                        user.HB.pos.x, user.HB.pos.y, user.HB.pos.z, 4, 4, 0, user, // Position and size
                        {
                            speed: new Vect3(aimX, aimY, 0),
                            parent: user,
                            color: user.color,
                            damage: 10,
                            livetime: 30,
                            touchSFX: sounds.hit_lance,
                            opacity: 0,
                            shadowDraw: false,
                            force: 1,
                            touchSFX: sounds.hit_lance
                        }
                    )
                );
                // Run this function every frame the bullet is alive
                game.match.map.bullets[game.match.map.bullets.length - 1].runFunc.push(
                    function () {
                        // Match the user's position
                        this.HB.pos.x = this.parent.HB.pos.x;
                        this.HB.pos.y = this.parent.HB.pos.y;
                        this.HB.pos.z = this.parent.HB.pos.z;
                        // this damage is equal to the true speed of the player
                        this.damage = Math.sqrt(Math.abs(this.parent.speed.x) ** 2 + Math.abs(this.parent.speed.y) ** 2 + Math.abs(this.parent.speed.z) ** 2);
                        // multiply damage
                        this.damage *= 2;
                        // add a debris block to the map at the player's position with a random speed
                        let tempx = ((Math.random() * 1) - 0.5) * 10;
                        let tempy = ((Math.random() * 1) - 0.5) * 10;
                        let tempz = ((Math.random() * 1) - 0.5) * 10;
                        let tempC1 = Math.ceil(Math.random() * 255);
                        let tempC2 = Math.ceil(Math.random() * 255);
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
                                    color: [tempC1, 0, tempC2],
                                    colorSide: [tempC2, 0, tempC1],
                                    livetime: 15,
                                    dying: true,
                                    shadowDraw: false,
                                    solid: false,
                                }));

                    }.bind(game.match.map.bullets[game.match.map.bullets.length - 1])
                )
                //Change hitSpash
                game.match.map.bullets[game.match.map.bullets.length - 1].hitSplash = function () {
                    for (let parts = 0; parts < 20; parts++) {
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
                                    speed: new Vect3(tempx + (this.speed.x * 0.25), tempy + (this.speed.y * 0.25), tempz + (this.speed.z * 0.25)),
                                    HB: new Cube(new Vect3(this.HB.pos.x, this.HB.pos.y, this.HB.pos.z), new Vect3(6, 3, 1)),
                                    z: this.HB.pos.z,
                                    color: [255, tempC, 0],
                                    livetime: 20,
                                    dying: true,
                                    shadowDraw: false,
                                    solid: false
                                }));
                    }
                }.bind(game.match.map.bullets[game.match.map.bullets.length - 1])
                game.match.map.bullets[game.match.map.bullets.length - 1].HB.radius = user.HB.radius + 10;


            } else {
                if (this.owner instanceof Player)
                    this.reload_empty.play();
                if (user.ammo[this.type] > 0 && !this.reloading) {
                    this.reloading = true;    // set reloading to true
                    this.ammo = this.ammoMax;   // reload
                    this.nextCool = ticks + this.reloadTime; // set reload time
                    user.ammo[this.type]--;      // consume a clip from a user
                }
            }
        }
    }
}