const mongoose = require('mongoose');
const Advocate = require('./models/Advocate');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('MongoDB connected');
  await Advocate.deleteMany({});
  await Advocate.insertMany([
    {
      name: "Ravi Sharma",
      location: "Mumbai - Bombay High Court",
      specialization: "False Dowry Allegations",
      languages: "Marathi, Hindi, English",
      contact: "ravi.sharma@example.com"
    },
    {
      name: "Anil Patel",
      location: "Mumbai - Bombay High Court",
      specialization: "Alimony Disputes",
      languages: "Marathi, English",
      contact: "anil.patel@example.com"
    },
    {
      name: "Vikram Rao",
      location: "Mumbai - Bombay High Court",
      specialization: "Child Custody",
      languages: "Telugu, Hindi",
      contact: "vikram.rao@example.com"
    },
    {
      name: "Suresh Nair",
      location: "Chennai - Madras High Court",
      specialization: "False Dowry Allegations",
      languages: "Tamil, English",
      contact: "suresh.nair@example.com"
    }
  ]);
  console.log('Advocates seeded');
  mongoose.connection.close();
}).catch(err => console.error(err));