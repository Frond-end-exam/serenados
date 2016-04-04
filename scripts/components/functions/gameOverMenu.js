define(function () {
	'use strict';
	var gameOverMenu = function () {
		
		$('.game-over-menu').show();
		$('#canvas').hide();

		$('.menu-button').click(function() {
			window.location.reload();
		});
	};
	return gameOverMenu;
});