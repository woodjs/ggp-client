import {
  Box,
  Text,
  useColorModeValue,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
  AlertIcon,
  Alert,
} from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import CabinetContent from '../../components/layout/Cabinet/CabinetContent';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'cabinet',
      'global',
      'promo-modal',
    ])),
  },
});

export default function Leaders() {
  const { t } = useTranslation();
  const bgColorHead = useColorModeValue('brandGreen.100', 'brandYellow');
  const bdColor = useColorModeValue('white', 'darkLight');
  const color = useColorModeValue('white', 'darkLight');
  return (
    <Box position="relative">
      <Alert
        position="absolute"
        bg={useColorModeValue('brandGray.100', 'dark')}
        status="info"
        zIndex={2}
      >
        <AlertIcon color={useColorModeValue('dark', 'brandGray.100')} />
        {t('cabinet:block-wait')}
      </Alert>
      <CabinetContent
        filter="auto"
        blur="5px"
        bgImage={useColorModeValue(
          '/images/bg/awards/light.png',
          '/images/bg/awards/dark.png'
        )}
      >
        <Text mb="40px" as="h2" fontSize="2xl" fontWeight="bold">
          {t('cabinet:awards-title')}
        </Text>
        <Stack direction={{ base: 'column', xl: 'row' }} spacing="30px">
          <Box flexBasis="50%">
            <TableContainer width={['100%', '50%']} mb="25px">
              <Table
                fontSize="sm"
                variant="simple"
                borderRadius="16px"
                overflow="hidden"
              >
                <Thead bg={bgColorHead}>
                  <Tr>
                    <Th fontWeight="bold" color={color}>
                      {t('cabinet:awards-my')}
                    </Th>
                  </Tr>
                </Thead>
                <Tbody color="brandGray.200" bg={bdColor} fontWeight="bold">
                  <Tr>
                    <Td py="20px">10</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <TableContainer>
              <Table
                fontSize="sm"
                variant="simple"
                borderRadius="16px"
                overflow="hidden"
              >
                <Thead bg={bgColorHead}>
                  <Tr>
                    <Th width="70%" fontWeight="bold" color={color}>
                      {t('cabinet:awards-task')}
                    </Th>
                    <Th fontWeight="bold" color={color}>
                      {t('cabinet:awards-bonus')}
                    </Th>
                  </Tr>
                </Thead>
                <Tbody color="brandGray.200" bg={bdColor} fontWeight="bold">
                  <Tr borderColor="white">
                    <Td py="20px">Купить первый горшок</Td>
                    <Td py="20px">1</Td>
                  </Tr>
                  <Tr>
                    <Td py="20px">
                      Создать оборот в первой линии более $10000
                    </Td>
                    <Td py="20px">1</Td>
                  </Tr>
                  <Tr>
                    <Td py="20px">
                      Создать оборот в первой линии более $10000
                    </Td>
                    <Td py="20px">1</Td>
                  </Tr>
                  <Tr>
                    <Td py="20px">
                      Создать оборот в первой линии более $10000
                    </Td>
                    <Td py="20px">1</Td>
                  </Tr>
                  <Tr>
                    <Td py="20px">
                      Создать оборот в первой линии более $10000
                    </Td>
                    <Td py="20px">1</Td>
                  </Tr>
                  <Tr>
                    <Td py="20px">
                      Создать оборот в первой линии более $10000
                    </Td>
                    <Td py="20px">1</Td>
                  </Tr>
                  <Tr>
                    <Td py="20px">
                      Создать оборот в первой линии более $10000
                    </Td>
                    <Td py="20px">1</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          <Box flexBasis="50%">
            <Image width="100%" src="/images/awards/medal.png" />
          </Box>
        </Stack>
      </CabinetContent>
    </Box>
  );
}
