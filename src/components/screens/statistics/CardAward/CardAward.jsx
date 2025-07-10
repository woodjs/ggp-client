import { Center, SimpleGrid, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import CardSmallText from '../../../Card/SmallText';
import StatisticCard from '../StatisticCard';
import CardAwardSkeleton from './CardAward.skeleton';

export default function CardAward({ isLoading }) {
  const { t } = useTranslation('statistics');
  if (isLoading) return <CardAwardSkeleton />;

  return (
    <StatisticCard userSelect="none" title={t('title-award')}>
      <SimpleGrid
        filter="auto"
        blur="5px"
        gap="10px"
        gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }}
        justify="space-between"
        // justifyItems="start"
      >
        <Center flexDir="column">
          <Text as="span" display="block" fontSize="30px" fontWeight={700}>
            0
          </Text>
          <CardSmallText textAlign="center">
            {t('awards.my-rating')}
          </CardSmallText>
        </Center>

        <Center flexDir="column">
          <Text as="span" display="block" fontSize="30px" fontWeight={700}>
            0
          </Text>
          <CardSmallText textAlign="center">
            {t('awards.my-medals')}
          </CardSmallText>
        </Center>

        <Center flexDir="column">
          <Text as="span" display="block" fontSize="30px" fontWeight={700}>
            0
          </Text>
          <CardSmallText textAlign="center">
            {t('awards.completed-tasks')}
          </CardSmallText>
        </Center>
      </SimpleGrid>
    </StatisticCard>
  );
}
