import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { CSVLink } from 'react-csv';
import dayjs from 'dayjs';

import Modal from '@/components/layout/Modal/Modal';
import { useTranslation } from 'next-i18next';

export default function TransactionFilters({
  data,
  filters,
  setFilters,
  limit,
  setLimit,
  handleSubmit,
}) {
  const { t } = useTranslation('transactions');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [csvData, setCsvData] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const [typeId, setTypeId] = useState(0);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleReset = () => {
    setFilters({ limit: 10 });
    setLimit(10);
    setTypeId(0);
    setFrom('');
    setTo('');
    handleSubmit();
  };

  // Filters
  const handleLimit = (e) => {
    setFilters({ ...filters, limit: Number(e.target.value) });
    setLimit(e.target.value);
  };
  const handleType = (e) => {
    if (e.target.value === '0') {
      const { typeId: type, ...newFilters } = filters;
      setFilters(newFilters);
      setTypeId(0);
      return;
    }

    setFilters({ ...filters, typeId: e.target.value });
    setTypeId(e.target.value);
  };
  const handleFrom = (e) => {
    if (!e.target.value) {
      const { from: fromDate, ...newFilters } = filters;
      setFilters(newFilters);
      setFrom('');
      return;
    }

    setFilters({
      ...filters,
      from: dayjs(e.target.value).format('YYYY-MM-DD'),
    });
    setFrom(e.target.value);
  };
  const handleTo = (e) => {
    if (!e.target.value) {
      const { to: toDate, ...newFilters } = filters;
      setFilters(newFilters);
      setTo('');
      return;
    }

    setFilters({ ...filters, to: dayjs(e.target.value).format('YYYY-MM-DD') });
    setTo(e.target.value);
  };

  useEffect(() => {
    if (data?.count) {
      const csv = [
        ['ID', 'Type', 'Amount', 'Commission', 'Total amount', 'Date'],
      ].concat(
        data.rows.map((item) => [
          item.id,
          item.type,
          item.amount,
          item.comission,
          item.totalAmount,
          item.createdAt,
        ])
      );

      setCsvData(csv);
      setIsDisabled(false);
    }
  }, [data]);

  return (
    <>
      <Modal
        title={t('title-filters')}
        isOpen={isOpen}
        onClose={onClose}
        btnActionText={t('btn-search')}
        handleClick={() => console.log('ok')}
      >
        <Stack spacing="20px">
          <FormControl>
            <FormLabel>{t('filter-limit')}</FormLabel>
            <Select disabled={isDisabled}>
              <option>10</option>
              <option>30</option>
              <option>50</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>{t('filter-type')}</FormLabel>
            <Select disabled={isDisabled}>
              <option value={0}>{t('type-all')}</option>
              <option value={1}>{t('type-deposit')}</option>
              <option value={2}>{t('type-credit')}</option>
              <option value={3}>{t('type-buy')}</option>
              <option value={4}>{t('type-bonus')}</option>
              <option value={5}>{t('type-withdraw')}</option>
              <option value={8}>{t('type-referral')}</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>{t('filter-from')}</FormLabel>
            <Input type="date" disabled={isDisabled} />
          </FormControl>
          <FormControl>
            <FormLabel>{t('filter-to')}</FormLabel>
            <Input type="date" disabled={isDisabled} />
          </FormControl>
        </Stack>
      </Modal>
      <Flex
        display={{ base: 'none', lg: 'flex' }}
        px="40px"
        pb="20px"
        flexDir={{ base: 'column', md: 'row' }}
        borderBottom="1px solid #D9D9D9"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <HStack>
          <Box>
            <FormLabel>{t('filter-limit')}</FormLabel>
            <Select disabled={isDisabled} onChange={handleLimit} value={limit}>
              <option value={10}>10</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </Select>
          </Box>
          <Box>
            <FormLabel>{t('filter-type')}</FormLabel>
            <Select disabled={isDisabled} onChange={handleType} value={typeId}>
              <option value={0}>{t('type-all')}</option>
              <option value={1}>{t('type-deposit')}</option>
              <option value={2}>{t('type-credit')}</option>
              <option value={3}>{t('type-buy')}</option>
              <option value={4}>{t('type-bonus')}</option>
              <option value={5}>{t('type-withdraw')}</option>
              <option value={8}>{t('type-referral')}</option>
            </Select>
          </Box>
          <Box>
            <FormLabel>{t('filter-from')}</FormLabel>
            <Input
              type="date"
              disabled={isDisabled}
              onChange={handleFrom}
              value={from}
            />
          </Box>
          <Box>
            <FormLabel>{t('filter-to')}</FormLabel>
            <Input
              type="date"
              disabled={isDisabled}
              onChange={handleTo}
              value={to}
            />
          </Box>
          <Button onClick={handleReset} alignSelf="flex-end">
            {t('filter-reset')}
          </Button>
          <Button
            onClick={() => {
              handleSubmit();
            }}
            alignSelf="flex-end"
          >
            {t('btn-search')}
          </Button>
        </HStack>
        {/* {csvData.length ? (
          <CSVLink
            data={csvData}
            filename={`transactions-${dayjs(new Date()).format(
              'DD/MM/YYYY'
            )}.csv`}
            target="_blank"
          >
            <Button w="100px">CSV</Button>
          </CSVLink>
        ) : (
          <Button w="100px" disabled>
            CSV
          </Button>
        )} */}
      </Flex>
      <HStack
        display={{ base: 'flex', lg: 'none' }}
        pb="20px"
        px="40px"
        justifyContent="center"
      >
        <Button onClick={onOpen} isDisabled={isDisabled}>
          Фильтры
        </Button>

        {csvData.length ? (
          <CSVLink
            data={csvData}
            filename={`transactions-${dayjs(new Date()).format(
              'DD/MM/YYYY'
            )}.csv`}
            target="_blank"
          >
            <Button w="100px">CSV</Button>
          </CSVLink>
        ) : (
          <Button w="100px" disabled>
            CSV
          </Button>
        )}
      </HStack>
    </>
  );
}
