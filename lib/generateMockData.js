const name = require('./names');
const state = require('./states');
const guid = require('./guid');
const date = require('./dates');
const bool = require('./bool');
const zip = require('./zips');

function generateMockData(model){
    const dataType = typeof model;

    if(dataType === 'function' ){
        return model();
    }

    if(['number', 'string', 'bool'].includes(dataType)){
        return model;
    }

    if(Array.isArray(model)){
        return model.map(e => parseKey(e));
    }

    if(dataType === 'object'){
        let retVal = {};

        for (let key in model){

            let prop = model[key];

            if (typeof prop === 'function'){
                retVal[key] = prop();

            } else if (Array.isArray(prop)) {
                retVal[key] = prop.map(e => parseKey(e));

            } else if (typeof prop === 'object') {
            retVal[key] = parseKey(prop);

            } else {
                retVal[key] = prop;
            }
        }
        return retVal;
    }
}

module.exports = generateMockData;