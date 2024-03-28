const express = require('express');
const dotenv = require('dotenv');
const pricingRoutes = require('./routes/pricingRoutes');

dotenv.config();

// Initialize Express app
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Use pricing routes
app.use('/pricing', pricingRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
