import Modal from '@/components/layout/Modal/Modal';
import {
  Box,
  Button,
  FormLabel,
  HStack,
  Input,
  Select,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

/**
 * @typedef {Object} FilterFormProps
 * @property {boolean} isDisabled
 * @property {Object} filters
 * @property {Function} submit
 * @property {Function} reset
 * @param {FilterFormProps} props
 * @returns {JSX.Element}
 */
function FilterForm({ isDisabled, filters, submit, reset }) {
  const { t } = useTranslation('statistics');
  const [from, setFrom] = useState(filters?.from || '');
  const [to, setTo] = useState(filters?.to || '');
  const [type, setType] = useState(filters?.type || 'day');

  const handleFrom = (e) => {
    setFrom(e.target.value);
  };
  const handleTo = (e) => {
    setTo(e.target.value);
  };
  const handleType = (e) => {
    setType(e.target.value);
  };
  const handleReset = () => {
    setFrom(null);
    setTo(null);
    setType('day');
    if (reset) reset();
  };
  const checkFromAndTo = () => {
    if (!from || !to) return false;
    const fromTime = new Date(from).getTime();
    const toTime = new Date(to).getTime();
    return fromTime < toTime;
  };

  const handleSubmit = () => {
    if (submit) {
      if (checkFromAndTo()) {
        submit({
          from,
          to,
          type,
        });
      } else {
        const newDate = new Date();
        const newFrom = new Date(newDate.setMonth(newDate.getMonth() - 1))
          .toISOString()
          .split('T')[0];
        const newTo = new Date().toISOString().split('T')[0];
        submit({
          from: newFrom,
          to: newTo,
          type,
        });
        setTo(newTo);
        setFrom(newFrom);
      }
    }
  };
  return (
    <>
      <Box>
        <FormLabel>{t('filter-type')}</FormLabel>
        <Select disabled={isDisabled} onChange={handleType} value={type}>
          <option value="day">{t('type-day')}</option>
          <option value="month">{t('type-month')}</option>
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
      <Button
        onClick={handleReset}
        variant="outline"
        borderColor="brandGray.200"
        alignSelf={{ base: 'stretch', md: 'flex-end' }}
      >
        {t('filter-reset')}
      </Button>
      <Button
        onClick={() => {
          handleSubmit();
        }}
        alignSelf={{ base: 'stretch', md: 'flex-end' }}
      >
        {t('btn-search')}
      </Button>
    </>
  );
}

/**
 * @param {FilterFormProps} props
 * @returns {JSX.Element}
 */
function ChartFilters({ ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation('statistics');
  return (
    <>
      <HStack display={{ base: 'none', md: 'flex' }} ml="60px">
        <FilterForm {...rest} />
      </HStack>
      <Button
        m="auto"
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        alignSelf="flex-end"
      >
        {t('btn-filters')}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <VStack spacing="10px" align="stretch">
          <FilterForm {...rest} />
        </VStack>
      </Modal>
    </>
  );
}

export default ChartFilters;
