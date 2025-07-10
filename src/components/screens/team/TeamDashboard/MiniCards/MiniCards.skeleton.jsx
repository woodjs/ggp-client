import { SimpleGrid, SkeletonText, VStack } from '@chakra-ui/react';
import { Card } from '@/components/Card';

function MiniCardsSkeleton({ isLoaded = false }) {
  return (
    <SimpleGrid
      height="100%"
      columns={{ base: 1, sm: 2, lg: 2, xl: 3, '2xl': 3 }}
      spacing={{ base: 5, sm: 7 }}
    >
      {Array(7)
        .fill(1)
        .map((_, index) => (
          <Card p="20px" key={`id-${index + 1}`}>
            <VStack w="full">
              <SkeletonText
                isLoaded={isLoaded}
                textAlign="center"
                fontSize="sm"
                color="brandGray.200"
                fontWeight="bold"
              >
                Error data load
              </SkeletonText>
            </VStack>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export default MiniCardsSkeleton;
