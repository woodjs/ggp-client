import { useTranslation } from 'next-i18next';
import { Box, Text } from '@chakra-ui/react';

import { useLatestTransactions } from '@/hooks/user/useTransactions';

import { Card } from '@/components/Card';
import TransactionMobile from '../transactions/Layout/TransactionMobile/TransactionMobile';
import LastTransactionsSkeleton from './LastTransactions.skeleton';

export default function LastTransactions() {
  const { t } = useTranslation('finance');
  const { data, isLoading, isError } = useLatestTransactions();

  if (isLoading) return <LastTransactionsSkeleton />;
  if (isError) return 'Error...';

  return (
    <Card w="full">
      <Box py="26px" px="23px">
        <Text
          color="brandGray.200"
          fontSize="2xl"
          fontWeight="bold"
          textAlign={['center', 'left']}
        >
          {t('latest-operations')}
        </Text>
      </Box>
      <TransactionMobile data={data} />
    </Card>
  );
}
