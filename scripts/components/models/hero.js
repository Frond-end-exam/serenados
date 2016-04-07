define(['components/models/canvas'], function(Canvas) {
    "use strict";
    var rightPressed = false,
        leftPressed = false;
    $(document).keydown(keyDownHandler);
    $(document).keyup(keyUpHandler);

    function keyDownHandler(e) {
        if (e.keyCode == 39) {
            rightPressed = true;
        } else if (e.keyCode == 37) {
            leftPressed = true;
        }
    }

    function keyUpHandler(e) {
        if (e.keyCode == 39) {
            rightPressed = false;
        } else if (e.keyCode == 37) {
            leftPressed = false;
        }
    }
    var imgLeft = new Image();
    var imgLeft1 = new Image();
    var imgRight = new Image();
    var imgRight1 = new Image();
    var imgLeft2 = new Image();
    var imgLeft3 = new Image();
    var imgLeft4 = new Image();
    imgLeft.src = "assets/images/moving-units/img-man-right.png";
    imgRight.src = "assets/images/moving-units/img-man-left.png";
    imgLeft1.src = "assets/images/moving-units/moving man/img-man-left1.png";
    imgLeft2.src = "assets/images/moving-units/moving man/img-man-left2.png";
    imgLeft3.src = "assets/images/moving-units/moving man/img-man-left3.png";
    imgLeft4.src = "assets/images/moving-units/moving man/img-man-left4.png";
    imgRight1.src = "assets/images/moving-units/moving man/img-man-right4.png ";
    var hero = {
        height: 30,
        width: 70,
        X: (Canvas.canvas.width - 30) / 2,
        Y: Canvas.canvas.height - 140,
        draw: function() {
            Canvas.ctx.beginPath();
            if (rightPressed === true) {
                Canvas.ctx.drawImage(imgRight, this.X, this.Y);
                if (rightPressed === true) {
                    Canvas.ctx.drawImage(imgRight1, this.X, this.Y);
                }
            } else {
                Canvas.ctx.drawImage(imgLeft, this.X, this.Y);
                if (leftPressed === true) {
                    Canvas.ctx.drawImage(imgLeft4, this.X, this.Y);
                }
            }
            Canvas.ctx.fill();
            Canvas.ctx.closePath();
            if (rightPressed && this.X < Canvas.canvas.width - this.width) {
                this.X += 2;
            } else if (leftPressed && this.X > 0) {
                this.X -= 2;
            }
        }
    };
    return hero;
});