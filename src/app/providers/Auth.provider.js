import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';

import { getAccessToken, removeAccessToken } from '@/services/auth/auth.helper';

import LoaderWindow from '../../components/layout/Loader/LoaderWindow/LoaderWindow';
// import { useTelegram } from '@/entities/telegram';
// import { ModalTelegramBotIntegration } from '@/widgets/2fa/telegram/TelegramBotIntegration';
import { baseApi } from '@/shared/api';
import { ModalAvatarUpload } from '@/widgets/modals/ui/ModalAvatarUpload';
import { useDisclosure } from '@chakra-ui/react';
import { useProfile } from '@/entities/profile';

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [prevRouter, setPrevRouter] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Delete
  const { data: profile } = useProfile();
  const { isOpen, onClose, onOpen } = useDisclosure();

  // const { data } = useTelegram();

  // useEffect(() => {
  //   if (!data) return;
  //   if (!data.isLinked) {
  //     onOpen();
  //   }
  // }, [data]);

  useEffect(() => {
    if (!profile) return;

    if (!profile.avatar) {
      onOpen();
    }
  }, [profile]);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const accessToken = getAccessToken();
      if (!accessToken) return router.push('/auth/login');

      try {
        const decoded = jwt.decode(accessToken);

        if (decoded.exp < Date.now() / 1000) {
          await baseApi.put('/auth/refresh-tokens');
        }
      } catch (error) {
        removeAccessToken();
        return router.push('/auth/login');
      }

      setTimeout(() => setIsLoading(false), 300);
      setPrevRouter(router.pathname);
    })();
  }, [router.pathname]);

  if (isLoading || prevRouter !== router.pathname)
    return <LoaderWindow visible h="100vh" />;

  return (
    <>
      {/* <ModalTelegramBotIntegration
        isOpen={isOpen}
        onClose={onClose}
        accessClose={false}
      /> */}

      {isOpen && <ModalAvatarUpload isOpen={isOpen} onClose={onClose} />}

      {children}
    </>
  );
};

export default AuthProvider;
