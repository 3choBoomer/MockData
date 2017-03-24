const randdomInt = require('./randomInt');

Array.prototype.getRandomIndex = function(){
	let randIndex = randdomInt(0, this.length);
	return this[randIndex];
};

//module.exports = rand;