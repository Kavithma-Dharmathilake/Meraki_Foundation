const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
   
    name:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
    },
    password:{
        type:String,
      
    }
},{timestamps:true})

module.exports = mongoose.model('user',userSchema)
