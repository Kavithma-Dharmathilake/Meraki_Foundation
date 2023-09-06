const mongoose = require('mongoose')

const Schema = mongoose.Schema

const donationRequestSchema = new Schema({
   
    category:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required:true,
    },
    Description:{
        type:String,
        required:true,
    },
    amountRequired:{
        type:String,
        required:true,
    },
    amountReceived:{
        type:String,
        required:true,
      
    },
    date:{
        type:Object,
        required:true,
       
    },
    contactDetails:{
        type:String,
        required:true,
        
    },
},{timestamps:true})

module.exports = mongoose.model('donReq',donationRequestSchema)
