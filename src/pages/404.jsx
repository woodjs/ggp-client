import {
  Box,
  Button,
  Center,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['cabinet'])),
  },
});

export default function FourOfFour() {
  const router = useRouter();
  const { t } = useTranslation('cabinet');
  return (
    <Center
      w="full"
      h="100vh"
      flexDirection="column"
      color={useColorModeValue('darkLight', 'white')}
      overflow="hidden"
    >
      <Box pos="relative">
        <Image
          src="/images/auth/leaf-3.png"
          alt=""
          pos="absolute"
          boxSize="236px"
          left="-306px"
        />
        <Image
          src="/images/auth/register/leaf-1.png"
          alt=""
          pos="absolute"
          w="168px"
          h="223px"
          right="-200px"
          bottom="-200px"
          filter="blur(2px)"
        />

        <Image src="/images/404.svg" alt="" h={['100px', null, '200px']} />
      </Box>

      <Text
        textAlign="center"
        fontWeight="bold"
        fontSize={['xl', null, '4xl']}
        mt="30px"
      >
        {t('page-not-found')}
      </Text>
      <Button
        onClick={() => router.back()}
        fontSize="sm"
        maxW="240px"
        w="full"
        h="48px"
        mt="30px"
      >
        {t('go-back')}
      </Button>
    </Center>
  );
}
