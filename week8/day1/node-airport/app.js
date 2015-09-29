var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/heathrow-express')

var Flight   = require('./models/flight')
var Terminal = require('./models/terminal')
var Airport  = require('./models/airport')

var lhr = new Airport({
	name: 'London Heathrow',
	country: 'England',
	code: 'LHR'
})

lhr.terminals.push({
	name: 'Terminal 1',
	capacity: 9800000
})

lhr.save(function(err, airport) {
	if(err) console.log(err)
	console.log('LHR Saved!');
})

var goh = new Airport({
	name: 'Nuuk Airport',
	country: 'Greenland',
	code: 'GOH'
});

goh.save(function(err, airport) {
	if(err) console.log(err)
	console.log('GOH Saved!');
});

var lhr2goh = new Flight({
	airline: 'SAS',
	from: lhr,
	to: goh
});

lhr2goh.save(function(err, flight) {
	if(err) console.log(err)
	console.log('Flight Saved!');


	Flight
		.findOne(flight.id)
		.populate('from')
		.populate('to')
		.exec(function(err, flight) {
		if (err) console.log(err);
		console.log(flight);
	})
});

