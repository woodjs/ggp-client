import { Button, Flex, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { PurchaseModalNFT } from './Modal';

export function PurchaseNFT({ nft, plantingId, price, availableCount }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation('store');

  return (
    <>
      <PurchaseModalNFT
        isOpen={isOpen}
        onClose={onClose}
        nft={nft}
        currentPrice={price}
        plantingId={plantingId}
      />
      {/* <Stack>
        <Flex w="full" justifyContent="space-between">
          <Text>{t('nft-price')}</Text>
          <Text fontWeight="bold">{price} USDT</Text>
        </Flex>
        <Flex w="full" justifyContent="space-between">
          <Text>{t('pots-available')}</Text>
          <Text fontWeight="bold">
            {availableCount} {t('pcs')}
          </Text>
        </Flex>
      </Stack> */}
      <Button w="full" onClick={onOpen} isDisabled={!availableCount}>
        {availableCount ? `${t('btn-buy')}` : `${t('sold-out')}`}
      </Button>
    </>
  );
}
