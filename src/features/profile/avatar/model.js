/* eslint-disable consistent-return */
import { protectedAPI } from '@/shared/api';
import { i18n } from 'next-i18next';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif'];

export const useAvatar = () => {
  const queryClient = useQueryClient();

  return useMutation(
    'avatar',
    (avatar) => {
      const formData = new FormData();
      formData.append('avatar', avatar);
      return protectedAPI.post('/users/avatar', formData);
    },
    {
      onSuccess: () => {
        toast.success(i18n.t('global:data-success-update'));
        queryClient.invalidateQueries('profile');
      },
      onError(error) {
        toast.error(error.message);
      },
    }
  );
};

export const validateUploadFile = (file) => {
  if (!file) return false;

  const maxSize = 7 * 1024 * 1024; // 5MB
  const fileName = file.name;
  const extension = fileName.split('.').pop().toLowerCase();
  const fileSize = file.size;

  if (ALLOWED_EXTENSIONS.indexOf(extension) === -1) {
    toast.error(
      i18n.t('profile:file-error-extension', {
        extensions: ALLOWED_EXTENSIONS.join(', '),
      })
    );
    return false;
  }

  if (fileSize > maxSize) {
    toast.error(
      i18n.t('profile:file-limit', {
        size: '7MB',
      })
    );
    return false;
  }

  return true;
};
