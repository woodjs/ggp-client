import { useColorModeValue } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import { news } from '@/components/screens/news/news.data';
import NewsPage from '@/components/screens/news/NewsPage';
import { baseApi } from '@/shared/api';

export default function NewsPageItem({ error, data }) {
  return (
    <CabinetContent
      bgImage={useColorModeValue(
        '/images/bg/news/light.jpg',
        '/images/bg/news/dark.png'
      )}
    >
      <NewsPage error={error} data={data} />
    </CabinetContent>
  );
}

export async function getServerSideProps(context) {
  const i18n = await serverSideTranslations(context.locale ?? 'en', [
    'cabinet',
    'global',
    'promo-modal',
  ]);

  const { id } = context.query;

  const find = news.find((item) => item.id === id);

  if (!find) {
    const data = await baseApi.get(`/news/${id}`).catch((err) => ({
      error: true,
      status: err.status,
    }));

    if (data.error) {
      if (data.status === 404) {
        return { notFound: true };
      }

      return { error: true };
    }

    return {
      props: {
        data,
        ...i18n,
      },
    };
  }

  return {
    props: {
      data: find,
      ...i18n,
    },
  };
}
