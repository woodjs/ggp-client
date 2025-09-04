import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import FarmData from '@/components/screens/myfarm/FarmData/FarmData';
import { Web3Button } from '@web3modal/react';
import { NFTList } from '@/widgets/nft/ui';
import { SearchIcon } from '@chakra-ui/icons';
import { FiList } from 'react-icons/fi';
import { TbTableFilled } from 'react-icons/tb';
import { formatCurrency } from '@/shared/lib';
import { WithConnectWallet } from '@/shared/hoc/with-connect-wallet';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'cabinet',
      'myfarm',
      'promo-modal',
      'two-factor',
      'finance',
      'store',
      'global',
    ])),
  },
});

function MyFarm() {
  const { t } = useTranslation('myfarm');
  const bgImage = useColorModeValue(
    '/images/bg/profile/light.jpg',
    '/images/bg/profile/dark.png'
  );

  const { connected } = useWallet();

  return (
    <CabinetContent maxW="8xl" w="full" bgImage={bgImage} title={t('title')}>
      {/* <Box mb="20px" maxW="200px">
        <Web3Button />
      </Box> */}
      {connected && <WalletMultiButton />}

      {/* <NFTList /> */}
      <Center>
        <WithConnectWallet>{t('no_minted_nfts')}</WithConnectWallet>
      </Center>

      {/* <FarmData /> */}
    </CabinetContent>
  );
}

export default MyFarm;
