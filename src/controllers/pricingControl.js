const PriceCalculator = require('../services/priceCalculator');

class PricingController {
    static async calculatePrice(req, res) {
        const { zone, organization_id, total_distance, item_type } = req.body;
        try {
            const { total_price } = await PriceCalculator.calculatePrice({ zone, organization_id, total_distance, item_type });
            res.json({ total_price });
        } catch (error) {
            res.status(500).json({ error: 'Error calculating price' });
        }
    }
}

module.exports = PricingController;
