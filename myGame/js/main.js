var config = {
    width: 800,
    height: 600,
    renderer: Phaser.AUTO,
}


window.onload = function() {
	game = new Phaser.Game(config);
	game.state.add('Load', Load);
	game.state.add('TitleScreen', TitleScreen); 
	game.state.add('StoryScreen1', StoryScreen1);
	game.state.add('TutorialGameplay', TutorialGameplay);
	game.state.add('StoryScreen2', StoryScreen2);
	game.state.add('MainGameplay', MainGameplay);
	game.state.add('EndScreen', EndScreen);
	game.state.start('Load');
}
