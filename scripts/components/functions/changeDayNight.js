define(['components/models/canvas'], function(Canvas) {
    "use strict";

    function changeDayNight() {

        if ($('#main').hasClass('day')) {
            $('#main').removeClass('day').addClass('evening');
            
         } else
        if ($('#main').hasClass('evening')) {
            $('#main').removeClass('evening').addClass('night');
            
        } else
        if ($('#main').hasClass('night')) {
            $('#main').removeClass('night').addClass('morning');
            
        } else
        if ($('#main').hasClass('morning')) {
            $('#main').removeClass('morning').addClass('day');
            
        }
 }
    return changeDayNight;
});