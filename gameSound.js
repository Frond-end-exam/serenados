define(['gameOverSound.js', 'menuSound.js'], function(gameOverSound, menuSound) {
    var gameSound = function() {
        'use strict';
        soundManager.onready(function() {
            var gameSound = soundManager.createSound({
                url: 'css/sounds/game.mp3'
            });
            soundManager.stopAll();
            gameSound.play({
                loops: 5
            });
            $('#mute').click(function() {
                soundManager.mute();
            });
        });
    };
    return gameSound;
});