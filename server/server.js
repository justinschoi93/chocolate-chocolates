const { ApolloServer } = require('apollo/server');
const  { startStandaloneServer } = require('@apollo/server/standalone');

const { expressMiddleware } = require('@apollo/server/express4');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/mongoose');
const authMiddleware = require('./config/auth');

const path = require('path');
const router = require('./routes/routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(authMiddleware); // runs api requests through authMiddleware 
app.use('/', router);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

