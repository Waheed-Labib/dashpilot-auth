const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth.routes');

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1', authRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Express server running 🚀' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
