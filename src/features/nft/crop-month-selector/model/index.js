import { protectedAPI } from '@/shared/api';
import { useQuery } from 'react-query';

// Хук, который получает доступные даты урожаев по id коллекции
export const useCropMonths = ({ collectionId }) =>
  useQuery(`crop-months-${collectionId}`, () =>
    protectedAPI.get(`/collections/${collectionId}/crop-months`)
  );
