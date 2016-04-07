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
    /*
    var coin,
        coinImage,
        canvas;                 

    
      coin.update();
      coin.render();
    
    
    function sprite (options) {
    
        
        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
        
        
          // Draw the animation
          that.context.drawImage(
            that.image,
            frameIndex * that.width / numberOfFrames,
            0,
            that.width / numberOfFrames,
            that.height,
            0,
            0,
            that.width / numberOfFrames,
            that.height);
        }
        
        return that;
    }
    
    // Create sprite sheet
    
    coinImage = new Image();    
    
    // Create sprite
    coin = sprite({
        context: canvas.getContext("2d"),
        width: 1000,
        height: 100,
        image: coinImage,
        numberOfFrames: 10,
        ticksPerFrame: 4
    });
    
    // Load sprite sheet
    coinImage.addEventListener("load", gameLoop);
    coinImage.src = "assets/images/moving-units/moving man/img-man.png";
*/
    //--------------------------
    var imgLeft = new Image();
    var imgRight = new Image();
    imgLeft.src = "assets/images/moving-units/img-man-right.png";
    imgRight.src = "assets/images/moving-units/img-man-right.png";
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
                this.X += 3;
            } else if (leftPressed && this.X > 0) {
                this.X -= 3;
            }
        }
    };
    return hero;
});