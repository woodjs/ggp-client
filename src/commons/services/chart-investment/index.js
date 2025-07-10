import { protectedAPI } from '@/shared/api';

export const ProfitСhartService = {
  get(data) {
    return protectedAPI.get('/users/statistic/chart', {
      params: data,
    });
  },
};
