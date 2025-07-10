import { useQuery } from 'react-query';
import { ChartService } from '@/services/nft/chart/ChartService';

export const useNFTChart = (id) =>
  useQuery(`nft-chart-${id}`, () => ChartService.getInfo(id));
