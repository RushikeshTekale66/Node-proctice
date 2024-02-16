const http = require('http');

//Passing function as a argument in Node
function datacontrol(req, res){
    res.write("<h1>Hi I am rushikesh Tekale</h1>");
    res.end();
}

http.createServer(datacontrol).listen(4500);