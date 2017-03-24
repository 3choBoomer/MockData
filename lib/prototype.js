// Extend the Array prototype with a getRandomIndex method
const randdomInt = require('./dataGenerators/randomInt');
Array.prototype.getRandomIndex = function(){
	let randIndex = randdomInt(0, this.length);
	return this[randIndex];
};