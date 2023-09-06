const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PaymentSchema = new Schema({
   
    amount:{
        type:String,
        required: true
    },
    type:{
        type:String,
        required: true
    },
    method:{
        type:String,
        required:true,
    },
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    }, 
    coment:{
        type:String,
       
    },

},{timestamps:true})

module.exports = mongoose.model('payment',PaymentSchema)
