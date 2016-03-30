define(['components/models/canvas', 'components/functions/randomX', 'components/functions/randomY'], function(Canvas, randomX, randomY) {
    "use strict";
    var ball = {
        x: randomX(),
        y: randomY(),
        radius: 15,
        color: "#0095DD",
        vy: 1,
        draw: function() {
            Canvas.ctx.beginPath();
            Canvas.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            Canvas.ctx.fillStyle = this.color;
            Canvas.ctx.fill();
            Canvas.ctx.closePath();
        }
    };
    return ball;
});