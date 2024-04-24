const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: 'http://localhost:5000',
  clientID: '4x0NQbBRFKuz8vbDyMkJIydipT2VHWzZ',
  issuerBaseURL: 'https://dev-rctjvozwd0neg2cg.us.auth0.com',
  secret: '8ed4f2edc1155e26cf620cf92a73baa338362479b9d2854201742c509096e484'
};

const authMiddleware = auth(config);

module.exports = authMiddleware;
