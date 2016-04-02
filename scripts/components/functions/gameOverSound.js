define(function() {
    var gameOverSound = function() {
        'use strict';
        soundManager.onready(function() {
            var gameOverSound = soundManager.createSound({
                url: 'assets/sounds/gameover.mp3'
            });
            soundManager.load();
            soundManager.stopAll();
            gameOverSound.play();
        });
    };
    return gameOverSound;
});