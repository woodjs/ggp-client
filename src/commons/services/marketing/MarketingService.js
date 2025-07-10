import { request } from 'commons/api/111';

export const MarketingService = {
  getUserData() {
    return request.get('/users/marketing');
  },
};
