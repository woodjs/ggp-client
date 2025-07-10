import { UserNFTService } from '@/services/nft/user';
import {
  Box,
  Flex,
  Stack,
  Text,
  Link,
  Alert,
  AlertIcon,
  Skeleton,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useAccount } from 'wagmi';

export default function Step3({ id, setState }) {
  const { address } = useAccount();
  const mint = useMutation('mint', UserNFTService.mint);

  useEffect(() => {
    mint.mutate({ id, address });
    setState('loading');
  }, []);

  useEffect(() => {
    if (mint.data) setState(null);
    if (mint.isError) setState('error');
  }, [mint.data, mint.isError]);

  if (!mint.data || mint.isLoading) return <Skeleton height="60px" />;
  if (mint.isError)
    return (
      <Text color="red" textAlign="center">
        {mint.error}
      </Text>
    );

  return (
    <>
      <Alert status="info">
        <AlertIcon />В случае отклонения транзакции в Blockchain, денежные
        средства списанные на оплау комиссии вернуться обратно на баланс
      </Alert>
      <Box bg="whiteAlpha.100" py="20px" px="10px" borderRadius="6px">
        <Stack>
          <Flex w="full" justifyContent="space-between">
            <Text>Hash</Text>
            <Link
              target="_blank"
              href={`https://etherscan.io/tx/${mint.data.transactionHash}`}
              color="blue.400"
            >
              {mint.data?.transactionHash.slice(0, 16)}
            </Link>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
