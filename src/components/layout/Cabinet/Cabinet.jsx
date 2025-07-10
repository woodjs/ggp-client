import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import Header from './Header/Header';
import MobileNav from './MobileNav/MobileNav';
import Sidebar from './Sidebar/Sidebar';

export default function Cabinet({ children }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex w="full">
      <MobileNav mobToggle={onToggle} />
      <Sidebar
        display={{ base: 'none', lg: 'block' }}
        mobOpen={isOpen}
        zIndex={10}
      />
      <Box w="full" overflow="clip">
        <Header />
        {children}
      </Box>
    </Flex>
  );
}
