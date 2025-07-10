import { Text, useColorModeValue } from '@chakra-ui/react';

export default function CardSmallText({ children, ...rest }) {
  return (
    <Text
      as="small"
      fontSize="xs"
      color={useColorModeValue('brandGray.200', 'lightDark')}
      {...rest}
    >
      {children}
    </Text>
  );
}
