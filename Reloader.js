requestAnimationFrame(function Reload() {
    if (GAME){
        context.fillStyle = "#b6f5ff";
        context.fillRect(0, 0, __VASWIDTH, __VASHEIGHT);
        drawScore();

        player.colisRect();
        player.draw();
        enemy.draw();
        enemy.movement();

        player.events();
        player.movement();
        enemy.hit(player.x, player.y);
        bigRect.draw();
        // player._Gravity();
        requestAnimationFrame(Reload);
    }else {
    }
});

window.addEventListener("keydown", function (event) {
    pressed[event.keyCode] = true;
});

window.addEventListener("keyup", function (event) {
    delete pressed[event.keyCode];
});

