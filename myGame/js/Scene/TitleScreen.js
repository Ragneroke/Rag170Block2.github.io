var TitleScreen = function(game) {};
TitleScreen.prototype = {
	preload: function() {
		
	},
	create: function() {
		 text = game.add.text(game.world.centerX, game.world.centerY)
		 text.anchor.x = 0.5;
		 text.anchor.y = 0.5;
		 text.setText("Title Screen");
		 game.stage.backgroundColor = "#4488AA";

		// //Add by Guanchen Liu
		// //Create the title image and start button of the game.
		// this.Title = game.add.sprite(400, 200, 'TitleScreenTitle');
		// this.Title.anchor.x = 0.5;
		// this.Title.anchor.y = 0.5;

		this.StartButton = game.add.button(325, 400, 'TitleScreenStartButton', this.actionStartClick, this, 2, 1, 0).scale.setTo(0.5,0.5);
	},
	update: function() {
		// if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
		// 	game.state.start('StoryScreen1');
	},
	actionStartClick: function(){
		game.state.start('StoryScreen1');
	}
}