const express = require('express');
const app = express();

// Rendering Json in node 

app.get("", (req, res)=>{
    res.send({fname:"Rushikesh", lname: "Tekale"});
})

app.listen(5000);