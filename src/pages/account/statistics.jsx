import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Box, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Chart from '@/components/screens/statistics/Chart/Chart';
import { useTranslation } from 'next-i18next';
import CabinetContent from '../../components/layout/Cabinet/CabinetContent';
import {
  CardAffilate,
  CardAward,
  CardInvest,
} from '../../components/screens/statistics';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'cabinet',
      'statistics',
      'global',
      'promo-modal',
    ])),
  },
});

export default function IndexPage() {
  const { t } = useTranslation('cabinet');

  return (
    <CabinetContent
      bgImage={useColorModeValue(
        '/images/bg/statistics/light.jpg',
        '/images/bg/statistics/dark.jpg'
      )}
    >
      <Box
        w={{
          '2xl': 'full',
        }}
      >
        <Grid
          alignItems="stretch"
          gridTemplateAreas={{
            base: `"invest"
          "awards"
          "chart"
          "assets"`,
            lg: `"invest awards"
        "chart chart"
        "assets assets"`,
          }}
          gridTemplateColumns={{
            base: '1fr',
            lg: '1fr 0.8fr',
            xl: '1fr 0.5fr',
          }}
          gap="20px"
        >
          <GridItem w="full" gridArea="invest">
            <CardInvest />
          </GridItem>
          <GridItem position="relative" w="full" gridArea="awards">
            <CardAward />
          </GridItem>
          <GridItem w="full" gridArea="chart">
            <Chart />
          </GridItem>
        </Grid>
      </Box>
    </CabinetContent>
    // <CabinetContent
    //   bgImage={useColorModeValue(
    //     '/images/bg/statistics/light.jpg',
    //     '/images/bg/statistics/dark.jpg'
    //   )}
    // >
    //   <Box
    //     w={{
    //       '2xl': 'full',
    //     }}
    //   >
    //     <Grid
    //       alignItems="stretch"
    //       gridTemplateAreas={{
    //         base: `"invest"
    //         "affilate"
    //         "awards"
    //         "subscribe"
    //         "chart"
    //         "assets"`,
    //         lg: `"invest awards"
    //         "affilate subscribe"
    //       "chart chart"
    //       "assets assets"`,
    //       }}
    //       gridTemplateColumns={{
    //         base: '1fr',
    //         lg: '1fr 0.8fr',
    //         xl: '1fr 0.5fr',
    //       }}
    //       gap="20px"
    //     >
    //       <GridItem w="full" gridArea="invest">
    //         <CardInvest
    //           isLoading={loaded}
    //           data={{
    //             balances: {
    //               usd: 20,
    //               ggt: 214,
    //             },
    //             totalDepositAmount: 12,
    //             totalInvestAmount: 42,
    //           }}
    //         />
    //       </GridItem>
    //       <GridItem w="full" gridArea="awards">
    //         <CardAward isLoading={loaded} />
    //       </GridItem>
    //       <GridItem w="full" gridArea="affilate">
    //         <CardAffilate isLoading={loaded} />
    //       </GridItem>
    //       <GridItem w="full" gridArea="subscribe">
    //         <CardSubscrie isLoading={loaded} />
    //       </GridItem>
    //       <GridItem w="full" gridArea="chart">
    //         <Chart />
    //       </GridItem>
    //       {/* <GridItem overflow="hidden" gridArea="assets">
    //         <Box>
    //           <Swiper
    //             watchSlidesProgress
    //             className="mySwiper"
    //             style={{
    //               padding: '0 40px',
    //               '--swiper-navigation-color': navColor,
    //               '--swiper-navigation-size': '30px',
    //             }}
    //             navigation
    //             slidesPerView={isLargeScreen ? 5 : slidesPerView}
    //             spaceBetween={20}
    //             modules={[Navigation]}
    //           >
    //             {assets.map((assetsItem) => (
    //               <SwiperSlide>
    //                 {({ isVisible }) => (
    //                   <Box
    //                     w="full"
    //                     display="flex"
    //                     justifyContent="center"
    //                     key={assetsItem.id}
    //                     opacity={isVisible ? 1 : 0}
    //                     transitionDuration=".4s"
    //                   >
    //                     <CardNFT
    //                       img={assetsItem.img}
    //                       price={assetsItem.price}
    //                       title={assetsItem.title}
    //                       percentIncome={assetsItem.percentIncome}
    //                       incomeRatio={assetsItem.incomeRatio}
    //                     />
    //                   </Box>
    //                 )}
    //               </SwiperSlide>
    //             ))}
    //           </Swiper>
    //         </Box>
    //       </GridItem> */}
    //     </Grid>
    //   </Box>
    // </CabinetContent>
  );
}
