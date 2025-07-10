import { Box, Center, Image, Text } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['work'])),
  },
});
export default function Work() {
  const { t } = useTranslation('work');

  return (
    <Box py={'30px'} fontWeight={'bold'}>
      <Center>
        <Image
          src={'/images/work/work.png'}
          boxSize="600px"
          objectFit="contain"
        />
      </Center>
      <Text
        mt="-100px"
        fontSize={{ base: 'lg', sm: 'xl', md: '4xl' }}
        textAlign={'center'}
      >
        {t('work:title')}
      </Text>
      <Box fontSize={{ base: 'md', sm: 'xl', md: '2xl' }}>
        <Text textAlign={'center'}>{t('work:text-1')}</Text>
        <Text textAlign={'center'} color={'brandYellow'}>
          {t('work:text-2')}
        </Text>
      </Box>
    </Box>
  );
}
