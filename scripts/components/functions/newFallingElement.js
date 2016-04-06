define(['components/models/canvas', 'components/models/fallobject', 'components/models/girls', 'components/functions/randomX', 'components/functions/randomY'], function(Canvas, ball, girls, randomX, randomY) {
    "use strict";

    function newFallingElement() {
  
        var randomNumber = Math.floor((Math.random() * 2) + 1);
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
