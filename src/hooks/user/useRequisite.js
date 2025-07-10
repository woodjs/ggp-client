/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { i18n } from 'next-i18next';
import { RequisiteService } from '@/services/requisite';

export const useRequisiteType = () => {
  const getAll = () =>
    useQuery('requisite-types', RequisiteService.getAllTypes);

  return { getAll };
};

export const useRequisite = () => {
  const queryClient = useQueryClient();
  const getAll = () => useQuery('requisites', RequisiteService.getAll);

  const create = () =>
    useMutation('create-requisites', RequisiteService.create, {
      onSuccess: () => {
        queryClient.invalidateQueries('requisites');
        toast.success(i18n.t('global:data-success-update'));
      },
      onError: ({ message }) => {
        toast.error(message);
      },
    });

  const destroyById = () =>
    useMutation('delete-requisites', RequisiteService.destroyById, {
      onSuccess: () => {
        queryClient.invalidateQueries('requisites');
        toast.success(i18n.t('global:data-success-update'));
      },
      onError: ({ message }) => {
        toast.error(message);
      },
    });

  const updateById = () =>
    useMutation('update-requisites', RequisiteService.updateById, {
      onSuccess: () => {
        queryClient.invalidateQueries('requisites');
        toast.success(i18n.t('global:data-success-update'));
      },
      onError: ({ message }) => {
        toast.error(message);
      },
    });

  return { getAll, create, destroyById, updateById };
};
