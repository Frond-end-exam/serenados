define(function() {
    'use strict';
    var touchTvSound = function () {
    	soundManager.onready(function () {
    		var touchTvSound = soundManager.createSound({
    			url: 'assets/sounds/tv_explode.mp3'
    		});
    		soundManager.load();
            touchTvSound.play();
    	});
    };
    return touchTvSound;
});