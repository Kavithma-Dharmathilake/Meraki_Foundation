const express = require('express');

const router = express.Router();


//get all donation requests
router.get('/', (req,res) => {

    res.json({
        mssg:"Get all requests"
    })

})


//get single donation requests
router.get('/:id', (req,res) => {

    res.json({
        mssg:"Get single donationr requets"
    })

})

//save single donation requests
router.post('/', (req,res) => {

    res.json({
        mssg:"save new donation requests"
    })

})

//delete single donation requests
router.post('/:id', (req,res) => {

    res.json({
        mssg:"delete a donation requests"
    })

})

//update single donation requests
router.patch('/:id', (req,res) => {

    res.json({
        mssg:"update a donation requests"
    })

})



module.exports = router