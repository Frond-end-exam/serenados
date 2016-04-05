define(['components/models/canvas'], function(Canvas) {
    "use strict";
    var score = {
        count: 0,
        draw: function() {
            Canvas.ctx.font = "16px Arial";
            Canvas.ctx.fillStyle = "#0095DD";
            Canvas.ctx.fillText("Score: " + this.count, +8, 20);
        }
    };
    return score;
});