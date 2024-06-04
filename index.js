
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const secretKey = "Rushikesh";

// const username = "Rushikesh";
const user = {
    fname:"Rushikesh",
    lname:"Tekale"
}

app.get("/", (req, res)=>{
    // Assigning data & secret key to token
    const token = jwt.sign({user }, secretKey, {
        expiresIn:3000
    });
    setTimeout(()=>{
        console.log(token);
    },4000)
    return res.json(token.split("."))
})

app.listen(5000, console.log("App is live"));


