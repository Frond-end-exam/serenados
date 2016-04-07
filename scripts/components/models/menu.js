define(['../functions/gameSound'], function(gameSound) {
    'use strict';
    var menu = function() {


        $('#buttonDisc').click(function() {
            $('#controls-description').show();
        });
        $('#controls-description').click(function() {
            $('#controls-description').hide();
        });
        $('#buttonAuthors').click(function() {
            $('#authors-description').show();
        });
        $('#authors-description').click(function() {
            $('#authors-description').hide();
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
