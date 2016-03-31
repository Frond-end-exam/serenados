define(['components/models/canvas'], function(Canvas) {
    "use strict";
    var rightPressed = false,
        leftPressed = false;
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

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
    var img = new Image();
    img.src = "design/Moving units/img-man.png";
    var hero = {
        height: 30,
        width: 40,
        X: (Canvas.canvas.width - 30) / 2,
        Y: Canvas.canvas.height - 140,
        draw: function() {
            Canvas.ctx.beginPath();
            Canvas.ctx.drawImage(img, this.X, this.Y);
            //Canvas.ctx.fillStyle = "red";
            Canvas.ctx.fill();
            Canvas.ctx.closePath();
            if (rightPressed && this.X < Canvas.canvas.width - this.width) {
                this.X += 2;
            } else if (leftPressed && this.X > 0 - this.width) {
                this.X -= 2;
            }
        }
    };
    return hero;
});