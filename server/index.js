const express = require('express');
const shops = require('./routes/shops'); //routes
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan'); //logger library
require('dotenv').config({path: './config/config.env'});
const connectToDatabase = require('./config/db')

const app = express();

// Logging (only in development mode)
if (process.env.NODE_ENV === `development`) {
    app.use(morgan('dev'));
}

app.use('/api/v1/shops', shops);


// Start express server
const PORT = process.env.PORT || 3000;
const server = app.listen( PORT, () => console.log(`Express app listening in ${process.env.NODE_ENV} mode, on port ${server.address().port}.`));

// Connect to database
connectToDatabase();

// Unhandled Rejection Promises (for when there's no catch to catch the stuff, it falls to this). Shuts the server down in case this happens
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
})
