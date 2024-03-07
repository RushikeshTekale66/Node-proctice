const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secritKey = "secritkey";

app.get('/', (req, res)=>{
    res.json({
        message:"Api called"
    })
})

app.post('/login', (req, res)=>{
    const user =  {
        id:1,
        username:"anil",
        email:"rushikesh@gmail.com"
    }
    jwt.sign({user},secritKey, {expiresIn:'3000s'}, (err, token)=>{
        res.json({
            token
        })
    } )
})

app.post(('/profile'), verifyToken, (req, res)=>{
    jwt.verify(req.token, secritKey, (err, authData)=>{
        if(err){
            res.send({result:"Invalid Token"})
        }
        else{
            res.json({
                message:"Profile accessed",
                authData
            })
        }
    })
})

function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader != 'undefined'){
        const bearer = bearerHeader.split(' ');
        const token = bearer[1];
        req.token=token;
        next();
    }
    else{
        res.send({
            result:"Token is not valid"
        })
    }
}

app.listen(5000);