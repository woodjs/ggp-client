import { Text, VStack } from '@chakra-ui/react';
import { Card } from '@/components/Card';

function MiniCard({ title, value }) {
  return (
    <Card p="20px">
      <VStack w="full">
        <Text
          textAlign="center"
          fontSize="sm"
          color="brandGray.200"
          fontWeight="bold"
        >
          {title}
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          {value}
        </Text>
      </VStack>
    </Card>
  );
}

export default MiniCard;
