// // server.js
// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/db');

// // Load env variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/participant', require('./routes/participantRoutes'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// List of allowed origins (add your frontend URLs here)
const allowedOrigins = [
  'http://localhost:5173',               // Vite local dev server URL
  'http://localhost:5174',               // Vite local dev server URL
  'https://jhankaar-7htu.vercel.app'  // Replace with your actual Vercel URL
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like Postman, curl, mobile apps)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true, // if you use cookies or auth headers
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/participant', require('./routes/participantRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

