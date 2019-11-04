function Motion(game, x, y, key, frame, passenger){
	Phaser.Sprite.call(this, game, x, y, key, frame);
	this.anchor.set(0.5);
	this.scale.x = 0.8;
	this.scale.y = 0.8;
	game.physics.enable(this);
	this.body.collideWorldBounds = false;
	this.passenger = passenger;
	this.targetText = game.add.text(this.body.x+5, this.body.y);
	this.targetText.setText(this.passenger.target + 1);
}

Motion.prototype = Object.create(Phaser.Sprite.prototype);
Motion.prototype.constructor = Motion;
Motion.prototype.update = function(){
	this.followPassenger();

}

Motion.prototype.followPassenger = function(){
	this.body.x = this.passenger.body.x+5;
	this.body.y = this.passenger.body.y-20;
	this.targetText.x = this.body.x+5;
	this.targetText.y = this.body.y;
}