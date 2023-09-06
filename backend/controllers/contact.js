const express = require('express');
const Contact = require('../models/contact');
const mongoose = require('mongoose');

const router = express.Router();


//get all donation requests

const getAllContact = async (req, res) => {

    const contact = await Contact.find({}).sort({createdAt: -1})

    if(contact){
        res.status(200).json(contact);
    }else{
        res.status(404).json({error : "no such request"})
    }
   


}
//get single donation requests

const getSingleContact = async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such requests"})
    }

    const contact = await Contact.findById(id)
    res.status(200).json(contact)

}

//create single donation requests

const createContact = async (req, res) => {

    const {
        fname,
        lname,
        email,
        phone,
        msg
            } = req.body

            //add to db
    try{
        const contact = await Contact.create({fname, lname,email, phone,msg})
        res.status(200).json(contact)
    }catch(error){
        res.status(400).json({ error: error.message});
    }


}


//delete single donation requests
const deleteContact = async (req, res) => {

    const { id } = req.params

    const result = await Contact.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
        return res.status(404).json({ error: "No such request" });
    }
    res.status(200).json({ message: "Request deleted successfully" });


}


//update single donation requests


const UpdateContact = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'invalid id' })
    }
    const Contact = await Contact.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!Contact) {
        return res.status(404).json({
            error: 'no such requests'
        })
    }

    res.status(200).json(Contact)
};

module.exports = {  
    createContact,
    getAllContact,
    getSingleContact,
    deleteContact,
    UpdateContact
}

