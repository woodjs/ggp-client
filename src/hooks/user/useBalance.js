import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { BalanceService } from '@/services/balance';
import { i18n } from 'next-i18next';

export const useBalance = () =>
  useQuery('user-balance', BalanceService.getBalance);

export const useTransfer = () => {
  const queryClient = useQueryClient();

  return useMutation('balance-transfer', BalanceService.transfer, {
    onSuccess: () => {
      queryClient.invalidateQueries('user-balance');
      queryClient.invalidateQueries('latest-transactions');
      toast.success(i18n.t('finance:transfer-success'));
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });
};

export const useWithdraw = () => {
  const queryClient = useQueryClient();

  return useMutation('balance-withdraw', BalanceService.withdraw, {
    onSuccess: () => {
      queryClient.invalidateQueries('user-balance');
      queryClient.invalidateQueries('latest-transactions');
      toast.success(i18n.t('finance:withdrawal-success'));
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });
};
