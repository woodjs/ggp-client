const { protectedAPI } = require('@/shared/api');

module.exports.NotificationOptionService = {
  get() {
    return protectedAPI.get('/users/notifications/options');
  },
  updateOption(data) {
    return protectedAPI.put('/users/notifications', data);
  },
};
