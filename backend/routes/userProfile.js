const express = require('express');

const {
    createuser,
    getAllUser,
    getSingleUser,
    deleteuser,
    Updateuser
} = require('../controllers/user');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();
router.use(requireAuth)

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