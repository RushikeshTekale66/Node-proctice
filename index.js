const express = require('express');
const app = express();

// http://localhost:5000/?name=%22Rushikesh%22
// Getting the data from query parameter

app.get("", (req, res)=>{
    res.send("HI rushikesh");
    console.log(req.query);
    console.log(req.query.name);
})

app.listen(5000);