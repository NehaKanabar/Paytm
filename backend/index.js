// backend/index.js
const express = require('express');
const cors = require('cors');

const rootRouter = require('./routes/index'); // Importing the routes from routes/index.js

const app = express(); // Initialize Express app

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies

// Root Route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the DB!",
    });
});

// API Routes
app.use("/api/v1", rootRouter); // Use rootRouter for any routes prefixed with /api/v1

// Start the Server
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
