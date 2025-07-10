import { useQuery } from 'react-query';
import { protectedAPI } from '@/shared/api';

export const useMarketing = () =>
  useQuery('marketing', () => protectedAPI.get('/marketing'));

export const useUserMarketing = () =>
  useQuery('user-marketing', () => protectedAPI.get('user/marketing'));
