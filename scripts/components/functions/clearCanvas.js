define(['components/models/canvas'], function(Canvas) {
    "use strict";

    function clearCanvas() {
        Canvas.ctx.clearRect(0, 0, Canvas.canvas.width, Canvas.canvas.height);
    }
    return clearCanvas;
});