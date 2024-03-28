const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Item = sequelize.define('Item', {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    }
});

module.exports = Item;
