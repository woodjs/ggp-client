import { useQuery } from 'react-query';
import Cookies from 'js-cookie';
import { baseApi } from '@/shared/api';
import { JSONToQueryParams } from '@/shared/lib/queryParams';
import { useEffect } from 'react';

export const getCollections = () => baseApi.get('/collections');
export const getCollectionById = (id) => baseApi.get(`/collections/${id}`);

/**
 * @typedef {Object} Collection
 * @property {number} id
 * @property {string} image
 * @property {number} intervalPaymentDays
 * @property {number} minPrice
 * @property {number} minPercent
 */

/**
 *
 * @returns {Collection[]}
 */
export const useCollections = (params = null) =>
  useQuery(['nft-collections', params], () => baseApi.get('/collections'));

/**
 *
 * @param {number} collectionId
 * @param {object} queryParams
 * @returns
 */
export const useCollectionNFTs = (data, config = {}) => {
  const { collectionId, params } = data;
  return useQuery(
    [`nft-collections-${collectionId}`, params],
    () =>
      baseApi.get(
        `/collections/${collectionId}/nfts?${JSONToQueryParams(params)}`
      ),
    config
  );
};

/**
 * Получение информации об коллекции
 * @param {number} id
 * @returns
 */

export const useCollection = (id) => {
  const currentLocale = Cookies.get('NEXT_LOCALE');
  const data = useQuery([`nft-collection-${id}`], () => getCollectionById(id));
  useEffect(() => {
    console.log(currentLocale);
    data.refetch();
  }, [currentLocale]);

  return data;
};
