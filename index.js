const name = require('./lib/names');
const state = require('./lib/states');
//const rand = require('./lib/randomIndex');
const guid = require('./lib/guid');
const date = require('./lib/dates');
const bool = require('./lib/bool');
const zip = require('./lib/zips');

const mock = {
    name: name
};

function parseKey(model){
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

function generateMock(model, count){
    return Array.apply(null, new Array(count)).map((e,i) => parseKey(model));
}


/*
    Wire up code
*/
const mockDataModel = {
    creator: 'Dennis',
    id: guid,
    nameFirst: name,
    nameLast: name,
    signUpDate: date,
    staticBool: true,
    staticDefault: [2,3,4],
    isCool: bool,
    dataObj: {
        name: name,
        state: state,
        dns: bool,
        id: guid,
    },
    nameGroup: [{fucks: name}, name, name ,date],
    address: {
        //   street: int,
        state: state,
        // city: city,
        zip: zip
    }
};

// const stringData = JSON.parse('{"nameFirst":"name"}');
// stringData = Array.slice.apply(stringData).map(e => mock[e]);
const fuckIt = [name, name, {cool:bool}, 2, 'dennis'];
console.log(typeof fuckIt);
const mockObjectCount = 20;

console.log('starting........................', this);
const result = generateMock(mockDataModel, mockObjectCount);
console.log(result);

//module.exports = generateMock;