import {
  Accordion,
  Box,
  Card,
  SimpleGrid,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from 'react-query';
import { useTranslation } from 'next-i18next';
import { useInView } from 'react-intersection-observer';
import { JSONToQueryParams } from '@/shared/lib/queryParams';
import { useEffect, useState } from 'react';
import TableRow from './TableRow';
import TableTeamSkeleton from '../Table/Table.skeleton';
import TableFilters from './TableFilters';
import { protectedAPI } from '@/shared/api';

function TeamTable() {
  const { t } = useTranslation('team');
  const router = useRouter();
  const [filters, setFilters] = useState({
    login: '',
    email: '',
    createdAtStart: '',
    createdAtEnd: '',
    rank: '',
    fromRank: '',
    toRank: '',
    depth: '',
    investmentFrom: '',
    turnoverFrom: '',
    onlyActive: '',
  });

  const { data, isLoading, isError, hasNextPage, fetchNextPage, refetch } =
    useInfiniteQuery(
      'team',
      ({ pageParam = 1 }) => {
        const params = JSONToQueryParams({
          ...filters,
          page: pageParam,
        });

        return protectedAPI.get(`/users/structure?${params}`);
      },
      {
        getNextPageParam: (lastPage, allPages) => {
          const maxPages = Math.ceil(lastPage.count / 10);
          const nextPage = allPages.length + 1;

          if (!lastPage.data.length || !lastPage.data.length) return false;
          return nextPage <= maxPages ? nextPage : undefined;
        },
        staleTime: 1000 * 60 * 5,
      }
    );

  const handleSubmit = () => {
    refetch();
  };

  const handleReset = () => {
    setFilters({
      login: '',
      email: '',
      createdAtStart: '',
      createdAtEnd: '',
      rank: '',
      fromRank: '',
      toRank: '',
      depth: '',
      investmentFrom: '',
      turnoverFrom: '',
      onlyActive: '',
    });
    handleSubmit();
  };

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
    <>
      <TableFilters
        filters={filters}
        setFilters={setFilters}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        isDisabled={isLoading}
      />
      <Card overflowX="auto" rounded="2xl" mt="20px">
        <SimpleGrid
          minW="1100px"
          fontWeight="bold"
          color="brandGray.200"
          px="30px"
          py="10px"
          gridTemplateColumns="20px minmax(50px, 1fr) minmax(100px, 2fr) repeat(6, minmax(100px, 1fr)) minmax(150px, 1fr)"
        >
          <Box textAlign="center" />
          <Box textAlign="center">{t('team-partner-line')}</Box>
          <Box textAlign="center">{t('team-partner-partner')}</Box>
          <Box textAlign="center">{t('team-partner-status')}</Box>
          <Box textAlign="center">{t('team-partner-total-turnover')}</Box>
          <Box textAlign="center">{t('team-partner-invest')}</Box>
          <Box textAlign="center">{t('team-partner-all-money')}</Box>
          <Box textAlign="center">{t('team-partner-partners')}</Box>
          <Box textAlign="center">{t('team-partner-active')}</Box>
          <Box textAlign="center">{t('team-partner-register')}</Box>
        </SimpleGrid>
        <Accordion allowMultiple>
          {data.pages.length &&
          data.pages.length > 0 &&
          data.pages.some((page) => page.count > 0) ? (
            data.pages
              .filter((page) => page.count)
              .map((item) =>
                item.data.map(
                  ({
                    id,
                    depth,
                    avatar,
                    login,
                    email,
                    rank,
                    investment,
                    turnover,
                    createdAt,
                    countTeamFirstLine,
                    totalActivePartners,
                    teamCount,
                    socials,
                  }) => (
                    <TableRow
                      key={id}
                      id={id}
                      email={email}
                      depth={depth}
                      avatar={avatar}
                      login={login}
                      rankName={rank?.name || t('filters.no-rank')}
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
            <VStack align="center" w="fit-content" m="auto">
              <Text textAlign="center">{t('team-partner-no-data')}</Text>
              <Button
                w="full"
                mt="10px"
                onClick={() => router.push('/account/media')}
              >
                {t('to-promo')}
              </Button>
            </VStack>
          )}
          <Box ref={ref} />
        </Accordion>
        <SimpleGrid
          minW="1100px"
          fontWeight="bold"
          color="brandGray.200"
          px="30px"
          py="10px"
          gridTemplateColumns="20px minmax(50px, 1fr) minmax(100px, 2fr) repeat(6, minmax(100px, 1fr)) minmax(150px, 1fr)"
        >
          <Box textAlign="center" />
          <Box textAlign="center">{t('team-partner-line')}</Box>
          <Box textAlign="center">{t('team-partner-partner')}</Box>
          <Box textAlign="center">{t('team-partner-status')}</Box>
          <Box textAlign="center">{t('team-partner-total-turnover')}</Box>
          <Box textAlign="center">{t('team-partner-invest')}</Box>
          <Box textAlign="center">{t('team-partner-all-money')}</Box>
          <Box textAlign="center">{t('team-partner-partners')}</Box>
          <Box textAlign="center">{t('team-partner-active')}</Box>
          <Box textAlign="center">{t('team-partner-register')}</Box>
        </SimpleGrid>
      </Card>
    </>
  );
}

export default TeamTable;
