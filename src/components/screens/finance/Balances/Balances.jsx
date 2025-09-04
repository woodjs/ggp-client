import { useBalance } from '@/hooks/user/useBalance';
import { Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Card from '../../../Card/Card';
import BalancesError from './Balances.error';
import BalancesSkeleton from './Balances.skeleton';
import { useTranslation } from 'react-i18next';

export default function Balances() {
  const { data, isLoading, isError } = useBalance();
  const color = useColorModeValue('brandGray.200', 'white');
  const { t } = useTranslation('finance');

  if (isError) return <BalancesError />;
  if (isLoading) return <BalancesSkeleton />;

  return (
    <Stack
      w="full"
      spacing="10px"
      direction={['column', null, 'row', 'column', 'row']}
      color={color}
      fontWeight="bold"
    >
      <Card px="26px" py="23px" h="159px" flex={1}>
        <Text fontSize="2xl">SOL</Text>
        <Text fontSize="32px">{data?.usd || 0}</Text>
      </Card>
      <Card px="26px" py="23px" h="159px" flex={1}>
        <Text fontSize="2xl">{t('grams')}</Text>
        <Text fontSize="32px">0g</Text>
      </Card>
    </Stack>
  );
}
