const { protectedAPI } = require('@/shared/api');

module.exports.GoogleAuthenticatorService = {
  getData() {
    return protectedAPI.get('/two-factor/get-ga-qrcode');
  },
};
