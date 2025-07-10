import Modal from '@/components/layout/Modal/Modal';
import formatCurrency from '@/utils/formatCurrency';
import {
  Box,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useToken,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useUserQuests } from '@/hooks/user/useUserQuests';

function LeaderBonusesModal({ isOpen, onClose = [] }) {
  const { t } = useTranslation('marketing');
  const [brandGreen, brandYellow] = useToken('colors', [
    'brandGreen.400',
    'brandYellow',
  ]);
  const brandColor = useColorModeValue(brandGreen, brandYellow);
  const { data } = useUserQuests();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      modalContentProps={{
        maxW: '510px',
      }}
      title={t('leaderBonus.modal.title')}
    >
      <VStack spacing={4} align="start" w="full" h="full">
        <Box>
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            {t('leaderBonus.modal.question-1')}
          </Text>
          <Text textAlign="left" fontSize="md">
            {t('leaderBonus.modal.answer-1')}
          </Text>
        </Box>
        <Box>
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            {t('leaderBonus.modal.question-2')}
          </Text>
          <Text
            textAlign="left"
            fontSize="md"
            dangerouslySetInnerHTML={{
              __html: t('leaderBonus.modal.answer-2', {
                color: brandColor,
              }),
            }}
          />
        </Box>
        <Box>
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            {t('leaderBonus.modal.question-4')}
          </Text>
          <Text
            textAlign="left"
            fontSize="md"
            dangerouslySetInnerHTML={{
              __html: t('leaderBonus.modal.answer-4', {
                color: brandColor,
              }),
            }}
          />
        </Box>
        <Box w="full">
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            {t('leaderBonus.modal.question-3')}
          </Text>
          <Box w="full" overflow="auto">
            {/* <TableContainer> */}
            <Table
              size={{
                base: 'sm',
                md: 'sm',
              }}
              mt="5px"
              variant="unstyled"
              borderWidth="1px"
            >
              <Thead>
                <Tr borderBottomWidth="1px">
                  <Th borderRightWidth="1px">
                    {t('leaderBonus.modal.bonusAmount')}
                  </Th>
                  <Th borderRightWidth="1px">
                    {t('leaderBonus.modal.partnersAmount')}
                  </Th>
                  <Th borderRightWidth="1px">
                    {t('leaderBonus.modal.investmentAmount')}
                  </Th>
                  <Th isNumeric>{t('leaderBonus.modal.time')}</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((item) => (
                  <Tr borderBottomWidth="1px" key={item.bonus}>
                    <Td borderRightWidth="1px">{formatCurrency(item.bonus)}</Td>
                    <Td textAlign="center" borderRightWidth="1px">
                      {item.partners}
                    </Td>
                    <Td borderRightWidth="1px">
                      {formatCurrency(item.partnerInvestment)}
                    </Td>
                    <Td>
                      {t('leaderBonus.modal.days', { count: item.deadline })}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            {/* </TableContainer> */}
          </Box>
        </Box>
      </VStack>
    </Modal>
  );
}

export default LeaderBonusesModal;
