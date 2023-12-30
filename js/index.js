// Global canvas and game
let canvas;
let ctx;
let game;
let allID = 0;

window.onload = function () {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    game = new Game();

    // game.match = new DebugMatch();
    game.match = new Start_Screen();
    // game.match = new Match_ForEver();
    // game.match = new Match_ForHonor();

    //Run the step() function every 16ms (60fps)
    setInterval(game.step.bind(game), 16);
}





