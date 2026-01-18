const nango = require('../config/nango');

// GET /api/integrations
exports.getIntegrations = async (req, res) => {
  try {
    const response = await nango.listIntegrations();
    res.json(response);
  } catch (err) {
    console.error('Error fetching integrations:', err);
    res.status(500).json({ error: err.message });
  }
};

// Get /api/integrations/:uniqueKey
exports.getIntegrationByUniqueKey = async (req, res) => {
  try {
    const { uniqueKey } = req.params;

    const response = await nango.getIntegration({ uniqueKey: uniqueKey });

    res.json(response);
  } catch (err) {
    console.error(`Error fetching integration ${req.params.uniqueKey}:`, err);
    res
      .status(err.response?.status || 500)
      .json({ error: err.response?.data || err.message });
  }
};

// Post /api/integrations
exports.createIntegration = async (req, res) => {
  try {
    const { provider, unique_key } = req.body; // <-- make sure you read from req.body

    if (!provider || !unique_key) {
      return res.status(400).json({ error: "provider and unique_key are required" });
    }

    const response = await nango.createIntegration({ provider, unique_key });

    res.json(response);
  } catch (err) {
    console.error("Error creating integration:", err);
    res.status(err.response?.status || 500).json({ error: err.response?.data || err.message });
  }
};
