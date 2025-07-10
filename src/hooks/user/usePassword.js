import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { i18n } from 'next-i18next';
import { ProfileService } from '@/services/profile';

export const usePassword = () =>
  useMutation(ProfileService.changePassword, {
    onSuccess: () => {
      toast.success(i18n.t('global:data-success-update'));
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
