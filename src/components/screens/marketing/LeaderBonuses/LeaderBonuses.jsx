import { Card } from '@/components/Card';
import {
  Box,
  Button,
  Icon,
  Skeleton,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { BsInfoCircle } from 'react-icons/bs';
import { useUserQuests } from '@/hooks/user/useUserQuests';
import LeaderBonusesActiveInfo from './LeaderBonusesActiveInfo';
import LeaderBonusesModal from './LeaderBonusesModal';
import LeaderBonusesModalActivation from './LeaderBonusesModalActivation';

function LeaderBonuses() {
  const { t } = useTranslation('marketing');
  const { data, isLoading, isError } = useUserQuests();

  const isActivated = !isLoading && !isError && data?.status !== 'inactive';

  const modalDisclosure = useDisclosure();
  const modalActivationDisclosure = useDisclosure();

  if (isLoading) return null;

  return (
    <>
      <LeaderBonusesModalActivation {...modalActivationDisclosure} />
      <LeaderBonusesModal {...modalDisclosure} />
      <Card
        w="full"
        minH="290px"
        py="30px"
        px="30px"
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
      >
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb="10px">
            {t('leaderBonus.title')}
          </Text>
          <Text
            onClick={modalDisclosure.onOpen}
            cursor="pointer"
            maxW="500px"
            fontSize="md"
            mb="0px"
          >
            {t('leaderBonus.description', {
              context: isActivated && 'active',
            })}{' '}
            <Icon
              transform="translateY(2px) translateX(2px) scale(0.9)"
              as={BsInfoCircle}
            />
          </Text>
        </Box>
        {(() => {
          if (isLoading)
            return (
              <VStack align="start">
                <Skeleton w="150px" h="25px" />
                <Skeleton w="full" h="18px" />
                <Skeleton w="90%" h="18px" />
              </VStack>
            );
          return (
            <Button onClick={modalActivationDisclosure.onOpen} maxW="290px">
              {t('leaderBonus.button')}
            </Button>
          );
          if (isError) return <Text>{t('leaderBonus.error')}</Text>;
          // switch (data?.status) {
          //   case 'active':
          //     return <LeaderBonusesActiveInfo {...data} />;
          //   case 'success':
          //     return <LeaderBonusesActiveInfo {...data} />;
          //   case 'fail':
          //     return <LeaderBonusesActiveInfo {...data} />;
          //   case 'inactive':
          //     return (
          //       <Button onClick={modalActivationDisclosure.onOpen} maxW="290px">
          //         {t('leaderBonus.button')}
          //       </Button>
          //     );
          //   default:
          //     return null;
          // }
        })()}
      </Card>
    </>
  );
}

export default LeaderBonuses;
