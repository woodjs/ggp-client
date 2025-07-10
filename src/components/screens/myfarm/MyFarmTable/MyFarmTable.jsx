import { Card } from '@/components/Card';
import {
  Box,
  HStack,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';
import { TbDatabase } from 'react-icons/tb';
import { useTranslation } from 'next-i18next';
/**
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.date
 * @param {string | number} props.price
 * @param {string | number} props.daysBeforeHarvest
 * @param {string | number} props.daysHavePassed
 * @param {string | number} props.income
 * @param {string | number} props.cycle
 * @param {() => void} props.onClickSell
 * @param {() => void} props.onClickSend
 * @returns
 */
function MyFarmTable({ nfts, onClick }) {
  const { t } = useTranslation();
  const borderColor = useColorModeValue('brandGray.100', 'brandGray.200');
  const headTextColor = useColorModeValue('white', 'black');
  const headBgColor = useColorModeValue('brandGreen.400', 'brandYellow');
  return (
    <Card overflow="hidden" p="0" pb="20px">
      <TableContainer>
        <Table size="sm">
          <Thead bgColor={headBgColor}>
            <Tr h="40px">
              <Th color={headTextColor} borderColor="none">
                {t('myfarm:farm-name')}
              </Th>
              <Th color={headTextColor} borderColor="none">
                {t('myfarm:farm-date')}
              </Th>
              <Th color={headTextColor} borderColor="none">
                {t('myfarm:farm-price')}
              </Th>
              <Th color={headTextColor} borderColor="none">
                {t('myfarm:farm-days')}
              </Th>
              <Th color={headTextColor} borderColor="none">
                {t('myfarm:farm-earn')}
              </Th>
              <Th color={headTextColor} borderColor="none">
                {t('myfarm:farm-percent')}
              </Th>
              <Th color={headTextColor} borderColor="none">
                {t('myfarm:farm-harvest')}
              </Th>
              <Th color={headTextColor} borderColor="none">
                {t('myfarm:farm-series')}
              </Th>
              <Th color={headTextColor} borderColor="none" />
            </Tr>
          </Thead>
          <Tbody>
            {nfts.map((nft) => (
              <Tr key={nft.id}>
                <Td borderColor={borderColor} textAlign="center">
                  {nft.title}
                </Td>
                <Td borderColor={borderColor} textAlign="center">
                  {nft.date}
                </Td>
                <Td borderColor={borderColor} textAlign="center">
                  {nft.price}
                </Td>
                <Td borderColor={borderColor} textAlign="center">
                  {nft.daysHavePassed}
                </Td>
                <Td borderColor={borderColor} textAlign="center">
                  {nft.income}
                </Td>
                <Td borderColor={borderColor} textAlign="center">
                  {nft.percent}
                </Td>
                <Td borderColor={borderColor} textAlign="center">
                  {nft.daysBeforeHarvest}
                </Td>
                <Td borderColor={borderColor} textAlign="center">
                  {nft.cycle}
                </Td>
                <Td borderColor={borderColor}>
                  <HStack>
                    <Box>
                      <Icon
                        cursor="pointer"
                        as={BsArrowUpRight}
                        color="brandGray.200"
                        onClick={() => {
                          onClick(nft.id);
                        }}
                      />
                    </Box>
                    <Box>
                      <Icon
                        cursor="pointer"
                        as={TbDatabase}
                        color="brandGray.200"
                        onClick={() => {
                          onClick(nft.id);
                        }}
                      />
                    </Box>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default MyFarmTable;
