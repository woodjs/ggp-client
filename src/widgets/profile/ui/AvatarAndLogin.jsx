import { useProfileByLogin } from '@/entities/profile';
import {
  Avatar,
  Box,
  Center,
  HStack,
  Spinner,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function UserAvatarAndLogin({ login }) {
  const { t } = useTranslation('global');
  const { data, isError, error, refetch } = useProfileByLogin(login, {
    enabled: false,
    cacheTime: 0,
  });
  const bg = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');

  const [isLoading, setIsLoading] = useState(false);
  const [typingTimeoutId, setTypingTimeoutId] = useState(null);

  useEffect(() => {
    if (!login) return;
    if (typingTimeoutId) {
      clearTimeout(typingTimeoutId);
    }
    setIsLoading(true);
    setTypingTimeoutId(
      setTimeout(() => {
        if (login && login.length) {
          refetch();
        } else {
          setIsLoading(false);
        }
      }, 1000)
    );
  }, [login]);

  useEffect(() => {
    if (data || isError || error) setIsLoading(false);
  }, [data, isError, error]);

  useEffect(() => {
    if (typingTimeoutId) {
      clearTimeout(typingTimeoutId);
    }
  }, []);

  if (isLoading)
    return (
      <Box p={3} bg={bg} borderRadius="4px" w="full">
        <Center justifyContent="flex-start">
          <Spinner />
        </Center>
      </Box>
    );

  return (
    <Box p={3} bg={bg} borderRadius="4px" w="full">
      {data && !error && login ? (
        <HStack spacing={4}>
          <Avatar boxSize="40px" src={data?.avatar} />
          <Text fontWeight="bold">{data?.login}</Text>
        </HStack>
      ) : (
        <Text fontWeight="bold">{t('reciever-not-found')}</Text>
      )}
    </Box>
  );
}
