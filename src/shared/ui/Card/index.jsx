import { Box, useColorModeValue } from '@chakra-ui/react';

export function Card({ borderGold, children, ...rest }) {
  return (
    <Box
      bg={useColorModeValue('white', '#2D3748')}
      borderRadius="16px"
      boxShadow="lg"
      boxSizing="border-box"
      {...rest}
    >
      {children}
    </Box>
  );
}
