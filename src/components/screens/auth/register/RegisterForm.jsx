import NextLink from 'next/link';
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Formik, Field } from 'formik';
import { FiUser } from 'react-icons/fi';
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';

import { useTranslation } from 'next-i18next';
import {
  BsFacebook,
  BsFillChatDotsFill,
  BsInstagram,
  BsTelegram,
} from 'react-icons/bs';

import { useAuth } from '@/hooks/auth/useAuth';
import LangaugeSelect from '@/components/layout/Cabinet/LangaugeSelect/LangaugeSelect';
import Form from '../Form';
import { registerSchema } from './register.schema';
// import WalletConnect from '../buttons/WalletConnect/WalletConnect';

/**
 * @typedef {Object} RegisterFormProps
 * @property {React.ReactNode} children
 * @param {RegisterFormProps & React.ComponentProps<typeof Form>} props
 */

export default function RegisterForm({ children, sponsorData, ...rest }) {
  const { t } = useTranslation('auth');
  const { register } = useAuth();
  const { mutate } = register();
  const handleСlick = (values, { resetForm }) => {
    const data = {};
    Object.keys(values).forEach((key) => {
      data[key] = values[key].trim(); // удаляем пробелы по бокам
    });
    if (sponsorData) {
      data.sponsorLogin = sponsorData.login;
    }
    mutate(data, {
      onSuccess: () => {
        resetForm();
      },
    });
  };

  return (
    <>
      <Form title={t('register-title')} {...rest} pos>
        {sponsorData && (
          <VStack flexDir="column">
            <Text fontWeight="bold">{t('your-sponsor')}</Text>
            {sponsorData.avatar ? (
              <Img
                src={sponsorData.avatar}
                defaultValue
                objectFit="cover"
                boxSize="120px"
                my="15px"
                alt=""
                borderRadius="full"
              />
            ) : (
              <Avatar my="15px" boxSize="120px" />
            )}

            <Text fontWeight="bold">{sponsorData.login}</Text>
            <HStack>
              {sponsorData.socials?.tg && (
                <Link href={sponsorData.socials.tg} target="_blank">
                  <Icon as={BsTelegram} boxSize="20px" />
                </Link>
              )}
              {sponsorData.socials?.fb && (
                <Link href={sponsorData.socials.fb} target="_blank">
                  <Icon as={BsFacebook} boxSize="20px" />
                </Link>
              )}
              {sponsorData.socials?.inst && (
                <Link href={sponsorData.socials.inst} target="_blank">
                  <Icon as={BsInstagram} boxSize="20px" />
                </Link>
              )}
              {sponsorData.socials?.chat && (
                <Link href={sponsorData.socials.chat} target="_blank">
                  <Icon as={BsFillChatDotsFill} boxSize="20px" />
                </Link>
              )}
            </HStack>
          </VStack>
        )}

        <Formik
          initialValues={{
            login: '',
            email: '',
            password: '',
          }}
          validationSchema={registerSchema}
          onSubmit={handleСlick}
        >
          {({ handleSubmit }) => (
            <>
              <Field name="login">
                {({ field, meta }) => (
                  <FormControl isInvalid={!!meta.error && meta.touched}>
                    <FormLabel>{t('login')}</FormLabel>
                    <InputGroup minW={{ base: '300px', md: '350px' }}>
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
                        type="text"
                        fontSize="14px"
                        placeholder={t('login-placeholder')}
                        border="1px"
                        borderColor="brandGray.200"
                        focusBorderColor="brandGreen.400"
                      />
                    </InputGroup>
                    <FormErrorMessage>{t(meta.error)}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="email">
                {({ field, meta }) => (
                  <FormControl isInvalid={!!meta.error && meta.touched}>
                    <FormLabel>{t('email')}</FormLabel>
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
              </Field>

              <Field name="password">
                {({ meta, field }) => (
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
                        fontSize="14px"
                        placeholder={t('password-placeholder')}
                        border="1px"
                        borderColor="brandGray.200"
                        focusBorderColor="brandGreen.400"
                      />
                    </InputGroup>
                    <FormErrorMessage>{t(meta.error)}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Stack spacing="20px">
                <Link
                  as={NextLink}
                  color="blue.400"
                  textAlign="right"
                  href="/auth/login"
                >
                  {t('have-account')}
                </Link>
                <Button onClick={handleSubmit}>{t('btn-register')}</Button>
              </Stack>
            </>
          )}
        </Formik>

        {/* <HStack>
          <Box flex="1 0 auto" h="1px" bg="brandGray.200" />
          <Text color="brandGray.200">{t('or')}</Text>
          <Box flex="1 0 auto" h="1px" bg="brandGray.200" />
        </HStack>
        <WalletConnect /> */}
      </Form>
      <Box position="absolute" top="20px" right="20px">
        <LangaugeSelect />
      </Box>
    </>
  );
}
