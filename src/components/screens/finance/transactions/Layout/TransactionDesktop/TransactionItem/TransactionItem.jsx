import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import TransactionAmount from '../Amount/Amount';
import TransactionStatus from '../Status/Status';

export default function TransactionItem({
  name,
  date,
  totalAmount,
  commission,
  message,
  amount,
  id,
  type,
  statusId,
  status,
  currency,
}) {
  const { t } = useTranslation('transactions');
  return (
    <AccordionItem borderBottom={0}>
      <AccordionButton py="30px">
        <Box flex={1}>
          <Flex alignItems="center" justify="space-between">
            <Box flex={1}>
              <Text fontWeight="bold">{name}</Text>
            </Box>

            <Box flex={1}>
              <Text fontWeight="bold" fontSize="14px">
                {date}
              </Text>
            </Box>
            <Box flex={1}>
              <TransactionAmount
                statusId={statusId}
                amount={totalAmount}
                type={type}
                currency={currency?.code}
              />
            </Box>
            <Box flex={1}>
              <TransactionStatus statusId={statusId} value={status} />
            </Box>
            <Box flex={1}>
              <Button variant="outline">
                <AccordionIcon />
              </Button>
            </Box>
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
            <Text flex={1}>{date}</Text>
          </Flex>
          <Flex>
            <Text flex={1} maxW="180px">
              {t('amount')}:
            </Text>
            <Text flex={1}>
              {amount} {currency?.code.toUpperCase()}
            </Text>
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
              {totalAmount} {currency?.code.toUpperCase()}
            </Text>
          </Flex>
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
}
