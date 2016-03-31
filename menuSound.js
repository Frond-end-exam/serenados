define(function() {
    var menuSound = function() {
        'use strict';
        soundManager.onready(function() {
            var menuSound = soundManager.createSound({
                url: 'css/sounds/menu.mp3'
            });
            menuSound.play({
                loops: 5
            });
            $('#mute').click(function() {
                soundManager.mute();
            });
        });
    };
    return menuSound;
});