import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

import { MetamaskService } from '@/services/auth/crypto-wallet';
import { useAuthRedirect } from './useAuthRedirect';

export const useAuthMetamask = () => {
  const router = useRouter();
  const { getNonce } = MetamaskService;

  const auth = useMutation('auth-metamask', MetamaskService.login, {
    onSuccess: (res) => {
      Cookies.set('accessToken', res?.accessToken);
      useAuthRedirect(router);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { getNonce, auth };
};
