import { useTranslation } from 'next-i18next';
import {
  Card,
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
  Center,
  useDisclosure,
} from '@chakra-ui/react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

function OrderRow({ order }) {
  const { t } = useTranslation('orders');
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
            aria-label={t('toggle_details')}
          />
        </Td>
        <Td>{order.id}</Td>
        <Td>{order.status}</Td>
        <Td>{new Date(order.createdAt).toLocaleString()}</Td>
      </Tr>

      <Tr>
        <Td colSpan={4} p={0}>
          <Collapse in={isOpen} animateOpacity>
            <Box p={4} rounded="md">
              <Text fontWeight="semibold" mb={2}>
                {t('order_contents')}
              </Text>
              {order.items.length ? (
                order.items.map((item) => (
                  <Box key={item.id} fontSize="sm" mb={1}>
                    {item.product?.name || 'Продукт удален'} — {item.grams} г
                  </Box>
                ))
              ) : (
                <Text fontSize="sm" color="gray.500">
                  {t('no_items')}
                </Text>
              )}
              <Text mt={2} fontSize="sm">
                {t('delivery_address')}: {order.address}, {order.postalCode},{' '}
                {order.fullname}, {order.phone}
              </Text>
            </Box>
          </Collapse>
        </Td>
      </Tr>
    </>
  );
}

export function OrderTable({ orders }) {
  const { t } = useTranslation('order');

  if (!orders || !orders.length) {
    return (
      <Card p={4}>
        <Center>{t('no_orders')}</Center>
      </Card>
    );
  }

  return (
    <Card p={4}>
      <Box overflowX="auto">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th />
              <Th>{t('id')}</Th>
              <Th>{t('status')}</Th>
              <Th>{t('created_at')}</Th>
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
