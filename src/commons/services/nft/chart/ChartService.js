import { protectedAPI } from '@/shared/api';

export const ChartService = {
  getInfo(id) {
    return protectedAPI.get(`/users/nfts/${id}/chart-price`);
  },
};
