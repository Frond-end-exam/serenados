define(['components/models/canvas', 'components/functions/randomX', 'components/functions/randomY'], function(Canvas, randomX, randomY) {
    "use strict";
    var tvImg = new Image();
    tvImg.src = "assets/images/moving-units/tv/tv.png";

    var tv = {
        x: randomX(),
        y: randomY(),
        radius: 15,
        vy: 1.5,
        draw: function() {
            Canvas.ctx.beginPath();
            Canvas.ctx.drawImage(tvImg, this.x - 20, this.y - 20);
            Canvas.ctx.fill();
            Canvas.ctx.closePath();
        }
    };
    return tv;
});