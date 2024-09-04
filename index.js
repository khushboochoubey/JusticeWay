//index.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();
 
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


// Report routes
const reportRoutes = require('./routes/reports');
app.use(reportRoutes);

// Set the port
const PORT = process.env.PORT || 5002;

//for deployment-- app.listen ke uper hi rkhna
const path = require('path');
app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});


// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



