

function Feeld(x, y, width, height, texture, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.texture = texture;
    this.ctx = ctx;
    this.speed = 4;
}

var feeld = new Player(0, 416, 1280, 64, "https://goo.gl/Ued6Qz", context, "image");

Feeld.prototype.draw = function () {
    this.ctx.drawImage(this.texture, this.x, this.y, this.width, this.height);
    this.x += -this.speed;
};

Feeld.prototype.movement = function () {
  // if (this.x + this.width > 0) {

      console.log("alo")
  // }
      // else {
  //     this.x = 0;
  // }
};

// function Reload() {
//     requestAnimationFrame(Reload);
//     bigRect.draw();
// }