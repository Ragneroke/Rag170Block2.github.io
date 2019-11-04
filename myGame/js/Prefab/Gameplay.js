function Gameplay(game){
	//Not actually a prefab
	this.Dorm = game.add.sprite(game.world.centerX, game.world.centerY - 100,'DormA');
	this.Dorm.anchor.x = 0.5;
	this.Dorm.anchor.y = 0.5;
	this.Dorm.scale.x = 0.8;
	this.Dorm.scale.y = 0.8;
	//470 120

	this.elevator = new Elevator(game, 400, 470, 'Diamond', 1, 5, 470, 120);
	game.add.existing(this.elevator);

	this.test1 = new Passenger(game, 50, 470, 'slug', 1, 0, this.elevator, 3, 330);
	game.add.existing(this.test1);
}