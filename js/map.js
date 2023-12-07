class Map {
    constructor(options) {
        this.w = 7200;
        this.h = 4800;
        this.friction = 0.99;
        this.gravity = 1;
        this.gravityFriction = 0.9;
        this.groundFriction = 0.5;
        this.maxSpeed = 20;
        this.collideDamageSpeed = 5;
        this.bgimg = new Image();
        this.bgimg.src = "img/maps/grass480.png";
        this.imgSizeW = 480;
        this.imgSizeH = 480;
        this.blocks = [];
        this.percipitation = false;
        this.debris = [];
        this.debrisAmount = 1000;
        this.debrisSpawn = function () {
            let tempx = Math.floor(Math.random() * this.w);
            let tempy = Math.floor(Math.random() * this.h * 1.5);
            return new Debris(allID++, tempx, tempy, { contained: false, imgFile: 'img/sprites/leaf1.png', w: 12, h: 12, z: this.h - (this.h - tempy) })
        }
        this.windH = 32; //z-height where wind takes place
        this.xwind = 2;
        this.ywind = 0;
        this.lightValue = [0, 0, 0, 0.0];
        // this.lightValue = [0, 0, 128, 0.25];
        if (typeof options == 'object')
            for (const setting of Object.keys(options)) {
                if (this[setting] !== undefined)
                    this[setting] = options[setting];
            }

    }

    postLoad() {
        //INIT DEBRIS
        if (this.percipitation) {
            for (let i = 0; i < 1000; i++) {
                let tempx = Math.floor(Math.random() * this.w);
                let tempy = Math.floor(Math.random() * this.h);
                this.debris.push(new Debris(allID++, tempx, tempy, { imgFile: 'img/sprites/leaf1.png', w: 12, h: 12, z: this.h - (this.h - tempy) }));
            }
            // THIS IS SUPPOSED TO FAST-FORWARD WIND DEBRIS BUT DOESN'T WORK
            // for (let i = 0; i < 60000; i++) {
            //     for (const e of this.debris) {
            //         e.step()
            //     }
            // }
        }
    }

    draw() {
        // ctx.drawImage(this.bgimg, (game.player.camera.x * -1) + game.window.w / 2, (game.player.camera.y * -1) + game.window.h / 2, this.w, this.h);
        let mw = Math.ceil(game.window.w / this.imgSizeW) + 1 // How many "tiles" wide is the screen?
        let mh = Math.ceil(game.window.h / this.imgSizeH) + 1// How many "tiles" high is it?
        for (let row = 0; row < mw; row++) {
            for (let col = 0; col < mh; col++) {
                let nx = game.player.camera.x;
                let ny = game.player.camera.y;
                let shx = game.window.w / 2;
                let shy = game.window.h / 2;
                let compareX = ((game.player.camera.x - game.window.w / 2) % this.imgSizeW) * -1;
                let compareY = ((game.player.camera.y - game.window.h / 2) % this.imgSizeH) * -1;
                let tileX = compareX + (row * this.imgSizeW)
                let tileY = compareY + (col * this.imgSizeH)
                let totalX = tileX + game.player.camera.x - this.imgSizeW;
                let totalY = tileY + game.player.camera.y - this.imgSizeH;
                if (totalX <= this.w && totalY <= this.h && totalX >= 0 && totalY >= 0) 
                    ctx.drawImage(this.bgimg, Math.floor(tileX), Math.floor(tileY), this.imgSizeW, this.imgSizeH);
            } 
        }
    }

    step() {
        for (const e of this.debris) {
            if (e.cleanup && !e.active) {
                //Remove debris
                // console.log('removed');
                this.debris = this.debris.filter(function (el) { return el != e; });
            }
            if (this.percipitation && this.debris.length < this.debrisAmount) {
                this.debris.push(this.debrisSpawn())
            }
        }
        this.wind();
    }

    wind() {

        for (const e of [game.player.character, ...game.match.npcs, ...this.blocks, ...this.debris]) {
            if (e.wind && e.z + e.hover >= (this.windH * ((e.landable) ? 1 : 0))) {
                e.x += this.xwind * (1 - e.weight);
                e.y += this.ywind * (1 - e.weight);
            }

        }
    }

    lighting() {
        // ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = `rgba(${this.lightValue[0]}, ${this.lightValue[1]}, ${this.lightValue[2]}, ${this.lightValue[3]})`
        ctx.fillRect(0, 0, game.window.w, game.window.h);
        // ctx.globalCompositeOperation = "source-over";
    }

}