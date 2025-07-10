import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { i18n } from 'next-i18next';
import { NotificationOptionService } from '@/services/notification-option';

export const useNotificationOption = () =>
  useQuery('notification-option', NotificationOptionService.get);
export const useNotificationOptionUpdate = () =>
  useMutation(
    'notification-option-update',
    NotificationOptionService.updateOption,
    {
      onSuccess: () => toast.success(i18n.t('global:data-success-update')),
      onError: (err) => toast.error(err.message),
    }
  );
