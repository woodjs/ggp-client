const { request } = require('commons/api/111');

module.exports.SubscriptionService = {
  findForUser() {
    return request.get('/users/subscriptions');
  },
};
