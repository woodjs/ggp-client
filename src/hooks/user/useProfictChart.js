import { ProfitСhartService } from '@/services/chart-investment';
import { useQuery } from 'react-query';

export const useProfitChart = (payload) =>
  useQuery(['profit-chart', payload], () => ProfitСhartService.get(payload));
