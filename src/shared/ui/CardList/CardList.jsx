import { SimpleGrid } from '@chakra-ui/react';

export default function CardList({ children, ...props }) {
  return (
    <SimpleGrid
      columns={{ sm: 2, md: 3, xl: 4 }}
      spacing={10}
      justifyItems="center"
      w="full"
      {...props}
    >
      {children}
    </SimpleGrid>
  );
}
