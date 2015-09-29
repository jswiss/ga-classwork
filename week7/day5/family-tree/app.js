var express   = require('express');
var app       = express();
var port      = process.env.PORT || 3000;

var User = require('./models/users');

var mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost/family-tree')

var jen = User({
	firstName: 'Jen',
	lastName: 'Mah',
	email: 'jen@mah.com'
})

jen.save(function(err) {
	if (err) console.log(err);
	console.log('User has been created!');
})

var tim = User({
	firstName: 'Tim',
	lastName: 'Bobaggins',
	email: 'tim@bobalog.com'
})

tim.save(function(err) {
	if (err) console.log(err);
	console.log('User has been created!');
})

console.log(jen.sayHello());

User.find({}, function(err, users) {
	if (err) console.log(err);
	console.log(users);
})


