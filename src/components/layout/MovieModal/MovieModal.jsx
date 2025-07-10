import Modal from '@/components/layout/Modal/Modal';
import { Button, useDisclosure, useBreakpointValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MovieModal() {
  const { t } = useTranslation('promo-modal');
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();

  const toStore = () => {
    if (router.pathname === '/account/store') {
      onClose();
      return;
    }
    router.push('/account/store');
    onClose();
  };

  useEffect(() => {
    if (localStorage.getItem('dontShowNews') !== 'true') {
      const lastOpenTime = localStorage.getItem('lastOpenTime');
      const now = new Date().getTime();
      if (lastOpenTime) {
        const diff = now - lastOpenTime;
        if (diff > 1000 * 60 * 60 * 4) {
          localStorage.setItem('lastOpenTime', now);
          onOpen();
        }
      } else {
        localStorage.setItem('lastOpenTime', now);
        onOpen();
      }
    }
  }, []);

  const bgImage = useBreakpointValue({
    base: 'url(/images/promo-modal/modal-mob-movie.webp)', // Изображение для мобильных
    md: 'url(/images/promo-modal/modal-movie.webp)', // Изображение для больших экранов
  });

  return (
    <Modal
      modalContentProps={{
        bgImage,
        bgSize: 'cover',
        position: 'relative',
        h: {
          base: '70%',
          xs: '70%',
          sm: '600px',
          md: '650px',
          lg: '700px',
        },
        w: '100%',
        maxW: {
          base: '100%',
          xs: '400px',
          sm: '500px',
          md: '820px',
          lg: '900px',
        },
      }}
      modalBodyProps={{
        display: 'flex',
        flexDirection: 'column',
        maxH: '90vh',
        alignItems: 'center',
      }}
      modalCloseButtonProps={{
        color: 'white',
      }}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <Button
        position="absolute"
        bottom="20px"
        left={{
          base: '60px',
          xs: '100px',
          sm: '200px',
          md: '100px',
          xl: '100px',
        }}
        onClick={toStore}
        mt="10px"
        w="full"
        maxW="200px"
        size={{ base: 'md', xs: 'lg' }}
      >
        В магазин
      </Button>
    </Modal>
  );
}

export default MovieModal;
