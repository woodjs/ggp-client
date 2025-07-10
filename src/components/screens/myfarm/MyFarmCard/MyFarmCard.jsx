import Card from '@/components/Card/Card';
import {
  Box,
  Button,
  Image,
  Text,
  //   useColorModeValue,
  VStack,
  Flex,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import MyFarmCycles from '../product/MyFarmProductInfo/MyFarmCycles';

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

/**
 *
 * @param {Object} props
 * @param {string} props.image
 * @param {string} props.title
 * @param {string} props.date
 * @param {string | number} props.price
 * @param {string | number} props.cycle
 * @param {string | number} props.percentIncome
 * @param {string | number} props.incomeRatio
 * @param {() => void} props.onClickSell
 * @param {() => void} props.onClickSend
 * @param {() => void} props.onClickCard
 * @param {() => void} props.onClickOpen
 * @returns
 */
function MyFarmCard({
  image = '/images/store/NFT_BUSH.png',
  title,
  price,
  cycle,
  percentIncome,
  incomeRatio,
  onClickSend,
  onClickCard,
  onClickOpen,
}) {
  const { t } = useTranslation();
  const disabled = false;
  //   const bgCardHeader = useColorModeValue('brandGreen.400', 'bgandYellow');
  //   const titleColor = useColorModeValue('white', 'dark');
  return (
    <Card overflow="hidden" onClick={onClickCard} w="full" maxW="360px">
      <Image src={image} w="full" h="290px" objectFit="cover" />
      <Box px="20px" pt="20px" w="full">
        <Text fontSize="2xl" fontWeight="bold">
          {title}
        </Text>
      </Box>
      <Box p="20px" pt="10px">
        <VStack alignItems="center">
          <CardLine
            title={t('cabinet:nft-annual-rate')}
            value={`${percentIncome}%`}
            wrapperProps={{
              color: 'inherit',
              fontSize: 'xl',
              opacity: disabled ? 0.5 : 1,
            }}
          />
          <CardLine
            title={t('cabinet:nft-current-income')}
            value={incomeRatio}
          />
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
          <CardLine
            title={t('cabinet:nft-cycles')}
            value={<MyFarmCycles cycle={cycle} />}
            wrapperProps={{ color: 'inherit' }}
            valueProps={{
              opacity: disabled ? 0.5 : 1,
            }}
            titleProps={{ color: 'brandGray.200' }}
          />
        </VStack>
        <VStack pt="20px" alignItems="stretch">
          <Button onClick={onClickOpen}>{t('cabinet:farm-open')}</Button>
          <Button onClick={onClickSend}>{t('cabinet:farm-send')}</Button>
        </VStack>
      </Box>
    </Card>
  );
}

export default MyFarmCard;
