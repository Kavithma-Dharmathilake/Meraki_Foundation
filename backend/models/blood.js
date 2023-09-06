const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bloodSchema = new Schema({
   
    location:{
        type:String,
        required: true
    },
    organized:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }
},{timestamps:true})

module.exports = mongoose.model('blood',bloodSchema)
