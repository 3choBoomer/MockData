//const randdomInt = require('./randomInt');

function randMinMax(min = 0, max = 100) {
	return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = randMinMax;