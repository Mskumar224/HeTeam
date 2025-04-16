const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
  type: { type: String, required: true },
  description: { type: String, required: true },
  laws: [{ type: String }],
});

module.exports = mongoose.model('Case', caseSchema);