require('./connect');
const express  = require("express");
const app = express();

app.use(express.json());

const db = require('./db');

// Search  Data from database
// http://localhost:5000/search/Rushikesh
app.get('/search/:key', async(req, res)=>{
  let result = await db.find({
    "$or":[
      {"name":{$regex:req.params.key}}
    ]
  });
  console.log(result);
  console.log(req.params.key);
  res.send(result)
})


app.listen(5000);