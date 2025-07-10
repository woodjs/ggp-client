import { baseApi } from '@/shared/api';
import { useQuery } from 'react-query';

export const useHarvestMonthsByCollectionId = (collectionId) =>
  useQuery('harvest-months', () =>
    baseApi.get(`/collections/${collectionId}/harvest-months`)
  );
