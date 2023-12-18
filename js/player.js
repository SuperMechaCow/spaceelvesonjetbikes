class Bot {
    constructor(options) {
        this.type = 'bot';
        this.character = new Character(allID++, 0, 0, this);
        this.controller = new DummyController();
        this.best = {
            air: 0,
            airtime: 0,
            speed: 0,
            damage: 0,
            lap: 0
        }
        // Options
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
    }

    /*
          :::     :::::::::::
       :+: :+:       :+:
     +:+   +:+      +:+
   +#++:++#++:     +#+
  +#+     +#+     +#+
 #+#     #+#     #+#
###     ### ###########
*/
    AI() {
        if (this.character.target) {
            // Calculate distance to target
            let compareX = this.character.target.HB.pos.x - this.character.HB.pos.x;
            let compareY = this.character.target.HB.pos.y - this.character.HB.pos.y;

            let distance = Math.sqrt(compareX ** 2 + compareY ** 2); // Pythagoras

            if (distance > this.character.HB.radius * 2) { // If the target is too far away, move towards it

                let dx = compareX / distance; // Normalized vector
                let dy = compareY / distance;

                // Calculate the directness of the movement
                let directX = (Math.abs(dx) + 1.4) / 2;
                if (directX > 1) directX = 1;
                let directY = (Math.abs(dy) + 1.4) / 2;
                if (directY > 1) directY = 1;

                // Aim towards the target
                this.controller.aimX = dx;
                this.controller.aimY = dy;

                // Move towards the target
                if (compareX > 0) { // If the target is to the right, move right
                    this.controller.buttons.moveLeft.current = 0; // Reset left movement
                    this.controller.buttons.moveRight.current = directX; // Move right
                    this.character.img.src = this.character.gfx + '.png'; // Face right
                }
                else if (compareX <= 0) { // If the target is to the left, move left
                    this.controller.buttons.moveRight.current = 0; // Reset right movement
                    this.controller.buttons.moveLeft.current = directX; // Move left
                    this.character.img.src = this.character.leftgfx + '.png'; // Face left
                } else { // Otherwise, reset horizontal movement
                    this.controller.buttons.moveLeft.current = this.controller.buttons.moveRight.current = 0; // Reset horizontal movement
                }
                if (compareY < 0) { // If the target is above, move up
                    this.controller.buttons.moveDown.current = 0; // Reset down movement
                    this.controller.buttons.moveUp.current = directX; // Move up
                }
                else if (compareY > 0) { // If the target is below, move down
                    this.controller.buttons.moveUp.current = 0; // Reset up movement
                    this.controller.buttons.moveDown.current = directX; // Move down
                } else { // Otherwise, reset vertical movement
                    this.controller.buttons.moveDown.current = this.controller.buttons.moveUp.current = 0; // Reset vertical movement
                }
            }
            // Switch guns when empty
            if (this.character.ammo[this.character.inventory[this.character.item].type] <= 0) { // If the current gun is empty
                this.character.item++; // Switch to the next gun
                if (this.character.item >= this.character.inventory.length) this.character.item = 0; // If the next gun is out of range, switch to the first gun
            }

            // Attack
            // If the target is within range, attack
            if (Math.abs(distance) <= this.character.inventory[this.character.item].range && this.character.target.team != this.character.team)
                this.controller.buttons.fire.current = 1;
            else
                this.controller.buttons.fire.current = 0;

            // 
            // if (this.character.target.team !== undefined) {
            //     if (this.character.target.team == this.character.team) this.character.formationRange = this.character.dformationRange;
            //     else this.character.formationRange = 0;
            //     if (this.character.target.lastColNPC)
            //         if (this.character.target.lastColNPC.team != this.character.team)
            //             this.character.target = this.character.target.lastColNPC;
            // }

            //If my target is not active
            if (!this.character.target.active) {
                this.findTarget();
            }
        } else {
            this.findTarget();
        }
    }

    findTarget() {
        this.character.target = null;
        // If the player is active, rally to them or attack them
        if (game.player.character.active) {
            this.character.target = game.player.character;
        }
        // Look for another NPC to attack!
        for (const npc of game.match.bots) {
            if (npc.character.active && npc.character.team != this.character.team) this.character.target = npc.character;
        }
        //Try to get back into formation
        if (!this.character.target)
            for (const npc of game.match.bots) {
                if (npc.character.active && npc.character.team == this.team) this.character.target = npc.character;
            }
        // Target itself?
        if (!this.character.target) this.character.target = this.character;
    }

}

class Player extends Bot {
    constructor(options) {
        super(options);
        this.type = 'player';
        this.character = new Character(allID++, 0, 0, this);
        this.controller = new Controller();
        this.camera = new Camera({ target: this.character });;
        this.interface = new Interface(this);
        // Options
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
    }

    AI() {
        return
    }
}