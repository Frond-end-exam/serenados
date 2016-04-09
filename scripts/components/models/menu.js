define(['../functions/gameSound'], function(gameSound) {
    'use strict';
    var menu = function() {


        $('#buttonDisc').click(function() {
            $('#controls-description').toggle();
        });
        
        $('#buttonAuthors').click(function() {
            $('#authors-description').toggle();
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
