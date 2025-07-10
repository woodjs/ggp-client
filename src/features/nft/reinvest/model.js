import { useMutation } from 'react-query';
import { protectedAPI } from '@/shared/api';
import { toast } from 'react-toastify';

export const useNFTReinvest = () =>
  useMutation(
    ({ id, status }) =>
      protectedAPI.put(`/user/nft/${id}/reinvest`, { status }),
    {
      onSuccess: () => toast.success('Success'),
      onError: ({ message }) => toast.error(message),
    }
  );
