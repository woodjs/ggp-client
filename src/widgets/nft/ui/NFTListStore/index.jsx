import { useRouter } from 'next/router';
import { useCollectionNFTs } from '@/entities/collection-nft/model';
import CardListSkeleton from '@/shared/ui/CardList/Skeleton';

import { NFTCard } from '@/entities/nft';

import { PurchaseNFT } from '@/features/nft/buy';
import { harvestMonthsModel } from '@/entities/farm';
import { useMemo } from 'react';
import { useCollection } from '@/entities/collection-nft';
import { Box, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { SiTether } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import { formatCurrency } from '@/shared/lib';

const getAvailableCount = ({ plantingId, totalCount, unit }) => {
  if (!plantingId) return unit;
  return Math.floor(totalCount / unit);
};

export function NFTListStore({ plantingId, isLoading: load }) {
  const bg = useColorModeValue('#fff', 'dark');
  const { t } = useTranslation('store');
  const router = useRouter();
  const { collectionId } = router.query;
  const collection = useCollection(collectionId);
  const { data, isLoading, isError } = useCollectionNFTs(
    {
      collectionId,
      params: { plantingId },
    },
    {
      enabled: !load,
    }
  );
  const { data: harvestMonths } =
    harvestMonthsModel.useHarvestMonthsByCollectionId(collectionId);
  const cachedPotCount = useMemo(() => {
    if (!plantingId || !data) return 0;

    const selectedMonth = harvestMonths.find((item) => item.id === plantingId);

    return selectedMonth && selectedMonth.potCount !== undefined
      ? selectedMonth.potCount
      : 0;
  }, [plantingId, data, harvestMonths]);

  if (isLoading || load) return <CardListSkeleton />;
  if (isError) return 'error';
  if (!data.length) return 'Данные отсутствуют';

  return (
    <Flex w="full" gap="20px" wrap="wrap" justify="center">
      {data.map((item) => (
        <NFTCard
          key={item.id}
          image={item.image}
          name={item.name}
          percent={item.percent}
          isDisabled={!item.unit}
          attributes={[
            {
              id: 1,
              name: t('nft-price'),
              value: (
                <HStack>
                  <Text>{formatCurrency({ amount: item.price })}</Text>
                  <SiTether />
                </HStack>
              ),
            },
            {
              id: 2,
              name: t('revenue-2'),
              value: `${item.percent}%`,
            },
            {
              id: 3,
              name: t('yearly-revenue'),
              value: (
                <HStack>
                  <Text>{formatCurrency({ amount: item.profitPerYear })}</Text>
                  <SiTether />
                </HStack>
              ),
            },
            {
              id: 4,
              name: t('income-per-cycle'),
              value: (
                <HStack>
                  <Text>
                    {formatCurrency({
                      amount: item.profitPerCycle,
                    })}
                  </Text>
                  <SiTether />
                </HStack>
              ),
            },
          ]}
          css={item.css}
          Badge={
            <Box
              p="6px 10px"
              bg={bg}
              borderRadius="7px"
              pos="absolute"
              top="8px"
              right="8px"
              fontSize="14px"
              fontWeight="bold"
            >
              {item.unit} NFT
            </Box>
          }
          Footer={
            <PurchaseNFT
              key={item.id}
              nft={item}
              plantingId={plantingId}
              price={
                collection.data?.parameters?.plantId
                  ? item.currentPrice
                  : item.price
              }
              availableCount={getAvailableCount({
                plantingId,
                totalCount: cachedPotCount,
                unit: item.unit,
              })}
            />
          }
        />
      ))}
    </Flex>
  );
}
