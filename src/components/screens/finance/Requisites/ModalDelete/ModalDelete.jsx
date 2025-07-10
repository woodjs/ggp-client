import { Text } from '@chakra-ui/react';
import { useRequisite } from '@/hooks/user/useRequisite';
import Modal from '@/components/layout/Modal/Modal';
import { useTranslation } from 'next-i18next';

export default function ModalDelete({ isOpen, onClose, selectedRequisite }) {
  const { t } = useTranslation('finance');
  const { destroyById } = useRequisite();
  const { mutate, isLoading } = destroyById();

  const handleClick = () => {
    mutate(selectedRequisite.id, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      handleClick={handleClick}
      blockScrollOnMount={false}
      title={t('requisite-delete-title')}
      isDisabled={isLoading}
    >
      <Text fontWeight="bold">
        {t('requisite-wallet')}:{' '}
        <Text as="span" fontWeight="normal">
          {selectedRequisite?.value}
        </Text>
      </Text>
    </Modal>
  );
}
