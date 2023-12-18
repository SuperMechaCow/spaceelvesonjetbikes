class Interface {
    constructor(player) {
        this.player = player;
        this.xhair = new Image();
        this.xhair.src = 'img/sprites/xhair.png';
        this.hud = {
            barW: 48
        }
        this.drawFriendlyRing = 0.5;
        this.drawNeutralRing = 0.5;
        this.drawEnemyRing = 0.5;
        this.touchButton = {
            inventory1: {},
            inventory2: {},
            inventory3: {}
        }
    }

    drawHUD() {
        if (this.player.character.active) {

            let compareX = this.player.camera.x - this.player.character.x;
            let compareY = this.player.camera.y - this.player.character.y;

            ctx.fillStyle = "#000000";
            if (game.debug) {
                ctx.font = '12px consolas';
                ctx.fillText(fps, 10, 150);
            }

            // Map locators
            ctx.fillStyle = "#FF0000";
            ctx.fillRect((this.player.camera.x / game.match.map.w) * game.window.w - 3, 0, 6, 6);
            ctx.fillRect((this.player.camera.x / game.match.map.w) * game.window.w - 3, game.window.h - 6, 6, 6);
            ctx.fillStyle = "#0000FF";
            ctx.fillRect(0, (this.player.camera.y / game.match.map.h) * game.window.h - 3, 6, 6);
            ctx.fillRect(game.window.w - 6, (this.player.camera.y / game.match.map.h) * game.window.h - 3, 6, 6);

            //Crosshair
            this.drawXhair();

            //Ammo
            this.drawAmmo();

            //Match info
            this.drawMatch();

        }
    }

    drawAmmo() {
        if (this.player.character.active) {
            let item = this.player.character.inventory[this.player.character.item];
            ctx.fillStyle = "#000000";
            ctx.font = '12px consolas';
            ctx.fillText(item.ammo, 10, 50);
            // draw the ammo bar
            ctx.fillStyle = "#000000";
            ctx.fillRect(10, 60, 100, 10);
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(10, 60, (item.ammo / item.ammoMax) * 100, 10);
            // draw the player's ballistic ammo pips
            ctx.fillStyle = "#000000";
            ctx.font = '12px consolas';
            ctx.fillText(this.player.character.ammo.ballistic, 10, 80);
            ctx.fillStyle = "#000000";
            ctx.fillRect(10, 90, 100, 10);
            ctx.fillStyle = "#FF0000";
            // for each pip, draw a rectangle
            for (let i = 0; i < this.player.character.ammo.ballistic; i++) {
                ctx.fillRect(10 + (i * 20), 90, 18, 8);
            }
            // draw the player's plasma ammo pips
            ctx.fillStyle = "#000000";
            ctx.font = '12px consolas';
            ctx.fillText(this.player.character.ammo.plasma, 10, 110);
            ctx.fillStyle = "#000000";
            ctx.fillRect(10, 120, 100, 10);
            ctx.fillStyle = "#FF00FF";
            // for each pip, draw a rectangle
            for (let i = 0; i < this.player.character.ammo.plasma; i++) {
                ctx.fillRect(10 + (i * 20), 120, 18, 8);
            }
            // draw the cooldown bar
            ctx.fillStyle = "#000000";
            ctx.fillRect(10, 150, 100, 10);
            ctx.fillStyle = "#0000FF";
            ctx.fillRect(10, 150, Math.min(Math.max(item.nextCool - ticks, 0) / item.coolDown * 100, 100), 10);

            // draw the player's inventory in a column in the center bottom of the screen
            // inventory contains pistol, flamer, and dropper
            // draw each inactive item's icon (64px) then draw the active item's icon over it's inactive icon
            ctx.drawImage(this.player.character.inventory[0].iconInactive, (game.window.w / 2) - 32, game.window.h - 64, 64, 64);
            ctx.drawImage(this.player.character.inventory[1].iconInactive, (game.window.w / 2) - 32, game.window.h - 128, 64, 64);
            // ctx.drawImage(this.player.character.inventory[2].iconInactive, (game.window.w / 2) - 32, game.window.h - 192, 64, 64);
            ctx.drawImage(this.player.character.inventory[this.player.character.item].icon, (game.window.w / 2) - 32, game.window.h - 64 - 64 * this.player.character.item, 64, 64);
            // Create a Rect for each item in the inventory and store it in the touchButton object
            this.touchButton.inventory1 = new Rect((game.window.w / 2) - 32, game.window.h - 64, 64, 64);
            this.touchButton.inventory2 = new Rect((game.window.w / 2) - 32, game.window.h - 128, 64, 64);
            this.touchButton.inventory3 = new Rect((game.window.w / 2) - 32, game.window.h - 192, 64, 64);
                   
        }
    }

    drawMatch() {   
        //Draw waves in top right hand corner
        ctx.fillStyle = "#000000";
        ctx.font = '12px consolas';
        ctx.fillText(`Wave: ${game.match.waves}`, game.window.w - 100, 50);
        //Draw enemies remaining in top right hand corner
        ctx.fillStyle = "#000000";
        ctx.font = '12px consolas';
        ctx.fillText(`Bots: ${game.match.bots.length}`, game.window.w - 100, 70);
        //Draw time until next wave in top right hand corner
        ctx.fillStyle = "#000000";
        ctx.font = '12px consolas';
        ctx.fillText(`Next: ${60 - Math.floor((ticks % 3600)/60)}`, game.window.w - 100, 90);

    }

    drawXhair() {
        // origin, angle, distance, size, spread, color, arc, laser, numXhairs
        if (!game.paused) {
            //aimX is the mouse coordinates minus the this.player coordinates
            //likewise with aimY (I calculated this elsewhere)
            let aimX = this.player.controller.aimX;
            let aimY = this.player.controller.aimY;
            //find the distance from this.player to mouse with pythagorean theorem
            let distance = ((aimX ** 2) + (aimY ** 2)) ** 0.5;
            //Normalize the dimension distance by the real distance (ratio)
            //Then multiply by the distance of the out circle
            aimX = (aimX / distance);
            aimY = (aimY / distance);

            // Set the distance for the other images
            const aimRad = 150;

            // Calculate the angles for the additional images (+10% and -10%)
            const angle = Math.atan2(aimY, aimX);
            const anglePlus10Percent = angle + game.player.character.accuracy;
            const angleMinus10Percent = angle - game.player.character.accuracy;

            // Calculate positions for the additional images
            const aimXPlus10Percent = Math.cos(anglePlus10Percent) * aimRad;
            const aimYPlus10Percent = Math.sin(anglePlus10Percent) * aimRad;

            const aimXMinus10Percent = Math.cos(angleMinus10Percent) * aimRad;
            const aimYMinus10Percent = Math.sin(angleMinus10Percent) * aimRad;

            // Draw the original image
            ctx.drawImage(this.xhair, (game.window.w / 2) + aimX * aimRad - 8, (game.window.h / 2) + aimY * aimRad - 8 - (this.player.character.HB.height / 2), 16, 16);
            // Sniper Xhair
            // ctx.drawImage(this.xhair, (game.window.w / 2) + (aimX * 2) - 16, (game.window.h / 2) + (aimY * 2) - 16, 32, 32);
            // Draw the image at +10%
            // ctx.drawImage(this.xhair, (game.window.w / 2) + aimXPlus10Percent - 8, (game.window.h / 2) + aimYPlus10Percent - 8 - (this.player.character.HB.height / 2), 16, 16);

            // Draw the image at -10%
            // ctx.drawImage(this.xhair, (game.window.w / 2) + aimXMinus10Percent - 8, (game.window.h / 2) + aimYMinus10Percent - 8 - (this.player.character.HB.height / 2), 16, 16);
        }
    }

}