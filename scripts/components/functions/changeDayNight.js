define(['components/models/canvas'], function(Canvas) {
    "use strict";

    function changeDayNight() {
        if ($('#main').hasClass('day')) {
            $('#main').removeClass('day').addClass('evening');
            $('#canvas').css("background-image", "url("../assets/images/backgrounds/eveningBuilding.gif")");
        }




        if ($('#main').hasClass('evening') && $('#canvas').hasClass('canvasEvening')) {
            $('#main').removeClass('evening').addClass('night');
            $('#canvas').removeClass('canvasEvening').addClass('canvasNight');
        }
        if ($('#main').hasClass('night') && $('#canvas').hasClass('canvasNight')) {
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