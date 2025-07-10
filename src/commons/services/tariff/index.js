const { requestHost } = require('commons/api/111');

module.exports.TariffService = {
  findAll() {
    return requestHost.get('/tariffs');
  },
};
