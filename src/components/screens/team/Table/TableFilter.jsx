import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';

import Modal from '@/components/layout/Modal/Modal';

/**
 *
 * @typedef {object} FiltersType
 * @property {string} filters.invests
 * @property {string} filters.name
 * @property {string} filters.turnover
 * @property {string} filters.activePartners
 * @property {string} filters.rank
 *
 * @typedef {object} TableFilterProps
 * @property {(filters: FiltersType) => void} setFilters
 * @property {FiltersType} filters
 *
 * @param {TableFilterProps} props
 *
 */
export default function TableFilter({ setFilters = () => {}, filters }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const [isDisabled, setIsDisabled] = useState(!true);
  const isDisabled = false;
  const [isLoading, setIsLoading] = useState(false);

  const [invests, setInvests] = useState('');
  const handleInvests = (e) => {
    setInvests(e.target.value);
  };
  const handleInvestsSubmit = () => {
    setFilters({
      ...filters,
      invests,
    });
  };

  const [name, setName] = useState(null);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNameSubmit = () => {
    setFilters({
      ...filters,
      name,
    });
  };

  const [turnover, setTurnover] = useState('');
  const handleTurnover = (e) => {
    setTurnover(e.target.value);
  };
  const handleTurnoverSubmit = () => {
    setFilters({
      ...filters,
      turnover,
    });
  };

  const [activePartners, setActivePartners] = useState('');
  const handleActivePartners = (e) => {
    setActivePartners(e.target.value);
  };
  const handleActivePartnersSubmit = () => {
    setFilters({
      ...filters,
      activePartners,
    });
  };

  const [rank, setRank] = useState('default');
  const handleRank = (e) => {
    setRank(e.target.value);
    setFilters({
      ...filters,
      rank: e.target.value,
    });
  };

  const handleReset = () => {
    setIsLoading(true);
    setTimeout(() => {
      setFilters({
        activePartners: null,
        rank: 'default',
        invests: null,
        name: null,
        turnover: null,
      });
      setActivePartners('');
      setInvests('');
      setName('');
      setTurnover('');
      setRank('default');
      setIsLoading(false);
    }, 1000);
  };
  return (
    <>
      <Modal
        title="Фильтры"
        isOpen={isOpen}
        onClose={onClose}
        btnActionText="Поиск"
        // handleClick={() => console.log('ok')}
      >
        <Stack spacing="20px">
          <Box>
            <FormLabel>Ранг</FormLabel>
            <Select
              w={{ base: 'full', sm: 'auto' }}
              minW="105px"
              isLoading={isLoading}
              isDisabled={isDisabled}
              value={rank}
              onChange={handleRank}
            >
              <option value="default">Любой</option>
              <option value="rank">1 ранг</option>
              <option value="invests">2 ранг</option>
              <option value="turnover">3 ранг</option>
            </Select>
          </Box>
          <Box>
            <FormLabel>Инвестиции</FormLabel>
            <NumberInput value={invests}>
              <NumberInputField
                isLoading={isLoading}
                isDisabled={isDisabled}
                onChange={handleInvests}
                value={invests}
                onBlur={handleInvestsSubmit}
                placeholder=""
              />
            </NumberInput>
          </Box>
          <Box>
            <FormLabel>Имя</FormLabel>
            <Input
              isLoading={isLoading}
              isDisabled={isDisabled}
              onChange={handleName}
              value={name}
              onBlur={handleNameSubmit}
              placeholder=""
            />
          </Box>
          <Box>
            <FormLabel>Оборот</FormLabel>
            <NumberInput value={turnover}>
              <NumberInputField
                isLoading={isLoading}
                isDisabled={isDisabled}
                onChange={handleTurnover}
                value={turnover}
                onBlur={handleTurnoverSubmit}
                placeholder=""
              />
            </NumberInput>
          </Box>
          <Box>
            <FormLabel>Активны партнеры</FormLabel>
            <NumberInput value={activePartners}>
              <NumberInputField
                isLoading={isLoading}
                isDisabled={isDisabled}
                onChange={handleActivePartners}
                value={activePartners}
                onBlur={handleActivePartnersSubmit}
                placeholder=""
              />
            </NumberInput>
          </Box>
          <Button
            w={{ base: 'full', sm: 'auto' }}
            loadingText="Сбросить"
            isLoading={isLoading}
            isDisabled={isDisabled}
            onClick={handleReset}
            alignSelf="flex-end"
          >
            Сбросить
          </Button>
        </Stack>
      </Modal>
      <Flex
        display={{ base: 'none', xl: 'flex' }}
        flexDir={{ base: 'column', md: 'row' }}
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <HStack gap={{ base: '20px', sm: '10px' }} spacing="0">
          <Box>
            <FormLabel>Ранг</FormLabel>
            <Select
              w={{ base: 'full', sm: 'auto' }}
              minW="105px"
              isLoading={isLoading}
              isDisabled={isDisabled}
              value={rank}
              onChange={handleRank}
            >
              <option value="default">Любой</option>
              <option value="rank">1 ранг</option>
              <option value="invests">2 ранг</option>
              <option value="turnover">3 ранг</option>
            </Select>
          </Box>
          <Box>
            <FormLabel>Инвестиции</FormLabel>
            <NumberInput value={invests}>
              <NumberInputField
                isLoading={isLoading}
                isDisabled={isDisabled}
                onChange={handleInvests}
                value={invests}
                onBlur={handleInvestsSubmit}
                placeholder=""
              />
            </NumberInput>
          </Box>
          <Box>
            <FormLabel>Имя</FormLabel>
            <Input
              isLoading={isLoading}
              isDisabled={isDisabled}
              onChange={handleName}
              value={name}
              onBlur={handleNameSubmit}
              placeholder=""
            />
          </Box>
          <Box>
            <FormLabel>Оборот</FormLabel>
            <NumberInput value={turnover}>
              <NumberInputField
                isLoading={isLoading}
                isDisabled={isDisabled}
                onChange={handleTurnover}
                value={turnover}
                onBlur={handleTurnoverSubmit}
                placeholder=""
              />
            </NumberInput>
          </Box>
          <Box>
            <FormLabel>Активны партнеры</FormLabel>
            <NumberInput value={activePartners}>
              <NumberInputField
                isLoading={isLoading}
                isDisabled={isDisabled}
                onChange={handleActivePartners}
                value={activePartners}
                onBlur={handleActivePartnersSubmit}
                placeholder=""
              />
            </NumberInput>
          </Box>
          <Button
            w={{ base: 'full', sm: 'auto' }}
            loadingText="Сбросить"
            isLoading={isLoading}
            isDisabled={isDisabled}
            onClick={handleReset}
            alignSelf="flex-end"
          >
            Сбросить
          </Button>
        </HStack>
      </Flex>
      <HStack
        display={{ base: 'flex', xl: 'none' }}
        justifyContent={{ base: 'center', sm: 'start' }}
      >
        <Button maxW="300px" w="full" onClick={onOpen} isDisabled={isDisabled}>
          Фильтры
        </Button>
      </HStack>
    </>
  );
}
