const express = require('express');
const {
    createBlood,
    getAllBlood,
    getSingleBlood,
    deleteBlood,
    UpdateBlood
} = require('../controllers/blood');

const router = express.Router();


//get all donation requests
router.get('/', getAllBlood)

//get single donation requests
router.get('/:id', getSingleBlood)

//save single donation requests
router.post('/', createBlood)

//delete single donation requests
router.delete('/:id', deleteBlood)

//update single donation requests
router.patch('/:id',UpdateBlood)



module.exports = router