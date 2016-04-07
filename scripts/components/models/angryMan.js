define(['components/models/canvas', 'components/functions/randomX', 'components/functions/randomY', 'components/models/tv'], function(Canvas, randomX, randomY, tv) {
    "use strict";
    var angryManImg = new Image();
    angryManImg.src = "assets/images/moving-units/tv/angryMan.png";
    var angryMan = {
        x: tv.x,
        y: tv.y,
        draw: function() {
            Canvas.ctx.beginPath();
            Canvas.ctx.drawImage(angryManImg, this.x - 42, this.y - 30);
            Canvas.ctx.fill();
            Canvas.ctx.closePath();
        }
    };
    return angryMan;
});