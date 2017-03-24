function generateResponse(req){
    return {
        status: 200,
        data: req.method + " is an unsupported HTTP verb"
    };
}

module.exports = generateResponse;