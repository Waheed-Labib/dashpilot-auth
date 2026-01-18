const express = require('express');
const router = express.Router();
const { getProviders } = require('../controllers/providers.controller.js');

router.get('/providers', getProviders);

module.exports = router;
