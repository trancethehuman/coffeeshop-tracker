const Coffeeshop = require('../models/Coffeeshop');
const ErrorResponse = require('../utils/errorResponse');

// @description         Get all coffeeshop records
// @route               GET /api/v1/shops
// @access              Public
exports.getAllShops =  async (req, res, next) => {
    try {
        const shops = await Coffeeshop.find();
        res.status(200).json({
            success: true,
            count: shops.length,
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
        if (!shop) {
            next(new ErrorResponse(`Shop of ID ${req.params.id} not found.`, 404));
        } else {
            res.status(200).json({
                success: true,
                data: shop
            })
        }
    } catch(err) {
        next(new ErrorResponse(`Shop of ID ${req.params.id} not found.`, 404));
    }
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
exports.updateShop = async (req, res, next) => {
    try {
        const shop = await Coffeeshop.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!shop) {
            res.status(400).json({success: false, message: `Query syntax is correct, but there isn't any data that we could find.`})
        } else {
            res.status(200).json({success: true, data: shop, status: `Deleted!`})
        }
    } catch(err) {
        res.status(400).json({success: false})
    }
}

// @description         Delete a coffeeshop record
// @route               DELETE /api/v1/shops/:id
// @access              Private
exports.deleteShop = async (req, res, next) => {
    try {
        const shop = await Coffeeshop.findByIdAndDelete(req.params.id);
        if(!shop) {
            res.status(400).json({success: false, message: `Query syntax is correct, but there isn't any data that we could find.`})
        }
        res.status(200).json({
            success: true,
            data: shop
        })
    } catch(err) {
        res.status(400).json({success: false})
    }
}
