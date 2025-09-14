import { useQuery } from 'react-query';

import { protectedAPI } from '@/shared/api';

export const useProducts = () =>
  useQuery('products', () => protectedAPI.get('/products'));
