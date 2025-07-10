import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useQuery } from 'react-query';
import { TeamService } from '@/services/team/TeamService';

export const useTeam = () =>
  useQuery('team-statistic', TeamService.getStatistic);

export const useSponsor = () => {
  const currentLocale = Cookies.get('NEXT_LOCALE');
  const data = useQuery(['user-sponsor'], TeamService.getSponsor);
  useEffect(() => {
    data.refetch();
  }, [currentLocale]);

  return data;
};
