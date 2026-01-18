const express = require('express');
const router = express.Router();
const { getIntegrations, getIntegrationByUniqueKey, createIntegration } = require('../controllers/integrations.controller');

// GET /api/integrations → list all integrations
router.get('/integrations', getIntegrations);
router.get('/integrations/:uniqueKey', getIntegrationByUniqueKey);
router.post('/integrations', createIntegration)

module.exports = router;
