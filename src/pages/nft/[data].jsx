import Header from '@/components/screens/landing/header/header';
import formatCurrency from '@/utils/formatCurrency';
import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  Stack,
  useMediaQuery,
  useColorModeValue,
  HStack,
  Link,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NextLink from 'next/link';

import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import { IoMdChatbubbles } from 'react-icons/io';
import { TbWorldWww } from 'react-icons/tb';

import { baseApi } from '../../shared/api/baseApi';

export const getServerSideProps = async (ctx) => {
  const { data } = ctx.query;
  // Получить язык
  const { locale } = ctx;

  const res = await baseApi.get(`/users/nfts/${data}`).catch(() => false);
  if (!res)
    return {
      notFound: true,
    };

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['nft', 'landing'])),
      data: res,
    },
  };
};

export default function Nft({ data }) {
  const { t } = useTranslation('nft');
  const [isMobile] = useMediaQuery('(max-width: 600px)', { ssr: true });
  const isDark = useColorModeValue(false, true);
  const bgColor = useColorModeValue('white', 'darkLight');
  const bgOpacityColor = useColorModeValue(
    'rgba(255, 255, 255, .5)',
    'rgba(38, 44, 53, .5)'
  );

  return (
    <>
      <Header isLight={!isDark} isYellow={isDark} />
      <Box
        py="50px"
        bgImage="/images/bg/nfc.png"
        bgSize="contain"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Box
          display={{ base: 'flex', sm: 'flex', lg: 'block' }}
          flexDir={{ base: 'column', lg: 'row' }}
          alignItems={{ base: 'center', xl: 'start' }}
          borderRadius="16px"
          p="30px"
          w="95%"
          bg={bgOpacityColor}
        >
          <Text
            textAlign="center"
            mb="30px"
            fontSize={{ base: '4xl', lg: '5xl', xl: '6xl' }}
            fontWeight="bold"
            lineHeight="1"
          >
            {t('title')}
          </Text>
          <Stack
            display={{ base: 'flex' }}
            justifyContent="center"
            alignItems="center"
            flexDir={{ base: 'column', lg: 'row' }}
            spacing={{ base: '30px', lg: '30px', xl: '30px' }}
          >
            <Stack
              display="flex"
              borderRadius="16px"
              p="20px"
              bg={bgColor}
              spacing="10px"
              alignItems="center"
            >
              <Box>
                <Text
                  fontSize={{ base: '16px', md: '24px' }}
                  fontWeight="bold"
                  textAlign="center"
                  mb="10px"
                  lineHeight="1.2"
                  maxWidth={{ base: '100%', lg: '400px' }}
                >
                  {t('my-nft')}
                </Text>
              </Box>
              <Box
                display="flex"
                maxWidth={{ base: '100%', lg: '661px' }}
                flexDirection={{
                  base: 'column',
                  sm: isMobile ? 'column' : 'row',
                  xl: 'row',
                }}
                w={{ base: '100%', xl: '661px' }}
                // flexBasis={{ base: '100%', xl: '661px' }}
                justifyContent="center"
                alignItems="center"
                gap="20px"
              >
                {/* <Box w={{ base: '100%', lg: '80%', xl: '45%' }}> */}
                <Image w="250px" borderRadius="16px" src={data.image} />
                {/* </Box> */}
                <Box w={{ base: '100%', xl: '50%' }}>
                  <HStack>
                    <Text fontWeight="bold" fontSize="4xl">
                      {data.name} #{data.id}
                    </Text>
                  </HStack>
                  <Box>
                    <Flex
                      py="5px"
                      borderBottom="solid 2px #A0AEC0"
                      fontWeight="bold"
                      justifyContent="space-between"
                    >
                      <Text>{t('balance')}:</Text>
                      <Text>${data.balance}</Text>
                    </Flex>
                    <Flex
                      py="5px"
                      borderBottom="solid 2px #A0AEC0"
                      fontWeight="bold"
                      justifyContent="space-between"
                    >
                      <Text>{t('date-of-purchase')}</Text>
                      <Text>{dayjs(data.createdAt).format('DD/MM/YYYY')}</Text>
                    </Flex>
                    <Flex
                      py="5px"
                      borderBottom="solid 2px #A0AEC0"
                      fontWeight="bold"
                      justifyContent="space-between"
                    >
                      <Text>{t('daily-income')}</Text>
                      <Text>{formatCurrency(data.dailyProfit)}</Text>
                    </Flex>
                    <Flex
                      py="5px"
                      borderBottom="solid 2px #A0AEC0"
                      fontWeight="bold"
                      justifyContent="space-between"
                    >
                      <Text>{t('income-for-cycle')}</Text>
                      <Text>{formatCurrency(data.profitPerCycle)}</Text>
                    </Flex>
                    <Flex
                      py="5px"
                      borderBottom="solid 2px #A0AEC0"
                      fontWeight="bold"
                      justifyContent="space-between"
                    >
                      <Text>{t('recent-income')}</Text>
                      <Text>
                        {dayjs(data.nextPaymentDate).format('DD/MM/YYYY')}
                      </Text>
                    </Flex>
                  </Box>
                  <Stack mt="30px" alignItems="center" spacing="20px">
                    <NextLink
                      href={
                        data?.referralLogin
                          ? `/auth/register/${data.referralLogin}`
                          : '/auth/register'
                      }
                    >
                      <Button
                        w={{
                          base: '250px',
                          sm: '300px',
                          md: '500px',
                          lg: '300px',
                        }}
                        h="64px"
                        size="lg"
                        padding="auto"
                      >
                        {t('buy')}
                      </Button>
                    </NextLink>
                    {/* <NFTPartnerSocials socials={data.socials} /> */}
                    {data.socials && (
                      <Box display="flex" gap="10px" alignItems="center">
                        {Object.keys(data.socials).map((item) => {
                          switch (item) {
                            case 'inst':
                              return (
                                <Link href={item.inst} target="_blank">
                                  <FaInstagram />
                                </Link>
                              );
                            case 'tg':
                              return (
                                <Link href={item.tg} target="_blank">
                                  <FaTelegram />
                                </Link>
                              );

                            case 'fb':
                              return (
                                <Link href={item.fb} target="_blank">
                                  <FaFacebook />
                                </Link>
                              );

                            case 'chat':
                              return (
                                <Link href={item.chat} target="_blank">
                                  <IoMdChatbubbles />
                                </Link>
                              );

                            case 'website':
                              return (
                                <Link href={item.website} target="_blank">
                                  <TbWorldWww />
                                </Link>
                              );

                            default:
                              return null;
                          }
                        })}
                      </Box>
                    )}
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
