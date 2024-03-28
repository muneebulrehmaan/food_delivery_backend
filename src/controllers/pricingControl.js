const PriceCalculator = require('../services/priceCalculator');

async function calculatePrice(req, res) {
    const { zone, organization_id, total_distance, item_type } = req.body;
    try {
        const { total_price } = await PriceCalculator.calculatePrice({ zone, organization_id, total_distance, item_type });
        res.json({ total_price });
    } catch (error) {
        console.error('Error calculating price pricing Control:', error);
        res.status(500).json({ error: 'Error calculating price' });
    }
}

module.exports = { calculatePrice };
