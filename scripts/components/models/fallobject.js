define(['components/models/canvas', 'components/functions/randomX', 'components/functions/randomY'], function(Canvas, randomX, randomY) {
    "use strict";
    var imgBra = new Image();
    imgBra.src = "design/Moving units/img-bra.png";
    var imgCactus = new Image();
    imgCactus.src = "design/Moving units/img-cactus.png";
    var ball = {
        x: randomX(),
        y: randomY(),
        radius: 15,
        color: "#0095DD",
        vy: 1,
        draw: function() {
            Canvas.ctx.beginPath();
            //Canvas.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            if (ball.color == "red") {
                Canvas.ctx.drawImage(imgBra, this.x-20, this.y);
            } else {
                Canvas.ctx.drawImage(imgCactus, this.x-20, this.y);
            }
            Canvas.ctx.fillStyle = this.color;
            Canvas.ctx.fill();
            Canvas.ctx.closePath();
        }
    };
    return ball;
});