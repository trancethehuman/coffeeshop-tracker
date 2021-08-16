const mongoose = require('mongoose');
require('dotenv').config();

//Setup database credentials
const connectionString = process.env.MONGODB_CONNECTION_STRING;

const connectToDatabase = async () => {
    const connection = await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log(`Connected to MongoDB Atlas Database!`));
};

module.exports = connectToDatabase;
