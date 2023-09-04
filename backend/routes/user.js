const express = require('express');

const {
    createuser,
    getAllUser,
    getSingleUser,
    deleteuser,
    Updateuser
} = require('../controllers/user');

const router = express.Router();


//get all donation requests
router.get('/', getAllUser)

//get single donation requests
router.get('/:id', getSingleUser)

//save single donation requests
router.post('/', createuser)

//delete single donation requests
router.delete('/:id', deleteuser)

//update single donation requests
router.patch('/:id',Updateuser)



module.exports = router