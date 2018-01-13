
var GAME = true;
var _ENGRAVITY;
var SCORE = 0;

function drawScore() {
    context.font = "16px Arial";
    context.fillStyle = "#000000";
    context.fillText("Score: "+SCORE, 8, 20);
}

function Engine(y) {
    //hello
}

// Engine.prototype.Gravity = function (y, move) {
//     if (y < 385 && !pressed[SPACE])
//         move(0, y /100 );
// };

var engine = new Engine();
