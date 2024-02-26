const { log } = require('console');
const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, "public");

// Install npm i ejs 
app.set('view engine', 'ejs');

app.get((""), (req, res)=>{
    res.sendFile(`${publicPath}/index.html`);
})

app.get(("/about"), (req, res)=>{
    res.sendFile(`${publicPath}/about.html`)
})

// Making dynamic website using EJS
app.get(("/profile"), (req, res)=>{
    const data = {
        name:"Rushikesh",
        mobile:7887388366,
        address:"Pune"
    }
   res.render('profile', {data});
})


// We can solve the page not found error by using this routing 
app.get(("*"), (req, res)=>{
    res.sendFile(`${publicPath}/nopage.html`);
})

app.listen(5000);