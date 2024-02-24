const { log } = require('console');
const express = require('express');
const path = require('path');
const app = express();

// __dirname = Path of our current directory ex =  C:\Users\Rushikesh Tekale\Web devlopment VS\Practice\Node
const publicPath = path.join(__dirname, "public");

// express.static is used to run the static file like html
// This process of accessing page cause an small error that it gives the extention name in query parameter to solve this we use express routing
// app.use(express.static(publicPath));

app.get((""), (req, res)=>{
    res.sendFile(`${publicPath}/index.html`);
})

app.get(("/about"), (req, res)=>{
    res.sendFile(`${publicPath}/about.html`)
})


// We can solve the page not found error by using this routing 
app.get(("*"), (req, res)=>{
    res.sendFile(`${publicPath}/nopage.html`);
})

app.listen(5000);