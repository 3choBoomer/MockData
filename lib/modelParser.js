// TODO Add support for//
// street": int
// city": city
const fs = require('fs');
const randomInt = require('./dataGenerators/randomInt');
const omit = require('lodash.omit');

// Array of modules which handle random data generation
// Any random generator added to the 'dataGenerators'
// filolder will be automatically detected
const generators = fs.readdirSync("./lib/dataGenerators").map(file => require('./dataGenerators/'+file));

function parseKey(model){
    const dataType = typeof model;

    if(dataType === 'string'){
        const generator = generators.find(g => g.name === model);
        if(typeof generator === 'function'){
            return generator();
        }
    }

    if(['number', 'string', 'boolean'].includes(dataType)){
        return model;
    }

    if(Array.isArray(model)){
        if(typeof model[0]._count === 'number'){
            let count = model[0]._count;
            if (count < 0){
              count = randomInt(0, Math.abs(count));
            }
            newModel = omit(model[0], "_count");
            return Array.apply(null, new Array(count)).map((e,i) => parseKey(newModel));
        }
        return model.map(parseKey);
    }

    if(dataType === 'object'){
        let retVal = {};
        for (let key in model){
            retVal[key] = parseKey(model[key]);
        }
        return retVal;
    }
}

function generateMock(model, count){
    if(typeof count !== 'number'){
        //throw new Error("Count must be a number");
    }
    return Array.apply(null, new Array(count)).map((e,i) => parseKey(model));
}

module.exports = generateMock;
