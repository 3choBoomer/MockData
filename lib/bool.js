const rand = require('./randomIndex');

function generateBool(){
    return rand([true,false]);
}

module.exports = generateBool;