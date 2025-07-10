import { harvestMonthsModel } from '@/entities/farm/harvest-months';
import { Button, HStack, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import utc from 'dayjs/plugin/utc'; // Подключаем плагин для работы с UTC
import timezone from 'dayjs/plugin/timezone'; // Подключаем плагин для работы с временными зонами

// Подключаем нужные временные зоны
import 'dayjs/locale/ru'; // Подключаем русскую локаль (если нужно)

// Подключаем плагины к dayjs
dayjs.extend(utc);
dayjs.extend(timezone);

export function HarvestMonthsSelector({
  collectionId,
  handleChangePlantingId,
  handleLoading,
}) {
  const [selectedItem, setSelectedItem] = useState({});
  const { data, isLoading, isError } =
    harvestMonthsModel.useHarvestMonthsByCollectionId(collectionId);

  const handleChange = (item) => {
    setSelectedItem(item);
    handleChangePlantingId(item.id);
  };
  const { t } = useTranslation('store');

  useEffect(() => {
    if (!data) return;
    if (data.length) {
      handleChange(data[0]);
    }
    handleLoading(false);
  }, [data]);

  if (isLoading) return 'Loading';
  if (isError) return 'Error';
  if (!data || !data.length) return null;

  return (
    <>
      <Text>
        {t('nfts.pots-available')} {selectedItem.potCount}
      </Text>
      <HStack>
        {data.map((harvest) => (
          <Button
            key={harvest.id}
            onClick={() => handleChange(harvest)}
            variant={selectedItem?.id === harvest.id ? 'solid' : 'outline'}
          >
            {dayjs(harvest.createdAt).tz('Europe/Moscow').format('YYYY-MM-DD')}
          </Button>
        ))}
      </HStack>
    </>
  );
}
