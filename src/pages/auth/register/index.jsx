import {
  Box,
  Center,
  HStack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import RegisterForm from '@/components/screens/auth/register/RegisterForm';
import { Base64 } from 'js-base64';

const ImageMotion = motion(Image);

export const getServerSideProps = async ({ locale, req }) => {
  const { sponsor } = req.cookies;
  let sponsorData = null;

  if (sponsor) {
    const sponsorDataBase64 = JSON.parse(Base64.decode(sponsor));

    if (sponsorDataBase64?.login) {
      sponsorData = sponsorDataBase64;
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
};

export default function RegisterPage({ sponsorData }) {
  const { t } = useTranslation('auth');
  const bg = useColorModeValue('brandGray.100', 'dark');
  const imageSrc = useColorModeValue(
    '/images/promo-modal/expansion/greenLights.svg',
    '/images/promo-modal/expansion/yellowLights.svg'
  );

  return (
    <>
      <NextSeo title={t('register-title')} />
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
        <Image
          src={imageSrc}
          width={300}
          height={1200}
          style={{
            position: 'absolute',
            zIndex: '0',
            right: '10%',
          }}
        />
        <HStack
          w="full"
          minH="100vh"
          h="100%"
          justify="center"
          spacing={0}
          pos="relative"
          zIndex="1"
        >
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

          {/* New Year */}
          <Box pos="relative" maxW="550px" w="full">
            <Image
              style={{
                position: 'absolute',
                zIndex: '-1',
                right: '-150px',
                top: '-100px',
              }}
              src="/images/promo-modal/expansion/pine2.png"
              alt="pine"
              width={270}
              height={340}
            />
            <Image
              style={{
                position: 'absolute',
                zIndex: '-1',
                bottom: '-100px',
                left: '-140px',
              }}
              src="/images/promo-modal/expansion/pine3.png"
              alt="pine"
              width={270}
              height={340}
            />
            <RegisterForm sponsorData={sponsorData} />
          </Box>
        </HStack>
      </Center>
    </>
  );
}
