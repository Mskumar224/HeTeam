const express = require('express');
const router = express.Router();
const Advocate = require('../models/Advocate');

router.get('/', async (req, res) => {
  try {
    const advocates = await Advocate.find();
    res.json(advocates);
  } catch (error) {
    console.error('Error fetching advocates:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;