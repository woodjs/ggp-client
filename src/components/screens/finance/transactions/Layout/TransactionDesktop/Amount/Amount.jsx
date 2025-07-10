import { Text } from '@chakra-ui/react';

export default function TransactionAmount({
  statusId,
  amount,
  type,
  currency,
}) {
  switch (statusId) {
    case 1: {
      return (
        <Text
          color={type === 'debit' ? '#2dcecc' : 'red.500'}
          fontWeight="bold"
        >
          {type === 'debit' ? '+' : '-'}
          {amount} {currency}
        </Text>
      );
    }
    case 2: {
      return (
        <Text
          color={type === 'debit' ? '#2dcecc' : 'red.500'}
          fontWeight="bold"
        >
          {type === 'debit' ? '+' : '-'}
          {amount} {currency}
        </Text>
      );
    }

    case 3: {
      return (
        <Text color="red.500" fontWeight="bold">
          {type === 'debit' ? '+' : '-'}
          {amount} {currency}
        </Text>
      );
    }
    default:
      return null;
  }
}
