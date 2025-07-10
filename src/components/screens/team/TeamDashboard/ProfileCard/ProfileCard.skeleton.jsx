import { Card } from '@/components/Card';
import { SkeletonText, Stack } from '@chakra-ui/react';

function ProfileCardSkeleton({ isLoaded }) {
  return (
    <Card h="full" p="20px" py="25px" w="full">
      <Stack
        direction={{ base: 'column', xl: 'row' }}
        alignItems="center"
        justify="space-around"
        spacing="20px"
      >
        <SkeletonText isLoaded={isLoaded} w="full">
          Error
        </SkeletonText>
      </Stack>
    </Card>
  );
}

export default ProfileCardSkeleton;
