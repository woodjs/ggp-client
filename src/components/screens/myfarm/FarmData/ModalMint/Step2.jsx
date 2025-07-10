import { UserNFTService } from '@/services/nft/user';
import { Alert, AlertIcon, Box, Flex, Skeleton, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useAccount } from 'wagmi';

export default function Step2({ id, setState }) {
  const { address } = useAccount();
  const { data, isLoading, isError } = useQuery(
    'mint-price',
    () => UserNFTService.getPriceForMint(id, address),
    {
      enabled: !!address,
      refetchInterval: 20000,
    }
  );

  useEffect(() => {
    if (isLoading) return setState('loading');
    if (data) return setState(null);
    return true;
  }, [isLoading, data]);

  if (isLoading) return <Skeleton h="60px" />;

  return (
    <>
      <Alert status="info">
        <AlertIcon />
        После подтверждения будет запущена функция Mint
      </Alert>
      <Box bg="whiteAlpha.100" py="20px" px="10px" borderRadius="6px">
        <Flex w="full" justifyContent="space-between">
          <Text>Цена</Text>
          <Text>≈ {data.costInUsdt} USDT</Text>
        </Flex>
      </Box>
    </>
  );
}
