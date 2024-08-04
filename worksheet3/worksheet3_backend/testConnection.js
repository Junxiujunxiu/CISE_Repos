require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.DB_URI;

console.log(`Connecting to MongoDB with URI: ${uri}`);

mongoose.connect(uri, {})
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err.message));
