const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Organization = require('./Organization');
const Item = require('./Item');

const Pricing = sequelize.define('Pricing', {
    zone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    base_distance_in_km: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 5
    },
    km_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    fix_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
});

Organization.hasMany(Pricing);
Pricing.belongsTo(Organization);

Item.hasMany(Pricing);
Pricing.belongsTo(Item);

module.exports = Pricing;
