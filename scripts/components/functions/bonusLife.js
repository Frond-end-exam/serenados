define(['components/models/canvas', 'components/models/heart', 'components/models/hero', 'components/models/score', 'components/models/lives','components/models/canvasHeight', 'components/functions/randomX', 'components/functions/randomY'], function(Canvas, heart, hero, score, lives, H, randomX, randomY) {
    "use strict";

    function bonusLife() {
        heart.draw();
        heart.y += heart.vy;
        if (heart.y + heart.vy > H - heart.radius || heart.y + heart.vy < heart.radius) {
            score.count++;
            heart.x = randomX();
            heart.y = randomY();
        }
        if ((heart.y) > (hero.Y - hero.height) && (heart.x + heart.radius) > hero.X && (heart.x - heart.radius) < (hero.X + hero.width)) {
            lives.count++;
            score.count++;
            heart.x = randomX();
            heart.y = randomY();
        }
    }
    return bonusLife;
});