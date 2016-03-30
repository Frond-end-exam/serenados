define(function() {
    "use strict";
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d");
    var Canvas = {
        canvas: canvas,
        ctx: ctx
    };
    return Canvas;
});