const { baseApi } = require('@/shared/api');

module.exports.AuthService = {
  async login({ login, password }) {
    return baseApi.post('/auth/login', { login, password });
  },
  async register(data) {
    return baseApi.post('/auth/register', data);
  },
  async logout() {
    return baseApi.post('/auth/logout').catch(() => false);
  },
};
