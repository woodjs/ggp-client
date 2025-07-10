import { Center, HStack, SkeletonText } from '@chakra-ui/react';
import CardSmallText from '../../../Card/SmallText';
import StatisticCard from '../StatisticCard';

export default function CardAwardSkeleton() {
  return (
    <StatisticCard title="Личные награды">
      <HStack spacing="46px" justify="space-around">
        <Center flexDir="column">
          <SkeletonText skeletonHeight={6} noOfLines={1} w="full" />
          <CardSmallText>Мой рейтинг</CardSmallText>
        </Center>

        <Center flexDir="column">
          <SkeletonText skeletonHeight={6} noOfLines={1} w="full" />
          <CardSmallText>Мои медали</CardSmallText>
        </Center>

        <Center flexDir="column">
          <SkeletonText skeletonHeight={6} noOfLines={1} w="full" />
          <CardSmallText>Выполнено заданий</CardSmallText>
        </Center>
      </HStack>
    </StatisticCard>
  );
}
