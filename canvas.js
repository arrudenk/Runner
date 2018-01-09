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
var SPACE = 32;
var SPD = 2;
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
   this.gravitySpeed = 0;
   this.gravity = 0.05;
}

Rect.prototype.draw = function ()
{
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x , this.y, this.w, this.h);
};

Rect.prototype.vmove = function (xSPD, ySPD) {
    this.ctx.clearRect(this.x, this.y, this.w, this.h); //bad bad function need something better
    rect.colisRect();
    this.y = this.y + ySPD;
    this.x = this.x + xSPD;
};

Rect.prototype._PlayerJump = function (ySPD) {
    if (pressed[SPACE]) {
        this.y = this.y - SPD * 2;
    }
};

Rect.prototype._Gravity = function () {
    if (!pressed[UP])
        rect.vmove(0, this.gravitySpeed += this.gravity)
};

Rect.prototype.events = function () {
    // if (pressed[SPACE])
    //     rect._PlayerJump(SPD * 2);
    if (pressed[RIGHT])
        rect.vmove(SPD, 0);
    if (pressed[LEFT])
        rect.vmove(-SPD, 0);
    if (pressed[UP])
        rect.vmove(0, -SPD);
    if (pressed[DOWN])
        rect.vmove(0, SPD);
    if (pressed[UP] && pressed[RIGHT])
        rect.vmove(SPD / 2, -SPD / 2);
    if (pressed[UP] && pressed[LEFT])
        rect.vmove(-SPD / 2, -SPD / 2);
    if (pressed[DOWN] && pressed[RIGHT])
        rect.vmove(SPD / 2, SPD / 2);
    if (pressed[DOWN] && pressed[LEFT])
        rect.vmove(-1 * SPD / 2, SPD / 2);
};
// formal colision for more comfortable testing
Rect.prototype.colisRect = function () {
    if ((this.y + this.h + SPD) > bigRect.y){
        this.y = bigRect.y - this.h;
    }
    if ((this.y) < 0){
        this.y = 0;
    }
    if (this.x < 0) {
        this.x = 0;
    }
    if (this.x + this.w + SPD > 640){
        this.x = 640 - this.w;
    }
};

var rect = new Rect(0, 350, 30, 30, "#ff0100", context);
rect.draw();

var bigRect = new Rect(0, 416, 640, 64, "#007cff", context);
bigRect.draw();

function Reload() {
    requestAnimationFrame(Reload);

    //fillStyle("#ffffff");
    //context.fillRect(0, 0, 640, 480);


    //rect._Gravity();
    rect.events();
    //rect.colisRect();
    rect.draw();
    bigRect.draw();


}

Reload();

// <canvas id="myCanvas" width="640" height="480"
// style="border:1px solid #000000;"></canvas>

