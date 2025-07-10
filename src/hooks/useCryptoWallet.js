import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { i18n } from 'next-i18next';

import { CryptoWalletService } from '@/services/auth/crypto-wallet';
import { useAuthRedirect } from './auth/useAuthRedirect';

export const useCryptoWallet = () => {
  const router = useRouter();
  const auth = useMutation(['crypto-wallet-auth'], CryptoWalletService.login, {
    onSuccess: () => {
      toast.success(i18n.t('auth:success-login'));
      useAuthRedirect(router);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const getNonce = async (address) => CryptoWalletService.getNonce(address);
  const connect = useMutation(
    ['crypto-wallet-connect'],
    CryptoWalletService.connect
  );

  const checkWallet = async (address) =>
    CryptoWalletService.checkWalllet(address);

  return { auth, getNonce, checkWallet, connect };
};
