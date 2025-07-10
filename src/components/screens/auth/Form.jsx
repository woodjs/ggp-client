import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react';

export default function Form({ title, children, ...rest }) {
  return (
    <Box
      bg={useColorModeValue(
        'rgba(255, 255, 255, 0.8)',
        'rgba(45, 55, 72, 0.8)'
      )}
      maxW="550px"
      w="full"
      borderRadius="16px"
      boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
      pos="relative"
      px={{ base: '10px', md: '60px' }}
      py={{ base: '70px', md: '70px' }}
      pb={{ base: '30px', md: '70px' }}
      {...rest}
    >
      <Heading
        fontSize={{ base: '30px', md: '36px' }}
        color={useColorModeValue('#2D3748', 'brandGray.100')}
        fontWeight={700}
        textAlign="center"
        mb="42px"
      >
        {title}
      </Heading>
      <Stack spacing="16px">{children}</Stack>
    </Box>
  );
}
