const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
   
    fname:{
        type:String,
        required: true
    },
    lname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    }
},{timestamps:true})

module.exports = mongoose.model('contact',contactSchema)
