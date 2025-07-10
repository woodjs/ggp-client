const { protectedAPI } = require('@/shared/api');

module.exports.TransactionService = {
  getAll(filters = {}) {
    const params = new URLSearchParams(filters).toString();
    return protectedAPI.get(
      `/users/transactions${Object.keys(filters).length ? `?${params}` : ''}`
    );
  },
  getLatest(limit = 5) {
    return protectedAPI.get(`/users/transactions/latest?limit=${limit}`);
  },
};
