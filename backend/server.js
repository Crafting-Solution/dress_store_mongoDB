require('dotenv').config();
const PORT = process.env.PORT || 4000;
const marketplaceRoutes = require('./routes/marketplaceRoutes')

const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.use(express.json());
app.use("/api/products", marketplaceRoutes)

mongoose.connect(
    'mongodb+srv://festusasiyanbi:Fapseydolls1$@marketplace.iaiekni.mongodb.net/?retryWrites=true&w=majority&appName=marketplace', 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log("App connected to mongodb & running on the port: ", PORT)
        })
    })
    .catch((error) => {
        console.error(error)
    })


