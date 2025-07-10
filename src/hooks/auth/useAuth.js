import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { i18n } from 'next-i18next';
import { useDisconnect } from 'wagmi';

import { AuthService } from '@/services/auth';
import { useAuthRedirect } from './useAuthRedirect';

export const useAuth = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { disconnect } = useDisconnect();
  const login = () =>
    useMutation('login', AuthService.login, {
      onSuccess: (res) => {
        toast.success(i18n.t('auth:success-login'));
        Cookies.set('accessToken', res?.accessToken);
        useAuthRedirect(router);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'authorization',
          user_id: res?.id,
          track: 'email',
        });
      },
      onError: ({ message }) => {
        toast.error(message);
      },
    });
  const register = () =>
    useMutation('register', AuthService.register, {
      onSuccess: (res) => {
        toast.success(i18n.t('auth:success-register'));
        Cookies.set('accessToken', res?.accessToken);
        useAuthRedirect(router);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'registration',
          user_id: res?.id,
          track: res?.method,
        });
      },
      onError: ({ message }) => {
        toast.error(message);
      },
    });

  const logout = () => {
    queryClient.removeQueries();
    Cookies.remove('accessToken');
    disconnect();
    AuthService.logout();
    router.push('/auth/login');
  };

  return { login, register, logout };
};
