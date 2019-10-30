var EndScreen = function(game) {};
EndScreen.prototype = {
	preload: function() {
		
	},
	create: function() {
		text = game.add.text(game.world.centerX, game.world.centerY)
		text.setText("Thanks For Playing the game!\nPress ENTER to Replay the Game");
		text.anchor.x = 0.5;
		text.anchor.y = 0.5;
		game.stage.backgroundColor = "#01FE23";
	},
	update: function() {
		if(game.input.keyboard.isDown(Phaser.Keyboard.ENTER))
			game.state.start('TitleScreen');
	}
}