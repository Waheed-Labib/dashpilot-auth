const nango = require('../config/nango');

const googleAuthWithNango = async ({
  authorizationCode,
  redirectUri,
}) => {
  const connection = await nango.createConnection({
    provider_config_key: 'google',
    connection_id: `google-${Date.now()}`,
    credentials: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: redirectUri,
      authorization_code: authorizationCode,
    },
  });

  return {
    connectionId: connection.connection_id,
    provider: connection.provider,
  };
};

module.exports = { googleAuthWithNango };
