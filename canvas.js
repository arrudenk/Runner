//REQUEST ANIMATION FRAME -> for all browsers
window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000/60);
        };
})();

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var UP = 38;
var LEFT = 37;
var RIGHT = 39;
var DOWN = 40;
var SPD = 1;
var XPOS = 200;
var YPOS = 200;
var EVENTS = [38, 40, 37, 39];
var pressed = {};


addEventListener("keydown", function(event) {
    pressed[event.keyCode] = true;
    // if (pressed[RIGHT])
    //     rect.vmove(context, SPD, 0);
    // if (pressed[LEFT])
    //     rect.vmove(context, -1 * SPD, 0);
    // if (pressed[UP])
    //     rect.vmove(context, 0, -1 * SPD);
    // if (pressed[DOWN])
    //     rect.vmove(context, 0, SPD);
    // if (pressed[UP] && pressed[RIGHT])
    //     rect.vmove(context, SPD, -1 * SPD);
    // if (pressed[UP] && pressed[LEFT])
    //     rect.vmove(context, -1 * SPD, -1 * SPD);
    // if (pressed[DOWN] && pressed[RIGHT])
    //     rect.vmove(context, SPD, SPD);
    // if (pressed[DOWN] && pressed[LEFT])
    //     rect.vmove(context, -1 * SPD, SPD);
});

addEventListener("keyup", function (ev) {
    delete pressed[ev.keyCode];
});

function Rect(x, y, w, h, color, ctx)
{
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.color = color;
   this.ctx = ctx;
}

Rect.prototype.draw = function ()
{

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x , this.y, this.w, this.h);
};

Rect.prototype.vmove = function (xSPD, ySPD) {
    this.ctx.clearRect(this.x, this.y, this.w, this.h);
        this.y = this.y + ySPD;
        this.x = this.x + xSPD;
        rect.draw();
};

Rect.prototype.events = function () {
    if (pressed[RIGHT])
        rect.vmove(SPD, 0);
    if (pressed[LEFT])
        rect.vmove(-1 * SPD, 0);
    if (pressed[UP])
        rect.vmove(0, -1 * SPD);
    if (pressed[DOWN])
        rect.vmove(0, SPD);
    if (pressed[UP] && pressed[RIGHT])
        rect.vmove(SPD, -1 * SPD);
    if (pressed[UP] && pressed[LEFT])
        rect.vmove(-1 * SPD, -1 * SPD);
    if (pressed[DOWN] && pressed[RIGHT])
        rect.vmove(SPD, SPD);
    if (pressed[DOWN] && pressed[LEFT])
        rect.vmove(-1 * SPD, SPD);
};

Rect.prototype.colisRect = function () {
    if ((this.y + this.h / 2) >= 415) {

    }
};

var rect = new Rect(10, 350, 25, 25, "#010101", context);
rect.draw();

var bigRect = new Rect(0, 415, 640, 65, "#620001", context);
bigRect.draw();

context.beginPath();
context.moveTo(0, 415);
context.lineTo(640,415);
context.stroke();


var fpsTimer = setInterval(rect.events,1000/60);




