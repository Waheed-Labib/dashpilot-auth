const nango = require('../config/nango');

// GET /api/providers
exports.getProviders = async (req, res) => {
  try {
    const response = await nango.listProviders();
    res.json(response);
  } catch (err) {
    console.error('Error fetching providers:', err);
    res.status(500).json({ error: err.message });
  }
};

// GET /api/providers/:provider
exports.getProviderByName = async (req, res) => {
  try {
    const { provider } = req.params;

    // Correct SDK usage: pass an object with provider
    const response = await nango.getProvider({ provider });

    res.json(response);
  } catch (err) {
    console.error(`Error fetching provider ${req.params.provider}:`, err);
    res
      .status(err.response?.status || 500)
      .json({ error: err.response?.data || err.message });
  }
};
