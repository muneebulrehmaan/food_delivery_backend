// services/priceCalculator.js
const  Pricing = require('../models/Pricing');

class PriceCalculator {
    static async calculatePrice({ zone, organization_id, total_distance, item_type }) {
        try {
            // Retrieve pricing information from the database
            const pricing = await Pricing.findOne({
                where: {
                    organization_id,
                    zone
                }
            });

            // Calculate total price
            let total_price = pricing.fix_price;
            if (total_distance > pricing.base_distance_in_km) {
                const additional_distance = total_distance - pricing.base_distance_in_km;
                const km_price = item_type === 'perishable' ? pricing.km_price_perishable : pricing.km_price_non_perishable;
                total_price += additional_distance * km_price;
            }

            // Return total price in cents to avoid decimal issues
            return { total_price: total_price * 100 };
        } catch (error) {
            throw new Error('Error calculating price');
        }
    }
}

module.exports = PriceCalculator;
