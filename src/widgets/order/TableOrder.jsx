import { Card } from '@/shared/ui';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Collapse,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

function OrderRow({ order }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Tr>
        <Td>
          <IconButton
            icon={isOpen ? <MdExpandLess /> : <MdExpandMore />}
            size="sm"
            variant="ghost"
            onClick={onToggle}
            aria-label="Toggle details"
          />
        </Td>
        <Td>{order.id}</Td>
        <Td>{order.status}</Td>
        <Td>{order.date}</Td>
      </Tr>

      <Tr>
        <Td colSpan={4} p={0}>
          <Collapse in={isOpen} animateOpacity>
            <Box p="4" rounded="md">
              <Text fontWeight="semibold" mb="2">
                Содержимое заказа:
              </Text>
              {order.items.map((item, index) => (
                <Box key={index} fontSize="sm" mb="1">
                  {item.name} — {item.grams}г
                </Box>
              ))}
              <Text mt="2" fontSize="sm" color="gray.500">
                Адрес доставки: {order.address}
              </Text>
            </Box>
          </Collapse>
        </Td>
      </Tr>
    </>
  );
}

export function OrderTable({ orders }) {
  return (
    <Card>
      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th />
              <Th>ID заказа</Th>
              <Th>Статус</Th>
              <Th>Дата</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map((order) => (
              <OrderRow key={order.id} order={order} />
            ))}
          </Tbody>
        </Table>
      </Box>
    </Card>
  );
}
