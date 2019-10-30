var TutorialGameplay = function(game) {};
TutorialGameplay.prototype = {
	preload: function() {
	},
	create: function() {
		text = game.add.text(game.world.centerX, game.world.centerY)
		text.setText("TutorialGameplay");
		text.anchor.x = 0.5;
		text.anchor.y = 0.5;
		game.stage.backgroundColor = "#ffffff";

		 this.Dorm = game.add.sprite(game.world.centerX, game.world.centerY - 100,'DormA');
		 this.Dorm.anchor.x = 0.5;
		 this.Dorm.anchor.y = 0.5;
		 this.Dorm.scale.x = 0.8;
		 this.Dorm.scale.y = 0.8;
		 //470 120

		 this.elevator = new Elevator(game, 400, 470, 'Diamond', 1, 5, 470, 120);
		 game.add.existing(this.elevator);

		 console.log(this.elevator.body.y);
	},

	update: function() {
		if (game.input.keyboard.justPressed(Phaser.Keyboard.LEFT)) {
			game.state.start('StoryScreen2');
		}
	}
}
