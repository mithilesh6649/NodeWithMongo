// src/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
// const database = require("./models/index.models.js");
const connectDB = require("./models/index.models.js");
const cookieParser = require('cookie-parser');
// console.log('dsfdsfd', database);
dotenv.config();

const app = express();
// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); // Set path for views folder

app.use(cors());
app.use(cookieParser()); // Parse cookies (useful for authentication)


// Common Middleware
// Parse JSON bodies with a limit (e.g., 10mb)
app.use(express.json({
  limit: '10mb'
}));
// Parse URL-encoded bodies with a limit (e.g., 10mb)
app.use(express.urlencoded({
  extended: true,
  limit: '10mb'
}));

// Serve static files from the "public" folder
app.use(express.static('public')); // This will serve files in the 'public' folder


// Start the server
const PORT = process.env.PORT || 5000;



const startServer = async () => {
  try {
    await connectDB(); // Wait for MongoDB connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

// Start the server
startServer();