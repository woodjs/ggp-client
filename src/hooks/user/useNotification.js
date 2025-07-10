import { NotificationService } from '@/services/notification';
import { useInfiniteQuery } from 'react-query';

export const useNotification = (payload) => {
  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ['notification', payload],
      ({ pageParam = 1 }) =>
        NotificationService.get({
          page: pageParam,
          limit: 3,
        }),
      {
        getNextPageParam: (lastPage, allPages) => {
          const maxPages = Math.ceil(lastPage.total / 3);
          const nextPage = allPages.length + 1;
          return nextPage <= maxPages ? nextPage : undefined;
        },
      }
    );

  return { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage };
};
