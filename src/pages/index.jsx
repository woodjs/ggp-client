import { Roboto, Montserrat } from '@next/font/google';
// import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useInView } from 'react-intersection-observer';
import Snowfall from 'react-snowfall';
import Hero from '@/components/screens/landing/hero/hero';
import VideoSection from '@/components/screens/landing/videoSection/videoSection';
// import WhiteList from '@/components/screens/landing/whiteList/whiteList';
import Mechanics from '@/components/screens/landing/mechanics/mechanics';

import Features from '@/components/screens/landing/features/features';
import Advantages from '@/components/screens/landing/advantages/advantages';
import Ceo from '@/components/screens/landing/ceo/ceo';
import MainQuestions from '@/components/screens/landing/mainQuestions/mainQuestions';
import Header from '@/components/screens/landing/header/header';
import Extra from '@/components/screens/landing/extra/extra';
// import GoPartner from '@/components/screens/landing/goPartner/goPartner';
// import PartnerProgram from '@/components/screens/landing/partnerProgram/partnerProgram';
import Contacts from '@/components/screens/landing/contacts/contacts';
// import Faq from '@/components/screens/faq/faq';
import Footer from '@/components/screens/landing/footer/footer';
import Earn from '@/components/screens/landing/earn/earn';
import TimeRoad from '@/components/screens/landing/timeRoad/timeRoad';
import Media from '@/components/screens/landing/media/Media';
import Tokenomic from '@/components/screens/landing/tokenomic/tokenomic';
import TeamNFT from '@/components/screens/landing/teamNFT/teamNFT';
import AboutTokenomic from '@/components/screens/landing/aboutTokenomic/aboutTokenomic';
import TokenomicHero from '@/components/screens/landing/tokenomicHero/tokenomicHero';
import TokenomicHow from '@/components/screens/landing/tokenomicHow/tokenomicHow';
import TokenomicDistribution from '@/components/screens/landing/tokenomicDistribution/tokenomicDistribution';
import TgeCharts from '@/components/screens/landing/tgeCharts/tgeCharts';
import GrowTakenomic from '@/components/screens/landing/growTakenomic/growTakenomic';
import TgeCharts2 from '@/components/screens/landing/tgeCharts2/tgeCharts2';
import { useState } from 'react';
import { NextSeo } from 'next-seo';

const roboto = Roboto({
  variable: '--font',
  weight: '400',
  subsets: ['latin'],
});
const montserrat = Montserrat({
  variable: '--font-title',
  weight: ['400', '700'],
  subsets: ['latin'],
});

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale ?? 'en', ['landing'])),
//     },
//   };
// }
export async function getServerSideProps({ locale }) {
  // return {
  //   props: {
  //     ...(await serverSideTranslations(locale ?? 'en', ['landing'])),
  //   },
  // };

  return {
    redirect: {
      destination: '/auth/login',
      permanent: false,
    },
  };
}

export default function IndexPage() {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);
  const advantages = useInView();
  const checkNFT = useInView();
  const ceo = useInView({ rootMargin: '-10px 0px 0px 0px' });
  const invests = useInView({ rootMargin: '-10px 0px 0px 0px' });
  const partner = useInView();
  const how = useInView({ rootMargin: '-10px 0px 0px 0px' });
  const roadmap = useInView({ rootMargin: '-10px 0px 0px 0px' });
  // const tokenomic = useInView({ rootMargin: '-10px 0px 0px 0px' });
  const contacts = useInView({ rootMargin: '-10px 0px 0px 0px' });
  const getSections = () => ({
    checkNFT: checkNFT.inView,
    how: how.inView,
    advantages: how.inView ? false : advantages.inView,
    ceo: advantages.inView ? false : ceo.inView,
    invests: ceo.inView ? false : invests.inView,
    partner: invests.inView ? false : partner.inView,

    roadmap: invests.inView ? false : roadmap.inView,
    contacts: roadmap.inView ? false : contacts.inView,
    // tokenomic: contacts.inView ? false : tokenomic.inView,
  });
  return (
    <>
      <Snowfall snowflakeCount={700} />
      <style global jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: var(--green);
        }
      `}</style>
      <NextSeo title="POW" />

      <div
        className={`${roboto.variable} ${montserrat.variable}`}
        style={{ width: '100%', backgroundColor: 'var(--dark)' }}
      >
        <Header sections={getSections()} />

        <div id="checkNFT" ref={checkNFT.ref}>
          <Hero />
        </div>
        <VideoSection />
        <div id="how" ref={how.ref}>
          {/* <WhiteList /> */}
          <Features />
        </div>
        <div ref={advantages.ref}>
          <Advantages />
        </div>
        <div ref={ceo.ref}>
          <Ceo />
        </div>
        {/* <Media /> */}
        <div ref={invests.ref}>
          <MainQuestions />
          {/* <Mechanics /> */}
          {/* <Extra /> */}
        </div>
        {/* <div ref={partner.ref}> */}
        {/*  <GoPartner /> */}
        {/*  <PartnerProgram /> */}
        {/* </div> */}
        <div id="roadmap" ref={roadmap.ref}>
          <TimeRoad />
        </div>
        <Earn />
        <div ref={contacts.ref}>
          <Contacts />
        </div>
        {/* Токеномика в архиве  */}
        {/* <div id="tokenomic" ref={tokenomic.ref}>
          <Tokenomic />
          <TeamNFT />
          <AboutTokenomic isOpen={isOpen} onToggle={onToggle} />
          {isOpen && (
            <>
              <TokenomicHero />
              <TokenomicHow />
              <TokenomicDistribution />
              <TgeCharts />
              <GrowTakenomic />
              <TgeCharts2 />
            </>
          )}
        </div> */}

        {/* <Faq /> */}
        {/* <WantMore /> */}
        <Footer />
      </div>
    </>
  );
}

// export default function IndexPage() {
//   return null;
// }

// export async function getServerSideProps() {
//   return {
//     redirect: {
//       destination: 'https://profitonweed.com',
//       permanent: false,
//     },
//   };
// }
