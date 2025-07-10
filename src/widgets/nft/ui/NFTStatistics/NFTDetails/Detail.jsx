import { Stack, Text } from '@chakra-ui/react';

export default function Detail({ name, Value }) {
  return (
    <Stack
      w="full"
      direction={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontWeight="bold">{name}</Text>
      {Value}
    </Stack>
  );
}
