function Car(make, color, convertible, speed, accelerate, decelerate) {
	this.make = make,
	this.color = color,
	this.convertible = convertible,
	this.speed = 0,
	this.accelerate = accelerate,
	this.decelerate = decelerate
}

function accelerate(mph) {
	oldSpeed = this.speed;
	this.speed += mph;
	return "Vroom vroom! We went from " + oldSpeed + " to " + this.speed + "!";
}

function decelerate(mph) {
	oldSpeed = this.speed;
	this.speed -= mph;
	return "Womp womp! We went from " + oldSpeed + " to " + this.speed + "!";
}

bugatti.accelerate(60);
bugatti.decelerate(35);

module.exports.bugatti = new Car('Bugatti', 'red', true, 0);
