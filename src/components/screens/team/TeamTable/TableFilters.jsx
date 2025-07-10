import { useState } from 'react';
import {
  Box,
  Button,
  FormLabel,
  HStack,
  Input,
  Select,
  useColorModeValue,
  SimpleGrid,
  useMediaQuery,
  useDisclosure,
  Show,
} from '@chakra-ui/react';
import Modal from '@/components/layout/Modal/Modal';

import { useTranslation } from 'next-i18next';

const ranksData = [
  { id: -1, name: 'no-rank', label: 'No Rank' },
  { id: 0, name: 'all', label: 'All' },
  { id: 1, name: 'newbie', label: 'Newbie' },
  { id: 2, name: 'partner', label: 'Partner' },
  { id: 3, name: 'curator', label: 'Curator' },
  { id: 4, name: 'leader', label: 'Leader' },
  { id: 5, name: 'senior-leader', label: 'Senior Leader' },
  { id: 6, name: 'supervisor', label: 'Supervisor' },
  { id: 7, name: 'ambassador', label: 'Ambassador' },
  { id: 8, name: 'director', label: 'Director' },
  { id: 9, name: 'senior-ambassador', label: 'Senior Ambassador' },
  { id: 10, name: 'president', label: 'The President' },
];

export default function TableFilters({
  filters,
  setFilters,
  handleSubmit,
  handleReset,
  isDisabled,
}) {
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');

  const { t } = useTranslation('team');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [toRankOptions, setToRankOptions] = useState(ranksData);
  const [prevFilters, setPrevFilters] = useState(filters);

  const filtersChanged = () => {
    const keys = Object.keys(filters);
    return keys.some((key) => filters[key] !== prevFilters[key]);
  };

  const handleChange = (e) => {
    const value = e.target.value.length ? e.target.value : '';
    setFilters({ ...filters, [e.target.name]: value });

    if (e.target.name === 'fromRank') {
      const fromRank = parseInt(value, 10);
      if (fromRank === -1) {
        setToRankOptions([{ id: -1, name: 'no-rank', label: 'No Rank' }]);
      } else {
        setToRankOptions(
          ranksData.filter((rank) => rank.id > fromRank && rank.id !== -1)
        );
      }
    }
  };

  const handleSubmitAndClose = () => {
    handleSubmit();
    onClose();
    setPrevFilters(filters);
  };

  return (
    <>
      {isLargerThanTablet ? (
        <SimpleGrid columns={5} spacing={3} my="20px">
          <Box>
            <FormLabel
              userSelect="none"
              cursor="pointer"
              htmlFor="team-table-filters-is-active-modal"
            >
              {t('filters.is-active')}
            </FormLabel>
            <Select
              id="team-table-filters-is-active-modal"
              name="onlyActive"
              onChange={handleChange}
              value={filters.onlyActive}
              disabled={isDisabled}
            >
              <option defaultChecked value="">
                {t('filters.all')}
              </option>
              <option value={1}>{t('filters.is-active')}</option>
            </Select>
          </Box>
          <Box>
            <FormLabel>{t('filters.login')}</FormLabel>
            <Input
              type="text"
              name="login"
              disabled={isDisabled}
              onChange={handleChange}
              value={filters.login}
            />
          </Box>
          <Box>
            <FormLabel>{t('filters.email')}</FormLabel>
            <Input
              type="text"
              name="email"
              isDisabled={isDisabled}
              onChange={handleChange}
              value={filters.email}
            />
          </Box>

          <Box>
            <FormLabel>{t('filters.from-rank')}</FormLabel>
            <Select
              name="fromRank"
              onChange={handleChange}
              value={filters.fromRank}
              defaultValue={0}
            >
              {ranksData.map((rank) => (
                <option key={rank.id} value={rank.id}>
                  {t(`filters.${rank.name}`)}
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            <FormLabel>{t('filters.to-rank')}</FormLabel>
            <Select
              name="toRank"
              onChange={handleChange}
              value={filters.toRank}
              defaultValue={0}
            >
              {toRankOptions.map((rank) => (
                <option key={rank.id} value={rank.id}>
                  {t(`filters.${rank.name}`)}
                </option>
              ))}
            </Select>
          </Box>

          <Box>
            <FormLabel>{t('filters.from-investment')}</FormLabel>
            <Input
              type="number"
              name="fromInvestment"
              disabled={isDisabled}
              onChange={handleChange}
              onBeforeInput={(e) => {
                if (!/^[0-9]*$/.test(e.data)) {
                  e.preventDefault();
                }
              }}
              value={filters.fromInvestment}
            />
          </Box>
          <Box>
            <FormLabel>{t('filters.from-turnover')}</FormLabel>
            <Input
              type="number"
              name="fromTurnover"
              isDisabled
              onChange={handleChange}
              onBeforeInput={(e) => {
                if (!/^[0-9]*$/.test(e.data)) {
                  e.preventDefault();
                }
              }}
              value={filters.fromTurnover}
            />
          </Box>
          <Box>
            <FormLabel>{t('filters.depth')}</FormLabel>
            <Input
              type="number"
              name="depth"
              disabled={isDisabled}
              onChange={handleChange}
              onBeforeInput={(e) => {
                if (!/^[0-9]*$/.test(e.data)) {
                  e.preventDefault();
                }
              }}
              value={filters.depth}
            />
          </Box>
          <Box>
            <FormLabel>{t('created-at')}</FormLabel>
            <Input
              type="date"
              name="createdAtStart"
              disabled={isDisabled}
              onChange={handleChange}
              value={filters.createdAtStart}
            />
          </Box>
          <Box>
            <FormLabel>{t('created-by')}</FormLabel>
            <Input
              type="date"
              name="createdAtEnd"
              disabled={isDisabled}
              onChange={handleChange}
              value={filters.createdAtEnd}
            />
          </Box>
        </SimpleGrid>
      ) : (
        <>
          <SimpleGrid spacing={2} my="20px">
            <Button onClick={onOpen} isDisabled={isDisabled}>
              {t('filters.title')}
            </Button>
          </SimpleGrid>
          <Modal isOpen={isOpen} onClose={onClose}>
            <SimpleGrid columns={[1, 2]} spacing={3} my="20px">
              <Box>
                <FormLabel
                  userSelect="none"
                  cursor="pointer"
                  htmlFor="team-table-filters-is-active-modal"
                >
                  {t('filters.is-active')}
                </FormLabel>
                <Select
                  id="team-table-filters-is-active-modal"
                  name="onlyActive"
                  colorScheme={useColorModeValue('green', 'yellow')}
                  onChange={handleChange}
                  disabled={isDisabled}
                >
                  <option defaultChecked value="">
                    {t('filters.all')}
                  </option>
                  <option value={1}>{t('filters.is-active')}</option>
                </Select>
              </Box>
              <Box>
                <FormLabel>{t('filters.depth')}</FormLabel>
                <Input
                  type="number"
                  disabled={isDisabled}
                  onChange={handleChange}
                  onBeforeInput={(e) => {
                    if (!/^[0-9]*$/.test(e.data)) {
                      e.preventDefault();
                    }
                  }}
                  name="depth"
                  value={filters.depth}
                />
              </Box>
              <Box>
                <FormLabel>{t('filters.from-rank')}</FormLabel>
                <Select
                  isDisabled
                  onChange={handleChange}
                  value={filters.fromRank}
                  name="fromRank"
                >
                  {ranksData.map((rank) => (
                    <option key={rank.id} value={rank.id}>
                      {t(`filters.${rank.name}`)}
                    </option>
                  ))}
                </Select>
              </Box>
              <Box>
                <FormLabel>{t('filters.to-rank')}</FormLabel>
                <Select
                  isDisabled
                  onChange={handleChange}
                  value={filters.toRank}
                  name="toRank"
                >
                  {ranksData.map((rank) => (
                    <option key={rank.id} value={rank.id}>
                      {t(`filters.${rank.name}`)}
                    </option>
                  ))}
                </Select>
              </Box>

              <Box>
                <FormLabel>{t('filters.login')}</FormLabel>
                <Input
                  type="text"
                  disabled={isDisabled}
                  onChange={handleChange}
                  value={filters.login}
                  name="login"
                />
              </Box>
              <Box>
                <FormLabel>{t('filters.email')}</FormLabel>
                <Input
                  type="text"
                  disabled={isDisabled}
                  onChange={handleChange}
                  value={filters.email}
                  name="email"
                />
              </Box>
              <Box>
                <FormLabel>{t('filters.from-investment')}</FormLabel>
                <Input
                  type="number"
                  disabled={isDisabled}
                  onChange={handleChange}
                  onBeforeInput={(e) => {
                    if (!/^[0-9]*$/.test(e.data)) {
                      e.preventDefault();
                    }
                  }}
                  value={filters.fromInvestment}
                  name="fromInvestment"
                />
              </Box>
              <Box>
                <FormLabel>{t('filters.from-turnover')}</FormLabel>
                <Input
                  type="number"
                  isDisabled
                  onChange={handleChange}
                  onBeforeInput={(e) => {
                    if (!/^[0-9]*$/.test(e.data)) {
                      e.preventDefault();
                    }
                  }}
                  value={filters.fromTurnover}
                  name="fromTurnover"
                />
              </Box>
              <Box>
                <FormLabel>{t('created-at')}</FormLabel>
                <Input
                  type="date"
                  name="createdAtStart"
                  disabled={isDisabled}
                  onChange={handleChange}
                  value={filters.createdAtStart}
                />
              </Box>
              <Box>
                <FormLabel>{t('created-by')}</FormLabel>
                <Input
                  type="date"
                  name="createdAtEnd"
                  disabled={isDisabled}
                  onChange={handleChange}
                  value={filters.createdAtEnd}
                />
              </Box>
            </SimpleGrid>
            <HStack align="center" justify="center">
              <Button
                onClick={handleReset}
                alignSelf="flex-end"
                variant="outline"
                gridArea="reset"
              >
                {t('filters.reset')}
              </Button>
              <Button
                onClick={handleSubmitAndClose}
                alignSelf="flex-end"
                gridArea="search"
              >
                {t('filters.search')}
              </Button>
            </HStack>
          </Modal>
        </>
      )}
      <Show above="md">
        <HStack align="flex-end" justify="flex-end">
          <Button
            onClick={handleReset}
            alignSelf="flex-end"
            variant="outline"
            gridArea="reset"
            isDisabled={!filtersChanged()}
          >
            {t('filters.reset')}
          </Button>
          <Button
            onClick={() => {
              handleSubmit();
            }}
            alignSelf="flex-end"
            gridArea="search"
            isDisabled={!filtersChanged()}
          >
            {t('filters.search')}
          </Button>
        </HStack>
      </Show>
    </>
  );
}
