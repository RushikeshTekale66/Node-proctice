const { log } = require('console');
const express = require('express');
const path = require('path');
const app = express();

// __dirname = Path of our current directory ex =  C:\Users\Rushikesh Tekale\Web devlopment VS\Practice\Node
const publicPath = path.join(__dirname, "public");

// express.static is used to run the static file like html
app.use(express.static(publicPath));

app.listen(5000);