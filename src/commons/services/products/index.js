const { request } = require('commons/api/111');

module.exports.ProductsService = {
  findAll() {
    return request.get('/tariffs');
  },
};
