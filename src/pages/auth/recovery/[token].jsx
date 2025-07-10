import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Box, Center } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import RecoveryFormPassword from '@/components/screens/auth/recovery/FormPassword/FormPassword';
import LangaugeSelect from '@/components/layout/Cabinet/LangaugeSelect/LangaugeSelect';
import { baseApi } from '@/shared/api';

export const getServerSideProps = async ({ locale, query }) => {
  try {
    const { token } = query;
    // Выполнить запрос
    await baseApi.get(`/recovery/${token}`);

    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en', [
          'auth',
          'errors',
          'global',
        ])),
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default function RecoveryTokenPage() {
  const router = useRouter();
  const { token } = router.query;

  const { t } = useTranslation('auth');
  return (
    <>
      <NextSeo title={t('recovery-title')} />
      <Center
        backgroundImage={{
          base: "url('/images/auth/background-desc.png')",
          sm: "url('/images/auth/background-tablet.png')",
          md: "url('/images/auth/background-desc.png')",
        }}
        bgSize={{
          base: '150%',
          sm: 'contain',
          md: 'contain',
        }}
        bgPosition={{
          base: 'left 20% top',
          sm: 'left',
          md: 'auto',
        }}
        minH="100vh"
        overflow="hidden"
        h="100%"
        pos="relative"
        px="10px"
        zIndex={3}
      >
        <RecoveryFormPassword token={token} />
        <Box position="absolute" top="20px" right="20px">
          <LangaugeSelect />
        </Box>
      </Center>
    </>
  );
}
