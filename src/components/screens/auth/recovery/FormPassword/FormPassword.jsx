import { useRecoveryPassword } from '@/hooks/auth/useRecovery';
import { UnlockIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import { FastField, Formik } from 'formik';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Form from '../../Form';
import { validateSchema } from './validate.schema';

export default function RecoveryFormPassword({ token }) {
  const router = useRouter();
  const { t } = useTranslation('auth');
  const { mutate } = useRecoveryPassword();
  return (
    <Form title={t('recovery-title')}>
      <Formik
        initialValues={{
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validateSchema}
        onSubmit={(values, { resetForm }) =>
          mutate(
            { ...values, token },
            {
              onSuccess: () => {
                resetForm();
                router.push('/auth/login');
              },
            }
          )
        }
      >
        {({ handleSubmit }) => (
          <>
            <FastField name="password">
              {({ field, meta }) => (
                <FormControl isInvalid={!!meta.error && meta.touched}>
                  <FormLabel>{t('password')}</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon
                        as={UnlockIcon}
                        color="brandGray.200"
                        w="20px"
                        h="20px"
                      />
                    </InputLeftElement>
                    <Input
                      {...field}
                      type="password"
                      fontSize="14px"
                      border="1px"
                      borderColor="brandGray.200"
                      focusBorderColor="brandGreen.400"
                    />
                  </InputGroup>
                  <FormErrorMessage>{t(meta.error)}</FormErrorMessage>
                </FormControl>
              )}
            </FastField>

            <FastField name="confirmPassword">
              {({ field, meta }) => (
                <FormControl isInvalid={!!meta.error && meta.touched}>
                  <FormLabel>{t('confirm-password')}</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon
                        as={UnlockIcon}
                        color="brandGray.200"
                        w="20px"
                        h="20px"
                      />
                    </InputLeftElement>
                    <Input
                      {...field}
                      type="password"
                      fontSize="14px"
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
              <Button onClick={handleSubmit}>{t('btn-recovery')}</Button>
            </Stack>
          </>
        )}
      </Formik>
    </Form>
  );
}
