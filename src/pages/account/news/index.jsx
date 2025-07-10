import { useColorModeValue } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import News from '@/components/screens/news/News';

export default function NewsPage() {
  const { t } = useTranslation('news');
  return (
    <CabinetContent
      bgImage={useColorModeValue(
        '/images/bg/news/light.jpg',
        '/images/bg/news/dark.png'
      )}
      title={t('title')}
    >
      <News />
    </CabinetContent>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', [
        'news',
        'cabinet',
        'global',
        'promo-modal',
      ])),
    },
  };
}
