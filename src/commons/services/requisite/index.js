const { protectedAPI } = require('@/shared/api');

module.exports.RequisiteService = {
  getAllTypes() {
    return protectedAPI.get('/requisites');
  },
  getAll() {
    return protectedAPI.get('/users/requisites');
  },
  create(data) {
    return protectedAPI.post('/users/requisites', data);
  },
  destroyById(id) {
    return protectedAPI.delete(`/users/requisites/${id}`);
  },
  updateById({ id, data }) {
    return protectedAPI.put(`/users/requisites/${id}`, data);
  },
};
