define(function() {
    'use strict';
    var menuSound = function() {
        soundManager.onready(function() {
            var menuSound = soundManager.createSound({
                url: 'assets/sounds/menu.mp3'
            });
            soundManager.load();
            menuSound.play({
                loops: 5
            });
        });
    };
    return menuSound;
});