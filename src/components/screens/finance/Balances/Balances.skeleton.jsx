import { SkeletonText, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { Card } from '@/components/Card';

export default function BalancesSkeleton() {
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
        <SkeletonText skeletonHeight={6} noOfLines={1} mt="5px" />
      </Card>
      <Card px="26px" py="23px" flex={1} h="159px">
        <Text fontSize="2xl">GGT</Text>
        <SkeletonText skeletonHeight={6} noOfLines={1} mt="5px" />
      </Card>
    </Stack>
  );
}
