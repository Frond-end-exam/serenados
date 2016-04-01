define(function() {
    var gameOverSound = function() {
        'use strict';
        soundManager.onready(function() {
            var gameOverSound = soundManager.createSound({
                url: '../../sounds/gameover.mp3'
            });
            soundManager.stopAll();
            gameOverSound.play();
        });
    };
    return gameOverSound;
});