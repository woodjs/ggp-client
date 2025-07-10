import { protectedAPI } from '@/shared/api';
import { useMutation } from 'react-query';

export const useRequestCode = () =>
  useMutation((payload) => protectedAPI.post('/two-factor/send-code', payload));
