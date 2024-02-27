const express = require('express');
const app = express();

// Router level middleware
// It is applicable for specific route or how much route we define 

const middleware = ((req, res, next)=>{
    if (!req.query.age){
        res.send("<h1>Please provide your age! </h1>")
    }
    else if(req.query.age>18){
        res.send("<h1>Success</h1>");
    }
    else if(req.query.age<18){
        res.send("<h1>you are below 18</h1>");
    }
    else{
        next();
    }
    
})
// Application level middle where
// app.use(middleware)

app.get("/", (req, res)=>{
    res.send("<h1>Hi I am Rushikesh Home</h1>")
})

// Router level middleware , We can apply it to all route
app.get("/profile", middleware , (req, res)=>{
    res.send("<h1>Hi I am Rushikesh Profile</h1>")
    middle
})

app.get("/about", (req, res)=>{
    res.send("<h1>Hi I am Rushikesh About</h1>")
    middle
})
app.listen(5000);