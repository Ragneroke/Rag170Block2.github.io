var TutorialGameplay = function(game) {};
TutorialGameplay.prototype = {
	preload: function() {
	},
	create: function() {
		Gameplay(game);

	},

	update: function() {
		if (game.input.keyboard.justPressed(Phaser.Keyboard.LEFT)) {
			game.state.start('StoryScreen2');
		}
	}
}
