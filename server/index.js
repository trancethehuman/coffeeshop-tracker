const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//Setup database credentials
const mongodbPassword = process.env.MONGODB_PASSWORD;
const connectionString = `mongodb+srv://hainghiem:${mongodbPassword}@coffeeshop-tracker.kmuzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

//Start express server
const PORT = process.env.PORT || 3000;
const listener = app.listen( PORT, () => console.log(`Express app listening in ${process.env.NODE_ENV} mode, on port ${listener.address().port}.`));

//Connect to database
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log(`Connected to MongoDB Atlas Database!`))
.catch(err => console.log(err));
