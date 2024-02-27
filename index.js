const express = require('express');
const app = express();

// Application level middlewhere
// It is applied for whole application

const middleware = ((req, res, next)=>{
    if(req.query.age>18){
        res.send("<h1>Success</h1>");
    }
    else if(req.query.age<18){
        res.send("<h1>you are below 18</h1>");
    }
    else{
        next();
    }
    
})

app.use(middleware)

app.get("/", (req, res)=>{
    res.send("<h1>Hi I am Rushikesh</h1>")
    middle
})
app.listen(5000);