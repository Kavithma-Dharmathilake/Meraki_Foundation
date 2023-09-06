const express = require('express');

const {
    loginUser,
    signUpUser,
    createuser,
    getAllUser,
    getSingleUser,
    deleteuser,
    Updateuser
} = require('../controllers/user');

const router = express.Router();


router.post('/login',loginUser)
router.post('/signup',signUpUser)

//get all donation requests
router.get('/', getAllUser)

//get single donation requests
router.get('/:email', getSingleUser)

//save single donation requests
router.post('/', createuser)

//delete single donation requests
router.delete('/:id', deleteuser)

//update single donation requests
router.patch('/:id',Updateuser)



module.exports = router