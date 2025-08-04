import { protectedAPI } from '@/shared/api';
import { i18n } from 'next-i18next';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const useProtectionMethods = () =>
  useQuery('protection-methods', () => protectedAPI.get('/two-factor/protections'));

export const useUpdateProtectionMethods = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (payload) => protectedAPI.put('/protection/methods', payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('protection-methods');
        toast.success(i18n.t('global:data-success-update'));
      },
      onError: (err) => {
        toast.error(err.message);
      },
    }
  );
};
