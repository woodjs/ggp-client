import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import StatisticCard from '../StatisticCard';
import CardAffilateSkeleton from './CardAffilate.skeleton';

/**
 * @param {Object} props
 * @param {Boolean} props.isLoading
 * @param {any} props.error
 *
 */
export default function CardAffilate({ isLoading, error }) {
  const colorSubTitle = useColorModeValue('brandGray.200', 'lightDark');

  if (isLoading) return <CardAffilateSkeleton />;
  if (error) return 213;

  return (
    <StatisticCard title="Партнерская программа">
      <SimpleGrid
        gap="10px"
        gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }}
        justify="space-around"
      >
        <VStack alignItems="flex-start" spacing="20px">
          <Box>
            <Text as="span" display="block" fontSize="25px" fontWeight={700}>
              Директор
            </Text>
            <Text as="small" fontSize="12px" color={colorSubTitle}>
              Статус
            </Text>
          </Box>

          <Box>
            <Text as="span" display="block" fontSize="25px" fontWeight={700}>
              $ 100 000
            </Text>
            <Text as="small" fontSize="12px" color={colorSubTitle}>
              Текущий оборот команды
            </Text>
          </Box>

          <Box>
            <Text as="span" display="block" fontSize="25px" fontWeight={700}>
              $ 100 000
            </Text>
            <Text as="small" fontSize="12px" color={colorSubTitle}>
              Заработано с команды
            </Text>
          </Box>
        </VStack>

        <VStack alignItems="flex-start" spacing="20px">
          <Box>
            <Text as="span" display="block" fontSize="25px" fontWeight={700}>
              10 человек
            </Text>
            <Text as="small" fontSize="12px" color={colorSubTitle}>
              Всего партнеров
            </Text>
          </Box>

          <Box>
            <Text as="span" display="block" fontSize="25px" fontWeight={700}>
              5 человек
            </Text>
            <Text as="small" fontSize="12px" color={colorSubTitle}>
              Активных партнеров
            </Text>
          </Box>
          <Box>
            <Text as="span" display="block" fontSize="25px" fontWeight={700}>
              5 человек
            </Text>
            <Text as="small" fontSize="12px" color={colorSubTitle}>
              Первая линия
            </Text>
          </Box>
        </VStack>
      </SimpleGrid>
    </StatisticCard>
  );
}
