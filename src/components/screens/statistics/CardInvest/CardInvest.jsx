import { Box, HStack, SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { useInvestment } from '@/hooks/user/statistic/useInvestment';
import formatCurrency from '@/utils/formatCurrency';
import CardSmallText from '@/components/Card/SmallText';
import QuestionPin from '@/components/Pin/QuestionPin';
import StatisticCard from '../StatisticCard';

export default function CardInvest() {
  const { t } = useTranslation('statistics');

  const { data, isLoading, isError } = useInvestment();

  if (isError) return 'Error';
  return (
    <StatisticCard title={t('title-invest')}>
      <SimpleGrid
        maxW="700px"
        gap="10px"
        gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr', xl: '1fr 1fr 1fr' }}
        justify="start"
      >
        <Box>
          {isLoading ? (
            <Skeleton height="20px" />
          ) : (
            <Text
              textAlign="center"
              as="span"
              display="block"
              fontSize="40px"
              fontWeight={700}
            >
              {formatCurrency(data.balances?.usd)}
            </Text>
          )}

          <Text w="full" textAlign="center">
            <CardSmallText>{t('balance-usdt')}</CardSmallText>
          </Text>
        </Box>

        <Box>
          {isLoading ? (
            <Skeleton height="20px" />
          ) : (
            <Text
              textAlign="center"
              as="span"
              display="block"
              fontSize="40px"
              fontWeight={700}
            >
              {formatCurrency(data.balances?.ggt)}
            </Text>
          )}
          <Text w="full" textAlign="center">
            <CardSmallText>{t('balance-ggt')}</CardSmallText>
          </Text>
        </Box>
        <Box>
          {isLoading ? (
            <Skeleton height="20px" />
          ) : (
            <Text
              textAlign="center"
              as="span"
              display="block"
              fontSize="40px"
              fontWeight={700}
            >
              {formatCurrency(data.balances?.total)}
            </Text>
          )}
          <Text w="full" textAlign="center">
            <CardSmallText>{t('total-balance')}</CardSmallText>
          </Text>
        </Box>
        {/* <VStack alignItems="flex-start" spacing="20px"> */}
        <Box>
          {isLoading ? (
            <Skeleton height="20px" />
          ) : (
            <Text
              textAlign="center"
              as="span"
              display="block"
              fontSize="40px"
              fontWeight={700}
            >
              {formatCurrency(data.totalInvestAllTime)}
            </Text>
          )}
          <Text w="full" textAlign="center">
            <CardSmallText>{t('total-invest-all')}</CardSmallText>
          </Text>
        </Box>

        <Box>
          {isLoading ? (
            <Skeleton height="20px" />
          ) : (
            <Text
              textAlign="center"
              as="span"
              display="block"
              fontSize="40px"
              fontWeight={700}
            >
              {formatCurrency(data.totalInvest)}
            </Text>
          )}
          <HStack justify="center">
            <Text textAlign="center">
              <CardSmallText>{t('currenct-assets')}</CardSmallText>
            </Text>

            <QuestionPin label={t('only-in-account')} />
          </HStack>
        </Box>

        <Box>
          {isLoading ? (
            <Skeleton height="20px" />
          ) : (
            <Text
              textAlign="center"
              as="span"
              display="block"
              fontSize="40px"
              fontWeight={700}
            >
              {formatCurrency(data.withdrawalAmount)}
            </Text>
          )}
          <Text w="full" textAlign="center">
            <CardSmallText>{t('withdrawal')}</CardSmallText>
          </Text>
        </Box>
        {/* </VStack> */}

        {/* <VStack alignItems="flex-start" spacing="20px"> */}

        {/* </VStack> */}
      </SimpleGrid>
    </StatisticCard>
  );
}
