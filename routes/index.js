// Require express router
const router = require('express').Router();

// Import all of the API routes 
const apiRoutes = require('./api');

// add prefix of `/api` to all of the api routes
router.use('/api', apiRoutes);

// Error message
router.use((req, res) => {
    return res.send('Wrong route!');
  });

// Module exports router
module.exports = router;