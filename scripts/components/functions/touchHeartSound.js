define(function() {
    'use strict';
    var touchHeartSound = function () {
    	soundManager.onready(function () {
    		var touchHeartSound = soundManager.createSound({
    			url: 'assets/sounds/oh_yeah.mp3'
    		});
    		soundManager.load();
            touchHeartSound.play();
    	});
    };
    return touchHeartSound;
});