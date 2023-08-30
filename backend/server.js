require('dotenv').config(); 

const express = require('express');
const donReq = require('./routes/donationRequests.js');


//express app
const app = express()

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})


//routes
app.use('/api/donreq',donReq);

//listen for requests
app.listen(process.env.PORT, () => {

    console.log('listening on port', process.env.PORT);

})

