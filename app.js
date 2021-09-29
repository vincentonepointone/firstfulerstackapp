const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 3000;

connectDB();

const app = express();

 app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode, on Port: ${PORT}`))