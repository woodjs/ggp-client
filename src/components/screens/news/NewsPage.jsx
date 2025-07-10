import Link from 'next/link';
import { i18n, useTranslation } from 'next-i18next';
import {
  Box,
  Button,
  HStack,
  // Icon,
  // IconButton,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Card } from '@/components/Card';
// import { FiShare2 } from 'react-icons/fi';

export default function NewsPage({
  // error,
  data,
}) {
  const { t } = useTranslation('global');
  const languageMap = {
    ru: {
      poster: data.posterRu,
      title: data.titleRu,
      content: data.contentRu,
    },
    en: {
      poster: data.posterEn,
      title: data.titleEn,
      content: data.contentEn,
    },
    es: {
      poster: data.posterEs,
      title: data.titleEs,
      content: data.contentEs,
    },
  };
  const currentLanguageData = languageMap[i18n.language];

  return (
    <Box w="full">
      <Box w="fit-content" m="auto">
        <HStack mb="10px" justify="space-between">
          <Link href={`/${i18n.language}/account/news`} passHref>
            <Button variant="ghost">
              {'< '}
              {t('global:back')}
            </Button>
          </Link>
          {/* <IconButton variant="ghost">
            <Icon boxSize="18px" as={FiShare2} />
          </IconButton> */}
        </HStack>
        <Card w="fit-content">
          <Box position="relative" roundedTop="xl" overflow="hidden">
            <Image
              filter="auto"
              blur="5px"
              scale="1.2"
              transform="auto"
              h="300px"
              w="full"
              maxW="64ch"
              objectFit="cover"
              src={currentLanguageData.poster}
            />
            <Image
              top="0"
              transform="translateX(-50%)"
              left="50%"
              position="absolute"
              objectFit="cover"
              h="300px"
              src={currentLanguageData.poster}
            />
          </Box>
          <VStack p="20px" w="full" maxW="64ch">
            <VStack justify="space-between" align="center" w="full">
              <Text fontWeight="bold" fontSize="3xl" textAlign="center">
                {currentLanguageData.title}
              </Text>
              <Text fontWeight="bold" fontSize="sm" color="brandGray.200">
                {data.createdAt}
              </Text>
            </VStack>

            <Box
              whiteSpace="pre-wrap"
              dangerouslySetInnerHTML={{
                __html: currentLanguageData.content,
              }}
            />
          </VStack>
        </Card>
      </Box>
    </Box>
  );
}
