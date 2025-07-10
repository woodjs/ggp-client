import {
  Box,
  HStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import Sidebar from '@/components/layout/Cabinet/Sidebar/Sidebar';
import React, { useRef } from 'react';
import NavItem from './NavItem';

import CannabisIcon from '../Sidebar/icons/Cannabis';
import IncomeIcon from '../Sidebar/icons/Income';
import ShopIcon from '../Sidebar/icons/Shop';
import MoreIcon from '../Sidebar/icons/More';

const LinkItems = [
  {
    name: 'Показатели',
    icon: IncomeIcon,
    link: '/account/statistics',
  },
  { name: 'Магазин', icon: ShopIcon, link: '/account/store' },
  { name: 'Моя ферма', icon: CannabisIcon, link: '/account/myfarm' },
];

export default function MobileNav({ mobToggle, ...rest }) {
  const ref = useRef();
  const { isOpen, onClose, onToggle } = useDisclosure();

  function closeOverlay(e) {
    if (e.target === ref.current) {
      onClose();
    }
  }
  return (
    <Box display={{ base: 'block', lg: 'none' }} zIndex={10}>
      <Box
        zIndex={3}
        position="fixed"
        w="100%"
        alignItems="center"
        bottom={0}
        padding={3}
        bg={useColorModeValue('lightDark', 'darkLight')}
        {...rest}
      >
        <HStack justifyContent="center" spacing={10}>
          {LinkItems.map((link, index) => (
            <NavItem
              key={`id-${index + 1}`}
              link={link.link}
              icon={link.icon}
            />
          ))}
          <NavItem
            handleClick={(e) => {
              e.preventDefault();
              onToggle();
            }}
            icon={MoreIcon}
          />
        </HStack>
      </Box>
      {isOpen && (
        <Box
          onClick={(e) => closeOverlay(e)}
          ref={ref}
          zIndex={2}
          left={0}
          top={0}
          bottom={0}
          right={0}
          position="fixed"
          bg="rgba(0, 0, 0, .3)"
        >
          <Sidebar />
        </Box>
      )}
    </Box>
  );
}
