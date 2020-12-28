const express = require('express')
const env = require('dotenv')
const app = express()
const mongoose = require('mongoose')

// environment variable
env.config() 

//mongodb connection string
const mongodbConnectionString = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@flipcart.ks697.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`

mongoose.connect(mongodbConnectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Database connected ...')
  })

app.use(express.json())

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Hello from SERVER'
  })
})

app.post('/data', (req, res, next) => {
  res.status(200).json({
    message: req.body
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})