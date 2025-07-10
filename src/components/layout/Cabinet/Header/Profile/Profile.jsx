import Link from 'next/link';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'next-i18next';

import { useAuth } from '@/hooks/auth/useAuth';
import { useProfile } from '@/entities/profile';

import ProfileSkeleton from './Profile.skeleton';

export default function Profile() {
  const { t } = useTranslation('cabinet');
  const { logout } = useAuth();
  const { data, isLoading, isError } = useProfile();

  if (isLoading) return <ProfileSkeleton />;
  if (isError) return <Text>Error</Text>;

  return (
    <Flex alignItems="center">
      <Menu>
        <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
          <HStack>
            <Avatar size="sm" src={data?.avatar} />
            <VStack
              display={{ base: 'none', md: 'flex' }}
              alignItems="flex-start"
              spacing="1px"
              ml="2"
            >
              <Text fontSize="sm">{data?.login}</Text>
              {/* <Text fontSize="xs" color="brandGray.200">
                {data?.rankName}
              </Text> */}
            </VStack>
            <Box display={{ base: 'none', md: 'flex' }}>
              <FiChevronDown />
            </Box>
          </HStack>
        </MenuButton>
        <MenuList>
          <MenuItem as={Link} href="/account/profile">
            {t('profile')}
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={logout}>{t('exit')}</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
