const express = require('express')
require('dotenv').config()
const router = require('./routes')

const app = express()

app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 5500

app.listen(PORT, () => {
    console.log("Server Started on PORT " + PORT)
})