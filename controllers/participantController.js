// controllers/participantController.js
const Participant = require('../models/participant')

// Register a participant
exports.registerParticipant = async (req, res) => {
  try {
    const newParticipant = new Participant(req.body);
    await newParticipant.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
};

// Get participants by event
exports.getParticipantsByEvent = async (req, res) => {
  const { eventName } = req.params;
  try {
    const participants = await Participant.find({ events: eventName });
    res.status(200).json(participants);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch participants', error: error.message });
  }
};
