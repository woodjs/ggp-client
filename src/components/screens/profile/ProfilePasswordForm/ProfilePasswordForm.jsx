import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import ProfileCard from '../Card/Card';
import ProfileCardBody from '../Card/CardBody/CardBody';
import ProfileForm from '../ProfileForm';

function ProfilePasswordForm({ formik, t, isDisabled }) {
  const accentColor400 = useColorModeValue('brandGreen.400', 'brandYellow');
  return (
    <ProfileCard title={t('password-title')} borderTitle>
      <ProfileCardBody>
        <ProfileForm onSubmit={formik.handleSubmit} isDisabled={isDisabled}>
          <FormControl w="full" isInvalid={!!formik.errors.password}>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              alignItems={{ base: 'start', md: 'center' }}
              spacing={0}
            >
              <FormLabel w={['100%', null, '25%']} flex="0 0 auto">
                {t('password-title')}
              </FormLabel>

              <VStack w="full" alignItems="start">
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  focusBorderColor={accentColor400}
                />
                <FormErrorMessage>{t(formik.errors.password)}</FormErrorMessage>
              </VStack>
            </Stack>
          </FormControl>
          <FormControl w="full" isInvalid={!!formik.errors.confirmPassword}>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              alignItems={{ base: 'start', md: 'center' }}
              spacing={0}
            >
              <FormLabel w={['100%', null, '25%']} flex="0 0 auto">
                {t('password-confirm')}
              </FormLabel>

              <VStack w="full" alignItems="start">
                <Input
                  name="confirmPassword"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  focusBorderColor={accentColor400}
                />
                <FormErrorMessage>
                  {t(formik.errors.confirmPassword)}
                </FormErrorMessage>
              </VStack>
            </Stack>
          </FormControl>
        </ProfileForm>
      </ProfileCardBody>
    </ProfileCard>
  );
}

export default ProfilePasswordForm;
