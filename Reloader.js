requestAnimationFrame(function Reload() {
    if (GAME){
        addEventListener("keydown", function (event) {
            pressed[event.keyCode] = true;
        });

        addEventListener("keyup", function (event) {
            delete pressed[event.keyCode];
        });
        context.fillStyle = "#b6f5ff";
        context.fillRect(0, 0, __VASWIDTH, __VASHEIGHT);
        drawScore();

        player.colisRect();
        player.draw();
        enemy.draw();
        enemy.movement();

        player.events();
        enemy.hit(player.x, player.y);
        bigRect.draw();
        player._Gravity();
        requestAnimationFrame(Reload);
    }else {
    }
});
