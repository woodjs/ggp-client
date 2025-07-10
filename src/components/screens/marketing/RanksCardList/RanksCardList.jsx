import 'swiper/css';
import { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import {
  HStack,
  VStack,
  IconButton,
  Text,
  Grid,
  Box,
  SimpleGrid,
  Icon,
  Image,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMarketing, useUserMarketing } from '@/entities/marketing';
import { RankCard } from '../RankCard';

function RanksCardList() {
  const {
    data: userRank,
    isLoading: userRankIsLoading,
    isError: userRankIsError,
  } = useUserMarketing();
  const { data, isLoading, isError } = useMarketing();
  const swiperRef = useRef(null);
  const { t } = useTranslation('marketing');

  if (isLoading || userRankIsLoading) return 'Loading';
  if (isError || userRankIsError) return 'Error';

  const enhancedData = data.map((item) => {
    const isDirectActivePartnersAchieved =
      userRank.directActivePartners >= item.directActivePartners;
    const isBranchesAchieved =
      userRank.branchesCollected >= item.branches &&
      userRank.turnover >= item.maxTurnoverFromBranch;
    const isInvestmentAchieved = userRank.investment >= item.investment;
    const isTurnoverAchieved = userRank.turnover >= item.turnover;

    return {
      ...item,
      isDirectActivePartnersAchieved,
      isBranchesAchieved,
      isInvestmentAchieved,
      isTurnoverAchieved,
    };
  });

  return (
    <>
      <HStack justify="space-between" alignItems="center" mb="15px">
        <HStack>
          <Image src="/images/marketing/medal.svg" />
          <Text
            fontSize={{ base: 'xl', sm: '2xl' }}
            fontWeight="bold"
            maxW="fit-content"
            textAlign={{ base: 'center', md: 'left' }}
          >
            {t('ranksRoad.title')}
          </Text>
        </HStack>
        <HStack display={{ base: 'none', md: 'block' }}>
          <IconButton
            variant="ghost"
            onClick={() => swiperRef.current.swiper.slidePrev()}
            icon={<IoIosArrowBack />}
            bg={useColorModeValue('brandGreen.400', 'brandYellow')}
            color={useColorModeValue('#fff', '#000')}
          />
          <IconButton
            variant="ghost"
            onClick={() => swiperRef.current.swiper.slideNext()}
            icon={<IoIosArrowForward />}
            bg={useColorModeValue('brandGreen.400', 'brandYellow')}
            color={useColorModeValue('#fff', '#000')}
          />
        </HStack>
      </HStack>

      <Box>
        <Swiper
          ref={swiperRef}
          slidesPerView={5}
          initialSlide={data.indexOf(userRank.id)}
          spaceBetween={20}
          breakpoints={{
            250: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },

            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1520: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          style={{ margin: '0px' }}
        >
          {enhancedData.map(
            ({
              id,
              name,
              directActivePartners,
              branches,
              investment,
              turnover,
              maxTurnoverFromBranch,
              additionalBonus,
              bonus,
              lines,
              image,
              isDirectActivePartnersAchieved,
              isBranchesAchieved,
              isInvestmentAchieved,
              isTurnoverAchieved,
            }) => (
              <SwiperSlide
                key={id}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <RankCard
                  key={id}
                  isCurrentRank={id === userRank.level}
                  isNextRank={id === userRank.level + 1}
                  label={name}
                  directPartners={directActivePartners}
                  branches={branches}
                  personalInvestment={investment}
                  teamTurnover={turnover}
                  maxBranchTurnover={maxTurnoverFromBranch}
                  additionalBonus={additionalBonus}
                  statusBonus={bonus}
                  lines={lines}
                  image={image}
                  isDirectActivePartnersAchieved={
                    isDirectActivePartnersAchieved
                  }
                  isBranchesAchieved={isBranchesAchieved}
                  isInvestmentAchieved={isInvestmentAchieved}
                  isTurnoverAchieved={isTurnoverAchieved}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Box>
    </>
  );
}

export default RanksCardList;
