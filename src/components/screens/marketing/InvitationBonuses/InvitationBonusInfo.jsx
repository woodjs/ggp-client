import {
  Box,
  Button,
  Icon,
  Text,
  useColorModeValue,
  useToken,
} from '@chakra-ui/react';
import { toast } from 'react-toastify';
import { useTranslation } from 'next-i18next';
import { BsArrowRightShort, BsLockFill } from 'react-icons/bs';
import { useUserMarketing } from '@/entities/marketing';

function InvitationBonusInfo({
  activeItem,
  onClose,
  isOpen,
  isSubsrciptionAvailable,
}) {
  const { data } = useUserMarketing();
  const { t } = useTranslation('marketing');
  const [brandGreen, brandYellow] = useToken('colors', [
    'brandGreen.400',
    'brandYellow',
  ]);
  const brandColor = useColorModeValue(brandGreen, brandYellow);
  const onClickHandler = () => {
    if (!isSubsrciptionAvailable) {
      toast.warn(t('invitationBonus.info.subscriptionNotAvailable'));
    }
  };
  return (
    <Box
      p="30px"
      position="absolute"
      top="0"
      left={isOpen ? '0' : '100%'}
      transition="all 0.3s ease-in-out"
      w="full"
      h="full"
    >
      <Text onClick={onClose} textAlign="left" fontSize="md" cursor="pointer">
        {t('invitationBonus.info.back')}
      </Text>
      <Text
        opacity={data.rank >= activeItem.rank ? 1 : 0.5}
        mt="10px"
        textAlign="left"
        fontSize="2xl"
        fontWeight="bold"
      >
        {t('invitationBonus.line')} {activeItem.index + 1}{' '}
        {data.rank < activeItem.rank && <Icon as={BsLockFill} boxSize="18px" />}
      </Text>
      <Text
        mt="10px"
        textAlign="left"
        fontSize="md"
        dangerouslySetInnerHTML={{
          __html: t('invitationBonus.info.description', {
            context: data.rank >= activeItem.rank ? 'active' : 'inactive',
            percent: activeItem.percent,
            rank: t(`rank.${activeItem.rank}`),
            color: brandColor,
          }),
        }}
      />
      {data.rank < activeItem.rank && (
        <Button mt="10px" onClick={onClickHandler}>
          {t('invitationBonus.info.button')}{' '}
          <Icon boxSize="18px" as={BsArrowRightShort} />
        </Button>
      )}
    </Box>
  );
}

export default InvitationBonusInfo;
