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
    //-- ANIMATION --
    var imgMan = new Image();
    imgMan.src = "assets/images/moving-units/img-man.png";

    function sprite(options) {
        var that = {};
        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
        that.render = function() {
            // Draw the animation
            that.context.drawImage(that.image, 0, 0, that.width, that.height, 0, 0, that.width, that.height);
        };
        return that;
    }
    draImgMan = sprite({
        width: 100,
        height: 100,
        image: imgMan
    });
    //--------------------------
    var imgLeft = new Image();
    var imgRight = new Image();
    imgLeft.src = "assets/images/moving-units/img-man-right.png";
    imgRight.src = "assets/images/moving-units/img-man-left.png";
    var hero = {
        height: 30,
        width: 70,
        X: (Canvas.canvas.width - 30) / 2,
        Y: Canvas.canvas.height - 140,
        draw: function() {
            Canvas.ctx.beginPath();
            Canvas.ctx.drawImage(imgRight, this.X, this.Y);
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