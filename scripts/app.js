define(['components/models/hero', 'components/models/canvas', 'components/models/fallobject', 'components/functions/randomX', 'components/functions/randomY', 'components/functions/clearCanvas', 'components/functions/menuSound', 'components/functions/gameOverSound', 'components/functions/gameSound', 'components/models/menu', 'components/models/heart', 'components/functions/touchBraSound', 'components/functions/touchCactusSound', 'components/functions/gameOverMenu', 'components/functions/newFallingElement', 'components/functions/bonusLife', 'components/models/girls', 'components/models/canvasWidth', 'components/models/canvasHeight', 'components/models/score', 'components/models/lives', 'components/functions/changeDayNight', 'components/models/angryMan', 'components/models/tv', 'components/functions/newFallingTV', 'components/functions/checkCoords', 'components/functions/touchTvSound', 'components/functions/newFallingRugbyBall', 'components/models/rugbyBall', 'components/models/rugbyPlayer', 'components/functions/touchBallSound'], function(hero, Canvas, ball, randomX, randomY, clearCanvas, menuSound, gameOverSound, gameSound, menu, heart, touchBraSound, touchCactusSound, gameOverMenu, newFallingElement, bonusLife, girls, W, H, score, lives, changeDayNight, angryMan, tv, newFallingTV, checkCoords, touchTvSound, newFallingRugbyBall, rugbyBall, rugbyPlayer, touchBallSound) {
    "use strict";
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
            $(".livesCount").text(lives.count);
            $(".scoreCount").text(score.count);
            clearCanvas();
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
            if (score.count > 1 && score.count % 10 === 0) {
                bonusLife();
            }
            if (score.count > 20) {
                tv.y += tv.vy;
                tv.draw();
                angryMan.draw();
                checkCoords();
            }
            if (tv.y + tv.vy > H - tv.radius || tv.y + tv.vy < tv.radius) {
                newFallingTV();
                checkCoords();
            }
            if ((tv.y) > (hero.Y - hero.height) && (tv.x + tv.radius) > hero.X && (tv.x - tv.radius) < (hero.X + hero.width)) {
                lives.count--;
                newFallingTV();
                touchTvSound();
                checkCoords();
            }
            if (score.count > 50) {
                rugbyBall.y += rugbyBall.vy;
                rugbyBall.x += rugbyBall.vx;
                rugbyBall.draw();
                rugbyPlayer.draw();
                checkCoords();
            }
            if (rugbyBall.y + rugbyBall.vy > H - rugbyBall.radius || rugbyBall.y + rugbyBall.vy < rugbyBall.radius) {
                newFallingRugbyBall();
                checkCoords();
            }
            if ((rugbyBall.y) > (hero.Y - hero.height) && (rugbyBall.x + rugbyBall.radius) > hero.X && (rugbyBall.x - rugbyBall.radius) < (hero.X + hero.width)) {
                lives.count--;
                newFallingRugbyBall();
                checkCoords();
                touchBallSound();
            }
            if (lives.count === 0) {
                $(".livesCount").text(0);
                clearInterval(gameInterval);
                gameOverSound();
                gameOverMenu();
            }
        }, 10);
    });
});