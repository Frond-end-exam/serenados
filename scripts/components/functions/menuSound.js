define(function() {
    var menuSound = function() {
        'use strict';
        soundManager.onready(function() {
            var menuSound = soundManager.createSound({
                url: 'assets/sounds/menu.mp3'
            });
            soundManager.load();
            menuSound.play({
                loops: 5
            });
<<<<<<< HEAD
=======
            soundManager.load();
>>>>>>> c4de21541df6866c7747e6317bb71a03f1c6eeba
        });
    };
    return menuSound;
});