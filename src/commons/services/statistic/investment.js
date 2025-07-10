import { protectedAPI } from '@/shared/api';

export const getPersonalInvestment = () =>
  protectedAPI.get('/users/statistic/investment');
