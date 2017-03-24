// Recursive function that handles parsing 
// incoming data model objects and returning
// randomly generated data based on that model
const generateMock = require('../modelParser');

function generatePostResponse(body){

    const response = {
        status: 200
    };

    try{            
        if(body){
            const {model, count} = JSON.parse(body);
            response.data = generateMock(model, count);
        } else {
            response.data = "Please provide a data model";
        }   

        return response;


    } catch (err) {
        console.log(err);
        response.status = 500;
        response.data = "Server Error, Is your JSON malformed?";
        return response;
    }
}

module.exports = generatePostResponse;