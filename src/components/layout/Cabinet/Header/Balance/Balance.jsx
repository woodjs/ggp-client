import { Box, HStack, Text } from '@chakra-ui/react';
import Wallet from '@/components/layout/Cabinet/Header/Balance/Wallet';
import { useBalance } from '@/hooks/user/useBalance';

export default function Balance() {
  const { data: balance } = useBalance();
  return (
    <HStack spacing={0}>
      <Box mr={'15px'}>
        <Wallet />
      </Box>
      <Text whiteSpace="nowrap" fontSize="sm" fontWeight="bold">
        {balance?.usd || 0} USDT
      </Text>
    </HStack>
  );
}
