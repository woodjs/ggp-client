import { Alert, AlertIcon, Flex, Text } from '@chakra-ui/react';

export default function TransactionAmount({
  statusId,
  amount,
  type,
  currency,
}) {
  switch (statusId) {
    case 1: {
      return (
        <Flex>
          <Alert status="warning" p="3px" borderRadius="4px">
            <Text
            // color={type === 'debit' ? '#2dcecc' : 'red.500'}
            // fontWeight="bold"
            >
              {type === 'debit' ? '+' : '-'}
              {amount} {currency}
            </Text>
          </Alert>
        </Flex>
      );
    }

    case 2: {
      return (
        <Flex>
          <Alert
            status={type === 'debit' ? 'success' : 'error'}
            p="3px"
            borderRadius="4px"
          >
            <Text
              color={type === 'debit' ? '#2dcecc' : 'red.500'}
              fontWeight="bold"
            >
              {type === 'debit' ? '+' : '-'}
              {amount} {currency}
            </Text>
          </Alert>
        </Flex>
      );
    }

    case 3: {
      return (
        <Flex>
          <Alert status="error" p="3px" borderRadius="4px">
            <Text fontWeight="bold">
              {type === 'debit' ? '+' : '-'}
              {amount} {currency}
            </Text>
          </Alert>
        </Flex>
      );
    }
    default:
      return null;
  }
}
