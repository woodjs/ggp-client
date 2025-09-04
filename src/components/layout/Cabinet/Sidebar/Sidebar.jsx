import Link from 'next/link';
import Image from 'next/image';
import {
  Box,
  useColorMode,
  useColorModeValue,
  Flex,
  VStack,
  useDisclosure,
  Switch,
  Icon,
  ScaleFade,
  Button,
  HStack,
  Text,
} from '@chakra-ui/react';
// ICONS
import { FaMoon } from 'react-icons/fa';
import { BsCameraVideo, BsSun } from 'react-icons/bs';
import TeamMembers from '@/components/layout/Cabinet/Sidebar/icons/TeamMembers';
import Trophy from '@/components/layout/Cabinet/Sidebar/icons/Trophy';
import Marketing from '@/components/layout/Cabinet/Sidebar/icons/Marketing';
import Leaders from '@/components/layout/Cabinet/Sidebar/icons/Leaders';
import { useTranslation } from 'next-i18next';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaThList } from 'react-icons/fa';
import { IoCreateOutline } from 'react-icons/io5';
import styles from './Sidebar.module.css';
import CannabisIcon from './icons/Cannabis';
import IncomeIcon from './icons/Income';
import NewsIcon from './icons/News';
import ShopIcon from './icons/Shop';
import TeamIcon from './icons/Team';
import MoneyIcon from './icons/Money';
import NavItem from './NavItem';
import OperationIcon from './icons/Operation';
import TransactionsIcon from './icons/Transactions';
import Media from '@/components/layout/Cabinet/Sidebar/icons/Media';

export default function Sidebar({ mobOpen, ...rest }) {
  const { t } = useTranslation('cabinet');

  const LinkItems = [
    { name: t('menu-3'), icon: ShopIcon, link: '/account/store' },
    { name: t('menu-4'), icon: CannabisIcon, link: '/account/myfarm' },
    {
      name: t('menu-1'),
      icon: IncomeIcon,
      link: '/account/statistics',
    },
    {
      name: t('menu-5'),
      icon: TeamIcon,
      submenu: [
        {
          name: t('menu-5_submenu-1'),
          icon: TeamMembers,
          link: '/account/team',
        },
        // {
        //   name: t('menu-5_submenu-2'),
        //   icon: Trophy,
        //   link: '/account/awards',
        // },
        {
          name: t('menu-5_submenu-3'),
          icon: Marketing,
          link: '/account/marketing',
        },
      ],
    },
    {
      name: t('menu-6'),
      icon: MoneyIcon,
      submenu: [
        {
          name: t('menu-6_submenu-1'),
          icon: OperationIcon,
          link: '/account/finance',
        },
        {
          name: t('menu-6_submenu-2'),
          icon: TransactionsIcon,
          link: '/account/transactions',
        },
      ],
    },
    {
      name: t('menu-9'),
      icon: TbTruckDelivery,
      submenu: [
        {
          name: t('menu-10'),
          link: '/account/order',
          icon: FaThList,
        },
        {
          name: t('menu-11'),
          link: '/account/order/create',
          icon: IoCreateOutline,
        },
      ],
    },
    { name: t('menu-8'), icon: Media, link: '/account/media' },
    // { name: t('menu-2'), icon: NewsIcon, link: '/account/news' },
  ];
  const { colorMode, toggleColorMode } = useColorMode();
  // const isDark = colorMode === 'dark';
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  return (
    <Box pos="relative">
      <Box
        transition=".3s"
        px="10px"
        bg={useColorModeValue('white', 'darkLight')}
        left="0"
        top="0"
        pos={{ base: 'fixed', lg: 'sticky' }}
        minW={isOpen ? '220px' : '80px'}
        height="100vh"
        overflowY="auto"
        overflowX="hidden"
        className={styles.scroll}
        pb={{ base: '100px', lg: '0' }}
        {...rest}
      >
        <VStack
          py="10px"
          bg={useColorModeValue('white', 'darkLight')}
          top={0}
          left={0}
          position="sticky"
          cursor="pointer"
          zIndex={3}
        >
          <Box py="5px">
            <Link href="/">
              <Image
                src={
                  colorMode === 'light'
                    ? '/images/logo.svg'
                    : '/images/logo-yellow.svg'
                }
                width={50}
                height={50}
                alt="logo"
                priority
              />
            </Link>
          </Box>
          <Flex w="full" alignItems="center" h="20px" onClick={onToggle}>
            <Box
              w="full"
              h="1px"
              bgGradient="linear(to-r, rgba(160, 174, 192, 0), rgba(160, 174, 192, 0.4), rgba(160, 174, 192, 0.1563))"
            />
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.43951 9C6.61045 9 6.7555 8.93912 6.86946 8.82751L10.8996 4.96674C11.0447 4.82976 11.1172 4.67757 11.1172 4.5C11.112 4.32244 11.0447 4.16009 10.8996 4.02818L6.86946 0.172492C6.7555 0.0608794 6.61045 0 6.43951 0C6.09762 0 5.82307 0.263811 5.82307 0.598647C5.82307 0.760992 5.89559 0.918264 6.01474 1.03495L9.64084 4.49493L6.01474 7.96505C5.89559 8.08174 5.82307 8.23393 5.82307 8.40135C5.82307 8.73619 6.09762 9 6.43951 9ZM0.616022 9C0.786967 9 0.932012 8.93912 1.04597 8.82751L5.07613 4.96674C5.22118 4.82976 5.2937 4.67757 5.2937 4.5C5.28852 4.32244 5.22118 4.16009 5.07613 4.02818L1.04597 0.172492C0.932012 0.0608794 0.786967 0 0.616022 0C0.274132 0 -0.000416756 0.263811 -0.000416756 0.598647C-0.000416756 0.760992 0.0721054 0.918264 0.19125 1.03495L3.81736 4.49493L0.19125 7.96505C0.0721054 8.08174 -0.000416756 8.23393 -0.000416756 8.40135C-0.000416756 8.73619 0.274132 9 0.616022 9Z"
                fill="#A0AEC0"
              />
            </svg>
          </Flex>
        </VStack>
        <VStack spacing="10px" mb="20px" align="stretch">
          {LinkItems.map((link, index) => (
            <NavItem
              name={link.name}
              key={`nav-item-${index + 1}`}
              submenu={link.submenu}
              link={link.link}
              icon={link.icon}
              menuOpen={isOpen}
            />
          ))}
        </VStack>
        {/* <label htmlFor="theme-toggle-sidebar">
          <VStack>
            <Box boxSize="16px">
              <Box position="absolute">
                <ScaleFade
                  animate={{
                    rotateZ: isDark ? 0 : -50,
                    scale: isDark ? 1 : 0.4,
                    opacity: isDark ? 1 : 0,
                  }}
                  in={isDark}
                >
                  <Box>
                    <Icon as={BsSun} />
                  </Box>
                </ScaleFade>
              </Box>
              <Box position="absolute">
                <ScaleFade
                  animate={{
                    rotateZ: !isDark ? 0 : -50,
                    scale: !isDark ? 1 : 0.4,
                    opacity: !isDark ? 1 : 0,
                  }}
                  in={!isDark}
                >
                  <Box>
                    <Icon color="darkLight" as={FaMoon} />
                  </Box>
                </ScaleFade>
              </Box>
            </Box>
            <Switch
              id="theme-toggle-sidebar"
              size="md"
              onChange={toggleColorMode}
              isChecked={colorMode === 'dark'}
              sx={{
                'span.chakra-switch__track[data-checked]': {
                  backgroundColor: 'brandYellow',
                },
              }}
            />
          </VStack>
        </label> */}
        <Box
          m="auto"
          w="fit-content"
          mt="10px"
          mb="70px"
          display={{ base: 'block', sm: 'none' }}
        >
          <Link
            href={{ pathname: '/account/media', query: { tab: 'streams' } }}
          >
            <Button variant="ghost">
              <HStack>
                <Icon boxSize="18px" as={BsCameraVideo} />{' '}
                <Text fontWeight="medium">Live</Text>
              </HStack>
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
