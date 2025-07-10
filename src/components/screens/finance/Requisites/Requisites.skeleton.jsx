import { useTranslation } from 'next-i18next';
import { Box, Skeleton, Stack, Text } from '@chakra-ui/react';
import { Card } from '@/components/Card';

export default function RequisitesSkeleton() {
  const { t } = useTranslation('finance');
  return (
    <Card w="full" py="26px">
      <Box pb="26px" px="23px">
        <Text
          color="brandGray.200"
          fontSize="2xl"
          fontWeight="bold"
          textAlign={['center', 'left']}
        >
          {t('requisite-title')}
        </Text>
      </Box>
      <Stack px="23px">
        <Skeleton w="full" h="40px" />
        <Skeleton w="full" h="40px" />
        <Skeleton w="full" h="40px" />
      </Stack>
    </Card>
  );
}
