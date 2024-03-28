const express = require('express');
const PricingController = require('../controllers/pricingControl');

const router = express.Router();

router.post('/calculate-price', PricingController.calculatePrice);

module.exports = router;
