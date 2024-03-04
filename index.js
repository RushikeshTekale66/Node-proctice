require('./connect');
const express  = require("express");
const app = express();

app.use(express.json());

const db = require('./db');

// Get Data from database
app.get('/', async(req, res)=>{
  let result = await db.find({});
  console.log(result);
  res.send(result)
})

// Add data to database
app.post('/save', async(req, res)=>{
  let result = await db(req.body);
  let data = await result.save()
  console.log(data);
  res.send(result)
})

// Update data in database
// http://localhost:5000/update/65bbd202c6e29766b05a67dd
app.put("/update/:id", async(req, res)=>{
  let result = await db.updateOne(
    {_id:req.params.id},
    {$set: req.body}
  )
  console.log(result);
  res.send(result)
})

// Delete data in databaase
// http://localhost:5000/delete/65be29bc9d589a8d63de71aa
app.delete("/delete/:id", async(req, res)=>{
  let result = await db.deleteOne(
    {_id:req.params.id}
  )
  console.log(result);
  res.send(result)
})


app.listen(5000);