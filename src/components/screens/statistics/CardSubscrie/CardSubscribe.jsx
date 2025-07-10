import {
  Button,
  Center,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
// import CardSmallText from '../../../Card/SmallText';
import StatisticCard from '../StatisticCard';
import CardSubscrieSkeleton from './CardSubscrie.skeleton';

export default function CardSubscrie() {
  const { t } = useTranslation('statistics');

  if (false) return <CardSubscrieSkeleton />;
  const borderColor = useColorModeValue('brandGreen.400', 'brandYellow');

  return (
    <StatisticCard title={t('title-subscribe')}>
      <Center
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="xl"
        p="20px"
        h="full"
      >
        <Text as="h4" fontSize="xl" fontWeight="bold">
          MLM HARVEST FREE
        </Text>
      </Center>
      {/* <VStack
        spacing="20px"
        borderWidth="1px"
        rounded="xl"
        p="20px"
        borderColor={borderColor}
        justify="center"
      >
        <Text as="h4" fontSize="xl" fontWeight="bold">
          MLM HARVEST FREE
        </Text>
        <SimpleGrid
          gap="10px"
          gridTemplateColumns="2fr 1fr"
          w="full"
          maxW="200px"
          alignItems="center"
        >
          <Text fontSize="sm" color="brandGray.200" fontWeight="bold">
            {t('subscribe-endAt')}
          </Text>
          <Text fontSize="sm" color="brandGray.200" fontWeight="bold">
            Никогда
          </Text>
        </SimpleGrid>
        <Button>Подробнее</Button>
      </VStack> */}
    </StatisticCard>
  );
}
