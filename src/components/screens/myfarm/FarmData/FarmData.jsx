import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Web3Button } from '@web3modal/react';
import { useAccount } from 'wagmi';

import QuestionPin from '@/components/Pin/QuestionPin';
import { useUserNFTs } from '@/hooks/user/nft/useUserNFT';
import { useSocial } from '@/hooks/user/useSocial';
import FarmCardsSkeleton from './Cards/Cards.skeleton';
import ModalMint from './ModalMint/ModalMint';

export default function Products() {
  const { t } = useTranslation('myfarm');
  const { address } = useAccount();
  const { data, isLoading, isError, refetch } = useUserNFTs(address);
  const social = useSocial();
  const modalMint = useDisclosure();

  const [nft, setNft] = useState(null);

  useEffect(() => {
    if (!address) return;

    refetch();
  }, [address]);

  if (isLoading) return <FarmCardsSkeleton />;
  if (isError) return 'Error';

  if (!data || !data.length)
    return (
      <>
        <HStack mb="20px">
          <Web3Button />
          <Button rounded="xl" disabled w="160px">
            {t('partner-chat')}
          </Button>
          <QuestionPin label={t('required-buy-nft')} />
        </HStack>
        <Center flexDir="column">{t('not-found-nft')}</Center>
      </>
    );

  return (
    <>
      {nft && (
        <ModalMint
          isOpen={modalMint.isOpen}
          onClose={modalMint.onClose}
          nftId={nft.id}
        />
      )}

      <HStack mb="20px">
        <Web3Button />
        <Button
          rounded="xl"
          w="160px"
          onClick={() =>
            window.open('https://cp.puzzlebot.top/R65c1HzPXW', '_blank')
          }
          disabled={!social?.data?.tg}
        >
          {t('partner-chat')}
        </Button>
        {!social?.data?.tg && <QuestionPin label={t('required-telegram')} />}
      </HStack>
      <VStack alignItems="flex-start" spacing="30px">
        <Flex
          wrap="wrap"
          gap="15px"
          justify={{
            base: 'center',
            lg: 'inherit',
          }}
        >
          {data.map((item) => (
            <Stack
              mb="20px"
              key={item.id}
              w={{ base: '90%', sm: '48%', md: '24%', lg: '19%' }}
              cursor="pointer"
              transition=".3s"
              _hover={{
                transform: 'scale(1.02)',
              }}
            >
              <Link href={`/account/myfarm/${item.id}`}>
                <Image mb="15px" src={item.image} alt="" />
              </Link>

              <Text>Balance: {item.income} USDT</Text>
              {!item.transactionHash && (
                <Button
                  w="full"
                  onClick={() => {
                    if (address) {
                      setNft(item);
                      modalMint.onOpen();
                    }
                  }}
                  isDisabled={!address}
                >
                  Mint NFT
                </Button>
              )}
            </Stack>
          ))}
        </Flex>
      </VStack>
    </>
  );
}
