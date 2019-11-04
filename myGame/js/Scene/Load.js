var Load = function(game) {};
Load.prototype = {
	preload: function() {

		//Load IMAGE Assets
		game.load.path = 'assets/img/';

		game.load.image('TitleScreenStartButton', 'startbutton.png');

		//Play stage assets
		game.load.image('rightArrow', 'rightArrow.png');
		game.load.image('leftArrow', 'leftArrow.png');
		game.load.image('downArrow', 'downArrow.png');
		game.load.image('sheet', 'sheet.png');
		game.load.image('DormA', 'DormA.png');
		game.load.image('Diamond', 'elevator.png');
		game.load.image('motion', 'Motion.png');
		game.load.spritesheet('slug', 'SlugBoi.png',32,48);
		game.load.spritesheet('guitar', 'guitarCharacter.png', 1200, 1600);
		game.load.spritesheet('singer', 'singerCharacter.png', 1200, 1600);
		game.load.spritesheet('drumer', 'drumCharacter.png', 4000, 3000);

		//Load AUDIO assets
		game.load.path = 'assets/audio/';
	},

	create: function() {
		game.state.start('TitleScreen');
	}
};