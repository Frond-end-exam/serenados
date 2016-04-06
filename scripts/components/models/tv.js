define(['components/models/canvas', 'components/functions/randomX', 'components/functions/randomY'], function(Canvas, randomX, randomY) {
    "use strict";
    var tvLeft = new Image();
    tvLeft.src = "assets/images/moving-units/tv/tv.png";
    var tvRight = new Image();
    tvRight.src = "assets/images/moving-units/tv/tv.png";
    var tv = {
        x: randomX(),
        y: randomY(),
        radius: 15,
        side: 1,
        vy: 1.5,
        draw: function() {
            Canvas.ctx.beginPath();
            if (tv.side == 1) {
                Canvas.ctx.drawImage(tvLeft, this.x - 20, this.y-20);
            } else {
                Canvas.ctx.drawImage(tvRight, this.x - 25, this.y-20);
            }
            Canvas.ctx.fill();
            Canvas.ctx.closePath();
        }
    };
    return tv;
});
