var StoryScreen1 = function(game) {};
StoryScreen1.prototype = {
	preload: function() {
		
	},
	create: function() {
		text = game.add.text(game.world.centerX, game.world.centerY)
		text.setText("Story Screen 1");
		text.anchor.x = 0.5;
		text.anchor.y = 0.5;

	},
	update: function() {
		if (game.input.keyboard.justPressed(Phaser.Keyboard.LEFT)) {
			game.state.start('TutorialGameplay');
		}
	}
}