const { request } = require('commons/api/111');

module.exports.TwoFactorService = {
  /**
   *
   * @param {{
   * method:string;
   * }} payload
   * @returns
   */
  sendCode(payload) {
    if (!payload.method) throw Error('method is required');
    return request.post('/two-factor/send-code', payload);
  },
  getProtections() {
    return request.get('/two-factor/protections');
  },
  updateProtections(payload) {
    return request.put('/two-factor/protections', payload);
  },
};
