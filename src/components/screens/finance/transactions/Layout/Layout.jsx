import { memo } from 'react';
import { Box, Skeleton, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import TransactionDesktop from './TransactionDesktop/TransactionDesktop';
import TransactionMobile from './TransactionMobile/TransactionMobile';
// import TransactionMobile from '../TransactionMobile/TransactionMobile';

function TransactionsLayout({ data, isLoading, isError, error }) {
  const { t } = useTranslation('transactions');
  if (isLoading)
    return (
      <Stack m="10px">
        <Skeleton h="40px" />
        <Skeleton h="40px" />
        <Skeleton h="40px" />
        <Skeleton h="40px" />
        <Skeleton h="40px" />
      </Stack>
    );
  if (isError)
    return (
      <Text textAlign="center" mt="30px">
        {t('error.title')}: {error.message}
      </Text>
    );

  if (!data?.count)
    return (
      <Text textAlign="center" mt="30px">
        {t('not-found')}
      </Text>
    );

  return (
    <>
      <Box display={{ base: 'none', lg: 'block' }}>
        <TransactionDesktop data={data.rows} />
      </Box>
      <Box display={{ base: 'block', lg: 'none' }}>
        <TransactionMobile data={data.rows} />
      </Box>
    </>
  );
}

export default memo(TransactionsLayout);
