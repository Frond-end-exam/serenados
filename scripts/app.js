define(['components/models/hero', 'components/models/canvas', 'components/models/fallobject', 'components/functions/randomX', 'components/functions/randomY', 'components/models/score', 'components/models/lives', 'components/functions/clearCanvas', 'components/functions/menuSound', 'components/functions/gameOverSound', 'components/functions/gameSound', 'components/models/menu', 'components/functions/touchBraSound', 'components/functions/touchCactusSound', 'components/functions/gameOverMenu','components/functions/newFallingElement', 'components/models/girls'], function(hero, Canvas, ball, randomX, randomY, score, lives, clearCanvas, menuSound, gameOverSound, gameSound, menu, touchBraSound, touchCactusSound, gameOverMenu, newFallingElement, girls) {
    "use strict";
    // gameOverMenu();
    menu();
    menuSound();

    var W = Canvas.canvas.width,
        H = Canvas.canvas.height;

    function update() {
        clearCanvas();
        score.draw();
        lives.draw();
        girls.draw();
        ball.draw();
        hero.draw();
        ball.y += ball.vy;

        if (ball.y + ball.vy > H - ball.radius || ball.y + ball.vy < ball.radius) {
            newFallingElement();
        }

        if ((ball.y) > (hero.Y - hero.height) && (ball.x + ball.radius) > hero.X && (ball.x - ball.radius) < (hero.X + hero.width) && ball.color == "red") {
            score.count++;
            newFallingElement();
            touchBraSound();
        }

        if ((ball.y) > (hero.Y - hero.height) && (ball.x + ball.radius) > hero.X && (ball.x - ball.radius) < (hero.X + hero.width) && ball.color == "#0095DD") {
            lives.count--;
            newFallingElement();
            touchCactusSound();
        }

        if (lives.count === 0) {
            clearInterval(gameInterval);
            gameOverSound();
            gameOverMenu();
        }
    }

    var gameInterval = setInterval(function() {
        update();
    }, 10);
});
