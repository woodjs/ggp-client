import { TbReportMoney } from 'react-icons/tb';
import { useColorModeValue } from '@chakra-ui/react';

export default function TransactionsIcon() {
  return <TbReportMoney color={useColorModeValue('#017101', '#171923')} />;
}
