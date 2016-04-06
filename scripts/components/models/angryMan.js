define(['components/models/canvas', 'components/functions/randomX', 'components/functions/randomY', 'components/models/tv'], function(Canvas, randomX, randomY, tv) {
    "use strict";
    var angryManLeft = new Image();
    var angryManRight = new Image();
    angryManLeft.src = "assets/images/moving-units/tv/angryManWithoutTVLeft.png";
    angryManRight.src = "assets/images//moving-units/tv/angryManWithoutTVRight.png";
    var angryMan = {
        x: tv.x,
        y: tv.y,
        draw: function() {
            Canvas.ctx.beginPath();
            if (tv.side == 1) {
                Canvas.ctx.drawImage(angryManLeft, this.x-25, this.y-50);
            } else {
                Canvas.ctx.drawImage(angryManRight, this.x-40, this.y-40);
            }
            Canvas.ctx.fill();
            Canvas.ctx.closePath();
        }
    };
    return angryMan;
});