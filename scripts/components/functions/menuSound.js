define(function() {
    var menuSound = function() {
        'use strict';
        soundManager.onready(function() {
            var menuSound = soundManager.createSound({
                url: 'assets/sounds/menu.mp3'
            });
            menuSound.play({
                loops: 5
            });
            soundManager.load();
        });
    };
    return menuSound;
});