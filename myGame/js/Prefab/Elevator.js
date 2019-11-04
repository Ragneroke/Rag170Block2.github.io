function Elevator(game, x, y, key, frame, level, lowLevel,highLevel) {
	Phaser.Sprite.call(this, game, x, y, key, frame);
	this.anchor.set(0.5);
	game.physics.enable(this);
	this.scale.x = 0.5;
	this.scale.y = 0.5;
	this.body.collideWorldBounds = false;
	//Demo level is 5
	this.level = level;
	this.dir = 'up';
	this.low = lowLevel;
	this.high = highLevel;
	this.speed = -100;
	this.events.onInputDown.add(this.listener, this);
	this.cond = 'move';
	this.body.velocity.y = this.speed;
	this.inputEnabled = true;
	//Those two are triggers of stop elevator
	this.stopFloor = null;
	this.readyStop = false;

	//The currentFloor represent the floor that elevator is stop at.
	this.currentFloor = null;
	this.levelArray = [];
	for(var i = 0; i < this.level; ++i){
		this.levelArray[i] = this.low - ((this.low - this.high) / (this.level - 1)) * i;
	}


}

Elevator.prototype = Object.create(Phaser.Sprite.prototype);
Elevator.prototype.constructor = Elevator;
Elevator.prototype.update = function(){
	if(this.body.y >= this.low && this.dir == 'down'){
		this.dir = 'up';
		this.reverseSpeed();
	}else if(this.body.y <= this.high && this.dir == 'up'){
		this.dir = 'down';
		this.reverseSpeed();
	}
	this.stopElevator();
	this.checkFloor();
	//console.log(this.stopFloor);

}
Elevator.prototype.listener = function(){
	if(this.cond == 'move'){
		// this.speed = this.body.velocity.y;
		// this.body.velocity.y = 0;
		this.readyStop = true;
	}else if(this.cond == 'stop'){
		// this.body.velocity.y = this.speed;
		this.cond = 'move';
	}
}
Elevator.prototype.stopElevator = function(){
	if(this.readyStop){
		if(this.dir == 'up'){
			for(var i = 0; i < this.level; ++i){
				if(this.levelArray[i] < this.body.y){
					this.stopFloor = i;
					break;
				}
			}
		}else{
			for(var i = this.level-1; i >= 0; --i){
				if(this.levelArray[i] > this.body.y){
					this.stopFloor = i;
					break;
				}
			}
		}
		this.readyStop = false;
	}

}
Elevator.prototype.reverseSpeed = function(){
	this.speed = -this.speed;
	this.body.velocity.y = this.speed;
}
Elevator.prototype.checkFloor = function(){
	if(this.body.y < this.levelArray[this.stopFloor] + 2 && this.body.y > this.levelArray[this.stopFloor] - 2){
		this.body.velocity.y = 0;
		this.cond = 'stop';
		this.currentFloor = this.stopFloor;
		this.stopFloor = null;
	}else if(this.cond == 'move'){
		this.body.velocity.y = this.speed;
		this.currentFloor = null;
	}
}