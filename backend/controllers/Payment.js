const express = require('express');
const Payment = require('../models/payment');
const mongoose = require('mongoose');

const router = express.Router();


//get all donation requests

const getAllPayments = async (req, res) => {

    const payment = await Payment.find({}).sort({createdAt: -1})

    if(payment){
        res.status(200).json(Payment);
    }else{
        res.status(404).json({error : "no such request"})
    }


}
//get single donation requests

const getSinglePayment = async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such requests"})
    }

    const Payment = await Payment.findById(id)
    res.status(200).json(Payment)

}

//create single donation requests

const createPayment = async (req, res) => {

    const {
        amount,
        type,
        method,
        fname,
        lname,
        email,
        username,
        coment  } = req.body

            //add to db
    try{
        const payment = await Payment.create({ amount, type, method,fname,lname,email,username,coment })
        res.status(200).json(payment)
    }catch(error){
        res.status(400).json({ error: error.message});
    }


}


//delete single donation requests
const deletePayment = async (req, res) => {

    const { id } = req.params

    const result = await Payment.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
        return res.status(404).json({ error: "No such request" });
    }
    res.status(200).json({ message: "Request deleted successfully" });


}


//update single donation requests


const UpdatePayment = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'invalid id' })
    }
    const Payment = await Payment.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!Payment) {
        return res.status(404).json({
            error: 'no such requests'
        })
    }

    res.status(200).json(Payment)
};

module.exports = {  
    createPayment,
    getAllPayments,
    getSinglePayment,
    deletePayment,
    UpdatePayment
}

