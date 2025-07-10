import { Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { Card } from '@/components/Card';
import { useTranslation } from 'next-i18next';

export default function BalancesError() {
  const { t } = useTranslation('finance');
  return (
    <Stack
      w="full"
      spacing="10px"
      direction={['column', null, 'row', 'column', 'row']}
      color={useColorModeValue('brandGray.200', 'white')}
      fontWeight="bold"
    >
      <Card px="26px" py="23px" h="159px" flex={1}>
        <Text fontSize="2xl">USDT</Text>
        <Text color="danger">{t('error')}</Text>
      </Card>
      <Card px="26px" py="23px" flex={1} h="159px">
        <Text fontSize="2xl">GGT</Text>
        <Text color="danger">{t('error')}</Text>
      </Card>
    </Stack>
  );
}
