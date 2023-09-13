require('dotenv').config();

const express = require('express');
const donReq = require('./routes/donationRequests.js');
const user = require('./routes/user.js');
const contact = require('./routes/contact.js');
const mongoose = require('mongoose');
const cors = require('cors');
const auth = require('./routes/auth.js')
const payment = require('./routes/payments.js');
const blood = require('./routes/Blood.js');
const userProfile = require('./routes/userProfile.js');


//express app
const app = express();
const router = express.Router();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

app.use(cors());

const corsOptions = {
  origin: "https://meraki-frontend.onrender.com/", // frontend URI (ReactJS)
}



//routes
app.use('/api/donreq', donReq);
app.use('/api/user', user);
app.use('/api/contact', contact);
app.use('/api/auth', auth);
app.use('/api/payment',payment);
app.use('/api/blood', blood);
app.use('/api/userProfile', userProfile)


//connect to db
mongoose.connect(process.env.MONGO_URI || 3000)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {

      console.log('connected to db and listening on port', process.env.PORT);
    })

  })
  .catch((error) => {

    console.log(error);
  })



