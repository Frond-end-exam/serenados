(function() {
    'use strict';
    soundManager.onready(function() {
        var menuSound = soundManager.createSound({
            url: 'css/sounds/desperados.mp3'
        });
        menuSound.play({
            loops: 5
        });
        var gameOverSound = soundManager.createSound({
            url: 'css/sounds/gameover.mp3'
        });
        $('#start').click(function() {
            menuSound.stop();
            gameOverSound.play();
        });

        $('#mute').click(function () {
            soundManager.mute();
        });
    });
})();