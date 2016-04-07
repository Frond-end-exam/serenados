define(['components/models/hero', 'components/models/canvas', 'components/models/fallobject', 'components/functions/randomX', 'components/functions/randomY', 'components/functions/clearCanvas', 'components/functions/menuSound', 'components/functions/gameOverSound', 'components/functions/gameSound', 'components/models/menu', 'components/models/heart', 'components/functions/touchBraSound', 'components/functions/touchCactusSound', 'components/functions/gameOverMenu', 'components/functions/newFallingElement', 'components/functions/bonusLife', 'components/models/girls', 'components/models/canvasWidth', 'components/models/canvasHeight', 'components/models/score', 'components/models/lives', 'components/functions/changeDayNight', 'components/models/angryMan', 'components/models/tv', 'components/functions/newFallingTV', 'components/functions/checkCoords'], function(hero, Canvas, ball, randomX, randomY, clearCanvas, menuSound, gameOverSound, gameSound, menu, heart, touchBraSound, touchCactusSound, gameOverMenu, newFallingElement, bonusLife, girls, W, H, score, lives, changeDayNight, angryMan, tv, newFallingTV, checkCoords) {
    "use strict";
    console.log(changeDayNight);
    menu();
    menuSound();
    $('#start').click(function() {
        $('#menu').css('display', 'none');
        $('.game').css('display', 'block');
        gameSound();
        var time = 1;
        var gameInterval = setInterval(function update() {
            time++;
            if (time % 1000 === 0) {
                changeDayNight();
            }
            $(".lives3").text(lives.count);
            $(".scoreCount").text(score.count);
            clearCanvas();
            girls.draw();
            ball.draw();
            hero.draw();
            tv.draw();
            checkCoords();
            angryMan.draw();
            tv.y += tv.vy;
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
            if (score.count > 1 && score.count % 10 === 0) {
                bonusLife();
            }
            if (tv.y + tv.vy > H - tv.radius || tv.y + tv.vy < tv.radius) {
                newFallingTV();
                checkCoords();
            }
            if ((tv.y) > (hero.Y - hero.height) && (tv.x + tv.radius) > hero.X && (tv.x - tv.radius) < (hero.X + hero.width)) {
                lives.count--;
                newFallingTV();
                checkCoords();
            }
            if (lives.count === 0) {
                $(".lives3").text(0);
                clearInterval(gameInterval);
                gameOverSound();
                gameOverMenu();
            }
        }, 10);
    });
});