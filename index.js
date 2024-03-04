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

app.post('/save', async(req, res)=>{
  let result = await db(req.body);
  let data = await result.save()
  console.log(data);
})

// http://localhost:5000/update/65bbd202c6e29766b05a67dd
app.put("/update/:id", async(req, res)=>{
  let result = await db.updateOne(
    {_id:req.params.id},
    {$set: req.body}
  )
  console.log(result);
})



app.listen(5000);