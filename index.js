const http = require("http");

const server = http.createServer((req, res)=>{
    res.write("Application is running");
    res.end();
})

server.listen(8080);