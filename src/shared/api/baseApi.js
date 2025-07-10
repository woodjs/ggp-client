import { i18n } from 'next-i18next';
import axios from 'axios';
import { baseURL } from './constant';

export const baseApi = axios.create({
  baseURL: `${baseURL}/api`,
  withCredentials: true,
});

baseApi.interceptors.response.use(
  (res) => res.data,
  (error) => {
    const errData = {
      message: error.response?.data?.message || i18n.t('errors:unknown-server'),
      status: error.response.status,
    };
    if (error.response) return Promise.reject(errData);

    if (error.request)
      return Promise.reject(new Error(i18n.t('errors:server-not-responsed')));

    return Promise.reject(new Error(i18n.t('errors:error-client')));
  }
);
