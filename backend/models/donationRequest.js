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
    },
    amountReceived:{
        type:String,
      
    },
    date:{
        type:Object,
       
    },
    contactDetails:{
        type:String,
        
    },
},{timestamps:true})

module.exports = mongoose.model('donReq',donationRequestSchema)
