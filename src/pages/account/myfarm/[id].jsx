// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import dayjs from 'dayjs';
// import { toast } from 'react-toastify';
// import { useTranslation } from 'next-i18next';
// import {
//   Badge,
//   Box,
//   Button,
//   Circle,
//   Divider,
//   HStack,
//   Icon,
//   Image,
//   SimpleGrid,
//   Stack,
//   Text,
//   useClipboard,
//   useColorModeValue,
//   VStack,
// } from '@chakra-ui/react';
// import { useRouter } from 'next/router';
// import Card from '@/components/Card/Card';
// import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
// import MyFarmProductInfo from '@/components/screens/myfarm/product/MyFarmProductInfo/MyFarmProductInfo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Stack } from '@chakra-ui/react';
import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import { NFTStatistics, NFTReporting } from '@/widgets/nft/ui';

// import { toDateNormalUtil } from '@/utils/toDate';

// import { FiShare2 } from 'react-icons/fi';
// import { useEffect, useState } from 'react';
// import { useUserNFT } from '@/hooks/user/nft/useUserNFT';
// import formatCurrency from '@/utils/formatCurrency';
import MyFarmProductChart from '@/components/screens/myfarm/product/MyFarmProductInfo/MyFarmProductChart/MyFarmProductChart';
// import ReportingPosts from '@/components/screens/myfarm/Reporting/ReportingPosts/ReportingPosts';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import { motion } from 'framer-motion';
// import Additions from '@/components/screens/myfarm/Additions/Additions';
// import { useMutation } from 'react-query';
// import { request } from '@/api';

export default function MyFarmProduct() {
  return (
    <CabinetContent>
      <Stack spacing="20px">
        <NFTStatistics />
        <NFTReporting />
        {/*<MyFarmProductChart />*/}
      </Stack>
    </CabinetContent>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'cabinet',
      'myfarm',
      'store',
      'global',
    ])),
  },
});
