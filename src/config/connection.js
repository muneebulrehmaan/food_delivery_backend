const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    logging: false
});

// Export the sequelize instance
module.exports = sequelize;

(async () => {
    try {
        // Synchronize models with the database without dropping and recreating tables
        await sequelize.sync({ force: false });
        console.log('All models were synchronized. Connected Successfully');
    } catch (error) {
        console.error('Unable to synchronize models with the database:', error);
    }
})();
