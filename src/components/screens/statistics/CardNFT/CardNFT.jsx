import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

function CardLine({ title, value, wrapperProps, titleProps, valueProps }) {
  return (
    <Flex
      fontWeight="bold"
      color="brandGray.200"
      w="full"
      justify="space-between"
      {...wrapperProps}
    >
      <Text maxW="65%" {...titleProps}>
        {title}
      </Text>
      <Text {...valueProps}>{value}</Text>
    </Flex>
  );
}
/**
 *
 * @param {number} value
 * @param {'USD' | 'RUB'} [currency='USD']
 */
function formatCurrency(value, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(value);
}

/**
 * @typedef {object} CardNFTProps
 * @property {string} img
 * @property {number} price
 * @property {string} title
 * @property {number} yealyIncome
 * @property {number} percentIncome
 * @property {string} incomeRatio
 * @property {boolean} disabled
 * @property {() => void} onClick
 * @param {CardNFTProps} props
 * @returns {JSX.Element}
 */

function CardNFT({ img, price, title, percentIncome, incomeRatio, disabled }) {
  const { t } = useTranslation();
  return (
    <Box
      scrollSnapAlign="start"
      p="15px"
      // minW="290px"
      w="280px"
      flexShrink={0}
      maxW="full"
      rounded="xl"
      bg={useColorModeValue('white', 'darkLight')}
      cursor={disabled ? 'pointer' : 'default'}
      opacity={disabled ? 0.8 : 1}
    >
      <Box w="full" maxW="300px" overflow="hidden" rounded="lg">
        <Image
          opacity={disabled ? 0.5 : 1}
          src={img}
          alt={title}
          w="full"
          layout="fill"
          transition="1s"
          _hover={{
            transform: 'scale(1.05)',
          }}
        />
      </Box>
      <Text
        opacity={disabled ? 0.5 : 1}
        my="10px"
        textAlign="center"
        fontWeight="bold"
        fontSize="3xl"
      >
        {title}
      </Text>

      <Stack w="full" spacing="10px">
        <CardLine
          title={t('cabinet:nft-annual-rate')}
          value={`${percentIncome}%`}
          wrapperProps={{
            color: 'inherit',
            fontSize: 'xl',
            opacity: disabled ? 0.5 : 1,
          }}
        />
        <CardLine title={t('cabinet:nft-current-income')} value={incomeRatio} />
        <CardLine
          title={t('cabinet:nft-yearly-income')}
          value={formatCurrency((price * percentIncome) / 100)}
        />
        <CardLine
          title={t('cabinet:nft-amount')}
          value={formatCurrency(price)}
          wrapperProps={{ color: 'inherit' }}
          valueProps={{
            opacity: disabled ? 0.5 : 1,
          }}
          titleProps={{ color: 'brandGray.200' }}
        />
      </Stack>
    </Box>
  );
}

export default CardNFT;
