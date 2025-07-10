import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';

import { toDateNormalUtil } from '@/utils/toDate';
import { Accordion, Flex, Text } from '@chakra-ui/react';

const TransactionItem = dynamic(
  () => import('./TransactionItem/TransactionItem'),
  {
    ssr: false,
  }
);

function TransactionDesktop({ data }) {
  const { t } = useTranslation('transactions');
  return (
    <>
      <Flex my="20px" px="16px">
        <Text
          flex={1}
          fontWeight="bold"
          color="brandGray.200"
          textAlign="center"
        >
          {t('operation')}
        </Text>
        <Text
          flex={1}
          fontWeight="bold"
          color="brandGray.200"
          textAlign="center"
        >
          {t('date')}
        </Text>
        <Text
          flex={1}
          fontWeight="bold"
          color="brandGray.200"
          textAlign="center"
        >
          {t('amount')}
        </Text>
        <Text
          flex={1}
          fontWeight="bold"
          color="brandGray.200"
          textAlign="center"
        >
          {t('status')}
        </Text>
        <Text
          flex={1}
          fontWeight="bold"
          color="brandGray.200"
          textAlign="center"
        >
          {t('details')}
        </Text>
      </Flex>
      <Accordion allowMultiple>
        {data.map(
          ({
            id,
            name,
            amount,
            commission,
            totalAmount,
            createdAt,
            statusId,
            type,
            status,
            currency,
            message,
          }) => (
            <TransactionItem
              key={id}
              id={id}
              amount={amount}
              commission={commission}
              totalAmount={totalAmount}
              date={toDateNormalUtil(createdAt)}
              name={name}
              statusId={statusId}
              type={type}
              status={status}
              currency={currency}
              message={message}
            />
          )
        )}
      </Accordion>
    </>
  );
}

export default TransactionDesktop;
