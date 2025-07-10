import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import ProfileCard from '../Card/Card';
import ProfileCardBody from '../Card/CardBody/CardBody';
import ProfileForm from '../ProfileForm';

function ProfileContactForm({ formik, isDisabled }) {
  const { t } = useTranslation('profile');
  const accentColor400 = useColorModeValue('brandGreen.400', 'brandYellow');
  return (
    <ProfileCard title={t('contact-title')} borderTitle>
      <ProfileCardBody>
        <ProfileForm onSubmit={formik.handleSubmit} isDisabled={isDisabled}>
          <FormControl w="full">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              alignItems={{ base: 'start', md: 'center' }}
              spacing={0}
            >
              <FormLabel w={['100%', null, '25%']} flex="0 0 auto">
                Facebook
              </FormLabel>
              <VStack alignItems="start" w="full">
                <InputGroup>
                  <InputLeftAddon>fb.com/</InputLeftAddon>
                  <Input
                    id="fb"
                    name="fb"
                    onChange={formik.handleChange}
                    value={formik.values.fb}
                    focusBorderColor={accentColor400}
                  />
                </InputGroup>
              </VStack>
            </Stack>
          </FormControl>
          <FormControl w="full">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              alignItems={{ base: 'start', md: 'center' }}
              spacing={0}
            >
              <FormLabel w={['100%', null, '25%']} flex="0 0 auto">
                Telegram
              </FormLabel>
              <VStack alignItems="start" w="full">
                <InputGroup>
                  <InputLeftAddon>t.me/</InputLeftAddon>
                  <Input
                    id="tg"
                    name="tg"
                    onChange={formik.handleChange}
                    value={formik.values.tg}
                    focusBorderColor={accentColor400}
                  />
                </InputGroup>
              </VStack>
            </Stack>
          </FormControl>
          <FormControl w="full">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              alignItems={{ base: 'start', md: 'center' }}
              spacing={0}
            >
              <FormLabel w={['100%', null, '25%']} flex="0 0 auto">
                Instagram
              </FormLabel>
              <VStack alignItems="start" w="full">
                <InputGroup>
                  <InputLeftAddon>instagram.com/</InputLeftAddon>
                  <Input
                    name="inst"
                    onChange={formik.handleChange}
                    value={formik.values.inst}
                    focusBorderColor={accentColor400}
                  />
                </InputGroup>
              </VStack>
            </Stack>
          </FormControl>
          <FormControl w="full">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              alignItems={{ base: 'start', md: 'center' }}
              spacing={0}
            >
              <FormLabel w={['100%', null, '25%']} flex="0 0 auto">
                Website
              </FormLabel>
              <VStack alignItems="start" w="full">
                <InputGroup>
                  <InputLeftAddon>https://</InputLeftAddon>
                  <Input
                    name="website"
                    onChange={formik.handleChange}
                    value={formik.values.website}
                    focusBorderColor={accentColor400}
                  />
                </InputGroup>
              </VStack>
            </Stack>
          </FormControl>
          <FormControl w="full">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              alignItems={{ base: 'start', md: 'center' }}
              spacing={0}
            >
              <FormLabel w={['100%', null, '25%']} flex="0 0 auto">
                Chat
              </FormLabel>
              <VStack alignItems="start" w="full">
                <InputGroup>
                  <InputLeftAddon>https://</InputLeftAddon>
                  <Input
                    id="chat"
                    name="chat"
                    onChange={formik.handleChange}
                    value={formik.values.chat}
                    focusBorderColor={accentColor400}
                  />
                </InputGroup>
              </VStack>
            </Stack>
          </FormControl>
        </ProfileForm>
      </ProfileCardBody>
    </ProfileCard>
  );
}

export default ProfileContactForm;
