const mongoose= require('mongoose');

const todoSchema=mongoose.Schema({
    name:String,
    email:String,
    mobile:Number
})


module.exports = mongoose.model('todos',todoSchema);