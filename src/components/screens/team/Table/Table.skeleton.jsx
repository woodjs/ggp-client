import {
  Skeleton,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export default function TableTeamSkeleton() {
  const { t } = useTranslation('team');
  return (
    <Table
      size="md"
      bg={useColorModeValue('white', 'darkLight')}
      borderRadius="16px"
      mt="20px"
    >
      <Thead>
        <Tr>
          <Th textAlign="center" />
          <Th textAlign="center">{t('team-partner-line')}</Th>
          <Th textAlign="center">{t('team-partner-partner')}</Th>
          <Th textAlign="center">{t('team-partner-status')}</Th>
          <Th textAlign="center">{t('team-partner-invest')}</Th>
          <Th textAlign="center">{t('team-partner-all-money')}</Th>
          <Th textAlign="center">{t('team-partner-partners')}</Th>
          <Th textAlign="center">{t('team-partner-active')}</Th>
          <Th textAlign="center">{t('team-partner-register')}</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td />
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
        </Tr>
        <Tr>
          <Td />
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
        </Tr>
        <Tr>
          <Td />
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th textAlign="center" />
          <Th textAlign="center">{t('team-partner-line')}</Th>
          <Th textAlign="center">{t('team-partner-partner')}</Th>
          <Th textAlign="center">{t('team-partner-status')}</Th>
          <Th textAlign="center">{t('team-partner-invest')}</Th>
          <Th textAlign="center">{t('team-partner-all-money')}</Th>
          <Th textAlign="center">{t('team-partner-partners')}</Th>
          <Th textAlign="center">{t('team-partner-active')}</Th>
          <Th textAlign="center">{t('team-partner-register')}</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}
