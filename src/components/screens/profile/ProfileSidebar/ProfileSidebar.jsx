import { Box, List } from '@chakra-ui/react';
import {
  MdOutlineConnectWithoutContact,
  MdNotificationsNone,
} from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { BiLock, BiDevices } from 'react-icons/bi';
import { BsKey } from 'react-icons/bs';
import Card from '../../../Card/Card';
import ProfileSidebarItem from './ProfileSidebarItem';
import { useTranslation } from 'next-i18next';
// id`s for scroll: password, contacts, 2fa, devices, notifications, sponsor

function scrollToId(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
function ProfileSidebar() {
  const { t } = useTranslation('profile');
  return (
    <Box position={{ base: 'unset', xl: 'sticky' }} left={0} top="100px">
      <Card
        // flex="0 0 auto"
        // width="25%"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        overflow="auto"
        display="block"
        boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
        borderRadius="16px"
        p={{ base: '8px', xl: '24px 8px' }}
        position={{ base: 'unset', xl: 'sticky' }}
        left={0}
        top="100px"
      >
        <List
          alignItems={{ base: 'center', xl: 'start' }}
          display="flex"
          flexDirection={{ base: 'row', xl: 'column' }}
          spacing={{ base: 0, xl: 3 }}
        >
          <ProfileSidebarItem
            onClick={() => scrollToId('profile')}
            icon={AiOutlineUser}
            text={t('sidebar-profile')}
          />
          <ProfileSidebarItem
            onClick={() => scrollToId('contacts')}
            icon={MdOutlineConnectWithoutContact}
            text={t('sidebar-contacts')}
          />
          <ProfileSidebarItem
            onClick={() => scrollToId('passwordSection')}
            icon={BsKey}
            text={t('sidebar-password')}
          />
          <ProfileSidebarItem
            onClick={() => scrollToId('2fa')}
            icon={BiLock}
            text={t('sidebar-2fa')}
          />
          {/* 

          {/* <ProfileSidebarItem
            onClick={() => scrollToId('devices')}
            icon={BiDevices}
            text="Устройства"
          /> */}
          <ProfileSidebarItem
            onClick={() => scrollToId('notifications')}
            icon={MdNotificationsNone}
            text={t('sidebar-notifications')}
          />
          {/* <ProfileSidebarItem
            onClick={() => scrollToId('sponsor')}
            icon={RiParentLine}
            text="Спонсор"
          /> */}
        </List>
      </Card>
    </Box>
  );
}

export default ProfileSidebar;
