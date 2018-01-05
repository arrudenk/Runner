//REQUEST ANIMATION FRAME -> for all browsers
window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000/60);
        };
})();

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var UP = 38;
var LEFT = 37;
var RIGHT = 39;
var DOWN = 40;
var SPD = 3;
var XPOS = 200;
var YPOS = 200;
var EVENTS = [38, 40, 37, 39];
var pressed = {};

function Rect(x, y, w, h, color)
{
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.color = color;
}

Rect.prototype.draw = function (c)
{
    c.fillStyle = this.color;
    c.fillRect(this.x , this.y, this.w, this.h);
};

Rect.prototype.vmove = function (c, xSPD, ySPD) {
    c.clearRect(this.x, this.y, this.w, this.h);
    this.y = this.y + ySPD;
    this.x = this.x + xSPD;
    rect.draw(c);
};

var rect = new Rect(10, 350, 25, 25, "#ff00b5");
rect.draw(ctx);

addEventListener("keydown", function(event) {
    pressed[event.keyCode] = true;
    if (event.keyCode == RIGHT)
        rect.vmove(ctx, SPD, 0);
    if (event.keyCode == LEFT)
        rect.vmove(ctx, -1 * SPD, 0);
    if (pressed[UP])
        rect.vmove(ctx, 0, -1 * SPD);
    if (event.keyCode == DOWN)
        rect.vmove(ctx, 0, SPD);
    console.log(pressed[38]);
    if (pressed[UP] && pressed[RIGHT])
        rect.vmove(ctx, SPD, -1 * SPD);
    if (pressed[UP] && pressed[LEFT])
        rect.vmove(ctx, -1 * SPD, -1 * SPD);
    if (pressed[DOWN] && pressed[RIGHT])
        rect.vmove(ctx, SPD, SPD);
    if (pressed[DOWN] && pressed[LEFT])
        rect.vmove(ctx, -1 * SPD, SPD);
});

addEventListener("keyup", function (ev) {
    delete pressed[ev.keyCode];
});

function movement() {

}
