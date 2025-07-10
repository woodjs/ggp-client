import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';

import { useNews } from '@/hooks/useNews';

import { Card } from '@/components/Card';
import PaginatedItems from '@/components/layout/Pagination/Pagination';
import NewsSkeleton from './News.skeleton';
import { news } from './news.data';
import { getAccessToken } from '@/services/auth/auth.helper';
import jwt from 'jsonwebtoken';

// Если длина текста больше 75, то обрезать текст и добавить 3 точки

function NewsCard({ id, image, createdAt, title }) {
  const { t } = useTranslation('news');

  return (
    <Card
      bg={useColorModeValue('white', 'darkLight')}
      borderRadius="16px"
      overflow="hidden"
      h="full"
      // w={{ base: '100%', md: '48%', lg: '300px' }}
      // flex={{ base: '0 0 100%', md: '0 0 48%', lg: '1 1 auto' }}
    >
      <VStack h="full" align="start" spacing={0}>
        <Image
          src={image}
          // height="50%"
          width="100%"
          mb="15px"
          objectFit="cover"
        />
        <VStack
          h="full"
          align="start"
          justify="space-between"
          spacing={0}
          p="20px"
        >
          <Box>
            <Text
              fontWeight="bold"
              color="brandGray.200"
              fontSize="sm"
              mb="15px"
            >
              {createdAt}
            </Text>
            <Text fontWeight="bold" fontSize="md" mb="15px">
              {title}
            </Text>
          </Box>
          <Link href={`/account/news/${id}`} passHref>
            <Button variant="border">{t('more-details-btn')}</Button>
          </Link>
        </VStack>
      </VStack>
    </Card>
  );
}

export default function News() {
  const { i18n } = useTranslation('news');
  const limit = 8;
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useNews(page);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const accessToken = getAccessToken();

    if (accessToken) {
      const decoded = jwt.decode(accessToken);
      // console.log(decoded);
      // setUserRole(decoded.role);
    }
  }, []);

  const languageMap = {
    ru: {
      image: 'posterRu',
      title: 'titleRu',
      desc: 'shortContentRu',
    },
    es: {
      image: 'posterEs',
      title: 'titleEs',
      desc: 'shortContentEs',
    },
    en: {
      image: 'posterEn',
      title: 'titleEn',
      desc: 'contentEn',
    },
  };

  const { image, title, desc } = languageMap[i18n.language] || languageMap.en;

  if (isLoading) return <NewsSkeleton />;
  if (isError || (data && !data.rows.length))
    return (
      <Grid
        templateColumns={{
          base: 'repeat(auto-fit, minmax(280px, 1fr))',
          md: 'repeat(auto-fit, minmax(280px, max-content))',
          lg: 'repeat(auto-fit, 300px)',
        }}
        gap="15px"
        mb="20px"
      >
        {news.map((item) => (
          <GridItem>
            <NewsCard
              id={item.id}
              image={i18n.language === 'ru' ? item.posterRu : item.posterEn}
              title={i18n.language === 'ru' ? item.titleRu : item.titleEn}
              createdAt={item.createdAt}
              desc={
                i18n.language === 'ru'
                  ? item.shortContentRu
                  : item.shortContentEn
              }
            />
          </GridItem>
        ))}
      </Grid>
    );
  return (
    <>
      <Grid
        templateColumns={{
          base: 'repeat(auto-fit, minmax(280px, 1fr))',
          md: 'repeat(auto-fit, minmax(280px, max-content))',
          lg: 'repeat(auto-fit, 300px)',
        }}
        gap="15px"
        mb="20px"
      >
        {data?.rows.map((item) => (
          <GridItem>
            <NewsCard
              id={item.id}
              image={item[image]}
              title={item[title]}
              createdAt={dayjs(item.createdAt).format('DD.MM.YYYY')}
              desc={item[desc]}
            />
          </GridItem>
        ))}
      </Grid>
      <PaginatedItems
        handleClick={(e) => setPage(e.selected + 1)}
        count={Math.ceil(data ? data.count / limit : 0)}
        page={page}
      />
    </>
  );
}
