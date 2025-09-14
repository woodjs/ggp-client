import { useQuery } from 'react-query';
import { protectedAPI } from '@/shared/api';

export const useOrders = () =>
  useQuery('orders', () => protectedAPI.get('orders'));
