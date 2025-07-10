import { protectedAPI } from '@/shared/api';
import { useMutation, useQuery } from 'react-query';

export const useProfileByLogin = (login, options = {}) =>
  useQuery(
    'user-login',
    () => protectedAPI.get(`/users/sponsor/${login}`),
    options
  );

export const useProfile = () =>
  useQuery('profile', () => protectedAPI.get('/users/profile'), {
    cacheTime: Infinity,
    staleTime: Infinity,
  });

export const usePassword = () =>
  useMutation('password', (data) => protectedAPI.put('/users/password', data));
