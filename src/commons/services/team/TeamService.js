import { protectedAPI } from '@/shared/api';

export const TeamService = {
  getStatistic() {
    return protectedAPI.get('/users/team/info');
  },
  getSponsor() {
    return protectedAPI.get('/users/sponsor');
  },
};
