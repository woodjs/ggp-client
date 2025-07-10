import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import Card from '../../../../Card/Card';
import AuthHistoryTableLine from './AuthHistoryTableLine';

/**
 *
 *
 * @param {Object} props
 * @param {HistoryItem[]} [props.history] - array of history items
 * @example
 * <AuthHistoryTable history={history} />
 */

function AuthHistoryTable({ history = [] }) {
  const accentColor100 = useColorModeValue('brandGreen.100', 'brandYellow');
  const textColor = useColorModeValue('white', 'black');
  return (
    <Card w="full">
      <Box borderBottom="1px" borderColor="rgba(160, 174, 192, 0.5);" p="20px">
        <Text fontWeight={700}>История входа</Text>
      </Box>
      <SimpleGrid
        backgroundColor={accentColor100}
        p="20px"
        py="10px"
        w="full"
        color={textColor}
        fontWeight={700}
        columns={4}
      >
        <Text>Браузер</Text>
        <Text>Устройство</Text>
        <Text>Локация</Text>
        <Text>Последняя активность</Text>
      </SimpleGrid>
      <VStack w="full" spacing="30px" pt="0" p="20px">
        {history?.length &&
          history.map((historyItem, index) => (
            <AuthHistoryTableLine
              isLine={index !== 0}
              {...historyItem}
              key={historyItem.id}
            />
          ))}
      </VStack>
    </Card>
  );
}

export default AuthHistoryTable;
