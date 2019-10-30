var StoryScreen2 = function(game) {};
StoryScreen2.prototype = {
	preload: function() {
		
	},
	create: function() {
		text = game.add.text(game.world.centerX, game.world.centerY)
		text.setText("Story Screen 2");
		text.anchor.x = 0.5;
		text.anchor.y = 0.5;
		game.stage.backgroundColor = "#F2F91F";

	},
	update: function() {
		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
			game.state.start('MainGameplay');
	}
}