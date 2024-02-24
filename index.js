const express = require('express');
const app = express();

// http://localhost:5000/?name=%22Rushikesh%22
// Getting the data from query parameter

app.get("", (req, res)=>{
    res.send(
        "<h1>HI rushikesh</h1><input type='text'placeholder='input box'/>"
        );
})

app.listen(5000);