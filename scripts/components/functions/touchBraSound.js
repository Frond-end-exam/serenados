define(function() {
    'use strict';
    var touchBraSound = function () {
    	soundManager.onready(function () {
    		var touchBraSound = soundManager.createSound({
    			url: 'assets/sounds/yoohoo.mp3'
    		});
    		soundManager.load();
            touchBraSound.play();
    	});
    };
    return touchBraSound;
});