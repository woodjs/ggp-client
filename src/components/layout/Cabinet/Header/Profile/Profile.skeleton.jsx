import {
  Flex,
  HStack,
  SkeletonCircle,
  SkeletonText,
  VStack,
} from '@chakra-ui/react';

export default function ProfileSkeleton() {
  return (
    <Flex alignItems="center">
      <HStack>
        <SkeletonCircle size="10" />
        <VStack
          display={{ base: 'none', md: 'flex' }}
          alignItems="flex-start"
          spacing="1px"
          ml="2"
        >
          <SkeletonText noOfLines={2} skeletonHeight="2" w="60px" />
        </VStack>
      </HStack>
    </Flex>
  );
}
