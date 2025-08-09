// routes/participantRoutes.js
// routes/participants.js

// const express = require('express');
// const router = express.Router();
// const Participant = require('../models/participant');

// router.post('/register', async (req, res) => {
//   try {
//     const { name, email, class: userClass, mobileno, event } = req.body;

//     const newParticipant = new Participant({
//       name,
//       email,
//       class: userClass,
//       mobileno,
//       event,
//     });

//     await newParticipant.save();
//     res.status(201).json({ message: 'Registration successful!' });
//   } catch (error) {
//     res.status(500).json({ error: 'Server error while registering.' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Participant = require('../models/participant');

router.post('/register', async (req, res) => {
  try {
    console.log("📩 Incoming request to /register");
    console.log("📝 Request body:", req.body);

    const { name, email, class: userClass, mobileno, event } = req.body;

    if (!name || !email || !userClass || !mobileno || !event) {
      console.log("❌ Missing fields in request");
      return res.status(400).json({ error: "All fields are required" });
    }

    const newParticipant = new Participant({
      name,
      email,
      class: userClass,
      mobileno,
      event,
    });

    const savedParticipant = await newParticipant.save();
    console.log("✅ Participant saved successfully:", savedParticipant);

    res.status(201).json({ message: 'Registration successful!', participant: savedParticipant });

  } catch (error) {
    console.error("🚨 Error while saving participant:", error);
    res.status(500).json({ error: 'Server error while registering.' });
  }
});

module.exports = router;
