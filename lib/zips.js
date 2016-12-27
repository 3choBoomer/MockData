const randdomInt = require('./randomInt');

function generateZip(){
    return randdomInt(50000,59999);
}

module.exports = generateZip;