import { protectedAPI } from '@/shared/api';

export const PaymentService = {
  getMethods() {
    return protectedAPI.get('/payments/methods');
  },
  create(data) {
    return protectedAPI.post('/payments', data);
  },
};
