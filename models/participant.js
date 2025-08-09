// models/Participant.js
// models/Participant.js

const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  
  email: {
    type: String,
    required: true
  },

  class: {
    type: String,
    required: true
  },

  mobileno: {
    type: String,
    required: true
  },

  event: {
    type: String,
    required: true
  },

  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Participant = mongoose.model('Participant', participantSchema);
module.exports = Participant;
