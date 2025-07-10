import { Center, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
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
  const imageSrc = useColorModeValue(
    '/images/promo-modal/expansion/greenLights.svg',
    '/images/promo-modal/expansion/yellowLights.svg'
  );

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
        <Image
          src={imageSrc}
          width={300}
          height={1200}
          style={{
            position: 'absolute',
            zIndex: '0',
            right: '20%',
          }}
        />

        <LoginDesktopForm />
      </Center>
    </>
  );
}
