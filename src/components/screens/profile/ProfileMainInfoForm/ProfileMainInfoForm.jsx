import {
  FormControl,
  FormLabel,
  Input,
  Skeleton,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import ProfileCard from '../Card/Card';
import ProfileCardBody from '../Card/CardBody/CardBody';

function ProfileMainInfoForm({ data, isLoading }) {
  const { t } = useTranslation('profile');

  return (
    <ProfileCard title={t('main-title')} borderTitle>
      <ProfileCardBody>
        <VStack spacing="30px">
          <FormControl w="full">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              alignItems={{ base: 'start', md: 'center' }}
              spacing={0}
            >
              <FormLabel w={['100%', null, '25%']} flex="0 0 auto">
                {t('main-login')}
              </FormLabel>

              {isLoading ? (
                // <Input value="Loading..." isDisabled />
                <Skeleton height="40px" w="full" />
              ) : (
                <Input value={data?.login} isDisabled />
              )}
            </Stack>
          </FormControl>
          <FormControl w="full">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              alignItems={{ base: 'start', md: 'center' }}
              spacing={0}
            >
              <FormLabel w={['100%', null, '25%']} flex="0 0 auto">
                {t('main-email')}
              </FormLabel>
              {isLoading ? (
                // <Input value="Loading..." isDisabled />
                <Skeleton height="40px" w="full" />
              ) : (
                <Input value={data?.email} isDisabled />
              )}
            </Stack>
          </FormControl>
        </VStack>
      </ProfileCardBody>
    </ProfileCard>
  );
}

export default ProfileMainInfoForm;
