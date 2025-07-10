import { RecoveryService } from '@/services/auth/recovery';
import { i18n } from 'next-i18next';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

export const useRecovery = () =>
  useMutation('recovery', RecoveryService.createLink, {
    onSuccess: () => {
      toast.success(i18n.t('auth:recovery-success'));
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });
export const useRecoveryPassword = () =>
  useMutation('recovery-password', RecoveryService.recoveryByToken, {
    onSuccess: () => {
      toast.success(i18n.t('auth:recovery-password-success'));
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });
