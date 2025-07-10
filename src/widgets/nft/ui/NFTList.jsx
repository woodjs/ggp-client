import { useRouter } from 'next/router';
import {
  Button,
  Center,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

import { NFTCard, useUserNFTs } from '@/entities/nft';
import { WithdrawalButton } from '@/features/nft/withdrawal';
import { CardListSkeleton } from '@/shared/ui';
import { useTranslation } from 'next-i18next';
import { SiTether } from 'react-icons/si';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { protectedAPI } from '@/shared/api';
import { toast } from 'react-toastify';
import TransferNFTButton from '@/features/nft/transfer/ui';

export function NFTList() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useUserNFTs();
  const { data: isExchange, isLoading: isLoadingExchange } = useQuery(
    'exchange-bush',
    () => protectedAPI.get('/user/nft/exchange-bush')
  );
  const { mutate } = useMutation(
    () => protectedAPI.post('/user/nft/exchange-bush'),
    {
      onSuccess: () => toast.success('Success'),
      onError: ({ message }) => toast.error(message),
      onSettled: () => {
        queryClient.invalidateQueries('exchange-bush');
        queryClient.invalidateQueries('user-nfts');
      },
    }
  );

  const router = useRouter();
  const { t } = useTranslation('myfarm');

  if (isError) return 'Error';
  if (isLoading || isLoadingExchange) return <CardListSkeleton />;

  if (!data.length)
    return (
      <Center flexDirection="column">
        <Text>{t('no-data')}</Text>
        <HStack>
          <Button mt="15px" onClick={() => router.push('/account/store')}>
            {t('to-store')}
          </Button>
          {isExchange && (
            <Button onClick={() => mutate()}>Обменять Outdoor</Button>
          )}
        </HStack>
      </Center>
    );

  return (
    <Stack>
      <HStack>
        <Link href="https://t.me/pow_mod_bot?start=chatpartner" target="_blank">
          <Button>{t('myfarm:partner-chat')}</Button>
        </Link>
        {isExchange && (
          <Button onClick={() => mutate()}>Обменять Outdoor</Button>
        )}
      </HStack>
      <Flex
        w="full"
        gap="30px"
        wrap="wrap"
        // justify={{ base: 'center', lg: 'flex-start' }}
        justify="center"
      >
        {data.map((item) => (
          <NFTCard
            key={item.id}
            image={item.nft.image}
            css={item.nft.css}
            name={item.nft.name}
            isGift={item.isGift}
            attributes={[
              {
                id: 1,
                name: t('myfarm:wallet-balance'),
                value: (
                  <HStack>
                    <Text>{item.balance}</Text>
                    <SiTether />
                  </HStack>
                ),
              },
              {
                id: 2,
                name: t('store:revenue-2'),
                value: `${item.nft.percent}%`,
              },
              {
                id: 3,
                name: t('store:yearly-revenue'),
                value: (
                  <HStack>
                    <Text>{item.nft.profitPerYear}</Text>
                    <SiTether />
                  </HStack>
                ),
              },
              {
                id: 5,
                name: t('store:income-per-cycle'),
                value: (
                  <HStack>
                    <Text>{item.nft.profitPerCycle}</Text>
                    <SiTether />
                  </HStack>
                ),
              },
            ]}
            Footer={
              <Stack>
                <WithdrawalButton id={item.id} />
                <TransferNFTButton
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  isDisabled={item.isGift}
                />
                <Button
                  w="full"
                  onClick={() => router.push(`/account/myfarm/${item.id}`)}
                >
                  {t('myfarm:nft-managing')}
                </Button>
              </Stack>
            }
          />
        ))}
      </Flex>
    </Stack>
  );
}
