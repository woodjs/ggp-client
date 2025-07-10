/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { useInView } from 'react-intersection-observer';

import {
  Box,
  Center,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Card } from '@/shared/ui';
import { useNFTReporting } from '@/entities/nft/model';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// function ReportingPost() {
//   return (
// <>
//   {colorMode === 'light' ? (
//     <style global jsx>{`
//       .swiper-button-next,
//       .swiper-button-prev {
//         color: #428834;
//       }
//     `}</style>
//   ) : (
//     <style global jsx>{`
//       .swiper-button-next,
//       .swiper-button-prev {
//         color: #ffdc3f;
//       }
//     `}</style>
//   )}
//       <Box
//         boxShadow={'sm'}
//         bg={useColorModeValue('brandGray.300', 'secondDark')}
//         p={'15px'}
//         borderRadius={'6px'}
//         h={'100%'}
//         maxH={'420px'}
//       >
//         <Flex overflow={'hidden'} h={'100%'} direction={'column'}>
//           <Box>
//             <Text fontWeight="bold" fontSize="xl">
//               {t('plant')} #{id}
//             </Text>
//             <Text color="brandGray.200" mb="15px" fontSize="sm">
//               {dayjs(date).format('DD.MM.YYYY')}
//             </Text>
//             <TextPin label={description}>
//               <Text noOfLines={2}>{description}</Text>
//             </TextPin>
//           </Box>
//           <Flex alignItems="center" flexGrow="1">
//             {media.length > 0 &&
//               (media.length > 1 ? (
//                 <Swiper
//                   navigation
//                   modules={[Navigation]}
//                   spaceBetween={50}
//                   slidesPerView={1}
//                 >
//                   {media.map((item) => (
//                     <SwiperSlide key={item.id}>
//                       {item.type === 'video' ? (
//                         <Box
//                           as="iframe"
//                           src={item.data}
//                           width="100%"
//                           sx={{
//                             aspectRatio: '16/9',
//                           }}
//                         />
//                       ) : (
//                         <Image
//                           display="block"
//                           borderRadius="3px"
//                           objectFit="cover"
//                           w={'full'}
//                           src={item.data}
//                         />
//                       )}
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               ) : media[0].type === 'video' ? (
//                 <Box
//                   as="iframe"
//                   src={media[0].data}
//                   width="100%"
//                   sx={{
//                     aspectRatio: '16/9',
//                   }}
//                 />
//               ) : (
//                 <Image
//                   display="block"
//                   borderRadius="3px"
//                   objectFit="cover"
//                   src={media[0].data}
//                 />
//               ))}
//           </Flex>
//         </Flex>
//       </Box>
//     </>
//   );
// }

function ReportBlock({ id, media }) {
  const { t } = useTranslation('myfarm');
  return (
    <Box
      boxShadow="sm"
      bg={useColorModeValue('brandGray.300', 'secondDark')}
      p="15px"
      borderRadius="6px"
      h="100%"
    >
      <Stack>
        <Text fontWeight="bold" fontSize="xl">
          {t('plant')} #{id}
        </Text>
        {media.length ? (
          <Box w="100%" maxW="500px">
            <Swiper
              navigation
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
            >
              {media.map((item) => (
                <SwiperSlide key={item.id}>
                  <Box
                    display="block"
                    maxH="250px"
                    position="relative"
                    overflow="hidden"
                    borderRadius="3px"
                  >
                    <Image
                      display="block"
                      objectFit="cover"
                      maxH="100%"
                      src={item.data}
                      alt={t('report-image-alt')}
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        ) : (
          <Center height="250px">{t('report-dont-have')}</Center>
        )}
      </Stack>
    </Box>
  );
}

export function NFTReporting() {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const { t } = useTranslation('myfarm');
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useNFTReporting(router.query.id);

  useEffect(() => {
    if (!inView) return;
    if (!hasNextPage) return;

    fetchNextPage();
  }, [inView]);

  if (isLoading || isError) return null;

  return (
    <>
      {colorMode === 'light' ? (
        <style global jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #428834;
          }
        `}</style>
      ) : (
        <style global jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #ffdc3f;
          }
        `}</style>
      )}
      <Card p="30px">
        <Text mb="30px" fontSize="2xl" fontWeight="bold">
          {t('report-block-title')}
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          spacing="20px"
          overflow="auto"
          alignItems="start"
        >
          {data.pages[0]?.count
            ? data.pages.map((page) =>
                page.rows.map((report) => (
                  <ReportBlock
                    key={report.id}
                    id={report.id}
                    potId={report.potId}
                    media={report.media}
                  />
                ))
              )
            : `${t('reporting-not-found')}`}
          <Box ref={ref} />
        </SimpleGrid>
      </Card>
    </>
  );
}
