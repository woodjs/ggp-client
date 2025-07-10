import { Card } from '@/components/Card';
import {
  SimpleGrid,
  TabList,
  TabPanel,
  TabPanels,
  Tabs as ChakraTabs,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
// import { Exchange } from './Exchange';
import { CreditIcon, RefillIcon, TransferIcon } from './icons';
// import PaymentMultiForm from './payment/PaymentMultiForm/PaymentMultiForm';
import TabItem from './TabItem/TabItem';
import WithdrawalFormContainer from './Withdrawal/Withdrawal.container';
import TranfserFormContainer from './Transfer/Transfer.container';
import PaymentForm from './Payment/Payment';

export default function Tabs() {
  const { t } = useTranslation('finance');
  return (
    <ChakraTabs variant="unstyled">
      <TabList>
        <SimpleGrid
          w="full"
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(3, 1fr)',
            null,
            null,
            // 'repeat(4, 1fr)',
            null,
            // 'repeat(4, 1fr)', - было
          ]}
          gap={2}
        >
          <TabItem>
            <RefillIcon transition="0.3s" fill="brandGray.200" />
            <Text
              _groupHover={{ color: useColorModeValue('dark', 'white') }}
              transition="0.3s"
              fontSize="14px"
            >
              {t('btn-debit')}
            </Text>
          </TabItem>
          <TabItem>
            <CreditIcon transition="0.3s" fill="brandGray.200" />

            <Text
              _groupHover={{ color: useColorModeValue('dark', 'white') }}
              transition="0.3s"
              fontSize="14px"
            >
              {t('btn-withdraw')}
            </Text>
          </TabItem>
          <TabItem>
            <TransferIcon transition="0.3s" fill="brandGray.200" />

            <Text
              _groupHover={{ color: useColorModeValue('dark', 'white') }}
              transition="0.3s"
              fontSize="14px"
            >
              {t('btn-transfer')}
            </Text>
          </TabItem>

          {/* <TabItem>
            <ExchangeIcon transition="0.3s" fill="brandGray.200" />
            <Text
              _groupHover={{ color: useColorModeValue('dark', 'white') }}
              transition="0.3s"
              fontSize="14px"
            >
              {t('btn-exchange')}
            </Text>
          </TabItem> */}
        </SimpleGrid>
      </TabList>

      <TabPanels mt="2" p="0">
        <TabPanel p="0">
          <Card minH="200px" position="relative" p="20px">
            {/* <PaymentMultiForm /> */}
            <PaymentForm />
          </Card>
        </TabPanel>
        <TabPanel p="0">
          <WithdrawalFormContainer />
        </TabPanel>
        <TabPanel p="0">
          <TranfserFormContainer />
        </TabPanel>
        {/* <TabPanel p="0"><Exchange /></TabPanel> */}
      </TabPanels>
    </ChakraTabs>
  );
}
