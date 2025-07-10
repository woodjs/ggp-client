import { Card } from '@/components/Card';
import { Center, Spinner } from '@chakra-ui/react';

function CardSubscrieSkeleton() {
  return (
    <Card minW="300px" minH="300px" h="full">
      <Center w="full" h="full">
        <Spinner m="auto" />
      </Center>
    </Card>
  );
}

export default CardSubscrieSkeleton;
