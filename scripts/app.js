
define(['components/models/hero', 'components/models/canvas', 'components/models/fallobject', 'components/functions/randomX', 'components/functions/randomY', 'components/functions/clearCanvas', 'components/functions/menuSound', 'components/functions/gameOverSound', 'components/functions/gameSound', 'components/models/menu', 'components/models/heart', 'components/functions/touchBraSound', 'components/functions/touchCactusSound', 'components/functions/gameOverMenu', 'components/functions/newFallingElement', 'components/functions/bonusLife', 'components/models/girls', 'components/models/canvasWidth', 'components/models/canvasHeight', 'components/models/score', 'components/models/lives'], function(hero, Canvas, ball, randomX, randomY, clearCanvas, menuSound, gameOverSound, gameSound, menu, heart, touchBraSound, touchCactusSound, gameOverMenu, newFallingElement, bonusLife, girls, W, H, score, lives) {

    "use strict";
    menu();
    menuSound();



    $('#start').click(function() {
        var score = 0,
            lives = 3;

        $('#menu').css('display', 'none');
        $('.game').css('display', 'block');
        gameSound();
        var gameInterval = setInterval(function update() {
      $(".lives3").text(lives);
      $(".scoreCount").text(score);
        var randomNumber = Math.floor((Math.random() * 2) + 1);


        clearCanvas();
        girls.draw();
        ball.draw();
        hero.draw();
        ball.y += ball.vy;
        if (ball.y + ball.vy > H - ball.radius || ball.y + ball.vy < ball.radius) {
            newFallingElement();
        }
        if ((ball.y) > (hero.Y - hero.height) && (ball.x + ball.radius) > hero.X && (ball.x - ball.radius) < (hero.X + hero.width) && ball.color == "red") {
            score++;


            newFallingElement();
            touchBraSound();
        }
        if ((ball.y) > (hero.Y - hero.height) && (ball.x + ball.radius) > hero.X && (ball.x - ball.radius) < (hero.X + hero.width) && ball.color == "#0095DD") {
            lives--;
            newFallingElement();
            touchCactusSound();
        }
        if (score > 1 && score % 10 === 0) {
            bonusLife();
        }
        if (lives === 0) {
            clearInterval(gameInterval);
            setTimeout(function() {
                window.location.reload();
            }, 2000);
            gameOverSound();
            gameOverMenu();
          }

    }, 10);

});


});
