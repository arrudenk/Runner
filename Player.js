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
    if (type === "image") {
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
    this.jumping = true;
    this.x_velocity = 0;
    this.y_velocity = 0;
}

var player = new Player(320, 350, 30, 30, "Textures/Player.png", context, "image");

Player.prototype.draw = function () {
    if (this.type === "image") {
        this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    } else {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
};

Player.prototype.movement = function (x, y) {
    this.y_velocity += 1.5;
    this.y += this.y_velocity;
    this.x += this.x_velocity;
    this.x_velocity *= 0.9;
    this.y_velocity *= 0.9;

    // this.x = this.x + x;
    // this.y = this.y + y;
};

Player.prototype._PlayerJump = function () {
    player.movement(0, -100);

};

Player.prototype._Gravity = function () {
    if (this.y < 385 && !pressed[keycod.Space])
        player.movement(0, this.y /100);

};

Player.prototype.events = function () {
    if (pressed[keycod.Space] && this.jumping == false) {
        this.y_velocity -= 30;
        this.jumping = true;
        console.log("up");
    }
    if (pressed[keycod.Right])
        this.x_velocity += 1.5;
    if (pressed[keycod.Left])
        this.x_velocity -= 1.5;
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
    if ((this.y + this.h) > bigRect.y){
        this.y = bigRect.y - this.h;
        this.y_velocity = 0;
        this.jumping = false;
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


