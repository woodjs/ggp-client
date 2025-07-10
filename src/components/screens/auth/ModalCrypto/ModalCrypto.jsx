import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { FastField, Formik } from 'formik';
import { useTranslation } from 'next-i18next';

import Modal from '@/components/layout/Modal/Modal';
import schema from './validate.schema';

export default function ModalCrypto({ handleClick, isOpen, onClose }) {
  const { t } = useTranslation('auth');
  return (
    <Formik
      initialValues={{
        login: '',
        email: '',
      }}
      validationSchema={schema}
      onSubmit={handleClick}
    >
      {({ handleSubmit }) => (
        <Modal
          size="xl"
          isOpen={isOpen}
          onClose={onClose}
          title={t('metamask-register-title')}
          handleClick={handleSubmit}
        >
          <VStack>
            <FastField name="login">
              {({ field, meta }) => (
                <FormControl isInvalid={!!meta.error && meta.touched}>
                  <FormLabel>{t('login')}</FormLabel>
                  <Input {...field} />
                  <FormErrorMessage>{t(meta.error)}</FormErrorMessage>
                </FormControl>
              )}
            </FastField>

            <FastField name="email">
              {({ field, meta }) => (
                <FormControl isInvalid={!!meta.error && meta.touched}>
                  <FormLabel>{t('email')}</FormLabel>
                  <Input {...field} />
                  <FormErrorMessage>{t(meta.error)}</FormErrorMessage>
                </FormControl>
              )}
            </FastField>
          </VStack>
        </Modal>
      )}
    </Formik>
  );
}
