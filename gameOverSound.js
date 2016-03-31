define(['gameSound.js', 'menuSound.js'], function(gameSound, menuSound) {
    var gameOverSound = function() {
        'use strict';
        soundManager.onready(function() {
            var gameOverSound = soundManager.createSound({
                url: 'css/sounds/gameover.mp3'
            });
            soundManager.stopAll();
            gameOverSound.play(
                );
            $('#mute').click(function() {
                soundManager.mute();
            });
        });
    };
    return gameOverSound;
});