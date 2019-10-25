const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

// LOAD ENV
dotenv.config({
  path: './config.env'
})

const app = express()

// Dev logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// CORS Middleware
app.use(cors());
// Player route
app.use('/api/v1/player/steam', require('./routes/player'))

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${port}`)
})