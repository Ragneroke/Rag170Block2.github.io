function Passenger(game, x, y, key, frame, level, elevator, target, waitPos) {
	//Some initial for the Prefab
	Phaser.Sprite.call(this, game, x, y, key, frame);
	this.anchor.set(0.5);
	game.physics.enable(this);
	this.body.collideWorldBounds = false;
	//level and elevator are related to the Elevator.js
	this.level = level;
	this.elevator = elevator;
	//Set a moving speed for Passenger
	this.speed = 100;
	//Two triggers to detect waiting and loading conditions for passenger
	this.onWait = false;
	this.onLoad = false;
	//Set a waiting position for passenger
	this.waitPos = waitPos;
	//Set target level for passenger
	this.target = target;

	this.animations.add('left', [0, 1, 2, 3], 10, true);
	this.animations.add('right', [5, 6, 7, 8], 10, true);
	this.animations.add('stop', [4], 10, true);


	//this.events.onInputDown.add(this.listener, this);


}

Passenger.prototype = Object.create(Phaser.Sprite.prototype);
Passenger.prototype.constructor = Passenger;
Passenger.prototype.update = function(){
	if(!this.onWait && !this.onLoad){
		this.body.velocity.x = this.speed;
		this.isOnQueue();
	}else if(this.onWait && !this.onLoad){
		this.isOnLoad();
	}else if(this.onLoad){
		this.inElevator();

	}

	if(this.target == this.elevator.currentFloor){
		this.onLoad = false;
		this.leaveElevator();
	}
	//console.log(this.stopFloor);

	this.playAnimation();

}

//Pre:None
//Determine the animation of passenger
Passenger.prototype.playAnimation = function(){
	if(this.body.velocity.x > 0){
		this.animations.play('right');
	}else if(this.body.velocity.x < 0){
		this.animations.play('left');
	}else{
		this.animations.play('stop');
	}
}

//Pre:None
//Stop the passenger when it already arrive the wait position
Passenger.prototype.isOnQueue = function(){
	if(this.body.x >= this.waitPos){
		this.onWait = true;
		this.body.velocity.x = 0;
	}
}

//Pre:None
//Let passenger onload to elevator when elevator was stop
Passenger.prototype.isOnLoad = function(){
	if(this.elevator.currentFloor == this.level){
		this.body.x = this.elevator.body.x;
		this.body.y = this.elevator.body.y;
		this.onLoad = true;
		this.onWait = false;
	}
}

Passenger.prototype.inElevator = function(){
	this.body.x = this.elevator.body.x;
	this.body.y = this.elevator.body.y;
}

Passenger.prototype.leaveElevator = function(){
	this.body.velocity.x = -this.speed;
	game.time.events.add(Phaser.Timer.SECOND * 2, this.killPassenger, this);
}

Passenger.prototype.killPassenger = function(){
	this.kill();
}