// jobApplication.js

const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // dob: {
  //   type: Date,
  //   required: true
  // },
  city: {
    type: String,
    required: true
  },
  resume: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('JobApplication', jobApplicationSchema);
