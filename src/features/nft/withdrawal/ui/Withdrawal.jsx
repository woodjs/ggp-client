import { Button } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useWithdrawalNFT } from '../model';

export function WithdrawalButton({ id }) {
  const { mutate, isLoading } = useWithdrawalNFT();
  const { t } = useTranslation('myfarm');

  return (
    <Button w="full" onClick={() => mutate({ id })} isLoading={isLoading}>
      {t('withdrawal-profit')}
    </Button>
  );
}
