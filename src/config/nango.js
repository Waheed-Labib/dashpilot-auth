const Nango = require('nango').default;

const nango = new Nango({
  secretKey: process.env.NANGO_SECRET_KEY,
  host: process.env.NANGO_HOST,
});

module.exports = nango;
