const mongoose = require('mongoose');

const advocateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  location: { type: String, required: true },
  language: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Advocate', advocateSchema);