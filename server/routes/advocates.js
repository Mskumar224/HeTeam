const express = require('express');
const router = express.Router();
const Advocate = require('../models/Advocate');

// Sample advocate data (replace with real data)
const advocates = [
  {
    name: 'John Doe',
    specialization: 'Divorce',
    location: 'Delhi',
    language: 'English',
  },
  {
    name: 'Ravi Sharma',
    specialization: 'Property Dispute',
    location: 'Mumbai',
    language: 'Hindi',
  },
];

router.get('/', async (req, res) => {
  const { caseType } = req.query;
  const filteredAdvocates = advocates.filter((a) =>
    a.specialization.toLowerCase().includes(caseType.toLowerCase())
  );
  res.json(filteredAdvocates);
});

module.exports = router;