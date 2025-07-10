import { useInfiniteQuery, useQuery } from 'react-query';
import { protectedAPI } from '@/shared/api';

export const useUserNFTs = () =>
  useQuery('user-nfts', () => protectedAPI.get('/nfts/users'));

export const useNFTReporting = (id) =>
  useInfiniteQuery(
    'nft-reporting',
    ({ pageParam = 1 }) =>
      protectedAPI.get(`/users/nft/${id}/reporting?page=${pageParam}&limit=6`),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage?.count) return false;

        const maxPages = Math.ceil(lastPage.count / 6);
        const nextPage = allPages.length + 1;

        if (!lastPage.rows.length) return false;
        return nextPage <= maxPages ? nextPage : undefined;
      },
    }
  );

export const useNFTStats = (id) =>
  useQuery(['nft-stats'], () => protectedAPI.get(`/users/nfts/${id}`));
