define(function() {
    var gameOverSound = function() {
        'use strict';
        soundManager.onready(function() {
            var gameOverSound = soundManager.createSound({
                url: 'css/sounds/gameover.mp3'
            });
            gameOverSound.play();
            $('#mute').click(function() {
                soundManager.mute();
            });
        });
    };
    return gameOverSound;
})