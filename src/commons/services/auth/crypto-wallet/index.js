const { baseApi } = require('@/shared/api');

module.exports.CryptoWalletService = {
  getNonce(address) {
    return baseApi.get(`/crypto-wallet/nonce?address=${address}`);
  },
  login(data) {
    return baseApi.post('/crypto-wallet/login', data);
  },
  connect(data) {
    return baseApi.post('/crypto-wallet/connect', data);
  },
  checkWalllet(address) {
    return baseApi.get(`/crypto-wallet/check-wallet?address=${address}`);
  },
};
