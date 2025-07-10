import { protectedAPI } from '@/shared/api';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const useReplenishmentNFT = () => {
  const queryClient = useQueryClient();
  return useMutation(
    'nft-replenishment',
    ({ amount, nftId }) =>
      protectedAPI.put('/nfts/users/replenishment', {
        nftId,
        amount,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user-balance');
        queryClient.invalidateQueries('nft-stats');
        toast.success('Success');
      },
      onError: ({ message }) => toast.success(message),
    }
  );
};
