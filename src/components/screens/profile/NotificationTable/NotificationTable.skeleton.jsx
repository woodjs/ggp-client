import { Skeleton, Stack } from '@chakra-ui/react';

function NotificationOptionSkeleton() {
  return (
    <Stack m="10px">
      <Skeleton h="50px" />
      <Skeleton h="50px" />
      <Skeleton h="50px" />
      <Skeleton h="50px" />
      <Skeleton h="50px" />
    </Stack>
  );
}

export default NotificationOptionSkeleton;
