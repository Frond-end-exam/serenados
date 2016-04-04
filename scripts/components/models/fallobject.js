define(['components/models/canvas', 'components/functions/randomX', 'components/functions/randomY'], function(Canvas, randomX, randomY) {
    "use strict";
    var imgBra = new Image();
    imgBra.src = "assets/images/moving-units/img-bra.png";
    var imgCactus = new Image();
    imgCactus.src = "assets/images/moving-units/img-cactus.png";
    var ball = {
        x: randomX(),
        y: randomY(),
        radius: 15,
        color: "#0095DD",
        vy: 2,
        draw: function() {
            Canvas.ctx.beginPath();
            if (ball.color == "red") {
                Canvas.ctx.drawImage(imgBra, this.x - 20, this.y-20);
            } else {
                Canvas.ctx.drawImage(imgCactus, this.x - 25, this.y-20);
            }
            Canvas.ctx.fillStyle = this.color;
            Canvas.ctx.fill();
            Canvas.ctx.closePath();
        }
    };
    return ball;
});
