import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { protectedAPI } from '@/shared/api';

export const usePurchaseNFT = () => {
  const queryClient = useQueryClient();
  return useMutation(
    'nft-buy',
    (payload) => protectedAPI.post('/nfts/users/buy', payload),
    {
      onSuccess: () => {
        toast.success('Вы успешно купили NFT');
        queryClient.invalidateQueries('harvest-months');
        queryClient.invalidateQueries('nft-collections');
      },
      onError: ({ message }) => toast.error(message),
    }
  );
};
