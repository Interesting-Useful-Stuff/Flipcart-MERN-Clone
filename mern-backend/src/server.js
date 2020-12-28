const express = require('express')
const env = require('dotenv')
const app = express()

// environment variable
env.config() 

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Hello from SERVER'
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})