import { useQuery } from 'react-query';
import { TransactionService } from '@/services/transaction';
import { useEffect, useState } from 'react';

export const useLatestTransactions = () =>
  useQuery(['latest-transactions'], () => TransactionService.getLatest(), {
    cacheTime: 60 * 60 * 1000,
    scaleTime: 60 * 60 * 1000,
  });

export const useTransactions = (filters) => {
  const [isLoading, setIsLoading] = useState(false);

  const { data, isError, error, isFetching, refetch } = useQuery(
    ['transactions', filters.page],
    () => TransactionService.getAll(filters),

    {
      cacheTime: 60 * 60 * 1000,
      staleTime: 60 * 60 * 1000,
    }
  );

  useEffect(() => {
    if (isFetching) {
      setIsLoading(true);
      return;
    }

    setTimeout(() => setIsLoading(false), 300);
  }, [isFetching]);

  return { data, isError, error, isLoading, refetch };
};
