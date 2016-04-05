define(['components/models/canvas'], function(Canvas) {
    "use strict";
    var y;
    var b1 = Canvas.canvas.height / 3;
    var randomY = function() {
        var randomNumber = Math.floor((Math.random() * 2) + 1);
        y = -100 + b1 * randomNumber;
        return y;
    };
    return randomY;
});