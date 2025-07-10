// import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Box,
  Center,
  Heading,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import useTimer from '@/hooks/useTimer';
import { useTranslation } from 'next-i18next';
import CabinetContent from '../../components/layout/Cabinet/CabinetContent';

// import {
//   CardAffilate,
//   CardAward,
//   CardInvest,
// } from '../../components/screens/statistics';

// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'cabinet',
      'global',
      'promo-modal',
    ])),
  },
});

export default function IndexPage() {
  const { t } = useTranslation();
  const { time, status } = useTimer(new Date('2023-02-13T23:59:59.000Z'));
  return (
    <CabinetContent
      bgImage={useColorModeValue(
        '/images/bg/statistics/light.jpg',
        '/images/bg/statistics/dark.jpg'
      )}
    >
      <Center mt="200px">
        <Box minW={{ base: '300px', xs: '350px', md: '700px' }}>
          <Heading>{t('cabinet:timer-title')}</Heading>
          <Box w="fit-content">
            <Heading
              textAlign="left"
              fontSize={{ base: '5xl', xs: '6xl', md: '9xl' }}
            >
              {status !== 'error' &&
                `${time.days}:${time.hours}:${time.minutes}:${time.seconds}`}
              {/* <HStack>
                <Box w="170px">{time.days}</Box>
                <Box w="170px">{time.hours}</Box>
                <Box w="170px">{time.minutes}</Box>
                <Box w="170px">{time.seconds}</Box>
              </HStack> */}
            </Heading>
            <HStack justify="space-around">
              <Box>{t('cabinet:timer-day')}</Box>
              <Box>{t('cabinet:timer-hours')}</Box>
              <Box>{t('cabinet:timer-min')}</Box>
              <Box>{t('cabinet:timer-sec')}</Box>
            </HStack>
          </Box>
        </Box>
      </Center>
      {/* <VStack spacing="20px" alignItems="flex-start" maxW="550px">
        <CardInvest
          isLoading={loaded}
          error={error}
          data={data?.personalStatistic}
        />
        <CardAffilate isLoading={loaded} data={data?.partner} />
        <CardAward isLoading={loaded} />
      </VStack> */}

      {/* График */}
      {/* <Card
        mt="100px"
        maxW="1200px"
        w="full"
        px="40px"
        pt="32px"
        pb="45px"
        borderGold={true}
      >
        <Text as="h3" fontSize="24px" fontWeight={700} mb="16px">
          График
        </Text>

        <Chart
          options={chart.options}
          series={chart.series}
          type="area"
          // width={500}
          height={320}
          color="linear-gradient(180deg, #017101 0%, rgba(143, 183, 130, 0) 100%);"
        />
      </Card> */}
    </CabinetContent>
  );
}
