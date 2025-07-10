import { MdAttachMoney } from 'react-icons/md';
import { useColorModeValue } from '@chakra-ui/react';

export default function OperationIcon() {
  return <MdAttachMoney color={useColorModeValue('#017101', '#171923')} />;
}
