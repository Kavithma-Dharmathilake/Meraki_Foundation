const express = require('express');
const {
    createPayment,
    getAllPayments,
    getSinglePayment,
    deletePayment,
    UpdatePayment
} = require('../controllers/Payment');

const router = express.Router();


//get all donation requests
router.get('/', getAllPayments)

//get single donation requests
router.get('/:id', getSinglePayment)

//save single donation requests
router.post('/', createPayment)

//delete single donation requests
router.delete('/:id', deletePayment)

//update single donation requests
router.patch('/:id',UpdatePayment)



module.exports = router