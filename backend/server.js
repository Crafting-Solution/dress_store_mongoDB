require('dotenv').config();
const PORT = process.env.PORT || 4000;

const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({message: 'Welcome to Dress Store Application'})
})
mongoose.connect('mongodb+srv://festusasiyanbi:Fapseydolls1$@marketplace.iaiekni.mongodb.net/?retryWrites=true&w=majority&appName=marketplace')
.then(() => {
    app.listen(PORT, () => {
        console.log("App connected to mongodb & running on the port: ", PORT)
    })
})
.catch((error) => {
    console.error(error)
})


