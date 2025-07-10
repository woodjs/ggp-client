import { toast } from 'react-toastify';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { Form2FA, useForm2FA } from '@/features/security/2fa';

export function ModalConfirm2FA({ title, isOpen, onClose, onConfirm, action }) {
  const { codes, onChange, isValidateForm } = useForm2FA();

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form2FA codes={codes} onChange={onChange} action={action} />
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              if (!isValidateForm()) return toast.error('Заполните поля');

              console.log('Запрос на подтверждение');
              return onConfirm(codes);
            }}
          >
            Подтвердить
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
