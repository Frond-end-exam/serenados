define(['components/models/canvas'], function(Canvas) {
    "use strict";

    function changeDayNight() {
       console.log('fdsf'); 

        if ($('#main').hasClass('day')) {
            $('#main').removeClass('day').addClass('evening');
            $('#canvas').removeClass('canvasDay').addClass('canvasEvening');
         } else
        if ($('#main').hasClass('evening')) {
            $('#main').removeClass('evening').addClass('night');
            $('#canvas').removeClass('canvasEvening').addClass('canvasNight');
        } else
        if ($('#main').hasClass('night')) {
            $('#main').removeClass('night').addClass('morning');
            $('#canvas').removeClass('canvasNight').addClass('canvasMorning');
        } else
        if ($('#main').hasClass('morning')) {
            $('#main').removeClass('morning').addClass('day');
            $('#canvas').removeClass('canvasMorning').addClass('canvasDay');
        }
 }
    return changeDayNight;
});