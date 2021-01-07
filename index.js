const http = require('http');

http.createServer((req, res)=>{

    if(req.url === "/"){
        res.end("Ola mundo")
    }

}).listen(1337, "localhost");