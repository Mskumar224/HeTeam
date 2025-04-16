const express = require('express');
const router = express.Router();
const Advocate = require('../models/Advocate');

router.get('/', async (req, res) => {
  try {
    const { location, caseType, language } = req.query;
    const query = {};
    if (location) query.location = location;
    if (language) query.language = language;
    if (caseType) query.specialization = caseType; // Assumes specialization aligns with caseType
    const advocates = await Advocate.find(query);
    res.json(advocates);
  } catch (error) {
    console.error('Error fetching advocates:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;