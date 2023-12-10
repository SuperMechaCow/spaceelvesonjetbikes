class Controller {
    constructor() {
        this.deadzone = 0.2;
        this.buttons = {
            moveRight: { current: 0, last: 0 },
            moveLeft: { current: 0, last: 0 },
            moveDown: { current: 0, last: 0 },
            moveUp: { current: 0, last: 0 },
            jump: { current: 0, last: 0 },
            brake: { current: 0, last: 0 },
            boost: { current: 0, last: 0 },
            fire: { current: 0, last: 0 },
            altfire: { current: 0, last: 0 },
            weaponPrevious: { current: 0, last: 0 },
            weaponNext: { current: 0, last: 0 }
        }

        this.gamePad;
        this.touch = {
            enabled: false,
            left: {
                img: new Image(),
                offsetx: 100,
                offsety: 100,
                w: 200,
                h: 200
            },
            right: {
                img: new Image(),
                offsetx: 100,
                offsety: 100,
                w: 200,
                h: 200
            }
        };
        this.touch.left.img.src = 'img/touch_left.png'
        this.findCenter();
    }

    findCenter() {
        this.touch.left.centerX = (this.touch.left.w / 2) + this.touch.left.offsetx;
        this.touch.left.centerY = game.window.h - (this.touch.left.h / 2) - this.touch.left.offsety;
    }



    read() {

        // Remember the last state of every command
        for (const button in this.buttons) {
            this.buttons[button].last = this.buttons[button].current;
        }

        /*
              ::::::::      :::       :::   :::   :::::::::: :::::::::     :::     :::::::::
            :+:    :+:   :+: :+:    :+:+: :+:+:  :+:        :+:    :+:  :+: :+:   :+:    :+:
           +:+         +:+   +:+  +:+ +:+:+ +:+ +:+        +:+    +:+ +:+   +:+  +:+    +:+
          :#:        +#++:++#++: +#+  +:+  +#+ +#++:++#   +#++:++#+ +#++:++#++: +#+    +:+
         +#+   +#+# +#+     +#+ +#+       +#+ +#+        +#+       +#+     +#+ +#+    +#+
        #+#    #+# #+#     #+# #+#       #+# #+#        #+#       #+#     #+# #+#    #+#
        ########  ###     ### ###       ### ########## ###       ###     ### #########
        */
        if (this.gamePad != null) {
            let gp = navigator.getGamepads()[this.gamePad];
            // Get AXES
            if (gp.axes[0] > this.deadzone) this.buttons.moveRight.current  = gp.axes[0];
            else this.buttons.moveRight.current  = 0;
            if (gp.axes[0] < this.deadzone * -1) this.buttons.moveLeft.current = gp.axes[0] * -1;
            else this.buttons.moveLeft.current = 0;
            if (gp.axes[1] > this.deadzone) this.buttons.moveDown.current = gp.axes[1];
            else this.buttons.moveDown.current = 0;
            if (gp.axes[1] < this.deadzone * -1) this.buttons.moveUp.current = gp.axes[1] * -1;
            else this.buttons.moveUp.current = 0;
            // If either axis of stick 2 is outside of deadzone
            if (Math.abs(gp.axes[2]) >= this.deadzone || Math.abs(gp.axes[3]) >= this.deadzone) {
                game.player.controller.aimX = gp.axes[2] * 100;
                game.player.controller.aimY = gp.axes[3] * 100;
            }
            if (gp.buttons[10].pressed) this.buttons.brake.current = 1;
            else this.buttons.brake.current = 0;
            if (gp.buttons[4].pressed) this.buttons.boost.current = 1;
            else this.buttons.boost.current = 0;

            // Left trigger to space
            if (gp.buttons[6].pressed) this.buttons.jump.current = 1;
            else this.buttons.jump.current = 0;

            // Right trigger to click
            if (gp.buttons[7].pressed) this.buttons.fire.current = 1;
            else this.buttons.fire.current = 0;

            // Select Button reloads window
            if (gp.buttons[8].pressed) if (ticks > 180) location.reload();

            // Start button pauses game
            if (gp.buttons[9].pressed) {
                this.start.current = 1;
                if (this.start.current != this.start.last) {
                    game.paused = !game.paused;
                }
                this.start.last = this.start.current;
            }
            else {
                this.start.current = 0;
                this.start.last = this.start.current;
            }
        }
        /*
          ::::::::::: ::::::::  :::    :::  ::::::::  :::    :::
             :+:    :+:    :+: :+:    :+: :+:    :+: :+:    :+:
            +:+    +:+    +:+ +:+    +:+ +:+        +:+    +:+
           +#+    +#+    +:+ +#+    +:+ +#+        +#++:++#++
          +#+    +#+    +#+ +#+    +#+ +#+        +#+    +#+
         #+#    #+#    #+# #+#    #+# #+#    #+# #+#    #+#
        ###     ########   ########   ########  ###    ###
        */
        else
            if (this.touch.enabled) {
                if (this.leftTouch) this.buttons.moveLeft.current = this.leftTouch;
                else this.buttons.moveLeft.current = 0;
                if (this.rightTouch) this.buttons.moveRight.current  = this.rightTouch;
                else this.buttons.moveRight.current  = 0;
                if (this.upTouch) this.buttons.moveUp.current = this.upTouch;
                else this.buttons.moveUp.current = 0;
                if (this.downTouch) this.buttons.moveDown.current = this.downTouch;
                else this.buttons.moveDown.current = 0;
            }
            /*
                  :::    ::: :::::::::: :::   ::: :::::::::   ::::::::      :::     :::::::::  :::::::::
                 :+:   :+:  :+:        :+:   :+: :+:    :+: :+:    :+:   :+: :+:   :+:    :+: :+:    :+:
                +:+  +:+   +:+         +:+ +:+  +:+    +:+ +:+    +:+  +:+   +:+  +:+    +:+ +:+    +:+
               +#++:++    +#++:++#     +#++:   +#++:++#+  +#+    +:+ +#++:++#++: +#++:++#:  +#+    +:+
              +#+  +#+   +#+           +#+    +#+    +#+ +#+    +#+ +#+     +#+ +#+    +#+ +#+    +#+
             #+#   #+#  #+#           #+#    #+#    #+# #+#    #+# #+#     #+# #+#    #+# #+#    #+#
            ###    ### ##########    ###    #########   ########  ###     ### ###    ### #########
            */
            else {
                if (this.rightKey) this.buttons.moveRight.current  = 1;
                else this.buttons.moveRight.current  = 0;
                if (this.leftKey) this.buttons.moveLeft.current = 1;
                else this.buttons.moveLeft.current = 0;
                if (this.downKey) this.buttons.moveDown.current = 1;
                else this.buttons.moveDown.current = 0;
                if (this.upKey) this.buttons.moveUp.current = 1;
                else this.buttons.moveUp.current = 0;
                if (this.spaceKey) this.buttons.jump.current = 1;
                else this.buttons.jump.current = 0;
                if (this.shiftKey) this.buttons.brake.current = 1;
                else this.buttons.brake.current = 0;
                if (this.altKey) this.buttons.boost.current = 1;
                else this.buttons.boost.current = 0;
                if (this.clickButton) this.buttons.fire.current = 1;
                else this.buttons.fire.current = 0;
                if (this.rclickButton) this.buttons.altfire.current = 1;
                else this.buttons.altfire.current = 0;
                if (this.wheelUp) {
                    this.buttons.weaponPrevious.current = this.wheelUp;
                    this.wheelUp = 0;
                }
                else this.buttons.weaponPrevious.current = 0;
                if (this.wheelDown) {
                    this.buttons.weaponNext.current = this.wheelDown;
                    this.wheelDown = 0;
                }
                else this.buttons.weaponNext.current = 0;
            }
    }
    /*
          :::::::::  :::::::::      :::     :::       :::
         :+:    :+: :+:    :+:   :+: :+:   :+:       :+:
        +:+    +:+ +:+    +:+  +:+   +:+  +:+       +:+
       +#+    +:+ +#++:++#:  +#++:++#++: +#+  +:+  +#+
      +#+    +#+ +#+    +#+ +#+     +#+ +#+ +#+#+ +#+
     #+#    #+# #+#    #+# #+#     #+#  #+#+# #+#+#
    #########  ###    ### ###     ###   ###   ###
    */
    draw() {
        if (this.touch.enabled) {
            this.findCenter();
            ctx.globalAlpha = 0.5;
            ctx.drawImage(this.touch.left.img, this.touch.left.offsetx, game.window.h - this.touch.left.h - this.touch.left.offsety, this.touch.left.w, this.touch.left.h);
            ctx.globalAlpha = 1;
        }
    }
}