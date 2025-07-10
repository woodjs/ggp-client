/* eslint-disable import/no-cycle */
import { Box, useDisclosure, VStack, Collapse } from '@chakra-ui/react';
import NavItem from '@/components/layout/Cabinet/Sidebar/NavItem';
import LinkCard from '@/components/layout/Cabinet/Sidebar/LinkCard';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function CategoryItem({ name, submenu, icon, menuOpen }) {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  useEffect(() => {
    submenu.map((menu) => {
      if (router.pathname === menu.link) {
        onToggle();
        return true;
      }
    });
  }, []);

  return (
    <Box>
      {menuOpen && (
        <LinkCard
          menuOpen={menuOpen}
          name={name}
          icon={icon}
          handleClick={onToggle}
          cat
          isCat={isOpen}
        />
      )}
      <Collapse in={isOpen || !menuOpen}>
        <VStack align="stretch" spacing="10px" mt={menuOpen ? '10px' : 0}>
          {submenu.map((menu, index) => (
            <NavItem
              menuOpen={menuOpen}
              name={menu.name}
              link={menu.link}
              icon={menu.icon}
              key={`nav-item-${index + 1}`}
            />
          ))}
        </VStack>
      </Collapse>
    </Box>
  );
}
