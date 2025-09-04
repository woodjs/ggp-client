import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import {
  Center,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useTranslation } from 'react-i18next';

dayjs.extend(utc);
dayjs.extend(timezone);

export default function PagePreSale() {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = dayjs.tz('2025-10-10T00:00:00', 'Asia/Bangkok');

  useEffect(() => {
    const updateTimer = () => {
      const now = dayjs().tz('Asia/Bangkok');
      const diff = targetDate.diff(now);

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <CabinetContent>
      <Text fontWeight="bold" fontSize="36px" mb={6}>
        Store
      </Text>

      <Center mb={6}>
        <Text fontSize="24ppx" fontWeight="bold">
          {t('cabinet:presale_announcement')}
        </Text>
      </Center>

      <Center>
        <Stack display="flex" justifyContent="center" alignItems="center">
          <HStack spacing={8}>
            <VStack spacing={2}>
              <Text fontSize="48px" fontWeight="bold" color="brandYellow">
                {String(timeLeft.days).padStart(2, '0')}
              </Text>
              <Text fontSize="18px" color="white" fontWeight="bold">
                {t('cabinet:day')}
              </Text>
            </VStack>
            <VStack spacing={2}>
              <Text fontSize="48px" fontWeight="bold" color="brandYellow">
                {String(timeLeft.hours).padStart(2, '0')}
              </Text>
              <Text fontSize="18px" color="white" fontWeight="bold">
                {t('cabinet:hour')}
              </Text>
            </VStack>
            <VStack spacing={2}>
              <Text fontSize="48px" fontWeight="bold" color="brandYellow">
                {String(timeLeft.minutes).padStart(2, '0')}
              </Text>
              <Text fontSize="18px" color="white" fontWeight="bold">
                {t('cabinet:minute')}
              </Text>
            </VStack>
            <VStack spacing={2}>
              <Text fontSize="48px" fontWeight="bold" color="brandYellow">
                {String(timeLeft.seconds).padStart(2, '0')}
              </Text>
              <Text fontSize="18px" color="white" fontWeight="bold">
                {t('cabinet:second')}
              </Text>
            </VStack>
          </HStack>
          <Stack mt="30px">
            <Text fontWeight="bold" textAlign="center">
              {t('cabinet:nft-purchase-note')}
            </Text>

            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
              }}
              gap={6}
            >
              {Array.from({ length: 15 }, (_, i) => i + 1).map((item) => (
                <GridItem key={item} w="100%" cursor="pointer">
                  <Image
                    src={`https://gg-paradise.com/images/nft/${item}.png`}
                  />
                </GridItem>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Center>
    </CabinetContent>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['cabinet', 'global'])),
  },
});
