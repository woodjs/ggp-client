import { Text } from '@chakra-ui/react';

export default function CabinetTitle({ children, ...rest }) {
  return (
    <Text as="h1" fontWeight={700} fontSize="36px" {...rest}>
      {children}
    </Text>
  );
}
