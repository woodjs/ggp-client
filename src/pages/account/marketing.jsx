import { useState } from 'react';
import { RanksRoad } from '@/components/screens/marketing/RanksRoad';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Tab } from '@/components/screens/media/Tab';
import {
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  Box,
  Text,
  Stack,
  Image,
  Center,
} from '@chakra-ui/react';

import TableRoad from '@/components/screens/marketing/RanksTable/TableRoad';

import CabinetContent from '../../components/layout/Cabinet/CabinetContent';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'marketing',
      'sidebar',
      'cabinet',
      'global',
      'promo-modal',
    ])),
  },
});

// export default function Marketing() {
//   const { t } = useTranslation('marketing');
//   const [tabIndex, setTabIndex] = useState(
//     Number(localStorage.getItem('selectedTab')) || 0
//   );

//   const tabChangeHandler = (index) => {
//     localStorage.setItem('selectedTab', index);
//     setTabIndex(index);
//   };

//   return (
//     <CabinetContent>
//       <Tabs
//         onChange={tabChangeHandler}
//         defaultIndex={tabIndex}
//         variant="unstyled"
//       >
//         <TabList display="flex" justifyContent="center" alignItems="center">
//           <Tab>{t('ranks')}</Tab>
//           <Box h="20px" border="1px solid white" />
//           <Tab>{t('table')}</Tab>
//         </TabList>
//         <TabPanels>
//           <TabPanel>
//             <RanksRoad />
//           </TabPanel>
//           <TabPanel>
//             <TableRoad />
//           </TabPanel>
//         </TabPanels>
//       </Tabs>
//     </CabinetContent>
//   );
// }

export default function Marketing() {
  return (
    <CabinetContent>
      <Stack spacing="30px">
        <Text fontWeight="bold" fontSize="36px">
          Green Grow Paradise платит за рекомендации!
        </Text>
        <Text fontWeight="600" fontSize="24px">
          Зарабатывай на пресейле и первичных продажах NFT вместе с
          двухуровневой партнёрской программой Green Grow Paradise.
        </Text>
        <Text fontWeight="600" fontSize="24px">
          Поделись с другом своей партнёрской ссылкой из раздела “Команда” и
          получи кэшбек 10% от его покупок NFT. А также +3% от покупок его
          друзей.
        </Text>
      </Stack>
      <Center>
        <Image
          mt="60px"
          src="/images/marketing/referral.png"
          maxW="691px"
          w="full"
          objectFit="contain"
        />
      </Center>
    </CabinetContent>
  );
}
