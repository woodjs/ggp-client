import { useEffect, useState } from 'react';
import { Button, Flex, HStack, Text, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import dayjs from 'dayjs';

import { useNFTs } from '@/hooks/nft/useNFT';
import { usePot } from '@/hooks/plantation/usePot';
import { usePlantings } from '@/hooks/plantation/usePlanting';

import NFT from '../NFT/NFT';
import NFTCardsSkeleton from './NFTCards.skeleton';
import PaymentModalV2 from '../PaymentModal/PaymentModalV2';

function NFTCards({ categoryId }) {
  const { t } = useTranslation('store');
  const paymentModal = useDisclosure();

  const [selectedNFT, setSelectedNFT] = useState(null);
  const [withPlanting, setWithPlanting] = useState(true);
  const [selectedPlantingId, setSelectedPlantingId] = useState(3);
  const handleChangePlanting = (id) => setSelectedPlantingId(id);

  // const plantings = usePlantings(categoryId);
  const {
    data,
    isLoading,
    isError,
    refetch: nftRefetch,
  } = useNFTs(
    {
      categoryId,
      plantingId: selectedPlantingId,
    },
    {
      enabled: false,
    }
  );

  const pots = usePot({ plantingId: selectedPlantingId });
  const handleClickNFT = (nft) => {
    setSelectedNFT(nft);
    paymentModal.onOpen();
  };

  // Нужно обновлять nft после того как plantings обновится
  // useEffect(() => {
  //   if (!plantings.data) return;
  //   if (!plantings.data.length) {
  //     setWithPlanting(false);
  //     setSelectedPlantingId(null);
  //   } else {
  //     setWithPlanting(true);
  //     setSelectedPlantingId(plantings.data[0].id);
  //   }
  // }, [plantings.data]);

  /* 
  Если обновился selectedPlantingId, то нужно обновить NFT. 
  Это сделано для того, чтобы получить актуальную цену nft в случае того, если NFT привязан к plantingId
  */
  useEffect(() => {
    if (categoryId === 1) {
      setWithPlanting(true);
      // nftRefetch();
    } else {
      setWithPlanting(false);
    }
    nftRefetch();
  }, [categoryId]);
  // useEffect(() => {
  //   // Если пришла информация об посадках
  //   if (plantings.data) {
  //     nftRefetch();
  //   }
  // }, [selectedPlantingId]);

  if (isLoading) return <NFTCardsSkeleton />;
  if (isError) return <div>Error...</div>;
  if (!data?.length) return 'Данные отсутствуют';

  return (
    <>
      {selectedNFT && (
        <PaymentModalV2
          isOpen={paymentModal.isOpen}
          onClose={paymentModal.onClose}
          data={{ ...selectedNFT, plantingId: selectedPlantingId }}
        />
      )}
      {withPlanting && (
        <>
          {pots.data && (
            <Text fontWeight="bold" color="brandGray.200">
              {t('nfts.pots-available')} {pots.data?.count || 0}
            </Text>
          )}
          <HStack>
            {/* {plantings.data?.map(
              ({ id, createdAt, species: { harvestDays } }) => (
                <Button
                  key={id}
                  variant={selectedPlantingId === id ? 'solid' : 'outline'}
                  onClick={() => handleChangePlanting(id)}
                >
                  {t(
                    `month-${dayjs(createdAt).add(harvestDays, 'day').month()}`
                  )}
                </Button>
              )
            )} */}
            <Button>{t(`month-8`)}</Button>
          </HStack>
        </>
      )}

      <Flex wrap="wrap" justifyContent="center" gap="26px" w="full" mt="26px">
        {data
          ?.sort((a, b) => a.price - b.price)
          .map((item) => (
            <NFT
              key={item.id}
              image={item.image}
              price={item.price}
              unit={item.unit}
              isLimited={item.isLimited}
              isDisabled={
                categoryId === 8 ||
                !item.price ||
                (item.isLimited ? !item.unit : !pots || pots < item.unit)
              }
              handleClick={() => handleClickNFT(item)}
            />
          ))}
      </Flex>
    </>
  );
}

export default NFTCards;
