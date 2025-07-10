import React from 'react';
import useTimer from '@/hooks/useTimer';
import { Box, Text, Image, Button, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

function CollectionTimer() {
  const { t } = useTranslation('store');
  const targetDate = new Date('2023-11-09T18:00:00.000Z');
  const { time, status } = useTimer(targetDate);
  const router = useRouter();

  if (status === 'error' || status === 'finished') {
    return null;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <VStack
        borderRadius="9px"
        border="1px solid"
        borderColor="#2A3644"
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding="16px
        16px"
        zIndex="2"
        position="relative"
      >
        <Box
          minW={{ base: '50%', xs: '60%', md: '500px' }}
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          textTransform="uppercase"
          fontFamily="BuyanBold"
          p={{ base: '8px 16px', md: '10px 18px' }}
        >
          <Text
            lineHeight="120%"
            fontSize={{ base: '18px', xs: '20px', md: '34px' }}
          >
            {t('timer-buy-text')}&nbsp;
            <Text lineHeight="120%" as="span" color="brandYellow">
              {t('timer-revenue-text')}
            </Text>
          </Text>
          <Text
            fontSize={{ base: '28px', xs: '32px', md: '46px' }}
            color="brandYellow"
            h="fit-content"
            lineHeight="120%"
          >
            {t('timer-do')}&nbsp;09.11.23
          </Text>
          <Button
            mt="5px"
            w="full"
            size="lg"
            onClick={() => router.push('/account/applegiveaway')}
          >
            {t('show')}
          </Button>
        </Box>
        <Box w="full" textAlign="center" margin="24px 0px">
          <Text>{t('timer-sales-ends')}</Text>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            zIndex="-1"
            backdropFilter="blur(12.5px)"
            bg="rgba(23, 26, 35, 0.20)"
            borderRadius="9px"
          />
          <Image
            src="/images/store/compressed/3.webp"
            alt="profitonweed leaf"
            position="absolute"
            right={{ base: '-40px', md: '-80px' }}
            transform="rotate(30deg)"
            zIndex="-2"
            maxW={{ base: '80px', md: 'initial' }}
          />
          <Image
            src="/images/store/compressed/4.webp"
            alt="profitonweed leaf"
            position="absolute"
            left={{ base: '-40px', md: '-70px' }}
            transform="rotate(126deg)"
            zIndex="-2"
            maxW={{ base: '70px', md: 'initial' }}
          />
          {time.days
            .toString()
            .split('')
            .map((digit, index) => (
              <Box
                key={index}
                borderRadius="9px"
                border="1px solid"
                borderColor="#2A3644"
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                p={{ base: '0px 6px', md: '0px 12px', xl: '0px 12px' }}
                bgColor="#2A3644"
                marginRight={{ base: '1px', xl: '3px' }}
                minW={{ base: '30px', xs: '35px', md: '35px', xl: '35px' }}
              >
                <Text
                  color="#FFF"
                  textAlign="center"
                  fontFamily="BuyanBold"
                  fontSize={{
                    base: '30px',
                    xs: '40px',
                    md: '50px',
                    xl: '50px',
                  }}
                  fontWeight="700"
                  textTransform="uppercase"
                  lineHeight="normal"
                  letterSpacing="2px"
                >
                  {digit}
                </Text>
              </Box>
            ))}
          <Box
            fontSize={{
              base: '30px',
              xs: '40px',
              md: '50px',
              xl: '50px',
            }}
            fontFamily="BuyanBold"
            m={{ xs: '0px 2px', xl: '0px 6px' }}
          >
            :
          </Box>
          {time.hours
            .toString()
            .split('')
            .map((digit, index) => (
              <Box
                key={index}
                borderRadius="9px"
                border="1px solid"
                borderColor="#2A3644"
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                p={{ base: '0px 6px', md: '0px 12px', xl: '0px 12px' }}
                bgColor="#2A3644"
                marginRight={{ base: '1px', xl: '3px' }}
                minW={{ base: '30px', xs: '35px', md: '35px', xl: '35px' }}
              >
                <Text
                  color="#FFF"
                  textAlign="center"
                  fontFamily="BuyanBold"
                  fontSize={{
                    base: '30px',
                    xs: '40px',
                    md: '50px',
                    xl: '50px',
                  }}
                  fontWeight="700"
                  textTransform="uppercase"
                  lineHeight="normal"
                  letterSpacing="2px"
                >
                  {digit}
                </Text>
              </Box>
            ))}
          <Box
            fontSize={{
              base: '30px',
              xs: '40px',
              md: '50px',
              xl: '50px',
            }}
            fontFamily="BuyanBold"
            m={{ xs: '0px 2px', xl: '0px 6px' }}
          >
            :
          </Box>
          {time.minutes
            .toString()
            .split('')
            .map((digit, index) => (
              <Box
                key={index}
                borderRadius="9px"
                border="1px solid"
                borderColor="#2A3644"
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                p={{ base: '0px 6px', md: '0px 12px', xl: '0px 12px' }}
                bgColor="#2A3644"
                marginRight={{ base: '1px', xl: '3px' }}
                minW={{ base: '30px', xs: '35px', md: '35px', xl: '35px' }}
              >
                <Text
                  color="#FFF"
                  textAlign="center"
                  fontFamily="BuyanBold"
                  fontSize={{
                    base: '30px',
                    xs: '40px',
                    md: '50px',
                    xl: '50px',
                  }}
                  fontWeight="700"
                  textTransform="uppercase"
                  lineHeight="normal"
                  letterSpacing="2.002px"
                >
                  {digit}
                </Text>
              </Box>
            ))}
          <Box
            fontSize={{
              base: '30px',
              xs: '40px',
              md: '50px',
              xl: '50px',
            }}
            fontFamily="BuyanBold"
            m={{ xs: '0px 2px', xl: '0px 6px' }}
          >
            :
          </Box>
          {time.seconds
            .toString()
            .split('')
            .map((digit, index) => (
              <Box
                key={index}
                borderRadius="9px"
                border="1px solid"
                borderColor="#2A3644"
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                p={{ base: '0px 6px', md: '0px 12px', xl: '0px 12px' }}
                bgColor="#2A3644"
                marginRight={{ base: '1px', xl: '3px' }}
                minW={{ base: '30px', xs: '35px', md: '35px', xl: '35px' }}
              >
                <Text
                  color="#FFF"
                  textAlign="center"
                  fontFamily="BuyanBold"
                  fontSize={{
                    base: '30px',
                    xs: '40px',
                    md: '50px',
                    xl: '50px',
                  }}
                  fontWeight="700"
                  textTransform="uppercase"
                  lineHeight="normal"
                  letterSpacing="2.002px"
                >
                  {digit}
                </Text>
              </Box>
            ))}
        </Box>
      </VStack>
    </Box>
  );
}

export default CollectionTimer;
