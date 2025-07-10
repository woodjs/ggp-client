import { Box, Stack, Text } from '@chakra-ui/react';

function MyFarmProductInfoItem({ label, children }) {
  return (
    <Stack
      w="full"
      direction={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems="start"
    >
      <Text fontWeight="bold">{label}</Text>
      <Box fontWeight="bold" color="brandGray.200">
        {children}
      </Box>
    </Stack>
  );
}

export default MyFarmProductInfoItem;
