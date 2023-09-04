require('dotenv').config(); 

const express = require('express');
const donReq = require('./routes/donationRequests.js');
const user = require('./routes/user.js');
const mongoose = require('mongoose');


//express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})


//routes
app.use('/api/donreq',donReq);
app.use('/api/user', user);

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then( () =>{
        //listen for requests
    app.listen(process.env.PORT, () => {

    console.log('connected to db and listening on port', process.env.PORT);
})

})
.catch((error) => {

    console.log(error);
})



