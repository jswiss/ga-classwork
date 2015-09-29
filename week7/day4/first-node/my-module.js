var number = 7;

module.exports.name = "Alex";

module.exports.arr = [1,2,3];

module.exports.getNumber = function() {
	console.log("Get the number. ", number);
	return number;
}

console.log("End of module file.")
