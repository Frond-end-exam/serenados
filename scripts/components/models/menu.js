define(['../functions/gameSound'], function(gameSound) {
    'use strict';
    var menu = function() {
        $('#start').click(function() {
            $('#menu').css('display', 'none');
            $('#canvas').css('display', 'block');
            gameSound();
        });
        $('#buttonDisc').click(function() {
            $('#controls-description').css('display', 'block');
        });
        $('#controls-description').click(function() {
            $('#controls-description').hide();
        });
        $('#mute').click(function() {
            soundManager.mute();
            $('#mute').hide();
            $('#unmute').show();
        });
        $('#unmute').click(function() {
            soundManager.unmute();
            $('#unmute').hide();
            $('#mute').show();
        });
    };
    return menu;
});