import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

export default function Daopage() {
  const { t } = useTranslation('dao');
  return (
    <CabinetContent title="Dao">
      <VStack>
        <Box
          pos="relative"
          w="full"
          h="400px"
          overflow="hidden"
          borderRadius="16px"
        >
          {/* Изображение */}
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

          {/* Текст по центру */}
          <VStack
            pos="absolute"
            top="0"
            left="0"
            w="full"
            h="full"
            justify="center"
            align="center"
            zIndex="1"
          >
            <Text
              color="white"
              fontSize="2xl"
              fontWeight="bold"
              textAlign="center"
            >
              {t('question')}
            </Text>
            <VStack mt="20px" spacing="10px">
              <Button
                bg="#5165F6"
                maxW="196px"
                w="full"
                onClick={() => {
                  window.open('https://discord.gg/7Z57DXH3', '_blank');
                }}
              >
                <Flex gap="10px" alignItems="center">
                  <Image
                    src="https://img.icons8.com/?size=100&id=30888&format=png&color=FFFFFF"
                    w="20px"
                  />
                  <Text color="white" fontWeight="bold">
                    {t('discuss')}
                  </Text>
                </Flex>
              </Button>
              <Button maxW="196px" w="full" isDisabled>
                {t('vote')}
              </Button>
            </VStack>
          </VStack>
        </Box>
      </VStack>
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
