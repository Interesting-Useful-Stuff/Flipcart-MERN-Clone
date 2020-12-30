const express = require('express')
const env = require('dotenv')
const app = express()
const mongoose = require('mongoose')

//routes
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')

// environment variable
env.config()

//mongodb connection string
const mongodbConnectionString = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@flipcart.ks697.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`

mongoose.connect(mongodbConnectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then(() => {
    console.log('Database connected ...')
  })

app.use(express.json())

app.use('/api', authRoutes)
app.use('/api', adminRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})