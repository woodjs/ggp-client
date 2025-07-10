import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';
import { Box, Center } from '@chakra-ui/react';
import RecoveryForm from '@/components/screens/auth/recovery/RecoveryForm';
import LangaugeSelect from '@/components/layout/Cabinet/LangaugeSelect/LangaugeSelect';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'auth',
      'errors',
      'global',
    ])),
  },
});

export default function RecoveryPage() {
  const { t } = useTranslation('auth');
  return (
    <>
      <NextSeo title={t('recovery-title')} />
      <Center
        backgroundImage={[
          // "url('/images/auth/background-mobile.png')",
          "url('/images/auth/background-tablet.png')",
          "url('/images/auth/background-desc.png')",
        ]}
        // bgRepeat="no-repeat"
        // bgPosition="center"
        // bgSize="cover"
        bgSize={['cover', null, 'contain']}
        minH="100vh"
        overflow="hidden"
        h="100%"
        pos="relative"
        px="10px"
        zIndex={3}
      >
        <RecoveryForm />
        <Box position="absolute" top="20px" right="20px">
          <LangaugeSelect />
        </Box>
      </Center>
    </>
  );
}
