const express = require('express');
const Advocate = require('../models/Advocate');
const router = express.Router();

router.get('/', async (req, res) => {
  const { location, caseType, language } = req.query;

  try {
    const query = {};
    if (location) query.location = { $regex: location.replace(/\+/g, ' '), $options: 'i' };
    if (caseType) query.specialization = { $regex: caseType.replace(/\+/g, ' '), $options: 'i' };
    if (language) query.languages = { $regex: language.replace(/\+/g, ' '), $options: 'i' };

    const advocates = await Advocate.find(query);
    if (advocates.length === 0) {
      return res.status(404).json({ message: 'No advocates found for the specified criteria.' });
    }
    res.status(200).json(advocates);
  } catch (error) {
    console.error('Advocate search error:', error);
    res.status(500).json({ message: 'Error fetching advocates. Please try again.' });
  }
});

module.exports = router;