define(['components/models/canvas'], function(Canvas) {
    "use strict";
    var x;
    var a1 = Canvas.canvas.width / 7;
    var randomX = function() {
        var randomNumber = Math.floor((Math.random() * 6) + 1);
        x = a1 * randomNumber;
        return x;
    };
    //---------------
    return tvRandomX;
});