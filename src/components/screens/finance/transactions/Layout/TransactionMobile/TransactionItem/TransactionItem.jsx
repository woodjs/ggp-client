import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import TransactionAmount from '../Amount/Amount';

export default function TransactionItem({
  id,
  name,
  createdAt,
  amount,
  commission,
  totalAmount,
  type,
  status,
  statusId,
  currency,
  message,
}) {
  const { t } = useTranslation('transactions');

  return (
    <AccordionItem borderBottom={0}>
      <AccordionButton>
        <Box flex={1}>
          <Flex justify="space-between" align="center">
            <Box
              textAlign="left"
              maxW="200px"
              w="full"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              overflow="hidden"
            >
              <Text fontWeight="bold">{name}</Text>
              <Text color="#67748E" fontSize="14px">
                {createdAt}
              </Text>
            </Box>

            <TransactionAmount
              type={type}
              statusId={statusId}
              amount={totalAmount}
              currency={currency?.code}
            />
          </Flex>
        </Box>
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Stack spacing="15px">
          <Flex>
            <Text flex={1} maxW="180px">
              ID:
            </Text>
            <Text flex={1}>{id}</Text>
          </Flex>
          <Flex>
            <Text flex={1} maxW="180px">
              {t('date')}:
            </Text>
            <Text flex={1}>{createdAt}</Text>
          </Flex>
          {/* {message && (
            <Flex>
              <Text flex={1} maxW="180px">
                Комментарий:
              </Text>
              <Text flex={1}>{message}</Text>
            </Flex>
          )} */}

          <Flex>
            <Text flex={1} maxW="180px">
              {t('status')}:
            </Text>
            <Text flex={1}>{status}</Text>
          </Flex>

          <Flex>
            <Text flex={1} maxW="180px">
              {t('amount')}:
            </Text>
            <Text flex={1}>{amount}</Text>
          </Flex>
          <Flex>
            <Text flex={1} maxW="180px">
              {t('commission')}:
            </Text>
            <Text flex={1}>{commission}%</Text>
          </Flex>
          {message && (
            <Flex>
              <Text flex={1} maxW="180px">
                {t('message')}:
              </Text>
              <Text flex={1}>{message}</Text>
            </Flex>
          )}

          <Flex>
            <Text flex={1} fontWeight="bold" maxW="180px">
              {t('total-amount')}:
            </Text>
            <Text flex={1} fontWeight="bold">
              {totalAmount}
            </Text>
          </Flex>
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
}
