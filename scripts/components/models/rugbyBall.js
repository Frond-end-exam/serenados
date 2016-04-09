define(['components/models/canvas', 'components/functions/randomX', 'components/functions/randomY'], function(Canvas, randomX, randomY) {
    "use strict";
    var rugbyBallImg = new Image();
    rugbyBallImg.src = "assets/images/moving-units/rugbyBall.png";
    var rugbyBall = {
        x: randomX(),
        y: randomY(),
        radius: 15,
        vy: 1.8,
        vx: 0.2,
        draw: function() {
            Canvas.ctx.beginPath();
            Canvas.ctx.drawImage(rugbyBallImg, this.x - 20, this.y - 20);
            Canvas.ctx.fill();
            Canvas.ctx.closePath();
        }
    };
    return rugbyBall;
});