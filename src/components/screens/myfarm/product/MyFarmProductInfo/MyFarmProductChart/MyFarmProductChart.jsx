import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  Box,
  Center,
  Divider,
  Image,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { Card } from '@/components/Card';
import { useRouter } from 'next/router';
import { useNFTChart } from '@/hooks/nft/useNFTChart';
import { useTranslation } from 'next-i18next';
import CustomizedDot from '@/components/screens/myfarm/product/MyFarmProductInfo/MyFarmProductChart/Dot';
import CustomTooltip from '@/components/screens/myfarm/product/MyFarmProductInfo/MyFarmProductChart/Tooltop';
import data from './data.json';

function MyFarmProductChart() {
  const { t } = useTranslation('myfarm');
  const router = useRouter();
  // const { isLoading, isError } = useNFTChart(router.query.id);

  const [isLarger] = useMediaQuery('(min-width: 800px)');
  const [isSmaller] = useMediaQuery('(max-device-width: 500px)');

  // if (isLoading) {
  // return (
  // <Card p="30px">
  //    <Skeleton height={500} width="100%" />
  // </Card>
  // );
  // }

  // if (isError || !data) return null;

  return (
    <Card p="30px">
      <Text fontSize="2xl" fontWeight="bold" mb="30px">
        {t('chart-title')}
      </Text>
      <Stack mb="30px" direction={{ base: 'column', md: 'row' }} spacing="20px">
        <Text>
          <Text
            as="span"
            color={useColorModeValue('brandGreen.300', 'brandYellow')}
          >
            {t('chart-text-1-green')}
          </Text>{' '}
          {t('chart-text-2')}{' '}
          <Text
            as="span"
            color={useColorModeValue('brandGreen.300', 'brandYellow')}
          >
            {t('chart-text-3-green')}
          </Text>{' '}
          {t('chart-text-4')}
        </Text>
        <Text>
          {t('chart-text-5')}{' '}
          <Text
            as="span"
            color={useColorModeValue('brandGreen.300', 'brandYellow')}
          >
            {t('chart-text-6-green')}
          </Text>
        </Text>
      </Stack>
      <Box
        borderRadius="6px"
        p="20px"
        bgImage={useColorModeValue(
          '/images/myfarm/chart/bg-light.png',
          '/images/myfarm/chart/bg-dark.png'
        )}
        bgSize="contain"
      >
        <Text mb="15px" fontWeight="bold" fontSize="xl">
          {t('chart-title-price')}
        </Text>
        <Box overflow={isLarger ? 'hidden' : 'scroll'}>
          <ResponsiveContainer
            width={isLarger ? '100%' : 700}
            height={isSmaller ? 250 : 500}
          >
            <LineChart data={data} margin={{ bottom: 20, right: 40 }}>
              <CartesianGrid
                vertical={false}
                opacity={0.3}
                strokeDasharray="4 4"
              />
              <XAxis
                // padding={{ right: 30 }}
                // angle={-90}
                tickMargin={15}
                tick={{
                  fill: useColorModeValue('#171923', '#ffffff'),
                  fontWeight: 'bold',
                }}
                stroke={useColorModeValue('#017101', '#FFDC3F')}
                // interval="preserveStartEnd"
                dataKey="dateLine"
                interval={0}
              />

              <YAxis
                padding={{ top: 30 }}
                // tickMargin={15}
                tick={{
                  fill: useColorModeValue('#171923', '#ffffff'),
                  fontWeight: 'bold',
                }}
                stroke={useColorModeValue('#017101', '#FFDC3F')}
                tickCount={7}
                domain={[0, (dataMax) => Math.ceil(dataMax * 1.5)]}
              />
              <Line
                dot={<CustomizedDot />}
                type="monotone"
                dataKey="price"
                stroke={useColorModeValue('#017101', '#FFDC3F')}
              />
              <Tooltip
                wrapperStyle={{ outline: 'none' }}
                content={<CustomTooltip />}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
        <Text fontWeight="bold" fontSize="xl" textAlign="right">
          {t('chart-cycle')}
        </Text>
      </Box>
    </Card>
  );
}

export default MyFarmProductChart;
