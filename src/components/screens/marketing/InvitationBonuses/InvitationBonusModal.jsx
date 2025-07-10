import Modal from '@/components/layout/Modal/Modal';
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

function InvitationBonusModal({ isOpen, onClose, data = [] }) {
  const { t } = useTranslation('marketing');
  const [brandGreen, brandYellow] = useToken('colors', [
    'brandGreen.400',
    'brandYellow',
  ]);
  const brandColor = useColorModeValue(brandGreen, brandYellow);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('invitationBonus.modal.title')}
    >
      <VStack align="start" w="full" h="full">
        <Box>
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            {t('invitationBonus.modal.question-1')}
          </Text>
          <Text textAlign="left" fontSize="md">
            {t('invitationBonus.modal.answer-1')}
          </Text>
        </Box>
        <Box>
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            {t('invitationBonus.modal.question-2')}
          </Text>
          <Text
            textAlign="left"
            fontSize="md"
            dangerouslySetInnerHTML={{
              __html: t('invitationBonus.modal.answer-2', {
                color: brandColor,
              }),
            }}
          />
        </Box>
        <Box>
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            {t('invitationBonus.modal.table.title')}
          </Text>
          <Box w="full" overflow="hidden">
            {/* <TableContainer> */}
            <Table
              size={{
                base: 'sm',
                md: 'md',
              }}
              mt="5px"
              variant="unstyled"
              borderWidth="1px"
            >
              <Thead>
                <Tr borderBottomWidth="1px">
                  <Th borderRightWidth="1px">
                    {t('invitationBonus.modal.table.column-1')}
                  </Th>
                  <Th borderRightWidth="1px">
                    {t('invitationBonus.modal.table.column-2')}
                  </Th>
                  <Th isNumeric>{t('invitationBonus.modal.table.column-3')}</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((item, index) => (
                  <Tr borderBottomWidth="1px" key={item.rank}>
                    <Td borderRightWidth="1px">{t(`rank.${item.rank}`)}</Td>
                    <Td textAlign="center" borderRightWidth="1px">
                      {index + 1}
                    </Td>
                    <Td>{item.percent}%</Td>
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

export default InvitationBonusModal;
