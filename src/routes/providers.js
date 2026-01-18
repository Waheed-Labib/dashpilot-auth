const express = require('express');
const router = express.Router();
const { getProviders, getProviderByName } = require('../controllers/providers.controller');

// GET /api/providers → list all providers
router.get('/providers', getProviders);

// GET /api/providers/:provider → get single provider details
router.get('/providers/:provider', getProviderByName);

module.exports = router;
