import NextLink from 'next/link';
import {
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  Stack,
  InputLeftElement,
  Text,
  FormErrorMessage,
  HStack,
  Box,
  Link,
  Flex,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Formik, Field } from 'formik';
import { FiUser } from 'react-icons/fi';
import { AiOutlineLock } from 'react-icons/ai';
import { useAuth } from '@/hooks/auth/useAuth';

import Form from '../Form';
import { loginSchema } from './login.schema';
// import CustomButton from '../buttons/WalletConnect/WalletConnect';

export default function LoginForm({ children, ...rest }) {
  const { t } = useTranslation('auth');
  const { login } = useAuth();
  const loginQuery = login();
  const handleLogin = (values, { resetForm }) => {
    loginQuery.mutate(values, {
      onSuccess: () => {
        resetForm();
      },
    });
  };

  return (
    <Form title={t('login-title')} {...rest}>
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ handleSubmit }) => (
          <>
            <Field name="login">
              {({ field, meta }) => (
                <FormControl isInvalid={!!meta.error && meta.touched}>
                  <FormLabel>{t('login')}</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon
                        as={FiUser}
                        color="brandGray.200"
                        w="20px"
                        h="20px"
                      />
                    </InputLeftElement>
                    <Input
                      {...field}
                      fontSize="sm"
                      placeholder={t('login-placeholder')}
                      variant="filled"
                    />
                  </InputGroup>
                  <FormErrorMessage>{t(meta.error)}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="password">
              {({ field, meta }) => (
                <FormControl isInvalid={!!meta.error && meta.touched}>
                  <FormLabel>{t('password')}</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon
                        as={AiOutlineLock}
                        color="brandGray.200"
                        w="20px"
                        h="20px"
                      />
                    </InputLeftElement>
                    <Input
                      {...field}
                      type="password"
                      fontSize="sm"
                      placeholder={t('password-placeholder')}
                      variant="filled"
                    />
                  </InputGroup>

                  <FormErrorMessage>{t(meta.error)}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Stack spacing="20px">
              <Flex justify="flex-end">
                <Link
                  as={NextLink}
                  color="blue.400"
                  textAlign="right"
                  href="/auth/recovery"
                >
                  {t('forgout-password')}
                </Link>
              </Flex>

              <Button onClick={handleSubmit} isDisabled={loginQuery.isLoading}>
                {t('btn-login')}
              </Button>
            </Stack>
          </>
        )}
      </Formik>

      {/* <HStack>
        <Box flex="1 0 auto" h="1px" bg="brandGray.200" />
        <Text color="brandGray.200">{t('or')}</Text>
        <Box flex="1 0 auto" h="1px" bg="brandGray.200" />
      </HStack>
      <CustomButton /> */}
      {/* <ThirdwebButton /> */}

      <Text textAlign="center">{t('no-account')}</Text>

      <NextLink href="/auth/register">
        <Button
          w="full"
          color="brandGray.200"
          variant="outline"
          fontWeight="normal"
        >
          {t('btn-register')}
        </Button>
      </NextLink>

      {children}
    </Form>
  );
}
