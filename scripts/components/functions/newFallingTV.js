define(['components/models/canvas', 'components/models/tv', 'components/models/angryMan', 'components/functions/randomX', 'components/functions/randomY'], function(Canvas, tv, angryMan, randomX, randomY) {
    "use strict";

    function newFallingTV() {
  
        tv.x = randomX();
        tv.y = randomY();
        angryMan.x = tv.x;
        angryMan.y = tv.y;
        angryMan.draw();
        tv.draw();
    }
    return newFallingTV;
});
