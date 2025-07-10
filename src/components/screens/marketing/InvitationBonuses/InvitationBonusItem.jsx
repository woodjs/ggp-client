import {
  HStack,
  Icon,
  Text,
  useColorModeValue,
  useToken,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { BsLock } from 'react-icons/bs';

function InvitationBonusItem({ item, index, onClick, isActive = false }) {
  const { t } = useTranslation('marketing');
  const [brandGreen, brandYellow] = useToken('colors', [
    'brandGreen.400',
    'brandYellow',
  ]);
  const brandColor = useColorModeValue(brandGreen, brandYellow);
  const textBrandColor = useColorModeValue('white', 'darkLight');
  const bgColorSecondary = useColorModeValue('#E2E8F0', '#1A202C');
  return (
    <HStack
      onClick={onClick}
      cursor="pointer"
      opacity={isActive ? 1 : 0.5}
      w="full"
      h="40px"
      borderRadius="10px"
      boxShadow={isActive ? `0px 0px 0px 0px ${brandColor}` : 'none'}
      _hover={{
        boxShadow: isActive
          ? `0px 0px 0px 2px ${brandColor}`
          : `0px 0px 0px 2px ${bgColorSecondary}`,
      }}
      transition="0.2s"
      color={isActive ? textBrandColor : 'auto'}
      bg={isActive ? brandColor : bgColorSecondary}
      px="15px"
      alignItems="center"
      justifyContent="space-between"
    >
      <HStack spacing="5px">
        <Text fontSize="normal" fontWeight={isActive ? 'bold' : 'normal'}>
          {t('invitationBonus.line')} {index + 1}
        </Text>
        {!isActive && <Icon as={BsLock} boxSize="14px" />}
      </HStack>
      <Text fontSize="normal" fontWeight={isActive ? 'bold' : 'normal'}>
        {item.percent}%
      </Text>
    </HStack>
  );
}

export default InvitationBonusItem;
