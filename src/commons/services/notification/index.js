const { protectedAPI } = require("@/shared/api");

module.exports.NotificationService = {
  get(payload = {}) {
    const params = new URLSearchParams(payload).toString();
    return protectedAPI.get(
      `/users/notifications${Object.keys(payload).length ? `?${params}` : ''}`
    );
  },
};
