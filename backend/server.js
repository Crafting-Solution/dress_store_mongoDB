require('dotenv').config(); // This should be at the top of your file
const PORT = process.env.PORT || 5000;
const marketplaceRoutes = require('./routes/marketplaceRoutes');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use("/api", marketplaceRoutes);

// Welcome message route for the root URL
app.get('/', (req, res) => {
    res.json({ message: "Welcome to DressStore application." });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log("App connected to MongoDB & running on port:", PORT);
            console.log('MongoDB URI:', process.env.MONGO_URI);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });
