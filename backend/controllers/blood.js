const express = require('express');
const Blood = require('../models/blood');
const mongoose = require('mongoose');

const router = express.Router();


//get all donation requests

const getAllBlood = async (req, res) => {

    const blood = await Blood.find({}).sort({createdAt: -1})

    if(blood){
        res.status(200).json(blood);
    }else{
        res.status(404).json({error : "no such request"})
    }
   
}
//get single donation requests

const getSingleBlood = async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such requests"})
    }

    const blood = await Blood.findById(id)
    res.status(200).json(blood)

}

//create single donation requests

const createBlood = async (req, res) => {

    const {
       location,
       organized,
       contact,
       date
            } = req.body

            //add to db
    try{
        const blood = await Blood.create({location, organized, contact, date})
        res.status(200).json(blood)
    }catch(error){
        res.status(400).json({ error: error.message});
    }


}


//delete single donation requests
const deleteBlood = async (req, res) => {

    const { id } = req.params

    const result = await Blood.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
        return res.status(404).json({ error: "No such request" });
    }
    res.status(200).json({ message: "Request deleted successfully" });


}


//update single donation requests


const UpdateBlood = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'invalid id' })
    }
    const blood = await Blood.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!blood) {
        return res.status(404).json({
            error: 'no such requests'
        })
    }

    res.status(200).json(blood)
};

module.exports = {  
    createBlood,
    getAllBlood,
    getSingleBlood,
    deleteBlood,
    UpdateBlood
}

