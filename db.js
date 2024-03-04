const mongoose = require('mongoose');

let contactSchema = mongoose.Schema({
    name:String,
    mobile:Number,
    email:String
});

module.exports = mongoose.model('contactinfos', contactSchema)