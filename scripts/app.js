define(['components/models/hero', 'components/models/canvas', 'components/models/fallobject', 'components/models/girls', 'components/functions/randomX', 'components/functions/randomY', 'components/models/score', 'components/models/lives', 'components/functions/clearCanvas', '../menuSound', '../gameOverSound'], function(hero, Canvas, ball, girls, randomX, randomY, score, lives, clearCanvas, menuSound, gameOverSound) {
    "use strict";
    var W = Canvas.canvas.width,
        H = Canvas.canvas.height;

    function update() {
        var randomNumber = Math.floor((Math.random() * 2) + 1);
        clearCanvas();
        score.draw();
        lives.draw();
        girls.draw();
        ball.draw();
        hero.draw();
        ball.y += ball.vy;
        if (ball.y + ball.vy > H - ball.radius || ball.y + ball.vy < ball.radius) {
            ball.x = randomX();
            ball.y = randomY();
            girls.x = ball.x;
            girls.y = ball.y;
            if (randomNumber === 1) {
                ball.color = "red";
            } else {
                ball.color = "#0095DD";
            }
            girls.draw();
            ball.draw();
        }
        if ((ball.y) > (hero.Y - hero.height) && (ball.x + ball.radius) > hero.X && (ball.x - ball.radius) < (hero.X + hero.width) && ball.color == "red") {
            score.count++;
            ball.x = randomX();
            ball.y = randomY();
            girls.x = ball.x;
            girls.y = ball.y;
            if (randomNumber === 1) {
                ball.color = "red";
            } else {
                ball.color = "#0095DD";
            }
            girls.draw();
            ball.draw();
        }
        if ((ball.y) > (hero.Y - hero.height) && (ball.x + ball.radius) > hero.X && (ball.x - ball.radius) < (hero.X + hero.width) && ball.color == "#0095DD") {
            lives.count--;
            ball.x = randomX();
            ball.y = randomY();
            girls.x = ball.x;
            girls.y = ball.y;
            if (randomNumber === 1) {
                ball.color = "red";
            } else {
                ball.color = "#0095DD";
            }
            girls.draw();
            ball.draw();
        }
        if (lives.count === 0) {
            alert('Game Over');
            gameOverSound();
            // document.location.reload();
            clearInterval(update);
        }
    }
    document.getElementById('start').onclick = function() {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('canvas').style.display = 'block';
        setInterval(update, 10);
    };
    document.getElementById('buttonDisc').onclick = function() {
        document.getElementById('disc').style.display = 'block';
    };
});