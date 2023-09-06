const express = require('express');
const User = require('../models/user');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const router = express.Router();

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})

}


const loginUser = async (req, res) =>{

    const {email, password} = req.body

    try{

        const user = await User.login(email, password)

        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch(error){
        res.status(400).json({error:error.message})
    }

   
}

const signUpUser = async (req, res) =>{

    const {name, email, username, phone, password} = req.body

    try{

        const user = await User.signup(name, username,email, phone, password)

        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch(error){
        res.status(400).json({error:error.message})
    }

}

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

    try {
        const email = req.params.email;
        const user = await User.findOne({ email }); // Find the user by email
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        // Return the user's details as JSON response
        res.json(user);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }

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
        const user_id = req.user._id
        const user = await User.create({name, username,email,phone,password, user_id})
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
    loginUser,
    signUpUser,
    createuser,
    getAllUser,
    getSingleUser,
    deleteuser,
    Updateuser
}

