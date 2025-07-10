import React from 'react';
import {
  Text,
  Image,
  HStack,
  SimpleGrid,
  Stack,
  Card,
  useColorModeValue,
} from '@chakra-ui/react';

import { useTranslation } from 'next-i18next';
import { useUserMarketing } from '@/entities/marketing';
import { formatCurrency } from '@/shared/lib';
import RanksRoadSkeleton from '../RanksRoad/RanksRoad.skeleton';

function RankCurrent() {
  const { data, isLoading, isError } = useUserMarketing();
  const { t } = useTranslation('marketing');

  if (isLoading) return <RanksRoadSkeleton />;

  if (isError) return 'Error';

  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      alignItems="center"
      justify="center"
    >
      <Image
        src={data?.image}
        w={{ base: '200px', md: '250px' }}
        maxW="250px"
      />
      <Card
        border="1px solid"
        borderColor={useColorModeValue('brandGreen.400', 'brandYellow')}
      >
        <SimpleGrid
          columns={2}
          spacingX={{ base: 2, xl: 5 }}
          px={{ base: '16px', xl: '32px' }}
          py={{ base: '8px', lg: '16px' }}
          templateColumns={{
            base: '1.4fr 1fr',
            xs: '1.2fr 1.2fr',
            md: '1.2fr 1.3fr',
            lg: '1.1fr 1fr',
            xl: '1fr 1fr',
          }}
          alignItems="flex-start"
        >
          <HStack>
            <Text fontWeight="bold">{t('personal-investment')}</Text>
          </HStack>
          <HStack>
            <Text as={data.investment >= data.next?.investment ? 'del' : 'p'}>
              {formatCurrency({ amount: data.investment, currency: '$' })}/
              {formatCurrency({ amount: data.next?.investment, currency: '$' })}
            </Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold">{t('team-turnover')}</Text>
          </HStack>
          <HStack>
            <Text as={data.turnover >= data.next?.turnover ? 'del' : 'p'}>
              {formatCurrency({ amount: data.turnover, currency: '$' })}/
              {formatCurrency({ amount: data.next?.turnover, currency: '$' })}
            </Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold">{t('direct-partners')}</Text>
          </HStack>
          <HStack>
            <Text
              as={
                data.directActivePartners >= data.next?.directActivePartners
                  ? 'del'
                  : 'p'
              }
            >
              {data.directActivePartners}/{data.next?.directActivePartners}{' '}
              {t('active-partners')}
            </Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold">{t('turnover-branches')}</Text>
          </HStack>
          <HStack>
            <Text
              as={data.branchesCollected >= data.next?.branches ? 'del' : 'p'}
            >
              {data.branchesCollected}/{data.next?.branches} {t('branches')},{' '}
              {formatCurrency({
                amount: data.next.maxTurnoverFromBranch,
                currency: '$',
              })}
            </Text>
          </HStack>
        </SimpleGrid>
      </Card>
      <Image
        src={data.next?.image}
        w={{ base: '180px', md: '200px' }}
        opacity={0.5}
      />
    </Stack>
  );
}

export default RankCurrent;
