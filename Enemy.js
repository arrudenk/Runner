
function Enemy(x, y, w, h, color, ctx, type) {
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
    this.speed = 4;
}

var enemy =  new Enemy(600, 385, 30, 30, "Enemy.png", context, "image");

Enemy.prototype.draw = function () {
    if (this.type === "image") {
        this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    } else {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
};

Enemy.prototype.movement = function () {
    if (this.x > 0){
        this.x -= this.speed;
    }else {
        this.x = 650;
        SCORE++;
    }
};

Enemy.prototype.hit = function (playerX, playerY) {
    if (playerX === this.x && playerY >= this.y) {
        alert("Over! Your score: " + SCORE);
        GAME = false;
    }
    if ((playerX + player.w - this.speed >= this.x && playerX + player.w - this.speed <= this.x + this.w)
        && playerY + player.h + 3 >= this.y) {
        alert("Over! Your score: " + SCORE);
        GAME = false;
    }
    // }else if (playerX == this.x)
};
