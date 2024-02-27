const express = require('express');
const app = express();
const middleware = require('./middleware')
// It is used to setup the middle where for specific route
const middle = express.Router();
middle.use(middleware);

app.get("/", (req, res)=>{
    res.send("<h1>Hi I am Rushikesh Home</h1>")
})

app.get("/profile" , (req, res)=>{
    res.send("<h1>Hi I am Rushikesh Profile</h1>")
})

middle.get("/about", (req, res)=>{
    res.send("<h1>Hi I am Rushikesh About</h1>")
})

// setting the middleware to app
app.use('/', middle);


app.listen(5000);