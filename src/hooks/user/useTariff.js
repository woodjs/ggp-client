import { useQuery } from 'react-query';
import { TariffService } from '@/services/tariff';

export const useTariff = () =>
  useQuery('tariff', TariffService.findAll, {
    refetchInterval: 10000, // каждые 10 сек обновлять данные
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
  });
