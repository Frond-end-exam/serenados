define(['components/models/canvas'], function(Canvas) {
    "use strict";
  var time = 1;
    function changeDayNight() {
      console.log(time);

        if (time === 1) {
            $('#main').removeClass('day').addClass('evening');
            $('#canvas').css("background", "url('../assets/images/backgrounds/eveningBuilding.gif')");
            time = 2;
        } else if (time === 2) {
            $('#main').removeClass('evening').addClass('night');
            $('#canvas').removeClass('canvasEvening').addClass('canvasNight');
            time = 3;
        }else if (time === 3) {
            $('#main').removeClass('night').addClass('morning');
            $('#canvas').removeClass('canvasNight').addClass('canvasMorning');
        }
        if ($('#main').hasClass('morning') && $('#canvas').hasClass('canvasMorning')) {
            $('#main').removeClass('morning').addClass('day');
            $('#canvas').removeClass('canvasMorning').addClass('canvasDay');
        }
    }
    return changeDayNight;
});
