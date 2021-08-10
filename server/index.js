const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//Setup database credentials
const mongodbPassword = process.env.MONGODB_PASSWORD;
const connectionString = `mongodb+srv://hainghiem:${mongodbPassword}@coffeeshop-tracker.kmuzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

//Start express server
const listener = app.listen(process.env.PORT || 3000, () => console.log(`Express app listening on port ${listener.address().port}.`));

//Connect to database
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log(`Connected to MongoDB Atlas Database!`))
.catch(err => console.log(err));
