var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: { type: String, required: true, unique: true },
	meta: {
		age: Number,
		website: String,
		github: String,
	},
	createdAt: Date,
	updatedAt: Date
})

userSchema.methods.sayHello = function() { //equivalent to an instance method because this
	return 'Hello ' + this.firstName;
}

userSchema.methods.updateName = function(newName){
	
}

var User = mongoose.model('User', userSchema)

module.exports = User;

