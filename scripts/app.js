define(['components/models/hero', 'components/models/canvas', 'components/models/fallobject', 'components/functions/randomX', 'components/functions/randomY', 'components/models/score', 'components/models/lives', 'components/functions/clearCanvas'], function(hero, Canvas, ball, randomX, randomY, score, lives, clearCanvas) {
    "use strict";
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
        if (lives === 0) {
            alert('Game Over');
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