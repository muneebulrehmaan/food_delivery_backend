const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Organization = require('./Organization');
const Item = require('./Item');

const Pricing = sequelize.define('Pricing', {
  organization_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  zone: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  base_distance_in_km: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  km_price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  fix_price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
},{tableName:'pricing',timestamps: false});

Pricing.belongsTo(Organization, { foreignKey: 'organization_id' });
Pricing.belongsTo(Item, { foreignKey: 'item_id' });

module.exports = Pricing;
