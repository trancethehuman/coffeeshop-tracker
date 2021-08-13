const express = require('express');
const shops = require('./routes/shops');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('./middlewares/logger');
require('dotenv').config();


//Setup database credentials
const mongodbPassword = process.env.MONGODB_PASSWORD;
const connectionString = `mongodb+srv://hainghiem:${mongodbPassword}@coffeeshop-tracker.kmuzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(logger);
app.use('/api/v1/shops', shops);


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
