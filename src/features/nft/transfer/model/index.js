import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { protectedAPI } from '@/shared/api';

export const useNFTSend = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ nftId, ...payload }) =>
      protectedAPI.post(`/user/nft/${nftId}/transfer`, payload),
    {
      onSuccess: () => {
        toast.success('Success');
        queryClient.invalidateQueries('user-nfts');
      },
      onError: ({ message }) => toast.error(message),
    }
  );
};
