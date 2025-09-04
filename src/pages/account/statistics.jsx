/* eslint-disable react/no-unstable-nested-components */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Box,
  Center,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslation } from 'next-i18next';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  Cell,
} from 'recharts';
import CabinetContent from '../../components/layout/Cabinet/CabinetContent';
import { Card } from '@/shared/ui';

const data = [
  // { date: '20.08.2025', value: 180 },
  // { date: '20.01.2026', value: 400 },
  // { date: '20.06.2026', value: 400 },
  // { date: '20.11.2026', value: 400 },
  // { date: '20.04.2027', value: 400 },
  // { date: '20.09.2027', value: 400 },
];

function HarvestChart() {
  const today = new Date();

  const getBarColor = (dateStr) => {
    const barDate = new Date(dateStr.split('.').reverse().join('-'));
    return barDate <= today ? '#FFDC3F' : 'rgba(181, 152, 23, 0.3)';
  };

  function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
      const { value } = payload[0];
      return (
        <Box bg="#222" p="10px" borderRadius="5px">
          <Text color="#fff" fontSize="14px">
            {label} {/* дата */}
          </Text>
          <Text color="#FFDC3F" fontWeight="bold" fontSize="16px">
            Вес {value}g
          </Text>
        </Box>
      );
    }
    return null;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#444" />
        <XAxis
          dataKey="date"
          tick={{ fill: '#fff', fontWeight: 'bold' }}
          axisLine={{ stroke: '#fff' }}
        />
        <YAxis
          tick={{ fill: '#fff', fontWeight: 'bold' }}
          axisLine={{ stroke: '#fff' }}
          tickCount={6}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: 'rgba(255,255,255,0.1)' }}
        />
        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          {data.map((entry) => (
            <Cell key={`cell-${entry.date}`} fill={getBarColor(entry.date)} />
          ))}
          <LabelList
            dataKey="value"
            position="top"
            fill="#fff"
            fontWeight="bold"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'cabinet',
      'statistics',
      'global',
      'promo-modal',
    ])),
  },
});

export default function IndexPage() {
  const { t } = useTranslation('cabinet');
  const bgImage = useColorModeValue(
    '/images/bg/statistics/light.jpg',
    '/images/bg/statistics/dark.jpg'
  );

  return (
    <CabinetContent bgImage={bgImage}>
      <Box w={{ base: '100%', '2xl': 'full' }} p="20px">
        <Text as="span" display="block" fontSize="25px" fontWeight={700}>
          {t('statistics')}
        </Text>

        <Card p="30px" maxW="100%" mt="20px">
          <Flex gap={{ base: '20px', md: '60px' }} wrap="wrap" justify="center">
            <Stack>
              <Text fontWeight="bold" fontSize="45px" textAlign="center">
                0
              </Text>
              <Text>{t('nft_count')}</Text>
            </Stack>
            <Stack>
              <Text fontWeight="bold" fontSize="45px" textAlign="center">
                0
              </Text>
              <Text>Floor Price, SOL</Text>
            </Stack>
            <Stack>
              <Text fontWeight="bold" fontSize="45px" textAlign="center">
                0
              </Text>
              <Text>{t('harvests_collected')}</Text>
            </Stack>
            <Stack>
              <Text fontWeight="bold" fontSize="45px" textAlign="center">
                0
              </Text>
              <Text>{t('harvests_remaining')}</Text>
            </Stack>
            <Stack>
              <Text fontWeight="bold" fontSize="45px" textAlign="center">
                0
              </Text>
              <Text>{t('weight_obtained_g')}</Text>
            </Stack>
          </Flex>
        </Card>

        <Text display="block" fontSize="25px" fontWeight={700} mt="46px">
          {/* Дата ближайшего урожая:{' '}
          <Text as="span" color="brandYellow">
            20.06.2026 г
          </Text> */}
          {t('harvest_chart')}
        </Text>

        <Card maxW="100%" mt="20px" p="20px">
          {data.length ? <HarvestChart /> : <Center>{t('no_data')}</Center>}
        </Card>
      </Box>
    </CabinetContent>
  );
}
