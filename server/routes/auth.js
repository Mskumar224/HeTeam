const express = require('express');
const nodemailer = require('nodemailer');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, caseType, location, language, description } = req.body;

  try {
    const user = new User({ name, email, caseType, location, language, description });
    await user.save();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'zvertex.247@gmail.com',
        pass: process.env.EMAIL_PASSWORD || ''
      }
    });

    const mailOptions = {
      from: 'zvertex.247@gmail.com',
      to: email,
      subject: 'He Team Registration Confirmation',
      text: `Dear ${name},\n\nThank you for registering with He Team. One of our legal team members will contact you soon to assist with your case.\n\nBest regards,\nHe Team`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Registration successful! A confirmation email has been sent, and our legal team will contact you soon.' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed. Please try again later.', error: error.message });
  }
});

module.exports = router;