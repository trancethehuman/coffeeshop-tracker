const express = require('express');
const router = express.Router();

//Routes
router.get('/',(req, res) => {
    res.status(200).json({
        success: true,
        message: "All Coffeeshops in database!"
    });
});

router.get('/:id',(req, res) => {
    res.status(200).json({
        success: true,
        message: `Getting ${req.params.id}!`
    });
});

router.post('/',(req, res) => {
    res.status(200).json({
        success: true,
        message: "Create new coffeeshop entry!"
    });
});

router.put('/:id',(req, res) => {
    res.status(200).json({
        success: true,
        message: `Coffeeshop ${req.params.id} updated!`
    });
});

router.delete(':id',(req, res) => {
    res.status(200).json({
        success: true,
        message: `Deleting entry ${req.params.id}!`
    });
});

module.exports = router;
