define(['components/models/canvas', 'components/models/angryMan', 'components/models/girls', 'components/functions/newFallingTV'], function(Canvas, angryMan, girls, newFallingTV) {
    "use strict";

    function checkCoords() {
  
        if (girls.x == angryMan.x && girls.y == angryMan.y){
            newFallingTV();
        }
    }
    return checkCoords;
});
