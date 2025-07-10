import axios from 'axios';
import { i18n } from 'next-i18next';
import { Router } from 'next/router';

import { getAccessToken, removeAccessToken } from '@/services/auth/auth.helper';

import { HEADER_HTTP_TOKEN, baseURL } from './constant';

let refreshingTokens = null;

export const protectedAPI = axios.create({
  baseURL: `${baseURL}/api`,
  withCredentials: true,
});

function refreshTokens() {
  return protectedAPI.put('/auth/refresh-tokens');
}

protectedAPI.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config && config.headers)
    if (accessToken)
      // eslint-disable-next-line no-param-reassign
      config.headers[HEADER_HTTP_TOKEN] = `Bearer ${accessToken}`;

  return config;
});

protectedAPI.interceptors.response.use(
  (res) => res.data,
  async (error) => {
    const { config } = error;
    if (error.response) {
      if (error.response.status === 401 && !config.isRetry) {
        config.isRetry = true;
        try {
          if (!refreshingTokens) {
            refreshingTokens = refreshTokens();
          }

          await refreshingTokens;
          refreshingTokens = null;
          return protectedAPI(config);
        } catch (err) {
          refreshingTokens = null;
          removeAccessToken();
          Router.push({
            pathname: '/auth/login',
            query: {
              error: 'unauthorized',
              redirect: Router.pathname,
            },
          });
          return false;
        }
      }

      const errData = {
        message:
          error.response?.data?.message || i18n.t('errors:unknown-server'),
        status: error.response.status,
      };

      // Это если удалось обновить токены, но сервер все равно не пускает
      // if (errData.status === 401) {
      //   Router.push({
      //     pathname: '/auth/login',
      //     query: {
      //       error: 'unauthorized',
      //       redirect: Router.pathname,
      //     },
      //   });
      //   Cookies.remove('accessToken');
      //   return false;
      // }

      return Promise.reject(errData);
    }

    if (error.request)
      return Promise.reject(new Error(i18n.t('errors:server-not-responsed')));

    return Promise.reject(new Error(i18n.t('errors:error-client')));
  }
);
