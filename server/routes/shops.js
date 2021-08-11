const express = require('express');
const router = express.Router();

//Routes
router.get('/api/v1/shops',(req, res) => {
    res.status(200).json({
        success: true,
        message: "All Coffeeshops in database!"
    });
});

router.get('/api/v1/shops/:id',(req, res) => {
    res.status(200).json({
        success: true,
        message: `Getting ${req.params.id}!`
    });
});

router.post('/api/v1/shops',(req, res) => {
    res.status(200).json({
        success: true,
        message: "Create new coffeeshop entry!"
    });
});

router.put('/api/v1/shops/:id',(req, res) => {
    res.status(200).json({
        success: true,
        message: `Coffeeshop ${req.params.id} updated!`
    });
});

router.delete('/api/v1/shops/:id',(req, res) => {
    res.status(200).json({
        success: true,
        message: `Deleting entry ${req.params.id}!`
    });
});

export {router};
