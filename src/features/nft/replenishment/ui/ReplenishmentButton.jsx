import { Button, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import ModalReplenishment from './Modal';

export function ReplenishmentButton({ currentAmount, nftId, percent }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { t } = useTranslation('myfarm');
  return (
    <>
      <ModalReplenishment
        isOpen={isOpen}
        onClose={onClose}
        currentAmount={currentAmount}
        percent={percent}
        nftId={nftId}
      />
      <Button w="full" onClick={() => onOpen()}>
        {t('modal-top-up')}
      </Button>
    </>
  );
}
