function randMinMax(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function rand(list){
	randIndex = randMinMax(0, list.length);
	return list[randIndex];
}

module.exports = rand;