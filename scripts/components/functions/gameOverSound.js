define(function() {
    'use strict';
    var gameOverSound = function() {
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
