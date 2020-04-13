




 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Employee', new Schema(
    {
        name:{
            type:String,
            required:true
        },
        position:String,
        functional:String,
        register:Number
    }));
