class Game {
    constructor() {
        this.window = {
            w: 900,
            h: 600,
            dw: 900,
            dh: 600,
            cx: this.w / 2,
            cy: this.h / 2,
        }
        this.paused = false;
        this.gameover = false;
        this.debug = false;
    }
}