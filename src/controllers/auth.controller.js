const asyncHandler = require('../middlewares/asyncHandler')

exports.googleAuth = asyncHandler(async (req, res) => {
  const { authorizationCode, redirectUri } = req.body;

  if (!authorizationCode) {
    return res.status(400).json({
      message: 'Authorization code is required',
    });
  }

  const session = await googleAuthWithNango({
    authorizationCode,
    redirectUri,
  });

  res.json({
    success: true,
    session,
  });
});
