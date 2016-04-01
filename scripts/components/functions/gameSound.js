define(function() {
    var gameSound = function() {
        'use strict';
        soundManager.onready(function() {
            var gameSound = soundManager.createSound({
                url: 'https://soundcloud.com/roman-fedyshyn/game.mp3'
            });
            soundManager.stopAll();
            gameSound.play({
                loops: 5
            });
            
        });
    };
    return gameSound;
});