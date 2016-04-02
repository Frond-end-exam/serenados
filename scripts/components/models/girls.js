define(['components/models/canvas', 'components/functions/randomX', 'components/functions/randomY', 'components/models/fallobject'], function(Canvas, randomX, randomY, ball) {
    "use strict";
    var imgGirl = new Image();
    var imgGranny = new Image();
    imgGranny.src = "design/Moving units/img-granny.png";
    imgGirl.src = "design/Moving units/img-girl.png";
    var girls = {
        x: ball.x,
        y: ball.y,
        color: "red",
        draw: function() {
            Canvas.ctx.beginPath();
            if (ball.color == "red") {
                Canvas.ctx.drawImage(imgGirl, this.x-25, this.y-50);
            } else {
                Canvas.ctx.drawImage(imgGranny, this.x-40, this.y-40);
            }
            Canvas.ctx.fill();
            Canvas.ctx.closePath();
        }
    };
    return girls;
});