define(['components/models/canvas', 'components/models/tv', 'components/models/angryMan', 'components/functions/randomX', 'components/functions/randomY', 'components/models/rugbyBall', 'components/models/rugbyPlayer'], function(Canvas, tv, angryMan, randomX, randomY, rugbyBall, rugbyPlayer) {
    "use strict";

    function newFallingRugbyBall() {
  
        rugbyBall.x = randomX();
        rugbyBall.y = randomY();
        rugbyPlayer.x = rugbyBall.x;
        rugbyPlayer.y = rugbyBall.y;
        rugbyPlayer.draw();
        rugbyBall.draw();
    }
    return newFallingRugbyBall;
});
