import useTimer from '@/hooks/useTimer';
import { Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

function Timer() {
  const { t } = useTranslation();

  const { time, status } = useTimer(new Date('2023-03-01T00:00:00.000Z'), 7);
  // function getDaysString(day) {
  //   let ending;
  //   if (day % 10 === 1 && day % 100 !== 11) {
  //     ending = 'cabinet:timer-header.day';
  //   } else if (
  //     [2, 3, 4].includes(day % 10) &&
  //     ![12, 13, 14].includes(day % 100)
  //   ) {
  //     ending = 'cabinet:timer-header.days';
  //   } else {
  //     ending = 'cabinet:timer-header.days-v2';
  //   }
  //   return ending;
  // }
  if (status === 'finished') {
    return (
      <Text
        display={{ base: 'none', md: 'block' }}
        ml={{ base: '0px', xl: '200px' }}
        px="20px"
        w="full"
      >
        <Link href="/account/store">{t('cabinet:timer-header.finished')}</Link>
      </Text>
    );
  }
  if (status === 'error' || status === 'finished') {
    return null;
  }
  return (
    <Text
      display={{ base: 'none', md: 'block' }}
      ml={{ base: '0px', xl: '200px' }}
      px="20px"
      w="full"
      dangerouslySetInnerHTML={{
        __html: t('cabinet:timer-header.title-v2', {
          minutes: +time.hours * 60 + +time.minutes + 1,
        }),
      }}
    />
  );
}

export default Timer;
