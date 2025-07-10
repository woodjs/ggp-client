import { PotService } from '@/services/pot';
import { useQuery } from 'react-query';

export const usePot = (data) =>
  useQuery([`pot`, data?.plantingId], () => PotService.getCount(data), {
    refetchInterval: 10000, // каждые 10 сек обновлять данные
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    // Хоть один ключ должен быть true, чтобы запрос сработал
    enabled: Boolean(data?.plantingId),
  });
