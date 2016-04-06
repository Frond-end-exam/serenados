define(['components/models/canvas', 'components/models/tv', 'components/models/angryMan', 'components/functions/randomX', 'components/functions/randomY'], function(Canvas, tv, angryMan, randomX, randomY) {
    "use strict";

    function newFallingTV() {
  
        var randomNumber = Math.floor((Math.random() * 2) + 1);
        tv.x = randomX();
        tv.y = randomY();
        angryMan.x = tv.x;
        angryMan.y = tv.y;
        if (randomNumber === 1) {
            tv.side = 1;
        } else {
            tv.side = 2;
        }
        angryMan.draw();
        tv.draw();
    }
    return newFallingTV;
});
