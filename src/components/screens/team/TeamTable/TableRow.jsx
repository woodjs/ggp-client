import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  useColorModeValue,
} from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';

import { formatCurrency } from '@/shared/lib';
import { protectedAPI } from '@/shared/api';
import { toDateNormalUtil } from '../../../../commons/utils/toDate';
import RowPopUp from '../Table/RowPopUp';

function TableRow({
  id,
  avatar,
  login,
  rankName,
  investment,
  depth,
  turnover,
  createdAt,
  teamCount,
  email,
  socials,
  totalActivePartners,
}) {
  const { t } = useTranslation('team');
  const [isOpen, setIsOpen] = useState(false);
  const bgColor = useColorModeValue('brandGreen.400', 'brandYellow');

  const { data, hasNextPage, fetchNextPage, status } = useInfiniteQuery(
    `team-${id}`,
    ({ pageParam = 1 }) =>
      protectedAPI.get(`/users/structure?partnerId=${id}&page=${pageParam}`),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = Math.ceil(lastPage.count / 10);
        const nextPage = allPages.length + 1;

        if (!lastPage.data.length) return false;
        return nextPage <= maxPages ? nextPage : undefined;
      },
      enabled: isOpen,
      staleTime: 1000 * 60 * 60,
    }
  );

  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (!inView || !hasNextPage || !isOpen) return;

    fetchNextPage();
  }, [inView]);

  const toggleRow = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <AccordionItem minW="1100px">
      <SimpleGrid
        boxShadow={isOpen ? '0px 10px 10px 0px rgba(0, 0, 0, 0.3)' : 'null'}
        alignItems="center"
        px="30px"
        py="10px"
        gridTemplateColumns="20px minmax(50px, 1fr) minmax(100px, 2fr) repeat(6, minmax(100px, 1fr)) minmax(155px, 1fr)"
      >
        {teamCount ? (
          <AccordionButton onClick={toggleRow} textAlign="right" p={0}>
            <ChevronDownIcon
              transform={`rotate(${isOpen ? '180deg' : '0deg'})`}
              transition="0.3s"
            />
          </AccordionButton>
        ) : (
          <Box p={0} />
        )}
        <Box textAlign="center" cursor="pointer" pl={0}>
          {depth}
        </Box>
        <Box textAlign="center">
          <RowPopUp
            data={{
              login,
              avatar,
              rankName,
              totalAmount: investment,
              totalActivePartners,
              turnover,
              teamCount,
              createdAt,
              socials,
              email,
            }}
          />
        </Box>
        <Box textAlign="center">{rankName}</Box>
        <Box textAlign="center">
          {investment + turnover > 0
            ? formatCurrency({ amount: investment + turnover })
            : 0}
        </Box>
        <Box textAlign="center">{formatCurrency({ amount: investment })}</Box>
        <Box textAlign="center">{formatCurrency({ amount: turnover })}</Box>
        <Box textAlign="center">{teamCount}</Box>
        <Box textAlign="center">{totalActivePartners}</Box>
        <Box textAlign="center">{toDateNormalUtil(createdAt)}</Box>
      </SimpleGrid>

      <AccordionPanel p="0">
        {(status === 'idle' || status === 'loading') && (
          <SimpleGrid
            alignItems="center"
            px="30px"
            py="10px"
            gridTemplateColumns="20px minmax(50px, 1fr) minmax(100px, 2fr) repeat(5, minmax(100px, 1fr)) minmax(155px, 1fr)"
          >
            <Box p={0} />
            <Center>
              <Skeleton w="10px" h="17px" />
            </Center>
            <Box px="5px" textAlign="center">
              <HStack cursor="pointer">
                <SkeletonCircle flexShrink="0" boxSize="45px" />
                <Skeleton w="full" h="17px" />
              </HStack>
            </Box>
            <Box px="5px" textAlign="center">
              <Skeleton w="full" h="17px" />
            </Box>
            <Box px="5px" textAlign="center">
              <Skeleton w="full" h="17px" />
            </Box>
            <Box px="5px" textAlign="center">
              <Skeleton w="full" h="17px" />
            </Box>
            <Box px="5px" textAlign="center">
              <Skeleton w="full" h="17px" />
            </Box>
            <Box px="5px" textAlign="center">
              <Skeleton w="full" h="17px" />
            </Box>
            <Box px="5px" textAlign="center">
              <Skeleton w="full" h="17px" />
            </Box>
          </SimpleGrid>
        )}
        {status === 'error' && (
          <Box py="23px" textAlign="center">
            {t('teamTable.error.children-loading')}
          </Box>
        )}
        {status === 'success' && (
          <Accordion allowMultiple>
            {data.pages.length
              ? data.pages
                  .filter((page) => page.count)
                  .map((item) =>
                    item.data.map((row) => (
                      <TableRowMemo
                        key={row.id}
                        id={row.id}
                        avatar={row.avatar}
                        login={row.login}
                        rankName={row.rank?.name || 'Без ранга'}
                        investment={row.investment}
                        depth={depth + 1}
                        turnover={row.turnover}
                        createdAt={row.createdAt}
                        teamCount={row.teamCount}
                        email={row.email}
                        socials={row.socials}
                        totalActivePartners={row.totalActivePartners}
                      />
                    ))
                  )
              : null}
            <Box w="full" h="1px" bgColor={bgColor} ref={ref} />
          </Accordion>
        )}
      </AccordionPanel>
    </AccordionItem>
  );
}
const TableRowMemo = memo(TableRow);

export default memo(TableRow);
