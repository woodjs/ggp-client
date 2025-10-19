import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

export default function Daopage() {
  const { t } = useTranslation('dao');

  return (
    <CabinetContent title="DAO">
      <HStack
        borderRadius="16px"
        spacing={{ base: 4, md: 8 }}
        align="center"
        flexDirection={{ base: 'column', md: 'row' }}
        bg="darkLight"
      >
        {/* Левая колонка: картинка с заголовком */}
        <Box
          pos="relative"
          w={{ base: 'full', md: '50%' }}
          borderRadius="16px"
          overflow="hidden"
        >
          <Image
            src="https://gg-paradise.com/images/farm/header.jpg"
            alt="DAO"
            w="full"
            h="full"
            objectFit="cover"
          />
          {/* Затемнение */}
          <Box
            pos="absolute"
            top="0"
            left="0"
            w="full"
            h="full"
            bg="rgba(0, 0, 0, 0.5)"
          />
          {/* Заголовок */}
          <VStack
            pos="absolute"
            top="0"
            left="0"
            w="full"
            h="full"
            justify="center"
            align="center"
            zIndex="1"
            padding="16px"
          >
            <Text
              color="white"
              fontSize="2xl"
              fontWeight="bold"
              textAlign="center"
            >
              {t('question')}
            </Text>
          </VStack>
        </Box>

        {/* Правая колонка: текст + кнопки */}
        <VStack
          w={{ base: 'full', md: '50%' }}
          align="start"
          spacing={6}
          mt={{ base: 4, md: 0 }}
          padding="16px"
        >
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="bold"
            textAlign="center"
          >
            {t('dao_text')}
          </Text>

          <HStack
            spacing={4}
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="center"
            w="full"
          >
            <Button
              bg="#5165F6"
              w="196px"
              onClick={() =>
                window.open('https://discord.gg/7Z57DXH3', '_blank')
              }
            >
              <Flex gap="10px" alignItems="center" justify="center">
                <Image
                  src="https://img.icons8.com/?size=100&id=30888&format=png&color=FFFFFF"
                  w="20px"
                />
                <Text color="white" fontWeight="bold">
                  {t('discuss')}
                </Text>
              </Flex>
            </Button>

            <Button w="196px" isDisabled>
              {t('vote')}
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </CabinetContent>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'cabinet',
      'dao',
      'global',
    ])),
  },
});
