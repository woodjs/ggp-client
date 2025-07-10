import formatCurrency from '@/utils/formatCurrency';
import {
  Card,
  HStack,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import RanksTableSkeleton from '@/components/screens/marketing/RanksTable/RanksTable.skeleton';
import { BsCheck } from 'react-icons/bs';
import { useUserMarketing } from '@/entities/marketing';

function RanksTable({ ranksData }) {
  const linesAmount = 10;
  const lines = Array(linesAmount).fill(0);
  const brandColor = useColorModeValue('brandGreen.400', 'brandYellow');
  const textBrandColor = useColorModeValue('white', 'darkLight');
  const { t } = useTranslation('marketing');

  const { data, isLoading, isError } = useUserMarketing();

  if (isLoading) {
    return <RanksTableSkeleton />;
  }
  if (isError) return null;
  const nextRank = ranksData.find((rank) => rank.id === data.level + 1);
  return (
    <TableContainer mb="50px" as={Card}>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th py="15px" borderColor="inherit">
              {t('ranksTable.status')}
            </Th>
            {ranksData.map((rank) => (
              <Th
                textAlign="center"
                borderColor="inherit"
                key={rank.id}
                bgColor={rank.id === data.level ? brandColor : 'inherit'}
                color={rank.id === data.level ? textBrandColor : 'inherit'}
              >
                <Text>{rank.name}</Text>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td borderColor="inherit">{t('ranksTable.directPartners')}</Td>
            {ranksData.map((rank) => (
              <Td
                borderColor="inherit"
                textAlign="center"
                key={rank.id}
                bgColor={rank.id === data.level ? brandColor : 'inherit'}
                color={rank.id === data.level ? textBrandColor : 'inherit'}
              >
                <HStack justify="center" spacing="0">
                  <Text>{rank.directActivePartners}</Text>

                  {rank.id === nextRank?.id &&
                    data.directActivePartners >= rank.directActivePartners && (
                      <Icon as={BsCheck} boxSize="16px" />
                    )}
                </HStack>
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td borderColor="inherit">{t('ranksTable.branches')}</Td>
            {ranksData.map((rank) => (
              <Td
                borderColor="inherit"
                textAlign="center"
                key={rank.id}
                bgColor={rank.id === data.level ? brandColor : 'inherit'}
                color={rank.id === data.level ? textBrandColor : 'inherit'}
              >
                <HStack justify="center" spacing="0">
                  <Text>{rank.branches}</Text>

                  {rank.id === nextRank?.id &&
                    data.branchesCollected >= rank.branches && (
                      <Icon as={BsCheck} boxSize="16px" />
                    )}
                </HStack>
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td borderColor="inherit">{t('ranksTable.personalInvestment')}</Td>
            {ranksData.map((rank) => (
              <Td
                borderColor="inherit"
                textAlign="center"
                key={rank.id}
                bgColor={rank.id === data.level ? brandColor : 'inherit'}
                color={rank.id === data.level ? textBrandColor : 'inherit'}
              >
                <HStack justify="center" spacing="0">
                  <Text>{formatCurrency(rank.investment)}</Text>

                  {rank.id === nextRank?.id &&
                    data.investment >= rank.investment && (
                      <Icon as={BsCheck} boxSize="16px" />
                    )}
                </HStack>
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td borderColor="inherit">{t('ranksTable.teamTurnover')}</Td>
            {ranksData.map((rank) => (
              <Td
                borderColor="inherit"
                textAlign="center"
                key={rank.id}
                bgColor={rank.id === data.level ? brandColor : 'inherit'}
                color={rank.id === data.level ? textBrandColor : 'inherit'}
              >
                <HStack justify="center" spacing="0">
                  <Text>{formatCurrency(rank.turnover)}</Text>

                  {rank.id === nextRank?.id &&
                    data.turnover >= rank.turnover && (
                      <Icon as={BsCheck} boxSize="16px" />
                    )}
                </HStack>
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td borderColor="inherit">{t('ranksTable.maxBranchTurnover')}</Td>
            {ranksData.map((rank) => (
              <Td
                borderColor="inherit"
                textAlign="center"
                key={rank.id}
                bgColor={rank.id === data.level ? brandColor : 'inherit'}
                color={rank.id === data.level ? textBrandColor : 'inherit'}
              >
                <HStack justify="center" spacing="0">
                  <Text>{formatCurrency(rank.maxTurnoverFromBranch)}</Text>
                  {/* rank.id === data.level && (
                    <Icon as={BsCheck} boxSize="16px" />
                  )}
                  {rank.id === nextRank?.id &&
                    data.currentTurnover >= rank.maxTurnoverFromBranch && (
                      <Icon as={BsCheck} boxSize="16px" />
                    ) */}
                </HStack>
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td borderColor="inherit">{t('status-bonus')}</Td>
            {ranksData.map((rank) => (
              <Td
                borderColor="inherit"
                textAlign="center"
                key={rank.id}
                bgColor={rank.id === data.level ? brandColor : 'inherit'}
                color={rank.id === data.level ? textBrandColor : 'inherit'}
              >
                <HStack align="center" justify="center">
                  <Text>{formatCurrency(rank.bonus)}</Text>
                </HStack>
              </Td>
            ))}
          </Tr>
          {lines.map((value, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Tr key={index}>
              <Td borderColor="inherit">
                {t('ranksTable.line')} {index + 1}
              </Td>
              {ranksData.map((rank) => (
                <Td
                  borderColor="inherit"
                  textAlign="center"
                  key={rank.id}
                  bgColor={rank.id === data.level ? brandColor : 'inherit'}
                  color={rank.id === data.level ? textBrandColor : 'inherit'}
                >
                  {rank.lines[index] && <Text>{rank.lines[index]}%</Text>}
                </Td>
              ))}
            </Tr>
          ))}
          <Tr>
            <Td borderColor="inherit">{t('additionalBonus.title')}</Td>
            {ranksData.map((rank) => (
              <Td
                borderColor="inherit"
                textAlign="center"
                whiteSpace="pre"
                key={rank.id}
                bgColor={rank.id === data.level ? brandColor : 'inherit'}
                color={rank.id === data.level ? textBrandColor : 'inherit'}
              >
                {rank.additionalBonus && (
                  <HStack justify="center" spacing="0">
                    <Text>{t(rank.additionalBonus)}</Text>
                  </HStack>
                )}
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td h="25px" />
            {ranksData.map((rank) => (
              <Td
                key={rank.id}
                bgColor={rank.id === data.level ? brandColor : 'inherit'}
                color={rank.id === data.level ? textBrandColor : 'inherit'}
              />
            ))}
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default RanksTable;
