const express = require('express');
const dotenv = require('dotenv');
const pricingRoutes = require('./routes/pricingRoutes');

dotenv.config();


const app = express();


app.use(express.json());


app.use('/pricing', pricingRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
