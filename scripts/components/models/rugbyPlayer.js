define(['components/models/canvas', 'components/functions/randomX', 'components/functions/randomY', 'components/models/rugbyBall'], function(Canvas, randomX, randomY, rugbyBall) {
    "use strict";
    var rugbyPlayerImg = new Image();
    rugbyPlayerImg.src = "assets/images/moving-units/rugbyPlayer.png";
    var rugbyPlayer = {
        x: rugbyBall.x,
        y: rugbyBall.y,
        draw: function() {
            Canvas.ctx.beginPath();
            Canvas.ctx.drawImage(rugbyPlayerImg, this.x - 42, this.y - 28);
            Canvas.ctx.fill();
            Canvas.ctx.closePath();
        }
    };
    return rugbyPlayer;
});