const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// LOAD ENV
dotenv.config({
  path: './config.env'
})

const app = express()

// Dev logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Player route
app.use('/api/v1/player/steam', require('./routes/player'))

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${port}`)
})