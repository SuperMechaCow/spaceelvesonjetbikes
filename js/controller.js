class Controller {
    constructor() {
        this.deadzone = 0.2;
        this.alt = {
            current: false,
            last: false
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
            }
        }
        this.touch.left.img.src = 'img/touch_left.png'
        this.findCenter();
    }

    findCenter() {
        this.touch.left.centerX = (this.touch.left.w / 2) + this.touch.left.offsetx;
        this.touch.left.centerY = game.window.h - (this.touch.left.h / 2) - this.touch.left.offsety;
    }



    read() {
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
            if (gp.axes[0] > this.deadzone) this.right = gp.axes[0];
            else this.right = 0;
            if (gp.axes[0] < this.deadzone * -1) this.left = gp.axes[0] * -1;
            else this.left = 0;
            if (gp.axes[1] > this.deadzone) this.down = gp.axes[1];
            else this.down = 0;
            if (gp.axes[1] < this.deadzone * -1) this.up = gp.axes[1] * -1;
            else this.up = 0;
            if (gp.buttons[10].pressed) this.shift = 1;
            else this.shift = 0;
            if (gp.buttons[4].pressed) this.alt.current = 1;
            else this.alt.current = 0;

            if (gp.buttons[6].pressed) this.space = 1;
            else this.space = 0;
            
            if (gp.buttons[8].pressed) if (ticks > 180) location.reload();
            // else this.alt.current = 0;

            if (gp.buttons[9].pressed) game.paused = !game.paused;
            // else this.alt.current = 0;
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
            if (this.leftTouch) this.left = this.leftTouch;
            else this.left = 0;
            if (this.rightTouch) this.right = this.rightTouch;
            else this.right = 0;
            if (this.upTouch) this.up = this.upTouch;
            else this.up = 0;
            if (this.downTouch) this.down = this.downTouch;
            else this.down = 0;
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
            if (this.rightKey) this.right = this.rightKey;
            else this.right = 0;
            if (this.leftKey) this.left = this.leftKey;
            else this.left = 0;
            if (this.downKey) this.down = this.downKey;
            else this.down = 0;
            if (this.upKey) this.up = this.upKey;
            else this.up = 0;
            if (this.spaceKey) this.space = this.spaceKey;
            else this.space = 0;
            if (this.shiftKey) this.shift = this.shiftKey;
            else this.shift = 0;
            if (this.altKey) this.alt.current = this.altKey;
            else this.alt.current = 0;

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