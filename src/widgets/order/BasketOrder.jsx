import { Card, Text, Flex, IconButton, Box } from '@chakra-ui/react';
import { BsTrash2 } from 'react-icons/bs';

export function BasketOrder({ data = [], onRemove }) {
  return (
    <Card p="4" w="full">
      <Text fontWeight="bold" fontSize="lg" mb="4">
        🛒 Ваша корзина
      </Text>

      {data.length === 0 ? (
        <Text fontSize="sm">Корзина пуста</Text>
      ) : (
        <Box>
          {/* Заголовки таблицы */}
          <Flex fontWeight="semibold" mb="2" fontSize="sm" color="gray.500">
            <Box flex="1">Сорт</Box>
            <Box w="80px" textAlign="center">
              Граммы
            </Box>
            <Box w="40px" />
          </Flex>

          {/* Элементы корзины */}
          {data.map((item, index) => (
            <Flex
              key={index}
              align="center"
              py="2"
              borderBottom="1px solid"
              borderColor="gray.100"
            >
              <Box flex="1">{item.name}</Box>
              <Box w="80px" textAlign="center">
                {item.grams}г
              </Box>
              <Box w="40px">
                <IconButton
                  aria-label="Удалить"
                  icon={<BsTrash2 size={16} />}
                  size="sm"
                  variant="ghost"
                  colorScheme="red"
                  onClick={() => onRemove?.(item)}
                />
              </Box>
            </Flex>
          ))}
        </Box>
      )}
    </Card>
  );
}
