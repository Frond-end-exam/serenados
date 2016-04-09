define(['components/models/canvas', 'components/models/angryMan', 'components/models/girls', 'components/functions/newFallingTV', 'components/models/rugbyBall', 'components/models/rugbyPlayer', 'components/functions/newFallingRugbyBall'], function(Canvas, angryMan, girls, newFallingTV, rugbyBall, rugbyPlayer, newFallingRugbyBall) {
    "use strict";

    function checkCoords() {
  
        if (girls.x == angryMan.x && girls.y == angryMan.y){
            newFallingTV();
        }
         if (girls.x == rugbyPlayer.x && girls.y == rugbyPlayer.y || angryMan.x == rugbyPlayer.x && angryMan.y == rugbyPlayer.y){
            newFallingRugbyBall();
        }
    }
    return checkCoords;
});
