import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { Accordion, Text } from '@chakra-ui/react';

import { toDateNormalUtil } from '@/utils/toDate';

// import TransactionItem from './TransactionItem/TransactionItem';

const TransactionItem = dynamic(
  () => import('./TransactionItem/TransactionItem'),
  {
    ssr: false,
  }
);

function TransactionMobile({ data }) {
  const { t } = useTranslation('transactions');
  if (!data.length)
    return (
      <Text textAlign="center" mt="30px" mb="50px">
        {t('not-found')}
      </Text>
    );
  return (
    <Accordion allowMultiple>
      {data.map(
        ({
          id,
          name,
          createdAt,
          message,
          amount,
          commission,
          totalAmount,
          type,
          status,

          statusId,
          currency,
        }) => (
          <TransactionItem
            id={id}
            name={name}
            createdAt={toDateNormalUtil(createdAt)}
            amount={amount}
            commission={commission}
            totalAmount={totalAmount}
            message={message}
            type={type}
            status={status}
            statusId={statusId}
            currency={currency}
          />
        )
      )}
    </Accordion>
  );
}

export default TransactionMobile;
