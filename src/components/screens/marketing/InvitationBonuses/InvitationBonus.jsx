import {
  Box,
  Card,
  Icon,
  SimpleGrid,
  Skeleton,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { useUserMarketing } from '@/entities/marketing';
import InvitationBonusInfo from './InvitationBonusInfo';
import InvitationBonusItem from './InvitationBonusItem';
import InvitationBonusModal from './InvitationBonusModal';



/**
 * @typedef {Object} InvitationBonusProps
 * @property {string} currentRank
 * @property {{ rank: string, percent: number, isActive: boolean }[]} data
 * @property {boolean} isActivated
 *
 * @param {InvitationBonusProps} props
 * @returns {JSX.Element}
 */
function InvitationBonus({ ranksData }) {
  const { data, isLoading, isError } = useUserMarketing();

  const { t } = useTranslation('marketing');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const infoDisclosure = useDisclosure();

  const [activeItem, setActiveItem] = useState({});
  const setItemHandler = (item) => {
    setActiveItem(item);
    infoDisclosure.onOpen();
  };

  const isSubsrciptionAvailable = false;

  const dataBonus = [
    {
      rank: 1,
      percent: 5,
    },
    {
      rank: 3,
      percent: 3,
    },
    {
      rank: 4,
      percent: 2,
    },
    {
      rank: 5,
      percent: 1,
    },
  ];

  if (isLoading)
    return (
      <Card
        h={{ base: 'full', sm: '290px' }}
        display="flex"
        flexDirection="column"
        w="full"
        maxW={{ base: 'full', md: 'full' }}
        p="30px"
        overflow="hidden"
        position="relative"
      >
        <Box
          transform={
            infoDisclosure.isOpen ? 'translateX(-120%)' : 'translateX(0)'
          }
          transition="all 0.3s ease-in-out"
          display="flex"
          flexDirection="column"
          w="full"
          maxW={{ base: 'full', md: 'full' }}
          h="full"
          gap="30px"
          justifyContent="space-between"
        >
          <VStack align="start">
            <Text textAlign="left" fontSize="2xl" fontWeight="bold">
              {t('invitationBonus.title')}
            </Text>
            <Text
              onClick={onOpen}
              cursor="pointer"
              textAlign="left"
              fontSize="md"
            >
              {t('invitationBonus.description')}{' '}
              <Icon
                transform="translateY(2px) translateX(2px) scale(0.9)"
                as={BsInfoCircle}
              />
            </Text>
          </VStack>
          <SimpleGrid
            gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }}
            spacing="10px"
          >
            <Skeleton rounded="lg" w="full" h="40px" />
            <Skeleton rounded="lg" w="full" h="40px" />
            <Skeleton rounded="lg" w="full" h="40px" />
            <Skeleton rounded="lg" w="full" h="40px" />
          </SimpleGrid>
        </Box>
      </Card>
    );
  if (isError)
    return (
      <Card
        h={{ base: 'full', sm: '290px' }}
        display="flex"
        flexDirection="column"
        w="full"
        maxW={{ base: 'full', md: 'full' }}
        p="30px"
        overflow="hidden"
        position="relative"
      >
        <Box
          transform={
            infoDisclosure.isOpen ? 'translateX(-120%)' : 'translateX(0)'
          }
          transition="all 0.3s ease-in-out"
          display="flex"
          flexDirection="column"
          w="full"
          maxW={{ base: 'full', md: 'full' }}
          h="full"
          gap="30px"
          justifyContent="space-between"
        >
          <VStack align="start">
            <Text textAlign="left" fontSize="2xl" fontWeight="bold">
              {t('invitationBonus.title')}
            </Text>
            <Text
              onClick={onOpen}
              cursor="pointer"
              textAlign="left"
              fontSize="md"
            >
              {t('invitationBonus.description')}{' '}
              <Icon
                transform="translateY(2px) translateX(2px) scale(0.9)"
                as={BsInfoCircle}
              />
            </Text>
          </VStack>
          <Text>{t('invitationBonus.error')}</Text>
        </Box>
      </Card>
    );
  return (
    <>
      <InvitationBonusModal
        isOpen={isOpen}
        onClose={onClose}
        data={dataBonus}
      />
      <Card
        h={{ base: 'full', sm: '290px' }}
        display="flex"
        flexDirection="column"
        w="full"
        maxW={{ base: 'full', md: 'full' }}
        p="30px"
        overflow="hidden"
        position="relative"
      >
        <InvitationBonusInfo
          isSubsrciptionAvailable={isSubsrciptionAvailable}
          activeItem={activeItem}
          onClose={infoDisclosure.onClose}
          isOpen={infoDisclosure.isOpen}
        />
        <Box
          transform={
            infoDisclosure.isOpen ? 'translateX(-120%)' : 'translateX(0)'
          }
          transition="all 0.3s ease-in-out"
          display="flex"
          flexDirection="column"
          w="full"
          maxW={{ base: 'full', md: 'full' }}
          h="full"
          gap="30px"
          justifyContent="space-between"
        >
          <VStack align="start">
            <Text textAlign="left" fontSize="2xl" fontWeight="bold">
              {t('invitationBonus.title')}
            </Text>
            <Text
              onClick={onOpen}
              cursor="pointer"
              textAlign="left"
              fontSize="md"
            >
              {t('invitationBonus.description')}{' '}
              <Icon
                transform="translateY(2px) translateX(2px) scale(0.9)"
                as={BsInfoCircle}
              />
            </Text>
          </VStack>
          <SimpleGrid
            gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }}
            spacing="10px"
          >
            {dataBonus.map((item, index) => (
              <InvitationBonusItem
                key={item.rank}
                item={item}
                isActive={data.rank >= item.rank}
                index={index}
                onClick={() => setItemHandler({ ...item, index })}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Card>
    </>
  );
}

export default InvitationBonus;
