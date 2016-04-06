define(['components/models/canvas', 'components/functions/randomX', 'components/functions/randomY'], function(Canvas, randomX, randomY) {
    "use strict";
    var imgHeart = new Image();
    imgHeart.src = "assets/images/moving-units/img-heart.png";
    var heart = {
        x: randomX(),
        y: randomY(),
        radius: 15,
        vy: 2,
        draw: function() {
                Canvas.ctx.beginPath();
                Canvas.ctx.drawImage(imgHeart, this.x, this.y);
                Canvas.ctx.fill();
                Canvas.ctx.closePath();
        }
    };
    return heart;
});