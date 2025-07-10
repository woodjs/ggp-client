import NextLink from 'next/link';
import { useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
} from '@chakra-ui/react';
import { Formik, FastField } from 'formik';
import { useTranslation } from 'next-i18next';
import { AiOutlineMail } from 'react-icons/ai';
import { useRecovery } from '@/hooks/auth/useRecovery';
import Form from '../Form';
import { recoverySchema } from './recvoery.schema';

export default function RecoveryForm() {
  const { t } = useTranslation('auth');
  const { mutate } = useRecovery();
  const [disable, setDisable] = useState(false);

  return (
    <Form title={t('recovery-title')}>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={recoverySchema}
        onSubmit={(values, { resetForm }) => {
          setDisable(true);
          mutate(values.email, {
            onSuccess: () => {
              resetForm();
            },
            onSettled: () => setDisable(false),
          });
        }}
      >
        {({ handleSubmit }) => (
          <>
            <FastField name="email">
              {({ field, meta }) => (
                <FormControl isInvalid={!!meta.error && meta.touched}>
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon
                        as={AiOutlineMail}
                        color="brandGray.200"
                        w="20px"
                        h="20px"
                      />
                    </InputLeftElement>
                    <Input
                      {...field}
                      type="email"
                      fontSize="14px"
                      placeholder={t('email-placeholder')}
                      border="1px"
                      borderColor="brandGray.200"
                      focusBorderColor="brandGreen.400"
                    />
                  </InputGroup>
                  <FormErrorMessage>{t(meta.error)}</FormErrorMessage>
                </FormControl>
              )}
            </FastField>

            <Stack spacing="20px">
              <Flex justify="flex-end">
                <Link as={NextLink} color="blue.400" href="/auth/login">
                  {t('login-title')}
                </Link>
              </Flex>

              <Button onClick={handleSubmit} isDisabled={disable}>
                {t('btn-recovery')}
              </Button>
            </Stack>
          </>
        )}
      </Formik>
    </Form>
  );
}
