const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//Setup database credentials
const mongodbPassword = process.env.MONGODB_PASSWORD;
const connectionString = `mongodb+srv://hainghiem:${mongodbPassword}@coffeeshop-tracker.kmuzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();
//Routes
app.get('/api/v1/shops',(req, res) => {
    res.status(200).json({
        success: true,
        message: "All Coffeeshops in database!"
    });
});

app.get('/api/v1/shops/:id',(req, res) => {
    res.status(200).json({
        success: true,
        message: `Getting ${req.params.id}!`
    });
});

app.post('/api/v1/shops',(req, res) => {
    res.status(200).json({
        success: true,
        message: "Create new coffeeshop entry!"
    });
});

app.put('/api/v1/shops/:id',(req, res) => {
    res.status(200).json({
        success: true,
        message: `Coffeeshop ${req.params.id} updated!`
    });
});

app.delete('/api/v1/shops/:id',(req, res) => {
    res.status(200).json({
        success: true,
        message: `Deleting entry ${req.params.id}!`
    });
});

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
