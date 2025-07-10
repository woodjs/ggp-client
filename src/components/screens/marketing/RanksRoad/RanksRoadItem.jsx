import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  CircularProgress,
  HStack,
  Icon,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { BsCheckLg, BsStarFill } from 'react-icons/bs';
import RanksRoadItemInfo from './RanksRoadItemInfo';

/**
 * @typedef {Object} RanksRoadItemProps
 * @property {boolean} isCurrentRank
 * @property {boolean} isNextRank
 * @property {boolean} isRecieved
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
 * @param {RanksRoadItemProps} props
 */
function RanksRoadItem({
  isSelectedRank,
  onRankSelect,
  userData,
  isCurrentRank,
  isNextRank,
  isRecieved,
  rank,
  directPartners,
  branches,
  personalInvestment,
  teamTurnover,
  maxBranchTurnover,
  additionalBonus,
  statusBonus,
  lines,
}) {
  const { t } = useTranslation('marketing');
  const brandColor = useColorModeValue('brandGreen.400', 'brandYellow');
  const iconColor = useColorModeValue('white', 'darkLight');
  // const [brandGray] = useToken('colors', ['brandGray.200']);
  const textColor = useColorModeValue('dark', 'white');
  const borderColor = useColorModeValue('#E2E8F0', '#4E5765');
  const bgColor = useColorModeValue('white', 'darkLight');
  return (
    <AccordionItem border="0" p="0">
      <AccordionButton border="0" p="0">
        <VStack
          alignItems="flex-start"
          w="full"
          onClick={onRankSelect}
          pl="30px"
          borderLeftColor={
            isRecieved || isNextRank ? brandColor : 'brandGray.400'
          }
          cursor="pointer"
          borderLeftWidth="3px"
          h="full"
          position="relative"
        >
          {isRecieved && (
            <Box
              position="absolute"
              left="-16.5px"
              top="50%"
              transform="translateY(-45%)"
              borderRadius="full"
              boxSize="30px"
              bgColor={brandColor}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon
                transform={`translateY(${isCurrentRank ? '2px' : '-1px'})`}
                as={isCurrentRank ? BsCheckLg : BsStarFill}
                color={iconColor}
              />
            </Box>
          )}

          {isNextRank && (
            <Box
              position="absolute"
              left="-16.5px"
              top="50%"
              bgColor={bgColor}
              rounded="full"
              transform="translateY(-45%)"
            >
              <CircularProgress
                color={brandColor}
                trackColor={borderColor}
                thickness="8px"
                transform="scale(1.1) rotate(-5.5deg)"
                size="30px"
                value={66}
              />
            </Box>
          )}
          {!isNextRank && !isRecieved && (
            <Box
              position="absolute"
              left="-16.5px"
              bgColor={bgColor}
              rounded="full"
              top="50%"
              transform="translateY(-45%)"
            >
              <CircularProgress
                color={brandColor}
                trackColor={borderColor}
                thickness="8px"
                transform="scale(1.1)"
                size="30px"
                value={0}
              />
            </Box>
          )}
          <HStack maxW="500px" w="full" justifyContent="space-between">
            <Text
              opacity={isSelectedRank || isCurrentRank ? 1 : 0.7}
              color={isCurrentRank ? brandColor : textColor}
              fontSize={{ base: 'xl', xs: '2xl' }}
              fontWeight="bold"
              textAlign="left"
            >
              {t(`rank.${rank.id}`)}
            </Text>
            <AccordionIcon />
          </HStack>
        </VStack>
      </AccordionButton>
      <AccordionPanel border="0" p="0">
        <RanksRoadItemInfo
          {...{
            userData,
            isCurrentRank,
            isSelectedRank,
            isNextRank,
            isRecieved,
            rank,
            directPartners,
            branches,
            personalInvestment,
            teamTurnover,
            maxBranchTurnover,
            additionalBonus,
            statusBonus,
            lines,
          }}
        />
      </AccordionPanel>
    </AccordionItem>
  );
}

export default RanksRoadItem;
