import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { protectedAPI } from '@/shared/api';

export const useInvestNFT = () =>
  useMutation(
    'nft-buy',
    (payload) => protectedAPI.post('/nfts/users/dynamic', payload),
    {
      onSuccess: () => {
        toast.success('Success');
      },
      onError: ({ message }) => toast.error(message),
    }
  );
