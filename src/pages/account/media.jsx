import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import MediaGrid from '@/components/screens/media/MediaGrid/MediaGrid';
import MediaStreams from '@/components/screens/media/MediaStreams/MediaStreams';
import { Tab } from '@/components/screens/media/Tab';
import {
  useColorModeValue,
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  HStack,
  Image,
  Box,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const getDefaultIndex = (tab) => {
  switch (tab) {
    case 'presentations':
      return 0;
    case 'promo':
      return 1;
    case 'vebinars':
      return 2;
    case 'learnings':
      return 3;
    case 'streams':
      return 4;
    case 'stories':
      return 5;
    default:
      return 0;
  }
};
function Media() {
  const { t } = useTranslation('media');
  const router = useRouter();
  const { tab } = router.query ?? 'streams';
  const promo = [
    {
      preview: '/images/media/logo_profitonweed_black.jpeg',
      id: 1,
      name: t('promo.card.title-logo'),
      description: t('promo.card.text-1'),
      link: '/images/media/logo_profitonweed_black.jpeg',
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="/images/media/logo_profitonweed_gold_black.jpg"
          alt="Gold logo on black background with gold text"
        />
      ),
      id: 2,
      name: t('promo.card.title-logo'),
      description: t('promo.card.text-2'),
      link: '/images/media/logo_profitonweed_gold_black.jpg',
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="/images/media/logo_profitonweed_gold_white.jpg"
          alt="Gold logo on white background with gold text"
        />
      ),
      id: 3,
      name: t('promo.card.title-logo'),
      description: t('promo.card.text-3'),
      link: '/images/media/logo_profitonweed_gold_white.jpg',
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="/images/media/logo_profitonweed_white.jpg"
          alt="Gold logo on white background"
        />
      ),
      id: 4,
      name: t('promo.card.title-logo'),
      description: t('promo.card.text-4'),
      link: '/images/media/logo_profitonweed_white.jpg',
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="/images/media/avatar.png"
          alt="Avatar"
        />
      ),
      id: 5,
      name: t('promo.card.title-avatar'),
      description: t('promo.card.text-5'),
      link: '/images/media/avatar.png',
    },
    {
      preview: '/images/media/logo_profitonweed_black.jpeg',
      id: 6,
      name: t('promo.card.title-video'),
      description: t('promo.card.text-6'),
      link: 'https://www.youtube.com/watch?v=0HIbrZfeCxQ',
    },
  ];
  //   https://rtsp.me/embed/753zRFKi/
  // https://rtsp.me/embed/8GzDGt2h/
  // https://rtsp.me/embed/HQ6siRyb/
  // https://rtsp.me/embed/r65R9DDa/
  const streams = [
    {
      children: <Image src="/images/media/preview_cam.png" alt="preview cam" />,
      id: 1,
      name: `${t('streams.card.title')} 1`,
      link: 'https://rtsp.me/embed/764yQ3r4/',
    },
    {
      children: <Image src="/images/media/preview_cam.png" alt="preview cam" />,
      id: 2,
      name: `${t('streams.card.title')} 2`,
      link: 'https://rtsp.me/embed/AQTK8BSt/',
    },
    {
      children: <Image src="/images/media/preview_cam.png" alt="preview cam" />,
      id: 3,
      name: `${t('streams.card.title')} 3`,
      link: 'https://rtsp.me/embed/T2DkNt3F/',
    },
    {
      children: <Image src="/images/media/preview_cam.png" alt="preview cam" />,
      id: 4,
      name: `${t('streams.card.title')} 4`,
      link: 'https://rtsp.me/embed/8GzDGt2h/',
    },
    {
      children: <Image src="/images/media/preview_cam.png" alt="preview cam" />,
      id: 5,
      name: `${t('streams.card.title')} 5`,
      link: 'https://rtsp.me/embed/r65R9DDa/',
    },
    {
      children: <Image src="/images/media/preview_cam.png" alt="preview cam" />,
      id: 6,
      name: `${t('streams.card.title')} 6`,
      link: 'https://rtsp.me/embed/4yd9iyD9/',
    },
  ];
  const webinars = [
    {
      preview: t('webinars.earn.preview'),
      id: 1,
      isLinkWithDomain: true,
      name: t('webinars.earn.name'),
      link: t('webinars.earn.link'),
    },
    {
      preview: '/images/media/webinars/11-shablon.jpg',
      id: 2,
      isLinkWithDomain: true,
      link: 'https://www.youtube.com/watch?v=BUr5OG7_tdY',
      name: 'АMA-сессия Profit on Weed c Евгением от 21.08',
    },
    {
      preview: '/images/media/webinars/webinar_13.14.png',
      id: 3,
      isLinkWithDomain: true,
      link: 'https://www.youtube.com/watch?v=f5G_nJgXlHM',
      name: 'АMA-сессия Profit on Weed от 24.08',
    },
    {
      preview: '/images/media/webinars/webinar_13.14.png',
      id: 4,
      isLinkWithDomain: true,
      link: 'https://www.youtube.com/watch?v=kxIo2HgFnsk',
      name: 'АMA-сессия Profit on Weed от 31.08',
    },
    {
      preview: '/images/media/webinars/webinar_13.14.png',
      id: 5,
      isLinkWithDomain: true,
      link: 'https://www.youtube.com/watch?v=kxIo2HgFnsk',
      name: 'АMA-сессия Profit on Weed от 14.09',
    },
  ];
  const learnings = [
    {
      preview: t('learnings.how-to-buy.preview'),
      id: 0,
      isLinkWithDomain: true,
      link: t('learnings.how-to-buy.link'),
      name: t('learnings.how-to-buy.name'),
    },
  ];
  const presentations = [
    {
      preview: t('presentations.card.preview'),
      id: 1,
      isLinkWithDomain: true,
      name: t('presentations.card.title-long'),
      link: t('presentations.card.link-long'),
    },
    {
      preview: t('presentations.video.preview'),
      id: 2,
      isLinkWithDomain: true,
      name: t('presentations.video.name'),
      link: t('presentations.video.link'),
    },
  ];

  const stories = [
    {
      preview: 'https://static.profitonweed.com/media/stories/1-movie-nft.png',
      id: 1,
      name: t('stories.1-movie-nft'),
      description: t('stories.1-movie-nft'),
      link: 'https://static.profitonweed.com/media/stories/1-movie-nft.png',
      isLinkWithDomain: true,
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="https://static.profitonweed.com/media/stories/2-movie-nft.png"
          alt="Gold logo on black background with gold text"
        />
      ),
      id: 2,
      name: t('stories.2-movie-nft'),
      description: t('stories.2-movie-nft'),
      link: 'https://static.profitonweed.com/media/stories/2-movie-nft.png',
      isLinkWithDomain: true,
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="https://static.profitonweed.com/media/stories/3-movie-nft.png"
          alt="Gold logo on white background with gold text"
        />
      ),
      id: 3,
      name: t('stories.3-movie-nft'),
      description: t('promo.card.text-3'),
      link: 'https://static.profitonweed.com/media/stories/3-movie-nft.png',
      isLinkWithDomain: true,
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="https://static.profitonweed.com/media/stories/4-movie-nft.png"
          alt="Gold logo on white background"
        />
      ),
      id: 4,
      name: t('stories.4-movie-nft'),
      description: t('promo.card.text-4'),
      link: 'https://static.profitonweed.com/media/stories/4-movie-nft.png',
      isLinkWithDomain: true,
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="https://static.profitonweed.com/media/stories/5-movie-nft.png"
          alt="Avatar"
        />
      ),
      id: 5,
      name: t('stories.5-movie-nft'),
      description: t('promo.card.text-5'),
      link: 'https://static.profitonweed.com/media/stories/5-movie-nft.png',
      isLinkWithDomain: true,
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="https://static.profitonweed.com/media/stories/6-movie-nft.png"
          alt="Avatar"
        />
      ),
      id: 6,
      name: t('stories.6-movie-nft'),
      description: t('promo.card.text-5'),
      link: 'https://static.profitonweed.com/media/stories/6-movie-nft.png',
      isLinkWithDomain: true,
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="https://static.profitonweed.com/media/stories/7-big-boss.png"
          alt="Avatar"
        />
      ),
      id: 7,
      name: t('stories.7-movie-nft'),
      description: t('promo.card.text-5'),
      link: 'https://static.profitonweed.com/media/stories/7-big-boss.png',
      isLinkWithDomain: true,
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="https://static.profitonweed.com/media/stories/8-movie-nft.png"
          alt="Avatar"
        />
      ),
      id: 8,
      name: t('stories.7-movie-nft'),
      description: t('promo.card.text-5'),
      link: 'https://static.profitonweed.com/media/stories/8-movie-nft.png',
      isLinkWithDomain: true,
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="https://static.profitonweed.com/media/stories/fon.jpg"
          alt="Avatar"
        />
      ),
      id: 9,
      name: t('stories.fon'),
      description: t('promo.card.text-5'),
      link: 'https://static.profitonweed.com/media/stories/fon.jpg',
      isLinkWithDomain: true,
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="https://static.profitonweed.com/media/stories/fon2.jpg"
          alt="Avatar"
        />
      ),
      id: 10,
      name: t('stories.fon2'),
      description: t('promo.card.text-5'),
      link: 'https://static.profitonweed.com/media/stories/fon2.jpg',
      isLinkWithDomain: true,
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="https://static.profitonweed.com/media/stories/fon3.jpg"
          alt="Avatar"
        />
      ),
      id: 11,
      name: t('stories.fon3'),
      description: t('promo.card.text-5'),
      link: 'https://static.profitonweed.com/media/stories/fon3.jpg',
      isLinkWithDomain: true,
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="https://static.profitonweed.com/media/stories/nft-pow.png"
          alt="Avatar"
        />
      ),
      id: 12,
      name: t('stories.nft-pow'),
      description: t('promo.card.text-5'),
      link: 'https://static.profitonweed.com/media/stories/nft-pow.png',
      isLinkWithDomain: true,
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="https://static.profitonweed.com/media/stories/lilia-2.png"
          alt="Avatar"
        />
      ),
      id: 13,
      name: t('stories.lilia-2'),
      description: t('promo.card.text-5'),
      link: 'https://static.profitonweed.com/media/stories/lilia-2.mov',
      isLinkWithDomain: true,
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="https://static.profitonweed.com/media/stories/lilia-3.png"
          alt="Avatar"
        />
      ),
      id: 14,
      name: t('stories.lilia-3'),
      description: t('promo.card.text-5'),
      link: 'https://static.profitonweed.com/media/stories/lilia-3.mov',
      isLinkWithDomain: true,
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="https://static.profitonweed.com/media/stories/nikita-1.png"
          alt="Avatar"
        />
      ),
      id: 15,
      name: t('stories.nikita-1'),
      description: t('promo.card.text-5'),
      link: 'https://static.profitonweed.com/media/stories/nikita-1.mov',
      isLinkWithDomain: true,
    },
    {
      children: (
        <Image
          borderRadius="16px"
          src="https://static.profitonweed.com/media/stories/nikita-2.png"
          alt="Avatar"
        />
      ),
      id: 16,
      name: t('stories.nikita-2'),
      description: t('promo.card.text-5'),
      link: 'https://static.profitonweed.com/media/stories/nikita-2.mov',
      isLinkWithDomain: true,
    },
  ];

  const tabChangeHandler = (index) => {
    switch (index) {
      case 0:
        router.push('/account/media?tab=presentations');
        break;
      case 1:
        router.push('/account/media?tab=promo');
        break;
      case 2:
        router.push('/account/media?tab=vebinars');
        break;
      case 3:
        router.push('/account/media?tab=learnings');
        break;
      case 4:
        router.push('/account/media?tab=streams');
        break;
      default:
        router.push('/account/media?tab=presentations');
        break;
    }
  };
  return (
    <CabinetContent
      bgImage={useColorModeValue(
        '/images/bg/media/light.png',
        '/images/bg/media/dark.png'
      )}
    >
      <Tabs
        onChange={tabChangeHandler}
        defaultIndex={getDefaultIndex(tab)}
        index={getDefaultIndex(tab)}
        variant="unstyled"
      >
        <TabList>
          <Box
            css={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
            overflow="auto"
          >
            <HStack>
              {/* <Tab>{t('presentations')}</Tab>
              <Tab>{t('promo')}</Tab>
              <Tab>Meme</Tab> */}
              {/* <Tab>{t('learnings')}</Tab> */}
              <Tab>{t('streams')}</Tab>
              {/* <Tab>{t('stories')}</Tab> */}
            </HStack>
          </Box>
        </TabList>

        <TabPanels>
          {/* <TabPanel>
            <MediaGrid medias={presentations} />
          </TabPanel>
          <TabPanel>
            <MediaGrid medias={promo} />
          </TabPanel>
          <TabPanel>
            <MediaGrid medias={webinars} />
          </TabPanel> */}
          {/* <TabPanel><MediaGrid medias={learnings} /></TabPanel> */}
          <TabPanel>
            <Text as="h1" fontSize="32px" fontWeight="bold">
              Soon
            </Text>
            {/* <MediaStreams data={streams} /> */}
          </TabPanel>
          {/* <TabPanel><MediaGrid medias={stories} /></TabPanel> */}
        </TabPanels>
      </Tabs>
    </CabinetContent>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'cabinet',
      'profile',
      'media',
      'global',
      'errors',
      'promo-modal',
    ])),
  },
});

export default Media;
