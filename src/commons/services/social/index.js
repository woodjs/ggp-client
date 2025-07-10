const { protectedAPI } = require('@/shared/api');

module.exports.SocialService = {
  async getSocial() {
    return protectedAPI.get('/users/social');
  },
  async update(data) {
    return protectedAPI.put('/users/social', data);
  },
};
