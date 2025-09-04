import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import { OrderTable } from '@/widgets/order/TableOrder';
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
  return (
    <CabinetContent>
      <OrderTable orders={[]} />
    </CabinetContent>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['cabinet', 'global'])),
  },
});
