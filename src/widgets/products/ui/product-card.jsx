import {
  Button,
  Card,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
  useNumberInput,
} from '@chakra-ui/react';

export function ProductCard({ id, name, stockGrams, onAdd }) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: stockGrams,
      precision: 0,
    });

  const inputProps = getInputProps();
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const grams = parseInt(inputProps.value || '1', 10);

  return (
    <Card p="20px" maxW="200px" w="full" position="relative">
      <Text fontWeight="bold" fontSize="18px" textAlign="center">
        {name}
      </Text>

      <Stack mt="10px">
        <Flex justify="space-between" fontSize="14px">
          <Text>Доступно</Text>
          <Text>{stockGrams}г</Text>
        </Flex>

        <HStack>
          <Button {...dec} size="xs">
            -
          </Button>
          <Input {...inputProps} size="xs" />
          <Button {...inc} size="xs">
            +
          </Button>
        </HStack>

        <Button size="sm" onClick={() => onAdd(grams)}>
          Добавить в корзину
        </Button>
      </Stack>
    </Card>
  );
}
