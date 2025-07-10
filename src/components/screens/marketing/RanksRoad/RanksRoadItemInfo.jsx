import formatCurrency from '@/utils/formatCurrency';
import {
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { BsCheckLg, BsLock } from 'react-icons/bs';

function NextLevelRequired({ label, isRecieved }) {
  if (isRecieved) {
    return (
      <HStack justify="space-between">
        <Icon as={BsCheckLg} />
        <Text fontSize="sm" fontWeight="bold">
          {label}
        </Text>
      </HStack>
    );
  }
  return (
    <HStack justify="space-between">
      <Icon as={BsLock} />
      <Text fontSize="sm" fontWeight="medium">
        {label}
      </Text>
    </HStack>
  );
}

function RanksRoadItemInfo({
  userData,
  isRecieved,
  directPartners,
  branches,
  personalInvestment,
  maxBranchTurnover,
  additionalBonus,
  statusBonus,
  // lines,
}) {
  const { t } = useTranslation('marketing');
  const brandColor = useColorModeValue('brandGreen.400', 'brandYellow');
  return (
    <Stack
      pt="10px"
      pl="30px"
      borderLeftColor={isRecieved ? brandColor : 'brandGray.400'}
      borderLeftWidth="3px"
      align="start"
      direction="row"
      flexWrap="wrap"
      spacing={0}
      minH="150px"
      gap="10px 75px"
    >
      <VStack align="start">
        <Text fontSize="lg" fontWeight="bold">
          {t('necessary')}
        </Text>
        <VStack align="start">
          {directPartners && (
            <NextLevelRequired
              label={t('directPartners', {
                count: directPartners,
                have: userData.directActivePartners,
              })}
              isRecieved={userData.directActivePartners >= directPartners}
            />
          )}
          {branches && (
            <NextLevelRequired
              label={t('branches', {
                count: branches,
                amount: formatCurrency(maxBranchTurnover),
                have: userData.nextRank.branchesCollected,
              })}
              isRecieved={userData.nextRank.branchesCollected >= branches}
            />
          )}
          <NextLevelRequired
            label={t('personalInvestment', {
              count: formatCurrency(personalInvestment),
              have: formatCurrency(userData.investment),
            })}
            isRecieved={userData.investment >= personalInvestment}
          />
        </VStack>
      </VStack>
      <VStack align="start">
        <Text fontSize="lg" fontWeight="bold">
          {t(isRecieved ? 'received' : 'willReceive')}
        </Text>
        <VStack align="start">
          {statusBonus && (
            <Text fontSize="sm" fontWeight="bold">
              {t('statusBonus', {
                amount: formatCurrency(statusBonus),
              })}
            </Text>
          )}
          <Text fontSize="sm" fontWeight="bold">
            {t('linesPercentsUpgrade')}
          </Text>
          <Text whiteSpace="pre" fontSize="sm" fontWeight="bold">
            {t(additionalBonus)}
          </Text>
        </VStack>
      </VStack>
    </Stack>
  );
  // if (isRecieved) {
  //   return (
  //     <VStack
  //       pl="30px"
  //       py="4px"
  //       borderLeftColor={isRecieved ? brandColor : 'brandGray.400'}
  //       borderLeftWidth="3px"
  //     />
  //   );
  // }
  // return null;
  // return (
  //   <VStack
  //     pl="30px"
  //     borderLeftColor={isRecieved ? brandColor : 'brandGray.400'}
  //     borderLeftWidth="3px"
  //   >
  //     <HStack opacity={isNextRank ? 1 : 0.7}>
  //       <Text fontSize="md" fontWeight="bold">
  //         {t('directPartners', { count: directPartners })}
  //       </Text>
  //       <Text fontSize="md" fontWeight="bold">
  //         {t('branches', { count: branches })}
  //       </Text>
  //     </HStack>
  //   </VStack>
  // );
}
export default RanksRoadItemInfo;
