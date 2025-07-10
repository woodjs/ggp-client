import { SimpleGrid } from '@chakra-ui/react';
import AuthHistoryCard from '../AuthHistoryCard/AuthHistoryCard';
/**
 *
 *
 * @param {Object} props
 * @param {HistoryItem[]} [props.history] - array of history items
 * @returns
 */

function AuthHistoryCards({ history }) {
  return (
    <SimpleGrid w="full" columns={1} gap="20px">
      {history?.length &&
        history.map((historyItem) => (
          <AuthHistoryCard {...historyItem} key={historyItem?.id} />
        ))}
    </SimpleGrid>
  );
}

export default AuthHistoryCards;
