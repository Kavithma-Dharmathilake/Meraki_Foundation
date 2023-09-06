const express = require('express');
const donReq = require('../models/donationRequest');
const mongoose = require('mongoose');

const router = express.Router();


//get all donation requests

const getAllDonRqe = async (req, res) => {

    const donreq = await donReq.find({}).sort({createdAt: -1})

    if(donreq){
        res.status(200).json(donreq);
    }else{
        res.status(404).json({error : "no such request"})
    }
   


}
//get single donation requests

const getSingleDonReq = async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such requests"})
    }

    const donreq = await donReq.findById(id)
    res.status(200).json(donreq)

}

//create single donation requests

const createDonReq = async (req, res) => {

    const {
        category, 
        title, 
        Description, 
        amountRequired, 
        amountReceived, 
        contactDetails,
        date
            } = req.body

            //add to db
    try{
        const donreq = await donReq.create({category,title, Description, amountRequired,amountReceived,contactDetails, date})
        res.status(200).json(donreq)
    }catch(error){
        res.status(400).json({ error: error.message});
    }


}


//delete single donation requests
const deleteDonReq = async (req, res) => {

    const { id } = req.params

    const result = await donReq.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
        return res.status(404).json({ error: "No such request" });
    }
    res.status(200).json({ message: "Request deleted successfully" });


}


//update single donation requests


const UpdateDonReq = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'invalid id' })
    }
    const donreq = await donReq.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!donreq) {
        return res.status(404).json({
            error: 'no such requests'
        })
    }

    res.status(200).json(donreq)
};

module.exports = {  
    createDonReq,
    getAllDonRqe,
    getSingleDonReq,
    deleteDonReq,
    UpdateDonReq
}

