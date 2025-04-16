const express = require('express');
const router = express.Router();
const Case = require('../models/Case');

// Sample case data (replace with real data)
const cases = [
  {
    type: 'Divorce',
    description: 'Legal support for men seeking divorce under Indian laws.',
    laws: ['Hindu Marriage Act, 1955', 'Section 13, Divorce Act'],
  },
  {
    type: 'Property Dispute',
    description: 'Assistance in resolving property disputes for men.',
    laws: ['Transfer of Property Act, 1882', 'Indian Succession Act, 1925'],
  },
  {
    type: 'Domestic Violence Defense',
    description: 'Defense for men falsely accused of domestic violence.',
    laws: ['Protection of Women from Domestic Violence Act, 2005', 'IPC Section 498A'],
  },
];

router.get('/', async (req, res) => {
  const { type } = req.query;
  const caseData = cases.find((c) => c.type.toLowerCase() === type.toLowerCase());
  if (caseData) {
    res.json(caseData);
  } else {
    res.status(404).json({ message: 'Case not found' });
  }
});

module.exports = router;