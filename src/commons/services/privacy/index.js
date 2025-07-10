const { protectedAPI } = require('@/shared/api');

module.exports.PrivacyService = {
  get() {
    return protectedAPI.get('/users/privacy');
  },
  update(data) {
    return protectedAPI.put('/users/privacy', data);
  },
};
