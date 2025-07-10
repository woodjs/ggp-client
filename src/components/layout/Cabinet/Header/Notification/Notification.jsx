import { useEffect, useRef, useState } from 'react';
import {
  Box,
  IconButton,
  Text,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Center,
} from '@chakra-ui/react';
import { useNotification } from '@/hooks/user/useNotification';

import { FiBell } from 'react-icons/fi';
import { useTranslation } from 'next-i18next';

export default function Notification() {
  const { t } = useTranslation('cabinet');
  const { data, hasNextPage, fetchNextPage } = useNotification({
    limit: 3,
  });
  const [notifications, setNotifactions] = useState([]);
  const observerElem = useRef(null);
  useEffect(() => {
    if (data && data.pages) {
      setNotifactions(
        Array.isArray(data.pages) && data.pages[0]
          ? data.pages.reduce((array, { items }) => [...array, ...items], [])
          : []
      );
    }
  }, [data]);

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e) => {
      const { scrollHeight, scrollTop, clientHeight } = e.target;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasNextPage) {
          await fetchNextPage();
        }
        fetching = false;
      }
    };
    observerElem.current.addEventListener('scroll', handleScroll);
  }, [fetchNextPage, hasNextPage]);
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight="bold">
          {t('notifications.title')}
        </PopoverHeader>
        <PopoverBody>
          <VStack
            mb="25px"
            spacing="4"
            align="stretch"
            h="150px"
            overflowY={notifications.length > 0 ? 'scroll' : 'auto'}
            ref={observerElem}
          >
            {notifications.length === 0 && (
              <Center mt="55px">{t('notifications.no-notifications')}</Center>
            )}
            {notifications.map((notification) => {
              const d = new Date(notification.createdAt);
              const date = `${[
                d.getDate(),
                d.getMonth() + 1 > 10
                  ? d.getMonth() + 1
                  : `0${d.getMonth() + 1}`,
                d.getFullYear(),
              ].join('.')} ${[
                d.getHours(),
                d.getMinutes() > 10 ? d.getMinutes() : `0${d.getMinutes()}`,
              ].join(':')}`;
              return (
                <Box pos="relative" key={notification.id}>
                  <Text mb="10px" fontSize="sm">
                    {notification.title}
                  </Text>
                  <Text fontSize="sm" color="brandGray.200">
                    {notification.description}
                  </Text>
                  <Text
                    color="brandGray.200"
                    fontSize="sm"
                    bottom={0}
                    right={0}
                  >
                    {date}
                  </Text>
                  <Text
                    fontSize="sm"
                    pos="absolute"
                    top={0}
                    right={0}
                    bg="brandGreen.200"
                    color="white"
                    padding="0 5px"
                    borderRadius="5px"
                  >
                    {notification.isRead ? 'NEW' : ''}
                  </Text>
                </Box>
              );
            })}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
