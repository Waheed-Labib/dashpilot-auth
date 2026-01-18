const nango = require('../config/nango');

exports.getProviders = async (req, res) => {
  try {
    const providers = await nango.listProviders();
    res.json(providers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
