import {
  Box,
  Center,
  HStack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import RegisterForm from '@/components/screens/auth/register/RegisterForm';
import { Base64 } from 'js-base64';
import { setCookie } from 'cookies-next';
import { baseApi } from '@/shared/api';

const ImageMotion = motion(Image);

// Получить params для динамической генерации страниц
export const getServerSideProps = async ({ params, locale, req, res }) => {
  try {
    const sponsorData = await baseApi(`/users/sponsor/${params.login}`).catch(
      () => false
    );

    const { sponsor } = req.cookies;

    if (sponsorData) {
      if (sponsor) {
        const sponsorDataCookie = JSON.parse(Base64.decode(sponsor));
        if (sponsorDataCookie.login !== sponsorData.login) {
          const sponsorDataBase64 = Base64.encode(JSON.stringify(sponsorData));
          setCookie('sponsor', sponsorDataBase64, { req, res });
        }
      } else {
        const sponsorDataBase64 = Base64.encode(JSON.stringify(sponsorData));
        setCookie('sponsor', sponsorDataBase64, { req, res });
      }
    }

    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en', [
          'auth',
          'errors',
          'global',
        ])),
        sponsorData,
      },
    };
  } catch {
    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en', [
          'auth',
          'errors',
          'global',
        ])),
        sponsorData: { login: params.login, avatar: null },
      },
    };
  }
};

export default function RegisterPage({ sponsorData }) {
  const bg = useColorModeValue('brandGray.100', 'dark');

  return (
    <Center
      minH="100vh"
      backgroundImage={{
        base: "url('/images/auth/background-mobile.png')",
        md: "url('/images/auth/background-tablet.png')",
        lg: "url('/images/auth/background-desc.png')",
      }}
      backgroundRepeat="no-repeat"
      bgSize={{
        base: '150%',
        md: 'contain',
        lg: 'contain',
      }}
      //   bgSize="contain"
      bgPosition={{
        base: 'left 20% top',
        md: 'left',
        lg: 'auto',
      }}
      bgColor={bg}
      overflow="hidden"
      h="100%"
      pos="relative"
      px="10px"
    >
      <HStack w="full" minH="100vh" h="100%" justify="center">
        <Box mr={{ base: 0, lg: '130px' }} pos="relative">
          <ImageMotion
            display={{ base: 'none', lg: 'block' }}
            src="/images/auth/register/leaf-1.png"
            w="433px"
            alt=""
            animate={{
              rotate: ['0deg', '2deg', '-2deg'],
              y: ['0px', '6px', '-6px'],
            }}
            transition={{
              rotate: {
                duration: 7,
                default: { ease: 'ease-in-out' },
                repeat: 'Infinity',
                repeatType: 'reverse',
              },
              y: {
                default: { ease: 'ease-in-out' },
                duration: 4,
                repeat: 'Infinity',
                repeatType: 'reverse',
              },
            }}
          />
        </Box>
        <RegisterForm
          px={{ base: '10px', md: '64px' }}
          maxW={{ base: 'full', lg: '550px' }}
          py={{ base: '30px', md: '40px' }}
          sponsorData={sponsorData}
        />
      </HStack>
    </Center>
  );
}
