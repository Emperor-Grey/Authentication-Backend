const mongoose = require('mongoose');

const connect = mongoose.connect('mongodb://localhost:27017/Authentication');

// check database connection
connect
  .then(() => {
    console.log('Connected to the mongodb database');
  })
  .catch(() => {
    console.log('Database cannot be connected');
  });

// Schema
const loginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// creating a model
const collection = new mongoose.model('users', loginSchema);

module.exports = collection;
