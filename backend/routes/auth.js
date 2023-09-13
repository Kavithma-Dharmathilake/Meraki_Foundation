const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Import your User model

const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
  try {
    const { name, username, email, phone, password } = req.body;

    // Create a new user
    const newUser = new User({
      name,
      username,
      email,
      phone,
      password
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if the user exists
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ error: 'Authentication failed' });
      }
  
      if (user.password !== password) {
        return res.status(401).json({ error: 'Authentication failed' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, 'your_secret_key_here');
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router;