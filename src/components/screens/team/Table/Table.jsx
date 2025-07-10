import { useEffect } from 'react';
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useTranslation } from 'next-i18next';
import { useInView } from 'react-intersection-observer';

import Row from './Row';
import TableTeamSkeleton from './Table.skeleton';
import { protectedAPI } from '@/shared/api';

// import TableFilter from './TableFilter';

export default function TableTeam() {
  const { t } = useTranslation('team');
  // const { data, isLoading, isError } = useQuery('structure-main', () =>
  //   request.get('/users/structure')
  // );
  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    'team',
    ({ pageParam = 1 }) =>
      protectedAPI.get(`/users/structure?page=${pageParam}`),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = Math.ceil(lastPage.count / 10);
        const nextPage = allPages.length + 1;

        if (!lastPage.data.length) return false;
        return nextPage <= maxPages ? nextPage : undefined;
      },
    }
  );

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!inView) return;
    if (!hasNextPage) return;

    fetchNextPage();
  }, [inView]);

  if (isLoading) return <TableTeamSkeleton />;
  if (isError) return 'error';

  return (
    <TableContainer mt="20px">
      <Table
        size="md"
        bg={useColorModeValue('white', 'darkLight')}
        borderRadius="16px"
      >
        <Thead>
          <Tr>
            <Th textAlign="center" />
            <Th textAlign="center">{t('team-partner-line')}</Th>
            <Th textAlign="center">{t('team-partner-partner')}</Th>
            <Th textAlign="center">{t('team-partner-status')}</Th>
            <Th textAlign="center">{t('team-partner-invest')}</Th>
            <Th textAlign="center">{t('team-partner-all-money')}</Th>
            <Th textAlign="center">{t('team-partner-partners')}</Th>
            <Th textAlign="center">{t('team-partner-active')}</Th>
            <Th textAlign="center">{t('team-partner-register')}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.pages.length ? (
            data.pages
              .filter((page) => page.count)
              .map((item) =>
                item.data.map(
                  ({
                    id,
                    avatar,
                    login,
                    rankName,
                    investment,
                    turnover,
                    createdAt,
                    countTeamFirstLine,
                    totalActivePartners,
                    teamCount,
                    socials,
                  }) => (
                    <Row
                      key={id}
                      id={id}
                      depth={1}
                      avatar={avatar}
                      login={login}
                      rankName={rankName}
                      investment={investment}
                      turnover={turnover}
                      createdAt={createdAt}
                      countTeamFirstLine={countTeamFirstLine}
                      totalActivePartners={totalActivePartners}
                      teamCount={teamCount}
                      socials={socials}
                    />
                  )
                )
              )
          ) : (
            <Tr>
              <Td colSpan="9" textAlign="center">
                {t('team-partner-no-data')}
              </Td>
            </Tr>
          )}
          {/* {data?.count ? (
            data.data.map(
              ({
                id,
                avatar,
                login,
                rankName,
                investment,
                turnover,
                createdAt,
                countTeamFirstLine,
                totalActivePartners,
                teamCount,
                socials,
              }) => (
                <Row
                  key={id}
                  id={id}
                  depth={1}
                  avatar={avatar}
                  login={login}
                  rankName={rankName}
                  investment={investment}
                  turnover={turnover}
                  createdAt={createdAt}
                  countTeamFirstLine={countTeamFirstLine}
                  totalActivePartners={totalActivePartners}
                  teamCount={teamCount}
                  socials={socials}
                />
              )
            )
          ) : (
            <Tr>
              <Td colSpan="9" textAlign="center">
                {t('team-partner-no-data')}
              </Td>
            </Tr>
          )} */}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th textAlign="center" />
            <Th textAlign="center">{t('team-partner-line')}</Th>
            <Th textAlign="center">{t('team-partner-partner')}</Th>
            <Th textAlign="center">{t('team-partner-status')}</Th>
            <Th textAlign="center">{t('team-partner-invest')}</Th>
            <Th textAlign="center">{t('team-partner-all-money')}</Th>
            <Th textAlign="center">{t('team-partner-partners')}</Th>
            <Th textAlign="center">{t('team-partner-active')}</Th>
            <Th textAlign="center">{t('team-partner-register')}</Th>
          </Tr>
        </Tfoot>
      </Table>

      {/* {hasNextPage && ( */}
      <Box ref={ref}>
        {/* {isFetchingNextPage && hasNextPage ? 'Loading...' : null} */}
      </Box>
      {/* )} */}
    </TableContainer>
  );
}
