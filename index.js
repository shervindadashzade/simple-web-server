const url_handler= require('./modules/url_handler');
const res_handler = require('./modules/res_handler');
const fileReader = require('./modules/file_reader');
const http = require('http');
const PORT = 5000;

const server = http.createServer((req,res)=>{
    let {path, file_name} = url_handler.handle(req.url);
    res_handler.header_handler(file_name,res);
    fileReader.setResponse(path,res);
});

server.listen(PORT);