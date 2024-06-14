require('dotenv').config();

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({message: 'Welcome to Dress Store Application'})
})
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("App is running on the port: ", PORT)
})