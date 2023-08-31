const express = require('express');
const donReq = require('../models/donationRequest');
const {
    createDonReq,
    getAllDonRqe,
    getSingleDonReq,
    deleteDonReq,
    UpdateDonReq
} = require('../controllers/donationRequest');

const router = express.Router();


//get all donation requests
router.get('/', getAllDonRqe)

//get single donation requests
router.get('/:id', getSingleDonReq)

//save single donation requests
router.post('/', createDonReq)

//delete single donation requests
router.delete('/:id', deleteDonReq)

//update single donation requests
router.patch('/:id',UpdateDonReq)



module.exports = router