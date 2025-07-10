import {
  Box,
  HStack,
  VStack,
  Skeleton,
  SkeletonCircle,
  SimpleGrid,
  IconButton,
  Text,
  SkeletonText,
  Stack,
} from '@chakra-ui/react';

function RanksRoadSkeleton() {
  return (
    <>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        alignItems="center"
        justify="center"
        mt="50px"
        p="35px"
        gap="20px"
      >
        <SkeletonCircle
          w={{ base: '120px', lg: '150px' }}
          h={{ base: '120px', lg: '150px' }}
        />
        <Skeleton
          h={{ base: '120px', lg: '150px' }}
          w={{ base: '300px', lg: '400px' }}
          borderColor="brandYellow"
          border="1px solid"
          borderRadius="xl"
        />

        <SkeletonCircle w="120px" h="120px" />
      </Stack>
      <VStack alignItems="flex-start" gap="10px">
        <SkeletonText w="300px" textAlign="left" />
        <HStack alignItems="center" justify="center" gap="20px">
          <Skeleton w="270px" borderRadius="xl" h="320px" />
          <Skeleton w="270px" borderRadius="xl" h="320px" />
          <Skeleton w="270px" borderRadius="xl" h="320px" />
          <Skeleton w="270px" borderRadius="xl" h="320px" />
        </HStack>
      </VStack>
    </>
  );
}

export default RanksRoadSkeleton;
