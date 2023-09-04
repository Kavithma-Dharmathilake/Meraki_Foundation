const express = require('express');
const User = require('../models/user');
const mongoose = require('mongoose');

const router = express.Router();


//get all donation requests

const getAllUser = async (req, res) => {

    const user = await User.find({}).sort({createdAt: -1})

    if(user){
        res.status(200).json(user);
    }else{
        res.status(404).json({error : "no such request"})
    }
   


}
//get single donation requests

const getSingleUser = async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such requests"})
    }

    const user = await User.findById(id)
    res.status(200).json(user)

}

//create single donation requests

const createuser = async (req, res) => {

    const {
      name,
      username,
      email,
      phone,
      password,
      
            } = req.body

            //add to db
    try{
        const user = await User.create({name, username,email,phone,password})
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({ error: error.message});
    }


}


//delete single donation requests
const deleteuser = async (req, res) => {

    const { id } = req.params

    const result = await User.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
        return res.status(404).json({ error: "No such request" });
    }
    res.status(200).json({ message: "Request deleted successfully" });


}


//update single donation requests


const Updateuser = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'invalid id' })
    }
    const user = await User.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!user) {
        return res.status(404).json({
            error: 'no such requests'
        })
    }

    res.status(200).json(user)
};

module.exports = {  
    createuser,
    getAllUser,
    getSingleUser,
    deleteuser,
    Updateuser
}

