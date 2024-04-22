const cors = require('cors');
const connectDB = require('./config/mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 5000;


connectDB();
