define(function() {
    'use strict';
    var touchCactusSound = function () {
    	soundManager.onready(function () {
    		var touchCactusSound = soundManager.createSound({
    			url: 'assets/sounds/cactus.mp3'
    		});
    		soundManager.load();
            touchCactusSound.play();
    	});
    };
    return touchCactusSound;
});