const Coffeeshop = require('../models/Coffeeshop');

// @description         Get all coffeeshop records
// @route               GET /api/v1/shops
// @access              Public
exports.getAllShops = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "All Coffeeshops in database!"
    });
}

// @description         Get one coffeeshop record
// @route               GET /api/v1/shops/:id
// @access              Public
exports.getShop = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Getting ${req.params.id}!`
    });
}

// @description         Create one coffeeshop record
// @route               POST /api/v1/shops/
// @access              Private
exports.createShop = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Create new coffeeshop entry!`
    });
}

// @description         Update a coffeeshop record
// @route               PUT /api/v1/shops/:id
// @access              Private
exports.updateShop = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Coffeeshop ${req.params.id} updated!`
    });
}

// @description         Delete a coffeeshop record
// @route               DELETE /api/v1/shops/:id
// @access              Private
exports.deleteShop = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Deleting shop record  ${req.params.id}!`
    });
}
