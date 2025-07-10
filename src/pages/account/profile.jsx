import { Box, Stack, useColorModeValue, VStack } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import ProfileMainInfoFormContainer from '@/components/screens/profile/ProfileMainInfoForm/ProfileMainInfoFormContainer';
import ProfileContactFormContainer from '@/components/screens/profile/ProfileContactForm/ProfileContactFormContainer';
import Profile2FAContainer from '@/components/screens/profile/Profile2FA/Profile2FAContainer';
import ProfilePasswordFormContainer from '@/components/screens/profile/ProfilePasswordForm/ProfilePasswordFormContainer';
// import AuthHistoryContainer from '@/components/screens/profile/AuthHistory/AuthHistoryContainer';
import NotificationTableContainer from '@/components/screens/profile/NotificationTable/NotificationTableContainer';
import ProfileSidebarContainer from '@/components/screens/profile/ProfileSidebar/ProfileSidebarContainer';
import ProfileHero from '@/components/screens/profile/ProfileHero/ProfileHero';

export default function ProfilePage() {
  const { t } = useTranslation('profile');
  return (
    <CabinetContent
      bgImage={useColorModeValue(
        '/images/bg/profile/light.jpg',
        '/images/bg/profile/dark.png'
      )}
      title={t('title')}
    >
      <Stack direction={{ base: 'column', xl: 'row' }}>
        <ProfileSidebarContainer />
        <VStack flex="1" boxSizing="border-box" spacing="20px" mx="10px">
          {/* Карточка с фото */}
          <ProfileHero />
          {/* Основная информация */}
          <Box w="full" id="0">
            <ProfileMainInfoFormContainer />
          </Box>
          {/* Контактная информация */}
          <Box w="full" id="contacts">
            <ProfileContactFormContainer />
          </Box>
          {/* Пароль */}
          <Box w="full" id="passwordSection">
            <ProfilePasswordFormContainer />
          </Box>
          {/* 2FA */}
          <Box w="full" id="2fa">
            <Profile2FAContainer />
          </Box>

          {/* История входов */}

          {/* <AuthHistoryContainer /> */}
          {/* <Box w="full" id="notifications">
            <NotificationTableContainer />
          </Box> */}
        </VStack>
      </Stack>
    </CabinetContent>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'cabinet',
      'profile',
      'two-factor',
      'global',
      'errors',
      'promo-modal',
    ])),
  },
});
