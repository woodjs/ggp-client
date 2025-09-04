import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Stack, useColorModeValue, VStack } from '@chakra-ui/react';
import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import Balances from '@/components/screens/finance/Balances/Balances';
import Requisites from '@/components/screens/finance/Requisites/Requisites';

import Tabs from '@/components/screens/finance/Tabs/Tabs';
import LastTransactions from '@/components/screens/finance/LastTransactions/LastTransactions';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'cabinet',
      'finance',
      'errors',
      'two-factor',
      'global',
      'transactions',
      'promo-modal',
    ])),
  },
});

export default function FinancePage() {
  const { t } = useTranslation('finance');
  return (
    <CabinetContent
      bgImage={useColorModeValue(
        '/images/bg/finance/light.jpg',
        '/images/bg/finance/dark.jpg'
      )}
      title={t('title')}
    >
      <Stack direction={['column', null, null, 'row']} w="full" spacing="30px">
        <VStack w="full">
          <Balances />

          <Stack w="full">
            <Tabs />
          </Stack>
        </VStack>

        <VStack w="full">
          {/* <Requisites /> */}
          <LastTransactions />
        </VStack>
      </Stack>
    </CabinetContent>
  );
}
