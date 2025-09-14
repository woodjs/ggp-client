import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import { OrderTable } from '@/widgets/order/TableOrder';
import { useOrders } from '@/widgets/products/hooks/use-orders';
import { Center, Spinner } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// [
//           {
//             id: '1234',
//             status: 'В обработке',
//             date: '2025-08-03',
//             address: 'г. Москва, ул. Ленина, д. 1',
//             items: [
//               { name: 'Royal Strawberry', grams: 2 },
//               { name: 'Purple Haze', grams: 1 },
//             ],
//           },
//           {
//             id: '1235',
//             status: 'Доставлен',
//             date: '2025-08-01',
//             address: 'г. Санкт-Петербург, ул. Невский, д. 10',
//             items: [{ name: 'Blue Dream', grams: 3 }],
//           },
//         ]

export default function Orders() {
  const { data: orders, isLoading, isError } = useOrders();

  if (isLoading) {
    return (
      <CabinetContent>
        <Center p={10}>
          <Spinner size="xl" />
        </Center>
      </CabinetContent>
    );
  }

  if (isError) {
    return (
      <CabinetContent>
        <Center p={10}>Ошибка загрузки заказов</Center>
      </CabinetContent>
    );
  }

  return (
    <CabinetContent>
      <OrderTable orders={orders} />
    </CabinetContent>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'cabinet',
      'global',
      'orders',
    ])),
  },
});
