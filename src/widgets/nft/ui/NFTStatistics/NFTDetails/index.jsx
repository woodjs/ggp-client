import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import {
  VStack,
  Text,
  Stack,
  Divider,
  Button,
  Switch,
  Link,
  useColorModeValue,
  Box,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import formatCurrency from '@/utils/formatCurrency';
import { toDateNormalUtil } from '@/utils/toDate';

import { WithdrawalButton, ReplenishmentButton } from '@/features/nft';
import { SwitchReinvest } from '@/features/nft/reinvest';
import { TransferNFTButton } from '@/features/nft/transfer';

import { NftLink } from '../NFTLink';

import Detail from './Detail';

export function NFTDetails({ data }) {
  const { t } = useTranslation('myfarm');
  return (
    <VStack spacing="30px" w="full" align="start">
      <VStack w="full" align="start">
        <Stack
          w="full"
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontWeight="bold" fontSize="4xl">
            {data.name} #{data.id}
          </Text>
          <NftLink value={data.id} />
        </Stack>

        <Detail
          name={t('wallet-balance')}
          Value={<Text>{formatCurrency(data.balance)}</Text>}
        />
        <Divider />
        <Detail
          name={t('included-in-investments')}
          Value={<Text>{formatCurrency(data.totalInvestment)}</Text>}
        />
        <Divider />
        <Detail
          name={t('next-payout')}
          Value={
            <Text>{dayjs(data.nextPaymentDate).format('DD/MM/YYYY')}</Text>
          }
        />
        <Divider />
        <Detail
          name={t('income-per-day')}
          Value={<Text>{formatCurrency(data.dailyProfit)}</Text>}
        />

        <Divider />

        {/* <Detail
          name={t('income-for-cycle')}
          Value={<Text>{formatCurrency(data.profitPerCycle)}</Text>}
        />

        <Divider /> */}

        <Detail
          name={t('total-income')}
          Value={
            <Text>
              {formatCurrency(data.receivedProfit)}/
              {formatCurrency(data.totalProfit)}
            </Text>
          }
        />

        <Divider />

        <Detail
          name={t('cycles')}
          Value={
            <Text>
              {data.cyclesPassed}/{data.cycles}
            </Text>
          }
        />

        <Divider />
        <Detail
          name={t('collection')}
          Value={<Text>{data.collection.name}</Text>}
        />

        <Divider />
        <Detail
          name={t('date-of-purchase')}
          Value={<Text>{toDateNormalUtil(data.createdAt)}</Text>}
        />

        <Divider />

        <Detail
          name={t('days-interval')}
          Value={<Text>{data.collection.payOutIntervalDays}</Text>}
        />

        <Divider />

        {data.transactionHash && (
          <>
            <Detail
              name="Транзакция"
              Value={
                <Button size="xs">
                  <Link
                    href={`https://etherscan.io/tx/${data.transactionHash}`}
                    target="_blank"
                  >
                    <ExternalLinkIcon />
                  </Link>
                </Button>
              }
            />

            <Divider />
          </>
        )}

        {data.farm && (
          <>
            <Detail
              name={t('variety')}
              Value={<Text>{data.farm.plant}</Text>}
            />

            <Divider />

            <Detail
              name={t('date-of-planting')}
              Value={
                <Text>{dayjs(data.farm.plantedAt).format('DD/MM/YYYY')}</Text>
              }
            />

            <Divider />

            <Detail
              name={t('current-price')}
              Value={<Text>{formatCurrency(data.currentPrice)}</Text>}
            />

            {data.insuranceEndAt && (
              <>
                <Divider />
                <Detail
                  name={t('insurance')}
                  Value={
                    <Text>
                      {dayjs(data.insuranceEndAt).format('DD/MM/YYYY')}
                    </Text>
                  }
                />
              </>
            )}

            {data.reportingEndAt && (
              <>
                <Divider />
                <Detail
                  name={t('report')}
                  Value={
                    <Text>
                      {dayjs(data.reportingEndAt).format('DD/MM/YYYY')}
                    </Text>
                  }
                />
                <Divider />
              </>
            )}
          </>
        )}
        {data.nft.collection.isReinvest && (
          <Detail
            name={t('reinvest')}
            Value={<SwitchReinvest id={data.id} status={data.isReinvest} />}
          />
        )}
      </VStack>

      <Stack w="full" direction={{ base: 'column', md: 'row' }}>
        {data.collection.isReplenishment && (
          <ReplenishmentButton
            currentAmount={data.totalInvestment}
            percent={data.percent}
            nftId={data.id}
          />
        )}
        {/* <TransferNFTButton
          id={data.id}
          name={data.name}
          isDisabled={data.isGift}
        /> */}
        <WithdrawalButton id={data.id}>{t('btn-withdraw')}</WithdrawalButton>
      </Stack>
    </VStack>
  );
}
