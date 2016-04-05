define(['components/models/canvas'], function(Canvas) {
    "use strict";
    var lives = {
        count: 3,
        draw: function() {
            Canvas.ctx.font = "16px Arial";
            Canvas.ctx.fillStyle = "#0095DD";
            Canvas.ctx.fillText("Lives: " + this.count, Canvas.canvas.width - 60, 20);
        }
    };
    return lives;
});