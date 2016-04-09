define(function() {
    'use strict';
    var touchBallSound = function () {
    	soundManager.onready(function () {
    		var touchBallSound = soundManager.createSound({
    			url: 'assets/sounds/ball.mp3'
    		});
    		soundManager.load();
            touchBallSound.play();
    	});
    };
    return touchBallSound;
});