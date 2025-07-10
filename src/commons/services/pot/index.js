const { requestHost } = require('commons/api/111');

module.exports.PotService = {
  getCount(data) {
    let query = '/pots';
    if (data && Object.keys(data).length) {
      const params = new URLSearchParams(data);
      query += `?${params.toString()}`;
    }
    return requestHost.get(query);
  },
};
