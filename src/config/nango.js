const { Nango } = require('@nangohq/node');

const nango = new Nango({ secretKey: process.env.NANGO_SECRET_KEY, host: process.env.NANGO_HOST });

module.exports = nango;