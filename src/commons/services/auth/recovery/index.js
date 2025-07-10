const { baseApi } = require('@/shared/api');

module.exports.RecoveryService = {
  async createLink(email) {
    return baseApi.post('/recovery', { email });
  },
  async recoveryByToken({ token, ...data }) {
    return baseApi.post(`/recovery/${token}`, data);
  },
};
