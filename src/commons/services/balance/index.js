const { protectedAPI } = require('@/shared/api');

module.exports.BalanceService = {
  getBalance() {
    return protectedAPI.get('/users/balance');
  },
  transfer(data) {
    return protectedAPI.post('/users/balance/transfer', data);
  },
  withdraw(data) {
    return protectedAPI.post('/users/balance/withdraw', data);
  },
};
