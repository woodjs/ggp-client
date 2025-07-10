import { Text, VStack } from '@chakra-ui/react';

function MyFarmCardInfoItem({ label, children }) {
  return (
    <VStack alignItems="start">
      <Text fontWeight="bold">{label}</Text>
      <Text fontWeight="bold" color="brandGray.200">
        {children}
      </Text>
    </VStack>
  );
}

export default MyFarmCardInfoItem;
