define(function() {
    var menuSound = function() {
        'use strict';
        soundManager.onready(function() {
            var menuSound = soundManager.createSound({
                url: 'http://freshly-ground.com/data/audio/48khz-test.mp3'
            });
            menuSound.play({
                loops: 5
            });
            
        });
    };
    return menuSound;
});