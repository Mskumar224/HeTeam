const express = require('express');
const router = express.Router();
const Case = require('../models/Case');

router.post('/', async (req, res) => {
  try {
    const newCase = new Case(req.body);
    await newCase.save();
    res.status(201).json({ message: 'Case submitted successfully' });
  } catch (error) {
    console.error('Case submission error:', error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;