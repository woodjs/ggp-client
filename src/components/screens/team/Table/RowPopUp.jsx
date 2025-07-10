import {
  Avatar,
  HStack,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { IoChatboxEllipses } from 'react-icons/io5';
// import { MdOutlineAlternateEmail } from 'react-icons/md';
import { toDateNormalUtil } from '@/utils/toDate';
import Modal from '@/components/layout/Modal/Modal';
import Socials from '../Socials/Socials';
import { MdOutlineAlternateEmail } from 'react-icons/md';

function RowPopUp({ data }) {
  const { t } = useTranslation('team');
  const {
    avatar,
    login,
    rankName,
    totalAmount,
    turnover,
    teamCount,
    totalActivePartners,
    createdAt,
    email,
    socials,
    chat,
  } = data;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const iconColor = useColorModeValue('darkLight', 'brandGray.200');
  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile)
    return (
      <>
        <HStack onClick={onOpen} cursor="pointer">
          <Avatar size="md" src={avatar} />
          <Text>{login}</Text>
        </HStack>
        <Modal onClose={onClose} isOpen={isOpen}>
          <VStack spacing="20px">
            <Avatar size="2xl" src={avatar} />
            <VStack>
              <Text fontSize="2xl" fontWeight="bold">
                {login}
              </Text>
              <Text fontWeight="bold" color="brandGray.200">
                {rankName}
              </Text>
            </VStack>
            <Stack w="full" spacing="0" gap="20px" flexDir="row">
              <VStack w="full" spacing="0">
                <Text fontWeight="bold">{teamCount}</Text>
                <Text fontSize="sm">{t('table.popup.partners')}</Text>
              </VStack>
              <VStack w="full" spacing="0">
                <Text fontWeight="bold">{totalActivePartners}</Text>
                <Text fontSize="sm">{t('table.popup.active')}</Text>
              </VStack>
            </Stack>
            <Stack w="full" spacing="0" gap="20px" flexDir="row">
              <VStack w="full" spacing="0">
                <Text fontWeight="bold">{totalAmount}</Text>
                <Text fontSize="sm">{t('table.popup.investments')}</Text>
              </VStack>
              <VStack w="full" spacing="0">
                <Text fontWeight="bold">{turnover}</Text>
                <Text fontSize="sm">{t('table.popup.turnover')}</Text>
              </VStack>
            </Stack>

            {socials && (
              <>
                <Socials socials={socials} />
                {socials?.chat && (
                  <HStack
                    onClick={() => {
                      window.open(socials.chat, '_blank');
                    }}
                    cursor="pointer"
                  >
                    <Icon color={iconColor} as={IoChatboxEllipses} />
                    <Text>{t('table.popup.chat')}</Text>
                  </HStack>
                )}
              </>
            )}

            <HStack
              onClick={() => {
                window.open(`mailto:${email}`);
              }}
              cursor="pointer"
            >
              <Icon color={iconColor} as={MdOutlineAlternateEmail} />
              <Text>Написать на email</Text>
            </HStack>
          </VStack>
          <VStack pt="20px" spacing="0">
            <Text>{t('table.popup.in-since')} </Text>
            <Text fontSize="sm">{toDateNormalUtil(createdAt)}</Text>
          </VStack>
        </Modal>
      </>
    );
  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      strategy="fixed"
      placement="top"
    >
      <PopoverTrigger>
        <HStack cursor="pointer">
          <Avatar size="md" src={avatar} />
          <Text>{login}</Text>
        </HStack>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        {/* <PopoverHeader>Информация о пользователе</PopoverHeader> */}
        <PopoverCloseButton />
        <PopoverBody px="20px" py="20px">
          <VStack spacing="20px">
            <Avatar size="2xl" src={avatar} />
            <VStack>
              <Text fontSize="2xl" fontWeight="bold">
                {login}
              </Text>
              <Text fontWeight="bold" color="brandGray.200">
                {rankName}
              </Text>
            </VStack>
            <Stack w="full" spacing="0" gap="20px" flexDir="row">
              <VStack w="full" spacing="0">
                <Text fontWeight="bold">{teamCount}</Text>
                <Text fontSize="sm">{t('table.popup.partners')}</Text>
              </VStack>
              <VStack w="full" spacing="0">
                <Text fontWeight="bold">{totalActivePartners}</Text>
                <Text fontSize="sm">{t('table.popup.active')}</Text>
              </VStack>
            </Stack>
            <Stack w="full" spacing="0" gap="20px" flexDir="row">
              <VStack w="full" spacing="0">
                <Text fontWeight="bold">{totalAmount}</Text>
                <Text fontSize="sm">{t('table.popup.investments')}</Text>
              </VStack>
              <VStack w="full" spacing="0">
                <Text fontWeight="bold">{turnover}</Text>
                <Text fontSize="sm">{t('table.popup.turnover')}</Text>
              </VStack>
            </Stack>
            {socials && <Socials socials={socials} />}
            {chat && (
              <HStack
                onClick={() => {
                  window.open(chat, '_blank');
                }}
                cursor="pointer"
              >
                <Icon color={iconColor} as={IoChatboxEllipses} />
                <Text>{t('table.popup.chat')}</Text>
              </HStack>
            )}
            <HStack
              onClick={() => {
                window.open(`mailto:${email}`);
              }}
              cursor="pointer"
            >
              <Icon color={iconColor} as={MdOutlineAlternateEmail} />
              <Text color={iconColor} fontWeight="bold">
                Написать на email
              </Text>
            </HStack>
          </VStack>
        </PopoverBody>
        <PopoverFooter>
          <VStack spacing="0">
            <Text>{t('table.popup.in-since')} </Text>
            <Text fontSize="sm">{toDateNormalUtil(createdAt)}</Text>
          </VStack>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export default RowPopUp;
