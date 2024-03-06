const express = require('express');
const EventEmitter = require('events');

const app = express();

// Creating object of an event
const event = new EventEmitter();

let count = 0;
event.on("count", () => {
  count++;
  console.log("Event called", count);
})

app.get('/', (req, res) => {
  res.send("I am ok");
  event.emit("count");
})

app.get('/total', (req, res)=>{
  console.log(count);
})

app.listen(4000);