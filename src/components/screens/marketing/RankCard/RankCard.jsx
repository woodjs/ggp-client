import { Card } from '@/components/Card';
import formatCurrency from '@/utils/formatCurrency';

import {
  Text,
  VStack,
  Image,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckCircleIcon, LockIcon } from '@chakra-ui/icons';

import { useTranslation } from 'next-i18next';

/**
 * @typedef {Object} RankCardProps
 * @property {boolean} isCurrentRank
 * @property {boolean} isNextRank
 * @property {string} label
 * @property {number} directPartners
 * @property {number} branches
 * @property {number} personalInvestment
 * @property {number} teamTurnover
 * @property {number} maxBranchTurnover
 * @property {number[]} lines
 * @property {string} additionalBonus
 * @property {number} statusBonus
 *
 * @param {RankCardProps} props
 */

function RankCard({
  isCurrentRank,
  isNextRank,
  directPartners,
  image,
  branches,
  personalInvestment,
  statusBonus,
  teamTurnover,
  maxBranchTurnover,
  additionalBonus,
  isDirectActivePartnersAchieved,
  isBranchesAchieved,
  isInvestmentAchieved,
  isTurnoverAchieved,
}) {
  const { t } = useTranslation('marketing');

  let borderColor = 'none';
  if (isCurrentRank) {
    borderColor = 'brandYellow';
  } else if (isNextRank) {
    borderColor = '#F95511';
  }

  const checkIconColor = useColorModeValue('brandGreen.400', 'brandYellow');

  return (
    <Card
      w="full"
      p="8px"
      border={isCurrentRank || isNextRank ? '1px solid' : 'none'}
      borderColor={borderColor}
      style={{ opacity: !isCurrentRank && !isNextRank ? 0.5 : 1 }}
    >
      <VStack alignItems="center" justify="flex-start">
        <Image src={image} maxW="115px" />
        <VStack
          alignItems="flex-start"
          w="full"
          borderRadius="xl"
          bg="rgba(248, 249, 250, 0.1)"
          py="6px"
          px="10px"
        >
          <HStack align="start">
            {isInvestmentAchieved ? (
              <CheckCircleIcon color={checkIconColor} mt="4px" />
            ) : (
              <LockIcon color="brandGray.200" mt="4px" />
            )}
            <VStack align="start">
              <Text
                fontSize="md"
                fontWeight="bold"
                minW="fit-content"
                lineHeight="150%"
              >
                {t('personal-investment')}
              </Text>

              <Text lineHeight="150%">
                {formatCurrency(personalInvestment)}{' '}
              </Text>
            </VStack>
          </HStack>
        </VStack>
        <VStack
          alignItems="flex-start"
          w="full"
          borderRadius="xl"
          bg="rgba(248, 249, 250, 0.1)"
          py="6px"
          px="10px"
        >
          <HStack align="start">
            {isTurnoverAchieved ? (
              <CheckCircleIcon color={checkIconColor} mt="4px" />
            ) : (
              <LockIcon color="brandGray.200" mt="4px" />
            )}
            <VStack align="start">
              <Text
                fontSize="md"
                fontWeight="bold"
                minW="fit-content"
                lineHeight="150%"
              >
                {t('team-turnover')}
              </Text>
              <Text>{formatCurrency(teamTurnover)} </Text>
            </VStack>
          </HStack>
        </VStack>
        <VStack
          alignItems="flex-start"
          w="full"
          borderRadius="xl"
          bg="rgba(248, 249, 250, 0.1)"
          py="6px"
          px="10px"
        >
          <HStack align="start">
            {isDirectActivePartnersAchieved ? (
              <CheckCircleIcon color={checkIconColor} mt="4px" />
            ) : (
              <LockIcon color="brandGray.200" mt="4px" />
            )}
            <VStack align="start">
              <Text
                fontSize="md"
                fontWeight="bold"
                minW="fit-content"
                lineHeight="150%"
              >
                {t('direct-partners')}
              </Text>

              <Text lineHeight="150%">{directPartners} </Text>
            </VStack>
          </HStack>
        </VStack>
        <VStack
          alignItems="flex-start"
          w="full"
          borderRadius="xl"
          bg="rgba(248, 249, 250, 0.1)"
          py="6px"
          px="10px"
        >
          <HStack align="start">
            {isBranchesAchieved ? (
              <CheckCircleIcon color={checkIconColor} mt="4px" />
            ) : (
              <LockIcon color="brandGray.200" mt="4px" />
            )}
            <VStack align="start">
              <Text
                fontSize="md"
                fontWeight="bold"
                minW="fit-content"
                lineHeight="150%"
              >
                {t('turnover-branches')}
              </Text>

              <Text lineHeight="150%">
                {branches} {t('branches')}, {formatCurrency(maxBranchTurnover)}
              </Text>
            </VStack>
          </HStack>
        </VStack>
        <VStack
          alignItems="flex-start"
          w="full"
          borderRadius="xl"
          bg="rgba(248, 249, 250, 0.1)"
          py="6px"
          px="10px"
        >
          <HStack align="start">
            {statusBonus && isCurrentRank ? (
              <CheckCircleIcon color={checkIconColor} mt="4px" />
            ) : (
              <LockIcon color="brandGray.200" mt="4px" />
            )}
            <VStack align="start">
              <Text
                fontSize="md"
                fontWeight="bold"
                minW="fit-content"
                lineHeight="150%"
              >
                {t('status-bonus')}
              </Text>

              <Text>{formatCurrency(statusBonus)}</Text>
            </VStack>
          </HStack>
        </VStack>
        {additionalBonus && additionalBonus !== null && (
          <VStack
            alignItems="flex-start"
            w="full"
            borderRadius="xl"
            bg="rgba(248, 249, 250, 0.1)"
            py="6px"
            px="10px"
          >
            <HStack align="start">
              {additionalBonus && isCurrentRank ? (
                <CheckCircleIcon color={checkIconColor} mt="4px" />
              ) : (
                <LockIcon color="brandGray.200" mt="4px" />
              )}
              <VStack align="start">
                <Text
                  fontSize="md"
                  fontWeight="bold"
                  minW="fit-content"
                  lineHeight="150%"
                >
                  {t('additionalBonus')}
                </Text>

                <Text lineHeight="150%">{additionalBonus}</Text>
              </VStack>
            </HStack>
          </VStack>
        )}
      </VStack>
    </Card>
  );
}

export default RankCard;
