define(['components/models/canvas', 'components/functions/randomX', 'components/functions/randomY', 'components/models/fallobject'], function(Canvas, randomX, randomY, ball) {
    "use strict";
    var angryManLeft = new Image();
    var angryManRight = new Image();
    angryManLeft.src = "assets/images/moving-units/img-granny.png";
    angryManRight.src = "assets/images//moving-units/img-girl.png";
    var angryMan = {
        x: ball.x,
        y: ball.y,
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
    return angryMan;
});