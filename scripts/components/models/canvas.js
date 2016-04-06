define(function() {
    "use strict";
    var canvas = $('#canvas')[0],
        ctx = canvas.getContext("2d");
    var Canvas = {
        canvas: canvas,
        ctx: ctx
    };
    return Canvas;
});