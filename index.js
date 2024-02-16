const http = require('http');

http.createServer((req, res)=>{
    res.write("<h1>Hi I am rushikesh</h1>");
    res.end();
}).listen(4500);