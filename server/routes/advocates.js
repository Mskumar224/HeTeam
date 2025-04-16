const express = require('express');
const Advocate = require('../models/Advocate');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { location, caseType, language } = req.query;
    const query = {};
    if (location) query.location = location;
    if (caseType) query.specialization = caseType;
    if (language) query.languages = language;

    const advocates = await Advocate.find(query);
    res.status(200).json(advocates);
  } catch (error) {
    console.error('Advocates error:', error);
    res.status(500).json({ message: 'Error fetching advocates. Please try again later.', error: error.message });
  }
});

module.exports = router;