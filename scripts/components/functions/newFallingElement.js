define(['components/models/canvas'], function(Canvas) {
    "use strict";

    function newFallingElement() {
            ball.x = randomX();
            ball.y = randomY();
            girls.x = ball.x;
            girls.y = ball.y;
            if (randomNumber === 1) {
                ball.color = "red";
            } else {
                ball.color = "#0095DD";
            }
            girls.draw();
            ball.draw();
            }
    return newFallingElement;
});