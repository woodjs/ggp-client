import Modal from '@/components/layout/Modal/Modal';
import {
  Button,
  useBreakpointValue,
  Image,
  Stack,
  HStack,
  VStack,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Timer from '@/widgets/timer/Timer';

function NYModal({ isOpen, onClose, onOpen }) {
  const { t } = useTranslation('landing');

  const router = useRouter();

  const toRegister = () => {
    if (router.pathname === '/auth/register') {
      onClose();
      return;
    }
    router.push('/auth/register');
    onClose();
  };

  useEffect(() => {
    if (localStorage.getItem('modalShown') !== 'true') {
      onOpen();
      localStorage.setItem('modalShown', 'true');
    }
  }, [onOpen]);

  const bgImage = useBreakpointValue({
    base: 'url(/images/promo-modal/expansion/ny_modalBgMob.png)',
    lg: 'url(/images/promo-modal/expansion/ny_modalBg.png)',
  });

  return (
    <Modal
      modalContentProps={{
        bgImage,
        bgSize: '100%',
        bgRepeat: 'no-repeat',
        position: 'relative',
        h: {
          base: 'fit-content',
          sm: '450px',
          md: '400px',
          lg: '420px',
        },
        w: '100%',
        maxW: {
          base: '80%',
          sm: '450px',
          md: '500px',
          lg: '630px',
        },
      }}
      modalBodyProps={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      modalCloseButtonProps={{
        color: 'white',
      }}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <VStack w="80%" align="center" justify="center" my="auto">
        <Text
          fontSize={{
            base: '26px',
            sm: '36px',
          }}
          textAlign="center"
          fontFamily="BuyanBold"
          lineHeight={{ base: '100%', md: '120%' }}
          color="white"
        >
          {t('expansion.modal.1')}
        </Text>
        <Timer fontSize={{ base: '50px', sm: '78px' }} />
        <Text
          fontSize={{
            base: '24px',
            sm: '28px',
          }}
          textAlign="center"
          fontFamily="BuyanBold"
          lineHeight={{ base: '100%', md: '120%' }}
          color="white"
        >
          {t('expansion.modal.2')}
        </Text>
        <Button
          onClick={toRegister}
          mt="10px"
          w="full"
          maxW="200px"
          size={{ base: 'md', xs: 'lg' }}
          display={{ base: 'none', md: 'inline-flex' }}
        >
          {t('btn-buy')}
        </Button>
      </VStack>
    </Modal>
  );
}

export default NYModal;
