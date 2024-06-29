const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const testRoutes = require('./routes/testRoutes');
const contactRoutes = require('./routes/contactRoutes');
const myAccountRoutes = require('./routes/myAccountRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/test', testRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/myaccount', myAccountRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
