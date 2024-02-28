const express = require('express');
const app = express();

const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017';

mongoose.connect(url).then(console.log("Connected")).catch((e)=>console.log(e))
