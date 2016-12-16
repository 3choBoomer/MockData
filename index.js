const names = require('./lib/names');
const states = require('./lib/states');
const rand = require('./lib/randomIndex');

function generateMock(){
    return {
        nameFirst: rand(names),
        nameLast: rand(names),
        state: rand(states).name
    }
}

module.exports = generateMock;