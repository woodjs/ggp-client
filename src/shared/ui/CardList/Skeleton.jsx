import { SimpleGrid, Skeleton } from '@chakra-ui/react';

export default function CardListSkeleton({ count = 8 }) {
  return (
    <SimpleGrid columns={{ sm: 2, lg: 3, xl: 4 }} spacing={10} w="full">
      {Array(count)
        .fill()
        .map((_, index) => (
          <Skeleton
            key={`id-${index + 1}`}
            h="280px"
            borderRadius="16px"
            as="div"
            w="full"
          />
        ))}
    </SimpleGrid>
  );
}
