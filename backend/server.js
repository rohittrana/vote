const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file (optional)
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection String
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/yourDatabaseName';

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err.message));

// Basic route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Define your routes here (for example, authentication routes)
app.use('/api/auth', require('./routes/auth')); // Make sure this file exists

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
