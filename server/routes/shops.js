const express = require('express');
const router = express.Router();
const {getAllShops, getShop, createShop, updateShop, deleteShop } = require('../controllers/shops');

//Routes
router.route('/')
    .get(getAllShops)
    .post(createShop)

router.route('/:id')
    .get(getShop)
    .put(updateShop)
    .delete(deleteShop)

module.exports = router;
