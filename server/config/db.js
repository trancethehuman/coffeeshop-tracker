const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config();

//Setup database credentials
const connectionString = process.env.MONGODB_CONNECTION_STRING;

const connectToDatabase = async () => {
    const connection = await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log(`Connected to MongoDB Atlas Database! ${connection.connection.host}`.cyan.bold);
};

module.exports = connectToDatabase;
