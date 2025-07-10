import { protectedAPI } from '@/shared/api';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const useWithdrawalNFT = () => {
  const queryClient = useQueryClient();
  return useMutation(
    'withdrawal',
    ({ id }) => protectedAPI.post(`/nfts/${id}/users/withdrawal`),
    {
      onSuccess: () => {
        toast.success('Success');
        queryClient.invalidateQueries('user-nfts');
        queryClient.invalidateQueries('nft-stats');
        queryClient.invalidateQueries('user-balance');
      },
      onError: ({ message }) => toast.error(message),
    }
  );
};
