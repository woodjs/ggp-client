import { getPersonalInvestment } from '@/services/statistic/investment';
import { useQuery } from 'react-query';

export const useInvestment = () =>
  useQuery('investment', getPersonalInvestment);
