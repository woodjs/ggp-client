import { useTranslation } from 'next-i18next';
import { Box, Skeleton, Stack, Text } from '@chakra-ui/react';

import { Card } from '@/components/Card';

export default function LastTransactionsSkeleton() {
  const { t } = useTranslation('finance');
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

      <Stack px="10px" pb="10px">
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
      </Stack>
    </Card>
  );
}
