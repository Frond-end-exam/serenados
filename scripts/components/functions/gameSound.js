define(function() {
    var gameSound = function() {
        'use strict';
        soundManager.onready(function() {
            var gameSound = soundManager.createSound({
                url: 'assets/sounds/game.mp3'
            });
            soundManager.load();
            soundManager.stopAll();
            gameSound.play({
                loops: 5
            });
        });
    };
    return gameSound;
});