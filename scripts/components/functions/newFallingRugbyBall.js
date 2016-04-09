define(['components/models/canvas', 'components/models/tv', 'components/models/angryMan', 'components/functions/randomX', 'components/functions/randomY', 'components/models/rugbyBall', 'components/models/rugbyPlayer', 'components/models/canvasWidth' ], function(Canvas, tv, angryMan, randomX, randomY, rugbyBall, rugbyPlayer, W) {
    "use strict";

    function newFallingRugbyBall() {
        rugbyBall.x = randomX();
        rugbyBall.y = randomY();
        rugbyPlayer.x = rugbyBall.x;
        rugbyPlayer.y = rugbyBall.y;
        if (rugbyPlayer.x < W / 2) {
            rugbyBall.vx = 1.5;
        } else if (rugbyPlayer.x > W / 2) {
            rugbyBall.vx = -1.5;
        } else if (rugbyPlayer.x == W/2){
            rugbyBall.vx = 0;
        }
        rugbyPlayer.draw();
        rugbyBall.draw();
    }
    return newFallingRugbyBall;
});