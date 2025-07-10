import { Divider, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import MyFarmCycles from './MyFarmCycles';
import MyFarmProductInfoItem from './MyFarmProductInfoItem';
import { Fragment } from 'react';

/**
 *
 * @param {{
 * info:[{
 *    label: string,
 *    value: string
 * }];
 * cycle: number;
 * }} params
 * @returns
 */
function MyFarmProductInfo({ info, cycle }) {
  const { t } = useTranslation('myfarm');
  return (
    <VStack w="full" align="start">
      {info.map((infoItem, index) => (
        <Fragment key={infoItem.label}>
          <MyFarmProductInfoItem label={infoItem.label}>
            <Text>{infoItem.value}</Text>
          </MyFarmProductInfoItem>
          {index !== info.length - 1 && <Divider />}
        </Fragment>
      ))}
      {cycle ||
        (cycle === 0 && (
          <>
            <Divider />
            <MyFarmProductInfoItem label={t('cycles')}>
              <MyFarmCycles cycle={cycle} />
            </MyFarmProductInfoItem>
          </>
        ))}

      <Divider />
    </VStack>
  );
}

export default MyFarmProductInfo;
