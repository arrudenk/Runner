var pressed = {};

function KeyCod() {
    this.Up = 38;
    this.Down = 40;
    this.Left = 37;
    this.Right = 39;
    this.Space = 32;
}

var keycod = new KeyCod();

function Player(x, y, w, h, color, ctx, type)
{
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.ctx = ctx;
    this.speed = 2;
}

var player = new Player(320, 350, 30, 30, "Textures/Player.png", context, "image");

Player.prototype.draw = function () {
    if (this.type == "image") {
        this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    } else {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
};

Player.prototype.vmove = function (x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
};

Player.prototype._PlayerJump = function () {
    player.vmove(0, -this.speed * 2);

};

Player.prototype._Gravity = function () {
    if (this.y < 385 && !pressed[keycod.Space])
        player.vmove(0, this.y /100 );

};

Player.prototype.events = function () {
    if (pressed[keycod.Space])
        player._PlayerJump(this.speed + 1);
    if (pressed[keycod.Right])
        player.vmove(this.speed, 0);
    if (pressed[keycod.Left])
        player.vmove(-this.speed, 0);
    // if (pressed[UP])
    //     rect.vmove(0, -SPD);
    // if (pressed[DOWN])
    //     rect.vmove(0, SPD);
    // if (pressed[UP] && pressed[RIGHT])
    //     rect.vmove(SPD / 2, -SPD / 2);
    // if (pressed[UP] && pressed[LEFT])
    //     rect.vmove(-SPD / 2, -SPD / 2);
    // if (pressed[DOWN] && pressed[RIGHT])
    //     rect.vmove(SPD / 2, SPD / 2);
    // if (pressed[DOWN] && pressed[LEFT])
    //     rect.vmove(-1 * SPD / 2, SPD / 2);
};
// formal colision for more comfortable testing

Player.prototype.colisRect = function () {
    if ((this.y + this.h + this.speed) > bigRect.y){
        this.y = bigRect.y - this.h;
    }
    if ((this.y) < 0){
        this.y = 0;
    }
    if (this.x < 0) {
        this.x = 0;
    }
    if (this.x + this.w + this.speed > 640){
        this.x = 640 - this.w;
    }
};


