import {
  Button,
  Modal as ModalWindow,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Portal,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

/**
 *
 * @typedef {Object} CustomModalProps
 * @property {() => void} handleClick - Функция для кнопки действия
 * @property {boolean} isOpen - Открытие модального окна
 * @property {() => void} onClose - Функция закрытия модального окна
 * @property {React.ReactNode} children - Дочерние элементы
 * @property {string} title - Заголовок модального окна
 * @property {string} btnActionText - Текст для кнопки действия
 * @property {boolean} isDisabled - Отключение кнопки действия
 * @property {boolean} isLoading - Загрузка кнопки действия
 * @property {import('@chakra-ui/react').ModalContentProps} modalContentProps - Свойства для ModalContent
 * @property {import('@chakra-ui/react').CloseButtonProps} modalCloseButtonProps - Свойства для ModalCloseButton
 * @property {import('@chakra-ui/react').ModalBodyProps} modalBodyProps - Свойства для ModalBody
 * @property {import('react').ReactNode} btnCancel - Кнопка отмены. По умолчанию выводится
 * @property {import('react').ReactNode} btnAction - Кнопка действия. По умолчанию выводится. Необходимо передать handleClick
 * @property {import('react').ReactNode} btnActionText - Текст для кнопки действия
 *
 *
 * @param {import('@chakra-ui/react').ModalProps & CustomModalProps} props
 * @returns
 */
export default function Modal({
  handleClick,
  isOpen,
  onClose,
  btnCancel,
  children,
  title,
  btnActionText,
  isDisabled,
  isLoading,
  modalContentProps,
  modalCloseButtonProps,
  modalBodyProps,
  ...rest
}) {
  const { t } = useTranslation('global');
  let templateFooter = null;

  if (handleClick || btnCancel)
    if (handleClick && btnCancel)
      templateFooter = (
        <>
          <Button
            colorScheme="blue"
            onClick={handleClick}
            isLoading={isLoading}
            isDisabled={isDisabled}
          >
            {btnActionText || t('Confirm')}
          </Button>
          <Button onClick={onClose} bg="danger" color="white" ml={3}>
            {t('cancel')}
          </Button>
        </>
      );
    else if (handleClick)
      templateFooter = (
        <Button
          colorScheme="blue"
          onClick={handleClick}
          isLoading={isLoading}
          isDisabled={isDisabled}
          w={{ base: '100%', md: 'auto' }}
        >
          {btnActionText || t('confirm')}
        </Button>
      );
    else if (btnCancel)
      templateFooter = <Button onClick={onClose}>{t('cancel')}</Button>;

  return (
    <Portal>
      <ModalWindow isOpen={isOpen} onClose={onClose} {...rest}>
        <ModalOverlay />
        <ModalContent {...modalContentProps}>
          <ModalHeader>{title}</ModalHeader>

          <ModalBody pb={6} {...modalBodyProps}>
            {children}
          </ModalBody>

          {templateFooter && <ModalFooter>{templateFooter}</ModalFooter>}
          <ModalCloseButton {...modalCloseButtonProps} />
        </ModalContent>
      </ModalWindow>
    </Portal>
  );
}
