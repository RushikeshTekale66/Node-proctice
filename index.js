require('./connect');
const express  = require("express");
const app = express();

app.use(express.json());

const db = require('./db');

app.get('/', async(req, res)=>{
  let result = await db.find({});
  console.log(result);
  res.send(result)
})



app.listen(5000);