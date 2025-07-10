import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { i18n } from 'next-i18next';
import { SocialService } from '@/services/social';

export const useSocial = () => useQuery('social', SocialService.getSocial);
export const useSocialUpdate = () =>
  useMutation('social-update', SocialService.update, {
    onSuccess: () => {
      toast.success(i18n.t('global:data-success-update'));
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
