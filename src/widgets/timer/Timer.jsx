import React from 'react';
import useTimer from '@/hooks/useTimer';
import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

function CollectionTimer({ fontSize }) {
  const { t } = useTranslation('store');
  const targetDate = new Date('2024-01-01T18:00:00.000Z');
  const { time, status } = useTimer(targetDate);

  if (status === 'error' || status === 'finished') {
    return null;
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" h="60px">
      {time.days
        .toString()
        .split('')
        .map((digit, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            h="fit-content"
          >
            <Text
              color="#FFF"
              textAlign="center"
              fontFamily="BuyanBold"
              fontSize={fontSize}
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
        fontSize={fontSize}
        h="fit-content"
        fontFamily="BuyanBold"
        color="white"
        m={{ xs: '0px 2px', xl: '0px 3px' }}
      >
        :
      </Box>
      {time.hours
        .toString()
        .split('')
        .map((digit, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            h="fit-content"
          >
            <Text
              color="#FFF"
              textAlign="center"
              fontFamily="BuyanBold"
              fontSize={fontSize}
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
        fontSize={fontSize}
        fontFamily="BuyanBold"
        m={{ base: '0px 2px', xl: '0px 3px' }}
        h="fit-content"
        color="white"
      >
        :
      </Box>
      {time.minutes
        .toString()
        .split('')
        .map((digit, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            h="fit-content"
            marginRight={{ base: '1px', xl: '3px' }}
          >
            <Text
              color="#FFF"
              textAlign="center"
              fontFamily="BuyanBold"
              fontSize={fontSize}
              fontWeight="700"
              textTransform="uppercase"
              lineHeight="normal"
            >
              {digit}
            </Text>
          </Box>
        ))}
      <Box
        fontSize={fontSize}
        fontFamily="BuyanBold"
        h="fit-content"
        m={{ xs: '0px 2px', xl: '0px 3px' }}
        color="white"
      >
        :
      </Box>
      {time.seconds
        .toString()
        .split('')
        .map((digit, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            marginRight={{ base: '1px', xl: '3px' }}
            h="fit-content"
          >
            <Text
              color="#FFF"
              textAlign="center"
              fontFamily="BuyanBold"
              fontSize={fontSize}
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
  );
}

export default CollectionTimer;
