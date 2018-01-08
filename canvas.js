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
var SPD = 5;
var XPOS = 200;
var YPOS = 200;
var pressed = {};


addEventListener("keydown", function(event) {
    pressed[event.keyCode] = true;
});

addEventListener("keyup", function (event) {
    delete pressed[event.keyCode];
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
        rect.colisRect();
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
    if ((this.y + this.h / 2) >= bigRect.y - this.h / 2 - SPD){
        this.y -= SPD;
    }
    if ((this.y) < 0){
        this.y += SPD;
    }
    if (this.x < 0) {
        this.x += SPD;
    }
    if (this.x + this.w / 2 > 640){
        this.x -= SPD;
    }
};

var rect = new Rect(0, 350, 30, 30, "#ff0100", context);
rect.draw();

var bigRect = new Rect(0, 416, 640, 64, "#007cff", context);
bigRect.draw();

var fpsTimer = setInterval(rect.events,1000/60);
// var colisTimer = setInterval(rect.colisRect, 1000/60);




