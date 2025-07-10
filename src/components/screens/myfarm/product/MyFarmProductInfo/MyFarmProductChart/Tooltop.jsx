import { useTranslation } from 'next-i18next';
import {
  Box,
  Center,
  Divider,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import formatCurrency from '@/utils/formatCurrency';

export default function CustomTooltip({ active, payload, label }) {
  const { t } = useTranslation('myfarm');
  if (active && payload && payload.length) {
    console.log('payload', payload);
    if (payload[0].payload.type === 'plant') {
      return (
        <Box>
          <Center mb="15px">
            <Image w="50px" src="/images/myfarm/chart/pot.png" />
          </Center>
          <Box
            fontWeight="bold"
            bg={useColorModeValue('#017101', '#FFDC3F')}
            overflow="hidden"
            borderRadius="12px"
          >
            <Box
              fontSize="sm"
              color={useColorModeValue('dark', 'white')}
              textAlign="center"
              fontWeight="bold"
              p="5px"
              bg={useColorModeValue('white', 'dark')}
              m="1"
              borderRadius="6px"
            >
              {t('chart-plant')}
              <Text>{payload[0].payload.date ?? label}</Text>
            </Box>
            <Box
              color={useColorModeValue('white', 'dark')}
              textAlign="center"
              p="10px"
            >
              <Text fontSize="sm">{t('chart-price')}</Text>
              <Text fontWeight="bold" fontSize="lg">
                {formatCurrency(payload[0].value)}
              </Text>
            </Box>
          </Box>
        </Box>
      );
    }
    if (payload[0].payload.type === 'harvest') {
      return (
        <Box>
          <Center mb="15px">
            <Image w="80px" src="/images/myfarm/chart/harvest.png" />
          </Center>
          <Box
            fontWeight="bold"
            bg={useColorModeValue('#017101', '#FFDC3F')}
            overflow="hidden"
            borderRadius="12px"
          >
            <Box
              fontSize="sm"
              color={useColorModeValue('dark', 'white')}
              textAlign="center"
              fontWeight="bold"
              p="5px"
              bg={useColorModeValue('white', 'dark')}
              m="1"
              borderRadius="6px"
            >
              {t('chart-harvest')}
              <Text>{payload[0].payload.date ?? label}</Text>
            </Box>
            <Box
              color={useColorModeValue('white', 'dark')}
              textAlign="center"
              px="20px"
              py="10px"
            >
              <Text fontSize="sm">{t('chart-nft-start')}</Text>
              <Text fontWeight="bold" fontSize="lg">
                {formatCurrency(payload[0].payload.startPrice)}
              </Text>
              <Divider my={'5px'} bg={'dark'} />
              <Text fontSize="sm">{t('chart-earn')}</Text>
              <Text fontWeight="bold" fontSize="lg">
                {formatCurrency(payload[0].payload.earn)}
              </Text>
            </Box>
          </Box>
        </Box>
      );
    }
    return (
      <Box
        fontWeight="bold"
        bg={useColorModeValue('#017101', '#FFDC3F')}
        overflow="hidden"
        borderRadius="12px"
      >
        <Box
          fontSize="sm"
          color={useColorModeValue('dark', 'white')}
          textAlign="center"
          fontWeight="bold"
          p="5px"
          bg={useColorModeValue('white', 'dark')}
          m="1"
          borderRadius="6px"
        >
          {payload[0].payload.date ?? label}
        </Box>
        <Box
          color={useColorModeValue('white', 'dark')}
          textAlign="center"
          p="10px"
        >
          <Text fontSize="sm">{t('chart-price')}</Text>
          <Text fontWeight="bold" fontSize="lg">
            {formatCurrency(payload[0].value)}
          </Text>
        </Box>
      </Box>
    );
  }

  return null;
}
