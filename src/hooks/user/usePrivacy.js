import { PrivacyService } from '@/services/privacy';
import { i18n } from 'next-i18next';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

export const usePrivacy = () => useQuery('privacy', PrivacyService.get);
export const usePrivacyUpdate = () =>
  useMutation('privacy-update', PrivacyService.update, {
    onSuccess: () => {
      toast.success(i18n.t('global:data-success-update'));
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
