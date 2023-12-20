/*
      ::::::::::: ::::    ::: :::::::::  :::    ::: ::::::::::: ::::::::
         :+:     :+:+:   :+: :+:    :+: :+:    :+:     :+:    :+:    :+:
        +:+     :+:+:+  +:+ +:+    +:+ +:+    +:+     +:+    +:+
       +#+     +#+ +:+ +#+ +#++:++#+  +#+    +:+     +#+    +#++:++#++
      +#+     +#+  +#+#+# +#+        +#+    +#+     +#+           +#+
     #+#     #+#   #+#+# #+#        #+#    #+#     #+#    #+#    #+#
########### ###    #### ###         ########      ###     ########
*/
// Collect all input data and send it to the controller for better handling
function setupInputs() {
    document.addEventListener("keydown", function (event) {
        game.player.controller.touch.enabled = false;
        if (event.shiftKey) {
            game.player.controller.shiftKey = Number(event.shiftKey)
        }
        if (event.altKey) {
            event.preventDefault();
            game.player.controller.altKey = Number(event.altKey)
        }
        if (event.key.toLocaleLowerCase() === "q") game.player.character.item = 0;
        if (event.key.toLocaleLowerCase() === "e") game.player.character.item = 1;
        // if (event.key.toLocaleLowerCase() === "3") game.player.character.item = 2;
        // if (event.key.toLocaleLowerCase() === "4") game.player.character.item = 3;
        if (event.key.toLocaleLowerCase() === "w" || event.key === "ArrowUp") game.player.controller.upKey = 1;
        if (event.key.toLocaleLowerCase() === "a" || event.key === "ArrowLeft") game.player.controller.leftKey = 1;
        if (event.key.toLocaleLowerCase() === "s" || event.key === "ArrowDown") game.player.controller.downKey = 1;
        if (event.key.toLocaleLowerCase() === "d" || event.key === "ArrowRight") game.player.controller.rightKey = 1;
        if (event.key.toLocaleLowerCase() === " ") game.player.controller.spaceKey = 1;
        if (event.key === "Escape" || event.key === "Escape") game.paused = !game.paused;
    });
    document.addEventListener("keyup", function (event) {
        game.player.controller.shiftKey = Number(event.shiftKey)
        game.player.controller.altKey = Number(event.altKey)
        if (event.key.toLocaleLowerCase() === "w" || event.key === "ArrowUp") game.player.controller.upKey = 0;
        if (event.key.toLocaleLowerCase() === "a" || event.key === "ArrowLeft") game.player.controller.leftKey = 0;
        if (event.key.toLocaleLowerCase() === "s" || event.key === "ArrowDown") game.player.controller.downKey = 0;
        if (event.key.toLocaleLowerCase() === "d" || event.key === "ArrowRight") game.player.controller.rightKey = 0;
        if (event.key.toLocaleLowerCase() === " ") game.player.controller.spaceKey = 0;
    });
    window.addEventListener('gamepadconnected', (event) => {
        game.player.controller.gamePad = event.gamepad.index;
    });
    window.addEventListener('gamepaddisconnected', (event) => {
        game.player.controller.gamePad = null;
    });
    window.addEventListener('touchstart', (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        game.player.controller.touch.enabled = true;
        game.player.controller.touch.event = event;
        game.player.controller.touch.eventType = 'start';

    }, { passive: false });

    window.addEventListener('touchmove', (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        game.player.controller.touch.event = event;
        game.player.controller.touch.eventType = 'move';
    }, { passive: false });

    window.addEventListener('touchend', (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        game.player.controller.touch.event = event;
        game.player.controller.touch.eventType = 'end';
    }, { passive: false });

    window.addEventListener('touchcancel', (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        getTouch(event);
    }, { passive: false });
    window.addEventListener("mousedown", (event) => {
        let coords = getCanvasRelative(event, false); // from top-left
        game.player.controller.fireX = coords.x;
        game.player.controller.fireY = coords.y;
        coords = getCanvasRelative(event, true); // relative to center
        game.player.controller.rclickX = coords.x;
        game.player.controller.rclickY = coords.y;
        // Get which mousebutton they clicked
        if (event.button == 0)
            game.player.controller.clickButton = 1
        else if (event.button == 2)
            game.player.controller.rclickButton = 1
    });
    window.addEventListener("mouseup", (event) => {
        if (event.button == 0)
            game.player.controller.clickButton = 0;
        else if (event.button == 2)
            game.player.controller.rclickButton = 0;
    });
    window.addEventListener("wheel", (event) => {
        game.player.controller.wheelUp = (event.wheelDelta > 0) * 1;
        game.player.controller.wheelDown = (event.wheelDelta < 0) * 1;
    });
    window.addEventListener('mousemove', (event) => {
        let coords = getCanvasRelative(event, true);
        game.player.controller.aimX = coords.x
        game.player.controller.aimY = coords.y
    });
    window.addEventListener("contextmenu", e => e.preventDefault());
}

function getCanvasRelative(e, center) {
    bx = canvas.getBoundingClientRect();
    if (center) {
        let compareX = e.clientX - this.x;
        let compareY = e.clientY - this.y;
        return {
            x: e.clientX - (bx.width / 2),
            y: e.clientY - (bx.height / 2),
            bx: bx
        };
    } else {
        return {
            x: e.clientX - bx.left,
            y: e.clientY - bx.top,
            bx: bx
        };
    }
}

/*
      ::::::::   ::::::::  ::::    ::: ::::::::::: :::::::::   ::::::::  :::        :::        :::::::::: :::::::::
    :+:    :+: :+:    :+: :+:+:   :+:     :+:     :+:    :+: :+:    :+: :+:        :+:        :+:        :+:    :+:
   +:+        +:+    +:+ :+:+:+  +:+     +:+     +:+    +:+ +:+    +:+ +:+        +:+        +:+        +:+    +:+
  +#+        +#+    +:+ +#+ +:+ +#+     +#+     +#++:++#:  +#+    +:+ +#+        +#+        +#++:++#   +#++:++#:
 +#+        +#+    +#+ +#+  +#+#+#     +#+     +#+    +#+ +#+    +#+ +#+        +#+        +#+        +#+    +#+
#+#    #+# #+#    #+# #+#   #+#+#     #+#     #+#    #+# #+#    #+# #+#        #+#        #+#        #+#    #+#
########   ########  ###    ####     ###     ###    ###  ########  ########## ########## ########## ###    ###
*/
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
            weaponNext: { current: 0, last: 0 },
            start: { current: 0, last: 0 },
            select: { current: 0, last: 0 }
        }

        this.gamePad;
        this.touch = {
            enabled: false,
            event: {},
            left: {
                pos: new Vect3(150, 150, 75),
                radius: 75
            },
            right: {
                pos: new Vect3(150, 150, 75),
                radius: 75
            }
        };
    }

    /*

     #####  ######   ##   #####
     #    # #       #  #  #    #
     #    # #####  #    # #    #
     #####  #      ###### #    #
     #   #  #      #    # #    #
     #    # ###### #    # #####

    */
   /**========================================================================
    **                           read
    *?  Reads the controller input and stores it in the controller object
    *@param event JavaScript event object  
    *@param type String of the type of event
    *@return void
    *========================================================================**/
    read(event, type) {

        // Remember the last state of every command
        for (const button in this.buttons) {
            this.buttons[button].last = this.buttons[button].current;
        }

        /*
           ___                              _
          / __|__ _ _ __  ___ _ __  __ _ __| |
         | (_ / _` | '  \/ -_) '_ \/ _` / _` |
          \___\__,_|_|_|_\___| .__/\__,_\__,_|
                             |_|
        */
        if (this.gamePad != null) {
            let gp = navigator.getGamepads()[this.gamePad];
            // Get AXES
            if (gp.axes[0] > this.deadzone) this.buttons.moveRight.current = gp.axes[0];
            else this.buttons.moveRight.current = 0;
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

            // A button to switch to weapon 0
            if (gp.buttons[0].pressed) game.player.character.item = 0;
            // X button to switch to weapon 1
            if (gp.buttons[2].pressed) game.player.character.item = 1;

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
                this.buttons.start.current = 1;
                if (this.buttons.start.current != this.buttons.start.last) {
                    game.paused = !game.paused;
                }
                this.buttons.start.last = this.buttons.start.current;
            }
            else {
                this.buttons.start.current = 0;
                this.buttons.start.last = this.buttons.start.current;
            }
            if (gp.buttons[5].pressed) {
                game.player.camera._3D = 1;
                game.player.camera.angle = 0.35;
            } else {
                game.player.camera._3D = false;
                game.player.camera.angle = 1;
            }
            


        }
        /*
          _____            _
         |_   _|__ _  _ __| |_
           | |/ _ \ || / _| ' \
           |_|\___/\_,_\__|_||_|

        */
        else
            if (this.touch.enabled) {
                if (this.touch.event.target == canvas) {
                    let touchLeftFound = false;
                    let touchRightFound = false;
                    for (const touch of this.touch.event.targetTouches) {
                        let touchCoord = getCanvasRelative(touch);
                        // Check for touchbutton inventory 1 Rect collidepoint
                        if (game.player.interface.touchButton.inventory1.collidePoint(touchCoord.x, touchCoord.y))
                            game.player.character.item = 0;
                        if (game.player.interface.touchButton.inventory2.collidePoint(touchCoord.x, touchCoord.y))
                            game.player.character.item = 1;
                        // Check for left touch
                        let touchX = touchCoord.x - this.touch.left.pos.x;
                        let touchY = touchCoord.y - (game.window.h - this.touch.left.pos.y);
                        let distance = Math.sqrt(touchX ** 2 + touchY ** 2);
                        if (distance < this.touch.left.radius * 2) {

                            touchLeftFound = true;

                            if (distance > this.touch.right.radius)
                                if (ticks - this.touch.left.lastBoostTouch <= 10)
                                    this.buttons.boost.current = 1;
                            //Normalize, but add a little bonus outside of main ring
                            touchX /= (distance / this.touch.left.radius) * 100;
                            touchY /= (distance / this.touch.left.radius) * 100;

                            //Cap the bonus at 1
                            if (touchX > 1) touchX = 1;
                            if (touchX > 1) touchX = 1;

                            //Attach to movement functions
                            if (touchX < 0) this.buttons.moveLeft.current = Math.abs(touchX);
                            if (touchX > 0) this.buttons.moveRight.current = Math.abs(touchX);
                            if (touchY < 0) this.buttons.moveUp.current = Math.abs(touchY);
                            if (touchY > 0) this.buttons.moveDown.current = Math.abs(touchY);

                        }
                        // Check for right touch
                        touchX = touchCoord.x - (game.window.w - this.touch.right.pos.x);
                        touchY = touchCoord.y - (game.window.h - this.touch.right.pos.y);
                        distance = Math.sqrt(touchX ** 2 + touchY ** 2);
                        if (distance < this.touch.right.radius * 2) {
                            touchRightFound = true;
                            //Button was pressed                            
                            if (distance > this.touch.right.radius) this.buttons.fire.current = 1;
                            //Normalize, then change the aim angle
                            touchX /= distance;
                            touchY /= distance;
                            this.aimX = touchX;
                            this.aimY = touchY;

                        }
                    }
                    if (!touchLeftFound) {
                        this.buttons.moveLeft.current = 0;
                        this.buttons.moveRight.current = 0;
                        this.buttons.moveUp.current = 0;
                        this.buttons.moveDown.current = 0;
                    }
                }
                if (this.touch.eventType == 'end') {
                    this.buttons.fire.current = 0;
                    this.buttons.boost.current = 0;
                    for (const touch of this.touch.event.changedTouches) {
                        let touchCoord = getCanvasRelative(touch);
                        let touchX = touchCoord.x - this.touch.left.pos.x;
                        let touchY = touchCoord.y - (game.window.h - this.touch.left.pos.y);
                        let distance = Math.sqrt(touchX ** 2 + touchY ** 2);
                        if ((distance > this.touch.left.radius) && (distance < (this.touch.left.radius * 2)))
                            this.touch.left.lastBoostTouch = ticks;
                    }

                }
                this.touch.event = {};
                this.touch.eventType = {};
            }
            /*
              _  __         _                      _
             | |/ /___ _  _| |__  ___  __ _ _ _ __| |
             | ' </ -_) || | '_ \/ _ \/ _` | '_/ _` |
             |_|\_\___|\_, |_.__/\___/\__,_|_| \__,_|
                       |__/
            */
            else {
                if (this.rightKey) this.buttons.moveRight.current = 1;
                else this.buttons.moveRight.current = 0;
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

     #####  #####    ##   #    #
     #    # #    #  #  #  #    #
     #    # #    # #    # #    #
     #    # #####  ###### # ## #
     #    # #   #  #    # ##  ##
     #####  #    # #    # #    #

    */
    draw() {
        if (this.touch.enabled) {
            ctx.globalAlpha = 0.05;
            ctx.lineWidth = 8;
            ctx.strokeStyle = "#FFFFFF";
            ctx.fillStyle = "#000000";
            // Left touch
            ctx.beginPath();
            ctx.arc(
                this.touch.left.pos.x,
                game.window.h - this.touch.left.pos.y,
                this.touch.left.radius * 2,
                0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill()
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(
                this.touch.left.pos.x,
                game.window.h - this.touch.left.pos.y,
                this.touch.left.radius,
                0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill()
            ctx.stroke();
            // Right touch
            ctx.beginPath();
            ctx.arc(
                game.window.w - this.touch.right.pos.x,
                game.window.h - this.touch.right.pos.y,
                this.touch.right.radius * 2,
                0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill()
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(
                game.window.w - this.touch.right.pos.x,
                game.window.h - this.touch.right.pos.y,
                this.touch.right.radius,
                0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill()
            ctx.stroke();
            ctx.globalAlpha = 1;
        }
    }
}


/*
      :::::::::  :::    :::   :::   :::     :::   :::  :::   :::
     :+:    :+: :+:    :+:  :+:+: :+:+:   :+:+: :+:+: :+:   :+:
    +:+    +:+ +:+    +:+ +:+ +:+:+ +:+ +:+ +:+:+ +:+ +:+ +:+
   +#+    +:+ +#+    +:+ +#+  +:+  +#+ +#+  +:+  +#+  +#++:
  +#+    +#+ +#+    +#+ +#+       +#+ +#+       +#+   +#+
 #+#    #+# #+#    #+# #+#       #+# #+#       #+#   #+#
#########   ########  ###       ### ###       ###   ###
*/
class DummyController extends Controller {
    constructor() {
        super();
    }
    read() { return }
    draw() { return }
}