/*
  Descripton: Компонент с формой оплаты. Выводит способы оплаты и в зависимости от выбранного способа выводит форму оплаты.
*/

import { Button, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { usePaymentMethods } from '@/hooks/user/usePayment';
import { useState } from 'react';
import CryptoForm from './forms/Crypto/Crypto';
import ContentForm from './Content/Content';

export default function PaymentForm() {
  const { t } = useTranslation('finance');
  const { data, isLoading, isError } = usePaymentMethods();

  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleBack = () => setSelectedMethod(null);

  switch (selectedMethod?.type) {
    case 'crypto': {
      return <CryptoForm handleBack={handleBack} method={selectedMethod} />;
    }

    default: {
      if (isLoading) return 'Loading';
      if (isError) return 'Error';

      return (
        <ContentForm title={t('payment-systems')}>
          <Flex wrap="wrap" gap="8px">
            {data.map((item) => (
              <Button
                variant="border"
                px="12px"
                minH="50px"
                minW={{ base: 'full', xl: '32%' }}
                maxW={{ base: 'full', lg: 'calc(33.33333% - 5.33333px)' }}
                flex="1 0 0"
                key={item.id}
                onClick={() => setSelectedMethod({ ...item, type: 'crypto' })}
                isDisabled={!item.isEnable}
              >
                <HStack spacing="8px">
                  <Image src={item.icon} boxSize="28px" />
                  <Text fontWeight="400">
                    <Text as="span" fontWeight="bold">
                      {item.baseCurrency}
                    </Text>{' '}
                    {item.name}
                  </Text>
                </HStack>
              </Button>
            ))}
          </Flex>
        </ContentForm>
      );
    }
  }
}
