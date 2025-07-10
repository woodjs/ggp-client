import { Box, HStack, SkeletonText, VStack } from '@chakra-ui/react';
import CardSmallText from '../../../Card/SmallText';
import StatisticCard from '../StatisticCard';

export default function CardAffilateSkeleton() {
  return (
    <StatisticCard title="Партнерская программа">
      <HStack alignItems="inherit" justify="space-around">
        <VStack alignItems="flex-start" spacing="20px">
          <Box w="full">
            <SkeletonText skeletonHeight={6} noOfLines={1} />
            <CardSmallText>Статус</CardSmallText>
          </Box>

          <Box w="full">
            <SkeletonText skeletonHeight={6} noOfLines={1} />
            <CardSmallText>Текущий оборот команды</CardSmallText>
          </Box>

          <Box w="full">
            <SkeletonText skeletonHeight={6} noOfLines={1} />
            <CardSmallText>Заработано с команды</CardSmallText>
          </Box>
        </VStack>

        <VStack alignItems="flex-start" spacing="20px">
          <Box w="full">
            <SkeletonText skeletonHeight={6} noOfLines={1} />
            <CardSmallText>Всего партнеров</CardSmallText>
          </Box>

          <Box w="full">
            <SkeletonText skeletonHeight={6} noOfLines={1} />
            <CardSmallText>Активных партнеров</CardSmallText>
          </Box>
          <Box w="full">
            <SkeletonText skeletonHeight={6} noOfLines={1} />
            <CardSmallText>Первая линия</CardSmallText>
          </Box>
        </VStack>
      </HStack>
    </StatisticCard>
  );
}
