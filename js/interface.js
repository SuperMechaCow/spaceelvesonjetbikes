/*
      ::::::::::: ::::    ::: ::::::::::: :::::::::: :::::::::  ::::::::::   :::      ::::::::  ::::::::::
         :+:     :+:+:   :+:     :+:     :+:        :+:    :+: :+:        :+: :+:   :+:    :+: :+:
        +:+     :+:+:+  +:+     +:+     +:+        +:+    +:+ +:+       +:+   +:+  +:+        +:+
       +#+     +#+ +:+ +#+     +#+     +#++:++#   +#++:++#:  :#::+::# +#++:++#++: +#+        +#++:++#
      +#+     +#+  +#+#+#     +#+     +#+        +#+    +#+ +#+      +#+     +#+ +#+        +#+
     #+#     #+#   #+#+#     #+#     #+#        #+#    #+# #+#      #+#     #+# #+#    #+# #+#
########### ###    ####     ###     ########## ###    ### ###      ###     ###  ########  ##########
*/
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
        this.minimapRadius = 80;
        this.drawFunc = []; // A list of functions to draw during the draw step
    }

    /*
                                 #     # #     # ######
     #####  #####    ##   #    # #     # #     # #     #
     #    # #    #  #  #  #    # #     # #     # #     #
     #    # #    # #    # #    # ####### #     # #     #
     #    # #####  ###### # ## # #     # #     # #     #
     #    # #   #  #    # ##  ## #     # #     # #     #
     #####  #    # #    # #    # #     #  #####  ######

    */
    drawHUD() {
        // Run all drawFunc
        for (const func of this.drawFunc) {
            func();
        }

        // The normal HUD in every game mode
        if (this.player.character.active) {
            // Map locators
            ctx.fillStyle = "#FF0000";
            ctx.fillRect((this.player.camera.x / game.match.map.w) * game.window.w - 3, 0, 6, 6);
            ctx.fillRect((this.player.camera.x / game.match.map.w) * game.window.w - 3, game.window.h - 6, 6, 6);
            ctx.fillStyle = "#0000FF";
            ctx.fillRect(0, (this.player.camera.y / game.match.map.h) * game.window.h - 3, 6, 6);
            ctx.fillRect(game.window.w - 6, (this.player.camera.y / game.match.map.h) * game.window.h - 3, 6, 6);

            //Minimap
            this.drawMinimap();

            //Crosshair
            this.drawXhair();

            //Ammo
            this.drawAmmo();

            if (game.debug) {
                ctx.fillStyle = "#000000";
                ctx.font = '12px Jura';
                ctx.fillText(fps, 10, 150);
                document.getElementById("debugger").style.display = "block";
            } else {
                document.getElementById("debugger").style.display = "none";
            }

        }
    }

    /*
                                    #
     #####  #####    ##   #    #   # #   #    # #    #  ####
     #    # #    #  #  #  #    #  #   #  ##  ## ##  ## #    #
     #    # #    # #    # #    # #     # # ## # # ## # #    #
     #    # #####  ###### # ## # ####### #    # #    # #    #
     #    # #   #  #    # ##  ## #     # #    # #    # #    #
     #####  #    # #    # #    # #     # #    # #    #  ####

    */
    drawAmmo() {
        let ammoBox = new Vect2((game.window.w / 2) - 150, game.window.h - 170);
        if (this.player.character.active) {
            let item = this.player.character.inventory[this.player.character.item];

            ctx.textAlign = "left";

            // draw the cooldown bar
            // if the item exists, draw the cooldown and ammo bars
            if (item) {
                // draw background   
                ctx.fillStyle = "#000000";
                ctx.fillRect(ammoBox.x, ammoBox.y, 10, 100);
                // draw filled portion of bar
                let maxTime = (item.reloading) ? item.reloadTime : item.coolDown;
                ctx.fillStyle = "#0000FF";
                ctx.fillRect(
                    ammoBox.x, // left of bar
                    ammoBox.y + 100 // bottom of bar
                    - (Math.min( // the smaller value of
                        Math.max(item.nextCool - ticks, 0) / maxTime, // 0 to 1 of cooldown
                        1) // or 1 (if cooldown is greater than 1)
                        * 100), // times the size of the full bar
                    10, // width of bar
                    (Math.min(  // bar is the same height as the distance from top, conviently
                        Math.max(item.nextCool - ticks, 0) / maxTime,
                        1)
                        * 100) // times the size of the full bar
                );
                // draw the ammo bar
                ctx.fillStyle = "#000000";
                ctx.fillRect(ammoBox.x + 20, ammoBox.y, 10, 100);
                // if the ammo is ballistic, draw it red, otherwise, draw it purple
                if (item.type == "ballistic") ctx.fillStyle = "#FF0000";
                else ctx.fillStyle = "#FF00FF";
                ctx.fillRect(ammoBox.x + 20, ammoBox.y + 100 - (item.ammo / item.ammoMax) * 100, 10, (item.ammo / item.ammoMax) * 100);
            }


            // if the player has ballistic ammo
            if (this.player.character.ammo.ballistic > 0) {
                // draw the player's ballistic ammo pips
                ctx.fillStyle = "#000000";
                ctx.font = '12px Jura';
                ctx.fillStyle = "#000000";
                ctx.fillRect(ammoBox.x + 270, ammoBox.y, 10, 100);
                ctx.fillStyle = "#FF0000";
                // for each pip, draw a rectangle
                for (let i = this.player.character.ammo.ballistic - 1; i >= 0; i--) {
                    ctx.fillRect(ammoBox.x + 271, ammoBox.y + 101 - ((i + 1) * 100 / this.player.character.ammo.plasmaMax), 8, (100 / this.player.character.ammo.plasmaMax) - 2);
                }
            }

            // if the player has plasma ammo
            if (this.player.character.ammo.plasma > 0) {
                // draw the player's plasma ammo pips
                ctx.fillStyle = "#000000";
                ctx.font = '12px Jura';
                ctx.fillStyle = "#000000";
                ctx.fillRect(ammoBox.x + 290, ammoBox.y, 10, 100);
                ctx.fillStyle = "#FF00FF";
                // for each pip, draw a rectangle
                for (let i = this.player.character.ammo.plasma - 1; i >= 0; i--) {
                    ctx.fillRect(ammoBox.x + 291, ammoBox.y + 101 - ((i + 1) * 100 / this.player.character.ammo.plasmaMax), 8, (100 / this.player.character.ammo.plasmaMax) - 2);
                }
            }

            /*
              _                 _
             (_)_ ___ _____ _ _| |_ ___ _ _ _  _
             | | ' \ V / -_) ' \  _/ _ \ '_| || |
             |_|_||_\_/\___|_||_\__\___/_|  \_, |
                                            |__/
            */
            //if one item, it is active
            if (this.player.character.inventory.length == 1) ctx.drawImage(this.player.character.inventory[0].icon, (game.window.w / 2) - 150, game.window.h - 64, 64, 64);
            else if (this.player.character.inventory.length == 2) {
                // if you have two, draw both
                switch (this.player.character.item) {
                    case 0:
                        ctx.drawImage(this.player.character.inventory[0].icon, (game.window.w / 2) - 150, game.window.h - 64, 64, 64);
                        ctx.drawImage(this.player.character.inventory[1].iconInactive, (game.window.w / 2) + 88, game.window.h - 64, 64, 64);
                        break;
                    case 1:
                        ctx.drawImage(this.player.character.inventory[0].iconInactive, (game.window.w / 2) - 150, game.window.h - 64, 64, 64)
                        ctx.drawImage(this.player.character.inventory[1].icon, (game.window.w / 2) + 88, game.window.h - 64, 64, 64);
                        break;
                }
            }
        }
    }

    /*
                                 #     #
     #####  #####    ##   #    #  #   #  #    #   ##   # #####
     #    # #    #  #  #  #    #   # #   #    #  #  #  # #    #
     #    # #    # #    # #    #    #    ###### #    # # #    #
     #    # #####  ###### # ## #   # #   #    # ###### # #####
     #    # #   #  #    # ##  ##  #   #  #    # #    # # #   #
     #####  #    # #    # #    # #     # #    # #    # # #    #

    */
    drawXhair() {
        // origin, angle, distance, size, spread, color, arc, laser, numXhairs
        if (!game.paused) {
            let compareX = game.player.camera.x - this.player.character.HB.pos.x;
            let compareY = game.player.camera.y - this.player.character.HB.pos.y;
            //aimX is the mouse coordinates minus the this.player coordinates
            //likewise with aimY (I calculated this elsewhere)
            let aimX = compareX + this.player.controller.aimX;
            let aimY = compareY + this.player.controller.aimY;
            //find the distance from this.player to mouse with pythagorean theorem
            let distance = ((aimX ** 2) + (aimY ** 2)) ** 0.5;
            //Normalize the dimension distance by the real distance (ratio)
            //Then multiply by the distance of the out circle
            aimX = (aimX / distance);
            aimY = (aimY / distance);

            let aimRad = 150;

            // Draw the original image
            ctx.drawImage(this.xhair, (game.window.w / 2) - compareX + aimX * aimRad - 8, (game.window.h / 2) - compareY + aimY * aimRad - 8 - (this.player.character.HB.height / 2), 16, 16);

        }
    }

    /*
                                 #     #
     #####  #####    ##   #    # ##   ## # #    # # #    #   ##   #####
     #    # #    #  #  #  #    # # # # # # ##   # # ##  ##  #  #  #    #
     #    # #    # #    # #    # #  #  # # # #  # # # ## # #    # #    #
     #    # #####  ###### # ## # #     # # #  # # # #    # ###### #####
     #    # #   #  #    # ##  ## #     # # #   ## # #    # #    # #
     #####  #    # #    # #    # #     # # #    # # #    # #    # #

    */
    drawMinimap() {

        /*
        _  _          _ _   _    _
        | || |___ __ _| | |_| |_ | |__  __ _ _ _ ___
        | __ / -_) _` | |  _| ' \| '_ \/ _` | '_(_-<
        |_||_\___\__,_|_|\__|_||_|_.__/\__,_|_| /__/

        */
        // Draw this player's health and power as circles around the minimap edge
        ctx.globalAlpha = 1;
        ctx.lineWidth = 12;
        // Background for both bars
        ctx.beginPath();
        ctx.strokeStyle = "#000000";
        ctx.arc(game.window.w / 2, game.window.h - 100, this.minimapRadius + 7.5, -Math.PI / 2, Math.PI * 1.5);
        ctx.stroke();
        ctx.globalAlpha = 0.75;
        ctx.lineWidth = 4;
        // Health
        ctx.beginPath();
        ctx.strokeStyle = "#00FF00";
        ctx.arc(game.window.w / 2, game.window.h - 100, this.minimapRadius + 10, -Math.PI / 2, -Math.PI / 2 + (Math.PI * 2 * (this.player.character.hp / this.player.character.hp_max)));
        ctx.stroke();
        // Power
        ctx.beginPath();
        ctx.strokeStyle = "#0099FF";
        ctx.arc(game.window.w / 2, game.window.h - 100, this.minimapRadius + 5, -Math.PI / 2, -Math.PI / 2 + (Math.PI * 2 * (this.player.character.pp / this.player.character.pp_max)));
        ctx.stroke();
        ctx.globalAlpha = 1;
        // draw the minimap circle
        ctx.fillStyle = "#000000";
        ctx.globalAlpha = 0.25;
        ctx.beginPath();
        ctx.arc(game.window.w / 2, game.window.h - 100, this.minimapRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#00FF00";
        for (let i = 1; i < 4; i++) {
            ctx.beginPath();
            ctx.lineWidth = i;
            ctx.arc(game.window.w / 2, game.window.h - 100, (this.minimapRadius / 3) * i, 0, Math.PI * 2);
            ctx.stroke();
        }
        /*
          ___      _
         | _ ) ___| |_ ___
         | _ \/ _ \  _(_-<
         |___/\___/\__/__/

        */
        //draw each bot
        for (let i = 0; i < game.match.bots.length; i++) {
            //calculate the distance from the player to the bot
            let distance = Math.sqrt((game.match.bots[i].character.HB.pos.x - game.player.character.HB.pos.x) ** 2 + (game.match.bots[i].character.HB.pos.y - game.player.character.HB.pos.y) ** 2);
            //calculate the angle from the player to the bot
            let angle = Math.atan2(game.match.bots[i].character.HB.pos.y - game.player.character.HB.pos.y, game.match.bots[i].character.HB.pos.x - game.player.character.HB.pos.x);
            //calculate the bot's position on the minimap
            let x = (game.window.w / 2) + (Math.cos(angle) * Math.min(distance / 10, this.minimapRadius));
            let y = (game.window.h - 100) + (Math.sin(angle) * Math.min(distance / 10, this.minimapRadius));
            // if the x or y distance is greater than the minimap radius, reduce opacity 0.5
            if (distance > this.minimapRadius * 12.5)
                ctx.globalAlpha = 0.5;
            else
                ctx.globalAlpha = 1;
            //draw the bot
            if (game.match.bots[i].character.team === game.player.character.team) {
                ctx.fillStyle = "#00FF00";
            } else if (game.match.bots[i].character.team === 0) {
                ctx.fillStyle = "#FFFF00";
            } else {
                ctx.fillStyle = "#FF0000";
            }
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fill();
        }

        /*
          ___
         | _ \_____ __ _____ _ _ _  _ _ __ ___
         |  _/ _ \ V  V / -_) '_| || | '_ (_-<
         |_| \___/\_/\_/\___|_|  \_,_| .__/__/
                                     |_|
        */
        ctx.globalAlpha = 0.5;
        for (let i = 0; i < game.match.map.blocks.length; i++) {
            let item = game.match.map.blocks[i];
            if (item.type == "pickup") {
                //calculate the distance from the player to the bot
                let distance = Math.sqrt((item.HB.pos.x - game.player.character.HB.pos.x) ** 2 + (item.HB.pos.y - game.player.character.HB.pos.y) ** 2);
                if (distance > 2000) continue;
                //calculate the angle from the player to the bot
                let angle = Math.atan2(item.HB.pos.y - game.player.character.HB.pos.y, item.HB.pos.x - game.player.character.HB.pos.x);
                //calculate the bot's position on the minimap
                let x = (game.window.w / 2) + (Math.cos(angle) * Math.min(distance / 10, this.minimapRadius));
                let y = (game.window.h - 100) + (Math.sin(angle) * Math.min(distance / 10, this.minimapRadius));
                //draw the item
                if (item.subtype == "ammo_ballistic") {
                    ctx.fillStyle = "#FF0000";
                    ctx.fillRect(x, y, 4, 4);
                } else if (item.subtype == "ammo_plasma") {
                    ctx.fillStyle = "#FF00FF";
                    ctx.fillRect(x, y, 4, 4);
                } else if (item.subtype == "health") {
                    ctx.fillStyle = "#00FF00";
                    ctx.fillRect(x, y, 4, 4);
                }
            }
        }

        /*
               _
          _ __| |__ _ _  _ ___ _ _
         | '_ \ / _` | || / -_) '_|
         | .__/_\__,_|\_, \___|_|
         |_|          |__/
        */
        ctx.globalAlpha = 1;
        //draw the player
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(game.window.w / 2, game.window.h - 100, 5, 0, Math.PI * 2);
        ctx.fill();

        /*
          ___                  _
         / __|_ __  ___ ___ __| |
         \__ \ '_ \/ -_) -_) _` |
         |___/ .__/\___\___\__,_|
             |_|
        */
        ctx.textAlign = "center";
        ctx.font = '16px Jura';
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(game.window.w / 2 - 64, game.window.h - 20, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(game.window.w / 2 + 64, game.window.h - 20, 20, 0, Math.PI * 2);
        ctx.fill();
        // draw a vertical bar in the center of the z position circle
        // that represents the player's z position to a max of 200
        ctx.fillStyle = "#999900";
        ctx.fillRect(game.window.w / 2 - 69, game.window.h - 5, 10, -Math.min((this.player.character.HB.pos.z / 600) * 30, 30));
        // first draw the text in black to create a black outline
        ctx.fillStyle = "#000000";
        ctx.font = '16px Jura';
        ctx.fillText(Math.round(this.player.character.HB.pos.z), game.window.w / 2 - 63, game.window.h - 14);
        // then draw the text in white
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(Math.round(this.player.character.HB.pos.z), game.window.w / 2 - 64, game.window.h - 15);
        // calculate the player's total speed
        let speed = Math.sqrt(this.player.character.speed.x ** 2 + this.player.character.speed.y ** 2 + this.player.character.speed.z ** 2);
        ctx.fillStyle = "#990099";
        ctx.fillRect(game.window.w / 2 + 59, game.window.h - 5, 10, -Math.min((speed / 50) * 30, 30));
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(Math.round(speed), game.window.w / 2 + 64, game.window.h - 15);
        // draw white outline around edge of black circles
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(game.window.w / 2 - 64, game.window.h - 20, 20, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(game.window.w / 2 + 64, game.window.h - 20, 20, 0, Math.PI * 2);
        ctx.stroke();

    }
}