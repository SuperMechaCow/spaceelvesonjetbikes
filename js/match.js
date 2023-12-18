class Match {
    constructor() {
        this.map;
        this.bots = [];
        this.waves = 0;
        this.blocks = []; // Different from map blocks. Think powerups and dropped items
        this.runFuncs = []; // A list of functions to run every step
    }

    step() {
        for (const e of this.bots) {
            if (e.cleanup && !e.active) {
                //Remove npcs
                this.npcs = this.npcs.filter(function (el) { return el != e; });
            }
        }
        
        // Run all runFuncs
        for (const func in this.runFucts) {
            func();
        }
    }
}