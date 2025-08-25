import { useState, useMemo } from 'react';
import {
  Card,
  Grid,
  Flex,
  Select,
  Input,
  IconButton,
  Text,
  Box,
  Button,
} from '@chakra-ui/react';
import { DownloadIcon, CheckIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons';

export function OrderCreateCard({ onNextStep }) {
  const [rows, setRows] = useState([
    { sort: 'Bubblegum sherbet', available: 1000, order: 10 },
    { sort: 'Bubblegum sherbet', available: 1000, order: 20 },
  ]);

  const addRow = () => {
    setRows([...rows, { sort: '', available: 1000, order: '' }]);
  };

  const deleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const isFilled = (row) =>
    row.sort && row.available !== '' && row.order !== '';

  const totalWeight = useMemo(
    () => rows.reduce((sum, row) => sum + (parseFloat(row.order) || 0), 0),
    [rows]
  );

  return (
    <Card bg="#2B3143" p={6} borderRadius="xl" color="white">
      {/* Заголовки */}
      <Grid
        templateColumns="2fr 1fr 1fr 40px 40px"
        gap={4}
        fontWeight="bold"
        mb={4}
        alignItems="center"
      >
        <Text>Сорт</Text>
        <Text>Доступно, г</Text>
        <Text>Заказ, г</Text>
        <Box />
        <Box />
      </Grid>

      {/* Строки */}
      {rows.map((item, i) => {
        const filled = isFilled(item);
        return (
          <Grid
            key={i}
            templateColumns="2fr 1fr 1fr 40px 40px"
            gap={4}
            mb={4}
            alignItems="center"
          >
            {/* Сорт */}
            <Flex
              border={filled ? '1px solid #FFD700' : 'none'}
              borderRadius="md"
              align="center"
              paddingLeft={filled ? '1rem' : 0}
            >
              <Select
                variant={filled ? 'unstyled' : 'outline'}
                // px={2}
                // paddingInlineStart={0}
                // paddingInlineEnd={0}
                w="full"
                boxSizing="border-box"
                placeholder="Выберите сорт"
                color="white"
                value={item.sort}
                // sx={{
                //   '.chakra-select__wrapper': {
                //     paddingInlineStart: 0,
                //   },
                // }}
                onChange={(e) =>
                  setRows((prev) =>
                    prev.map((row, idx) =>
                      idx === i ? { ...row, sort: e.target.value } : row
                    )
                  )
                }
              >
                <option style={{ color: 'black' }}>Bubblegum sherbet</option>
                <option style={{ color: 'black' }}>Another sort</option>
              </Select>
              {filled && (
                <IconButton
                  icon={<DownloadIcon />}
                  aria-label="Download"
                  variant="ghost"
                  color="#FFD700"
                />
              )}
            </Flex>

            {/* Доступно — только чтение */}
            <Input
              value={item.available}
              isReadOnly
              border={filled ? '1px solid #FFD700' : 'none'}
              borderRadius="md"
              textAlign="center"
            />

            {/* Заказ */}
            <Box>
              <Input
                value={item.order}
                onChange={(e) =>
                  setRows((prev) =>
                    prev.map((row, idx) =>
                      idx === i ? { ...row, order: e.target.value } : row
                    )
                  )
                }
                border={filled ? '1px solid #FFD700' : 'none'}
                borderRadius="md"
                textAlign="center"
                mb={1}
                placeholder={!filled ? '—' : ''}
              />
            </Box>

            {/* Удалить */}
            {filled ? (
              <IconButton
                icon={<DeleteIcon />}
                aria-label="Delete"
                variant="ghost"
                color="white"
                onClick={() => deleteRow(i)}
              />
            ) : (
              <Box />
            )}

            {/* Готово */}
            {filled ? (
              <IconButton
                icon={<CheckIcon />}
                aria-label="Confirm"
                variant="ghost"
                color="#FFD700"
              />
            ) : (
              <Box />
            )}
          </Grid>
        );
      })}

      {/* Итоговый вес */}
      <Text mt={4} fontWeight="bold" fontSize="lg" color="#FFD700">
        Итоговый вес: {totalWeight} г
      </Text>

      {/* Кнопки */}
      <Flex mt={4} gap={3}>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="yellow"
          variant="outline"
          borderColor="#FFD700"
          color="#FFD700"
          _hover={{ bg: 'rgba(255,215,0,0.1)' }}
          onClick={addRow}
        >
          Добавить сорт
        </Button>

        <Button
          colorScheme="yellow"
          bg="#FFD700"
          color="black"
          _hover={{ bg: '#e6c200' }}
          onClick={onNextStep}
        >
          Подтвердить перечень сортов
        </Button>
      </Flex>
    </Card>
  );
}
