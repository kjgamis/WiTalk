const mongoose = require('mongoose');

const InterpreterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true
  },
  certifications: {
    type: [String],
    default: []
  },
  gender: {
    type: String,
    required: true
  },
  hourlyRate: {
    type: Number,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  yearsOfExperience: {
    type: Number,
    required: true
  },
  introduction: {
    type: String,
    required: true
  },
  profilePicLink: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // Using a simple regex to validate if it's a valid URL
        return /^(http|https):\/\/[^ "]+$/.test(v);
      },
      message: 'Invalid URL for profile picture link'
    }
  }
});

module.exports = mongoose.model('Interpreters', InterpreterSchema);
