const config = require('../config');
const PORT = process.env.PORT || 1337;
const postRequestHandler = require('./requestHandlers/post');
const unsupportedRequestHandler = require('./requestHandlers/unsupported');
const http = require('http');


const server = http.createServer((req,res) => {
    let body = '';

    req.on('error', function(e){
        //TODO Add real logging
        console.log(e);
    }).on('data', function(chunk){
        body += chunk;
    }).on('end', function(){
        let response;

        if(req.method === 'POST'){
            response = postRequestHandler(body);
        } else {
            response = unsupportedRequestHandler(req);
        }

        res.setHeader("Content-Type", "application/json");
        res.writeHead(response.status);
        res.write(JSON.stringify(response));
        res.end();
    });
});

server.listen(PORT, function(){
    console.log('server is listening on port ', config.SERVER_PORT);
});