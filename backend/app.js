require('dotenv').config()

const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const routes = require('./routes')

const port = 3001
const app = express()

app.use(cookieParser())
app.use(express.json())

// API routes first
app.use('/api', routes)

// Static files after API
app.use(express.static(path.resolve('..', 'frontend', 'dist')))

// Catch-all handler - используем app.use вместо app.get
app.use((req, res) => {
    res.sendFile(path.resolve("..", "frontend", "dist", "index.html"))
})

mongoose.connect(
    process.env.DB_CONNECTION_STRING
).then(() => {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`)
    })
})