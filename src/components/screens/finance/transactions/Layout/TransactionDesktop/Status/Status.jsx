import { CheckIcon, SmallCloseIcon, TimeIcon } from '@chakra-ui/icons';
import { HStack, Text } from '@chakra-ui/react';

export default function TransactionStatus({ statusId, value }) {
  switch (statusId) {
    case 1: {
      return (
        <HStack fontWeight="bold" justify="center" align="center">
          <TimeIcon color="#f5ca99" boxSize="16px" />
          <Text>{value}</Text>
        </HStack>
      );
    }
    case 2: {
      return (
        <HStack fontWeight="bold" justify="center" align="center">
          <CheckIcon color="#00c9a7" boxSize="16px" />
          <Text>{value}</Text>
        </HStack>
      );
    }

    case 3: {
      return (
        <HStack fontWeight="bold" justify="center" align="center">
          <SmallCloseIcon color="red.500" boxSize="16px" />
          <Text>{value}</Text>
        </HStack>
      );
    }

    default:
      return null;
  }
}
