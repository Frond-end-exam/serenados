define(['components/models/hero', 'components/models/canvas', 'components/models/fallobject', 'components/functions/randomX', 'components/functions/randomY', 'components/models/score', 'components/models/lives', 'components/functions/clearCanvas', 'components/functions/menuSound', 'components/functions/gameOverSound', 'components/functions/gameSound', 'components/models/menu'], function(hero, Canvas, ball, randomX, randomY, score, lives, clearCanvas, menuSound, gameOverSound, gameSound, menu) {
    "use strict";
    menu();
    menuSound();
    var W = Canvas.canvas.width,
        H = Canvas.canvas.height;

    function update() {
        var randomNumber = Math.floor((Math.random() * 2) + 1);
        clearCanvas();
        score.draw();
        lives.draw();
        ball.draw();
        hero.draw();
        ball.y += ball.vy;
        if (ball.y + ball.vy > H - ball.radius || ball.y + ball.vy < ball.radius) {
            ball.x = randomX();
            ball.y = randomY();
            if (randomNumber === 1) {
                ball.color = "red";
            } else {
                ball.color = "#0095DD";
            }
            ball.draw();
        }
        if ((ball.y) > (hero.Y - hero.height) && (ball.x + ball.radius) > hero.X && (ball.x - ball.radius) < (hero.X + hero.width) && ball.color == "red") {
            score.count++;
            ball.x = randomX();
            ball.y = randomY();
            if (randomNumber === 1) {
                ball.color = "red";
            } else {
                ball.color = "#0095DD";
            }
            ball.draw();
        }
        if ((ball.y) > (hero.Y - hero.height) && (ball.x + ball.radius) > hero.X && (ball.x - ball.radius) < (hero.X + hero.width) && ball.color == "#0095DD") {
            lives.count--;
            ball.x = randomX();
            ball.y = randomY();
            if (randomNumber === 1) {
                ball.color = "red";
            } else {
                ball.color = "#0095DD";
            }
            ball.draw();
        }
        if (lives.count === 0) {
            gameOverSound();
            clearInterval(gameInterval);
            setTimeout(function () {
                window.location.reload();
            }, 2000);
        }
    }

    var gameInterval = setInterval(function() {
        update();
    }, 10);
});