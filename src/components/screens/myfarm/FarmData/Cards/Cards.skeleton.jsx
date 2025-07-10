import { Flex, Skeleton } from '@chakra-ui/react';

export default function FarmCardsSkeleton() {
  return (
    <Flex justify="space-between" wrap="wrap">
      <Skeleton
        height="300px"
        w={{ base: '100%', sm: '48%', md: '24%', lg: '19%' }}
        borderRadius="16px"
        mb="30px"
      />
      <Skeleton
        height="300px"
        w={{ base: '100%', sm: '48%', md: '24%', lg: '19%' }}
        borderRadius="16px"
        mb="30px"
      />
      <Skeleton
        height="300px"
        w={{ base: '100%', sm: '48%', md: '24%', lg: '19%' }}
        borderRadius="16px"
        mb="30px"
      />
      <Skeleton
        height="300px"
        w={{ base: '100%', sm: '48%', md: '24%', lg: '19%' }}
        borderRadius="16px"
        mb="30px"
      />
    </Flex>
  );
}
