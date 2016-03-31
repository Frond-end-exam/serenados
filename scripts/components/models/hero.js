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
    var hero = {
        height: 30,
        width: 40,
        X: (Canvas.canvas.width - 30) / 2,
        Y: Canvas.canvas.height - 40,
        draw: function() {
            Canvas.ctx.beginPath();
            Canvas.ctx.rect(this.X, this.Y, this.width, this.height);
            Canvas.ctx.fillStyle = "red";
            Canvas.ctx.fill();
            Canvas.ctx.closePath();
            if (rightPressed && this.X < Canvas.canvas.width - this.width / 2) {
                this.X += 1.8;
            } else if (leftPressed && this.X > 0 - this.width / 2) {
                this.X -= 1.8;
            }
        }
    };
    return hero;
});