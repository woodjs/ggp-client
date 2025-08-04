import { Center, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import LoginDesktopForm from '../../components/screens/auth/login/LoginDesktopForm';

export const getServerSideProps = async (ctx) => {
  const { accessToken } = ctx.req.cookies;

  if (accessToken)
    return {
      redirect: {
        destination: `/${ctx.locale ?? 'en'}/account/profile`,
        permanent: false,
      },
    };

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale ?? 'en', [
        'auth',
        'errors',
        'global',
      ])),
    },
  };
};

export default function LoginPage() {
  const { t } = useTranslation('auth');
  const bg = useColorModeValue('brandGray.100', 'dark');
  const router = useRouter();

  useEffect(() => {
    const { query } = router;

    if (!query?.error) return;
    if (query.error === 'unauthorized') toast.error(t('errors:unauthorized'));
  }, []);

  return (
    <>
      <NextSeo title={t('login-title')} />
      <Center
        minH="100vh"
        bg={bg}
        overflow="hidden"
        h="100%"
        pos="relative"
        zIndex={3}
        py={{ md: '100px', lg: 0 }}
        px="10px"
      >
        <LoginDesktopForm />
      </Center>
    </>
  );
}
