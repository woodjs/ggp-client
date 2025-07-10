import { requestHost } from 'commons/api/111';

export const PromocodeService = {
  getByValue(value) {
    return requestHost.get(`/promocodes?value=${value}`);
  },
};
