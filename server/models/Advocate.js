const mongoose = require('mongoose');

const advocateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  specialization: { type: String, required: true },
  languages: { type: String, required: true },
  contact: { type: String, required: true }
});

module.exports = mongoose.model('Advocate', advocateSchema);