const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{
    let log = `${Date.now()} : New Request received ${req.url}`
    fs.appendFile("log.txt", log, (err, data)=>{
        switch(req.url){
            case '/': res.end("home page");
            break;
            case '/about' : res.end("About page");
            break;
            case '/contact': res.end("Contact page");
            break;
            default : res.end("Default page");
            break;
        }
    })
})

server.listen(8080, ()=>console.log("Server is running")
);