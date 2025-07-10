import { Flex, Skeleton } from '@chakra-ui/react';

export default function NFTCardsSkeleton() {
  return (
    <Flex
      wrap="wrap"
      justifyContent={{ base: 'center', md: 'space-between' }}
      gap="20px"
      w="full"
    >
      <Skeleton boxSize="250px" borderRadius="16px" />
      <Skeleton boxSize="250px" borderRadius="16px" />
      <Skeleton boxSize="250px" borderRadius="16px" />
      <Skeleton boxSize="250px" borderRadius="16px" />
    </Flex>
  );
}
