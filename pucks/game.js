class Player {
    constructor(name) {
        this.name = name;
        this.hpStack = [];
        this.powerStack = [];
        this.prizeStack = [];
        this.slammer = new Slammer();
        this.attacks = 1;
        this.usedItems = [];
    }

    draw() {
        let thisIndex = players.indexOf(this);

        ctx.fillStyle = "#000000";
        ctx.font = '12px consolas';
        for (let i = 0; i < this.hpStack.length; i++) {
            const puck = this.hpStack[i];
            ctx.fillText(puck.name, (((thisIndex / 2) > 1) ? canvas.width - 300 : 10), (((thisIndex % 2)) ? canvas.height - 150 : 10) + i * 15);
        }
        for (let i = 0; i < this.powerStack.length; i++) {
            const puck = this.powerStack[i];
            ctx.fillText(puck.name, (((thisIndex / 2) > 1) ? canvas.width - 200 : 110), (((thisIndex % 2)) ? canvas.height - 150 : 10) + i * 15);
        }
        for (let i = 0; i < this.prizeStack.length; i++) {
            const puck = this.prizeStack[i];
            ctx.fillText(puck.name, (((thisIndex / 2) > 1) ? canvas.width - 100 : 210), (((thisIndex % 2)) ? canvas.height - 150 : 10) + i * 15);
        }
    }

    puckAnim(x, y) {

    }
}

class Slammer {
    constructor(owner) {
        this.puck = new Puck({ name: 'Eevee', slamPower: 0.25, owner: owner });
        this.resist = 'psychic';
        this.type = 'normal';
        this.weakness = 'fighting';
        this.status = '';
    }

    ability() {

    }
}

class Puck {
    constructor(options) {
        this.name = 'Sandbag';
        this.slamPower = 0.1;
        this.landDistance = 0.0;
        this.owner = '';
        this.ability = () => { };
        if (options)
            for (const option of Object.keys(options)) {
                this[option] = options[option];
            }
    }
}

class Berry extends Puck {
    constructor(options) {
        super(options);
        this.name = 'Berry';
        this.ability = () => {
            if (phase == phases.indexOf('pickup') && partOfPhase == 0) {
                // If it was flipped and you have room in your HP Stack
                if (flipped.includes(this)) {
                    if (getCurrPlayer().hpStack < MAXHP) {
                        // Move it to this player's hpStack
                        getCurrPlayer().hpStack.push(flipped.splice(flipped.indexOf(this), 1)[0])
                    } else {
                        // Move it to this player's hpStack
                        getCurrPlayer().prizeStack.push(flipped.splice(flipped.indexOf(this), 1)[0])
                    }
                }
            }
        };
    }
}

class Energy extends Puck {
    constructor(options) {
        super(options);
        this.name = 'Normal Energy';
        this.type = 'normal'
        if (options)
            for (const option of Object.keys(options)) {
                this[option] = options[option];
            }
        this.ability = () => {
            if (phase == phases.indexOf('determine') && partOfPhase == 0 && this.owner == players[playerTurn] && players[playerTurn].powerStack.includes(this)) {
                if (getCurrPlayer().slammer.type == this.type && !this.owner.usedItems.includes(this.name)) {
                    this.owner.usedItems.push(this.name);
                    getCurrPlayer().attacks++;
                }
            }
        };
    }
}



/*
      ::::::::  :::        ::::::::  :::::::::      :::     :::        ::::::::
    :+:    :+: :+:       :+:    :+: :+:    :+:   :+: :+:   :+:       :+:    :+:
   +:+        +:+       +:+    +:+ +:+    +:+  +:+   +:+  +:+       +:+
  :#:        +#+       +#+    +:+ +#++:++#+  +#++:++#++: +#+       +#++:++#++
 +#+   +#+# +#+       +#+    +#+ +#+    +#+ +#+     +#+ +#+              +#+
#+#    #+# #+#       #+#    #+# #+#    #+# #+#     #+# #+#       #+#    #+#
########  ########## ########  #########  ###     ### ########## ########
*/

const startPlayers = 2;
const MAXHP = 10;

var playerTurn = 0;

var phase = 0;
var partOfPhase = 0;
const phases = [
    'turn', 'topoff', 'knockout', 'determine', 'attacks', 'attack', 'throw', 'pickup', 'restack', 'discard'
];

var stackSize = 8;

var pickupAmount = 0;

var players = [];

var arenaStack = [];
var flipped = [];

// Step 1
const legalPucks = [
    // new Puck({ name: 'Potion' }),
    // new Puck({ name: 'Switch' }),
    // new Berry({ name: 'Berry' }),
    // new Puck({ name: 'Focus Energy' }),
    // new Puck({ name: 'Full Heal' }),
    // new Puck({ name: 'Focus Sash' }),
    // new Puck({ name: 'PokéFlute' }),
    // new Puck({ name: 'Sandbag' }),
    // new Puck({ name: 'Power Stone' }),
    // new Puck({ name: 'Silph Scope' }),
    new Energy({ name: 'Water Energy', type: 'water' }),
    new Energy({ name: 'Fire Energy', type: 'fire' }),
    new Energy({ name: 'Grass Energy', type: 'grass' }),
    new Energy({ name: 'Electric Energy', type: 'electric' }),
    new Energy({ name: 'Fighting Energy', type: 'fighting' }),
    new Energy({ name: 'Psychic Energy', type: 'psychic' }),
    new Energy({ name: 'Normal Energy' }),
    new Energy({ name: 'Focus Energy', type: 'normal' }),
    // new Puck({ name: 'SS Anne Ticket' }),
    // new Puck({ name: 'Bike' }),
    // new Puck({ name: 'Fishing Rod' }),
    // new Puck({ name: 'HM01' }),
    // new Puck({ name: 'HM02' }),
    // new Puck({ name: 'HM03' }),
    // new Puck({ name: 'HM04' }),
    // new Puck({ name: 'Hicks' }),
    // new Puck({ name: 'Saia' }),
    // new Puck({ name: 'Merkert' }),
    // new Puck({ name: 'Smith' }),
    new Puck({ name: 'You' })
]

/*
      :::::::::: :::    ::: ::::    :::  :::::::: ::::::::::: ::::::::::: ::::::::  ::::    :::  ::::::::
     :+:        :+:    :+: :+:+:   :+: :+:    :+:    :+:         :+:    :+:    :+: :+:+:   :+: :+:    :+:
    +:+        +:+    +:+ :+:+:+  +:+ +:+           +:+         +:+    +:+    +:+ :+:+:+  +:+ +:+
   :#::+::#   +#+    +:+ +#+ +:+ +#+ +#+           +#+         +#+    +#+    +:+ +#+ +:+ +#+ +#++:++#++
  +#+        +#+    +#+ +#+  +#+#+# +#+           +#+         +#+    +#+    +#+ +#+  +#+#+#        +#+
 #+#        #+#    #+# #+#   #+#+# #+#    #+#    #+#         #+#    #+#    #+# #+#   #+#+# #+#    #+#
###         ########  ###    ####  ########     ###     ########### ########  ###    ####  ########
*/

var fillStack = (stack, max, options) => {
    // let stack = [];
    while (stack.length < max) {
        stack.push(legalPucks[Math.floor(Math.random() * legalPucks.length)]);
        if (options) {
            if (options.puck)
                stack[stack.length - 1] = options.puck;
            if (options.who)
                stack[stack.length - 1].owner = options.who;
        }
    }
}

/*
      ::::::::  :::::::::: :::::::::::          :::::::::  :::            :::   :::   ::: :::::::::: :::::::::   ::::::::
    :+:    :+: :+:            :+:              :+:    :+: :+:          :+: :+: :+:   :+: :+:        :+:    :+: :+:    :+:
   +:+        +:+            +:+              +:+    +:+ +:+         +:+   +:+ +:+ +:+  +:+        +:+    +:+ +:+
  :#:        +#++:++#       +#+              +#++:++#+  +#+        +#++:++#++: +#++:   +#++:++#   +#++:++#:  +#++:++#++
 +#+   +#+# +#+            +#+              +#+        +#+        +#+     +#+  +#+    +#+        +#+    +#+        +#+
#+#    #+# #+#            #+#              #+#        #+#        #+#     #+#  #+#    #+#        #+#    #+# #+#    #+#
########  ##########     ###              ###        ########## ###     ###  ###    ########## ###    ###  ########
*/

var getPrevPlayer = () => {
    if (playerTurn == 0) {
        return players[players.length - 1];
    } else {
        return players[playerTurn - 1];
    }
}

var getCurrPlayer = () => {
    // This is jsut to match convention
    return players[playerTurn];
}

var getNextPlayer = () => {
    if (playerTurn == players.length - 1) {
        return players[0];
    } else {
        return players[playerTurn + 1];
    }
}

/*
        :::   :::       :::     :::    ::: ::::::::::      ::::::::::: :::    ::: :::::::::   ::::::::  :::       :::
      :+:+: :+:+:    :+: :+:   :+:   :+:  :+:                 :+:     :+:    :+: :+:    :+: :+:    :+: :+:       :+:
    +:+ +:+:+ +:+  +:+   +:+  +:+  +:+   +:+                 +:+     +:+    +:+ +:+    +:+ +:+    +:+ +:+       +:+
   +#+  +:+  +#+ +#++:++#++: +#++:++    +#++:++#            +#+     +#++:++#++ +#++:++#:  +#+    +:+ +#+  +:+  +#+
  +#+       +#+ +#+     +#+ +#+  +#+   +#+                 +#+     +#+    +#+ +#+    +#+ +#+    +#+ +#+ +#+#+ +#+
 #+#       #+# #+#     #+# #+#   #+#  #+#                 #+#     #+#    #+# #+#    #+# #+#    #+#  #+#+# #+#+#
###       ### ###     ### ###    ### ##########          ###     ###    ### ###    ###  ########    ###   ###
*/

var makeThrow = (player, stack) => {
    // The 'player' throws their slammer at the 'stack'
    // Save some variables to track the loop index as the stack size changes
    let actualStackSize = stack.length;
    let actualIndex = 0;
    // Impact algorithm on each pog
    for (let i = 0; i < actualStackSize; i++) {
        // pucks absorb more power the further down and heavier they are
        let throwPower = Math.random() + (0.01 * stack.indexOf(stack[actualIndex])) + stack[actualIndex].slamPower / 2;
        // if the random chance was less than your slammer's power
        if (throwPower < player.slammer.puck.slamPower) {
            flipped.push(stack[actualIndex]);
            stack.splice(stack.indexOf(stack[actualIndex]), 1);
            actualIndex--;
        }
        actualIndex++;
    }
}

var outOfGame = (player) => {
    // Remove the player and correct the playerTurn
    // playerTurn is used as the index for the players, which changes in size
    playerIndex = players.indexOf(player);
    players.splice(playerIndex, 1)
    if (playerTurn >= playerIndex)
        playerTurn--;
    if (playerTurn < 0)
        playerTurn = players.length - 1;
}

var pass = () => {
    playerTurn = players.indexOf(getNextPlayer());
}

var pickup = (player) => {
    // Loop through all of the flipped pucks and shift into the player's powerstack
    for (const puck of flipped) {
        console.log("Picked up " + puck.name);
        puck.owner = getCurrPlayer();
        puck.ability();
        player.powerStack.push(flipped.shift())
    }
}

/*
      :::::::: ::::::::::: :::::::::: :::::::::
    :+:    :+:    :+:     :+:        :+:    :+:
   +:+           +:+     +:+        +:+    +:+
  +#++:++#++    +#+     +#++:++#   +#++:++#+
        +#+    +#+     +#+        +#+
#+#    #+#    #+#     #+#        #+#
########     ###     ########## ###
*/

var step = (nextPhase, nextPart) => {
    phase = phases.indexOf(nextPhase);
    partOfPhase = nextPart;
    // console.log(players[playerTurn].name + ": " + ((nextPart) ? 'End' : 'Beginning') + " of the " + phases[phase]);
    //Check for abilities
    for (const player of players) {
        player.slammer.ability();
        for (const puck of [...player.hpStack, ...player.powerStack, ...player.prizeStack]) {
            puck.ability();
        }
    }
}

var topOff = (toStack, fromStack, max) => {
    while (toStack.length < max) {
        if (fromStack.length > 0) {
            toStack.unshift(fromStack.shift());
        } else {
            return false;
        }
    }
    return true;
}


/*
  ::::::::::: :::    ::: :::::::::  ::::    :::
     :+:     :+:    :+: :+:    :+: :+:+:   :+:
    +:+     +:+    +:+ +:+    +:+ :+:+:+  +:+
   +#+     +#+    +:+ +#++:++#:  +#+ +:+ +#+
  +#+     +#+    +#+ +#+    +#+ +#+  +#+#+#
 #+#     #+#    #+# #+#    #+# #+#   #+#+#
###      ########  ###    ### ###    ####
*/

var turn = () => {
    // Reset items used this turn
    for (const player of players) {
        player.usedItems = [];
    }
    step('turn', 0);
    // "... At the beginning of your turn ..."
    // "... until your next turn ..."
    // Top-Off Phase
    step('topoff', 0); // "... before topping-off ..."
    // If they can't top-off, attempt a knockout
    if (!topOff(arenaStack, getCurrPlayer().hpStack, stackSize)) {
        flipped = []; // Clear the flipped stack
        step('knockout', 0);
        // The previous player throws at a temporary stack with just the opponent's puck
        makeThrow(getPrevPlayer(), [getCurrPlayer().slammer.puck])
        // If the curren't player's slammer was in the flipped pile
        if (flipped.includes(getCurrPlayer().slammer.puck)) {
            console.log("Player " + playerTurn + " knocked out!");
            step('turn', 1);
            outOfGame(getCurrPlayer());
            pass();
            return;
        } else {
            console.log("Player " + playerTurn + " almost got knocked out!");
        }
        step('knockout', 1);
    }
    step('topoff', 1); // "... after topping-off ..."
    getCurrPlayer().attacks = 1;
    step('determine', 0); // "... when determining the number of attacks"
    // Energy match is handled by the puck ability
    // Next player's weakness
    // Next player's resistance
    if (getCurrPlayer().attacks < 0)
        getCurrPlayer().attacks = 0;
    step('determine', 1);
    console.log("Making " + getCurrPlayer().attacks + " attack(s)...");
    // All Attacks
    step('attacks', 0);
    for (let i = 0; i < getCurrPlayer().attacks; i++) {
        flipped = []; // Clear the flipped stack
        // One attack (subphase)
        step('attack', 0);
        // Throw (sub-subphase)
        step('throw', 0);
        makeThrow(getCurrPlayer(), arenaStack);
        step('throw', 1);
        pickupAmount = flipped.length; // Start by allowing to pick up all 
        step('pickup', 0);
        pickup(getCurrPlayer());
        step('pickup', 1);
        step('restack', 0);
        // restack();
        flipped = []; // Clear the flipped stack
        step('restack', 1);
        step('attack', 1);
    }
    step('attacks', 1);
    step('discard', 0);
    // discard();
    step('discard', 1);
    step('turn', 1);
    // console.log(players[playerTurn]);
    pass();
    console.log(getCurrPlayer().name + "'s turn.");
}

/*
      ::::::::  :::::::::: ::::::::::: :::    ::: :::::::::
    :+:    :+: :+:            :+:     :+:    :+: :+:    :+:
   +:+        +:+            +:+     +:+    +:+ +:+    +:+
  +#++:++#++ +#++:++#       +#+     +#+    +:+ +#++:++#+
        +#+ +#+            +#+     +#+    +#+ +#+
#+#    #+# #+#            #+#     #+#    #+# #+#
########  ##########     ###      ########  ###
*/
// Step 2
for (let i = 0; i < startPlayers; i++) {
    // 2.	Each player ... 
    players.push(new Player('Player ' + i))
    // 2. ...moves 16 pucks from their collection to their HP Stack.
    //     a.	Decrease this number by 1 for each player in the battle, to a maximum of 4.
    let startingPucks = 16 - startPlayers;
    fillStack(players[i].hpStack, startingPucks, { who: players[i] });

    // Step 3
    // 3.	Each player may move up to 5 pucks from their collection to their Prize Stack.
    fillStack(players[i].prizeStack, 2, { puck: new Puck({ name: 'Sandbag', owner: players[i] }) });

    // Step 4
    // This was already taken care of by making a list, but we can shuffle it here if we want.

    // Step 5
    // 5.	In the turn order, each player chooses a puck  from their collection to play to be their slammer.
    players[i].slammer = new Slammer(players[i]);

}

console.log(players);

// Step 6
// 6.	In the turn order, each player moves one puck from their HP Stack face-down onto the Arena Stack in the center of the Arena, until all players have ten pucks remaining in their HP Stack.
//     a.	The Stack Size becomes the number of pucks in the Arena Stack at this time.
//     b.	The current number of pucks in each player’s HP Stack is now their Max HP.
while (arenaStack.length < stackSize) {
    for (const player of players) {
        arenaStack.push(player.hpStack.shift());
    }
}



/*
      ::::::::  :::::::::      :::     :::::::::  :::    ::: ::::::::::: ::::::::   ::::::::
    :+:    :+: :+:    :+:   :+: :+:   :+:    :+: :+:    :+:     :+:    :+:    :+: :+:    :+:
   +:+        +:+    +:+  +:+   +:+  +:+    +:+ +:+    +:+     +:+    +:+        +:+
  :#:        +#++:++#:  +#++:++#++: +#++:++#+  +#++:++#++     +#+    +#+        +#++:++#++
 +#+   +#+# +#+    +#+ +#+     +#+ +#+        +#+    +#+     +#+    +#+               +#+
#+#    #+# #+#    #+# #+#     #+# #+#        #+#    #+#     #+#    #+#    #+# #+#    #+#
########  ###    ### ###     ### ###        ###    ### ########### ########   ########
*/


let ticks = 0;

let canwin = {
    w: 800,
    h: 600
}

let gameLoop;
let canvas;
let ctx;

window.onload = function () {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");


    //start game loop
    //Run the step() function every 16ms (60fps)
    gameLoop = setInterval(g_step, 16);
    draw();
}

function g_step() {
    canwin.w = window.innerWidth;
    // canwin.h = window.innerHeight;

    canvas.width = canwin.w;
    // canvas.height = canwin.h;

    //Draw game
    draw();
    ticks++;
}

function draw() {
    //Clear the canvas 
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canwin.w, canwin.h);

    for (const player of players) {
        player.draw();
    }
    ctx.fillStyle = "#000000";
    ctx.font = '12px consolas';
    for (let i = 0; i < arenaStack.length; i++) {
        const puck = arenaStack[i];
        let puckStart = {
            x: (canwin.w / 2) - 50,
            y: (canwin.h / 2) + 60 - (i * 16)
        }
        ctx.fillText(puck.name, puckStart.x, puckStart.y);
        ctx.fillRect(puckStart.x - 18, puckStart.y - 4 - (ticks % 16 / 2), 16, ticks % 16)
    }
}