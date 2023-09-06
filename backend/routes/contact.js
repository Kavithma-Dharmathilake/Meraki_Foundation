const express = require('express');
const {
    createContact,
    getAllContact,
    getSingleContact,
    deleteContact,
    UpdateContact
} = require('../controllers/contact');

const router = express.Router();


//get all donation requests
router.get('/', getAllContact)

//get single donation requests
router.get('/:id', getSingleContact)

//save single donation requests
router.post('/', createContact)

//delete single donation requests
router.delete('/:id', deleteContact)

//update single donation requests
router.patch('/:id',UpdateContact)



module.exports = router