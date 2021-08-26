const Coffeeshop = require('../models/Coffeeshop');

// @description         Get all coffeeshop records
// @route               GET /api/v1/shops
// @access              Public
exports.getAllShops =  async (req, res, next) => {
    try {
        const shops = await Coffeeshop.find();
        res.status(200).json({
            success: true,
            data: shops
        });
    } catch(err) {
        res.status(400).json({
            success: false
        })
    }
}

// @description         Get one coffeeshop record
// @route               GET /api/v1/shops/:id
// @access              Public
exports.getShop = async (req, res, next) => {
    try {
        const shop = await Coffeeshop.findById(req.params.id);
        res.status(200).json({
            success: true,
            data: shop
        })
    } catch(err) {
        res.status(400).json({
            success: false
        })
    }
    res.status(200).json({
        success: true,
        data: `Getting ${req.params.id}!`
    });
}

// @description         Create one coffeeshop record
// @route               POST /api/v1/shops/
// @access              Private
exports.createShop = async (req, res, next) => {
    try {
        const shop = await Coffeeshop.create(req.body); //create a new coffeeshop using the mongoose model and data from the body of the POST request
        res.status(201).json({
            success: true,
            data: shop
        });
    } catch(err) {
        res.status(400).json({success: false})
    }
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
