import { NewsService } from '@/services/news';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export const useNews = (page) => {
  const [isLoading, setIsLoading] = useState(false);

  const { data, isFetching, isError, refetch } = useQuery(
    ['news', page],
    () => NewsService.getAll(page),
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

    setTimeout(() => setIsLoading(false), 500);
  }, [isFetching]);

  return { data, isLoading, isError, refetch };
};

export const useNewsId = () => {};
