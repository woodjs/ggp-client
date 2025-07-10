import Modal from '@/components/layout/Modal/Modal';
import {
  Button,
  Checkbox,
  Image,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function PromoModal() {
  const { t } = useTranslation('promo-modal');
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();
  const onPressDontShow = (e) => {
    localStorage.setItem('dontShowNews', e.target.checked);
  };
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
  return (
    <Modal
      modalContentProps={{
        bgImage: 'url(/images/promo-modal/promo-modal-bg.png)',
        bgSize: 'cover',
        position: 'relative',
        overflow: 'hidden',
        maxW: { lg: '70%', '2xl': '1400px' },
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
      {/* <VStack position="absolute">
        <Text fontSize="2xl" fontWeight="bold">
          Внимание! В продаже доступна лимитированная серия NFT! Всего 5 сортов.
        </Text>
        <Button alignSelf="end">В магазин</Button>
      </VStack> */}
      {/* <VStack align="center"> */}
      <VStack spacing={{ base: '2px', md: '8px' }} align="center">
        <Text
          color="white"
          fontSize={{ base: 'xl', xs: '2xl', xl: '3xl', '2xl': '4xl' }}
          fontWeight="bold"
          textAlign="center"
        >
          {t('title')}
        </Text>
        <Text
          color="brandYellow"
          fontSize={{ base: 'md', xs: 'lg', xl: 'xl', '2xl': '2xl' }}
          fontWeight="bold"
          textAlign="center"
        >
          {t('subtitle-1')}
        </Text>
        <Text
          color="white"
          fontSize={{ base: 'md', xs: 'lg', xl: 'xl', '2xl': '2xl' }}
          fontWeight="bold"
          textAlign="center"
        >
          {t('subtitle-2')}
        </Text>
      </VStack>
      <Image
        minH={{
          base: '300px',
          xs: '350px',
          sm: '400px',
          md: '0px',
        }}
        objectFit={{ base: 'cover', md: 'contain' }}
        transform={{ base: 'scale(1.2)', md: 'scale(1)' }}
        maxW={{ md: '70%', '2xl': '80%' }}
        src={t('image')}
      />
      <Button
        onClick={toStore}
        mt="10px"
        w="full"
        maxW="200px"
        size={{ base: 'md', xs: 'lg' }}
        alignSelf="center"
      >
        {t('button')}
      </Button>
      <Checkbox
        mt="10px"
        onChange={onPressDontShow}
        colorScheme="yellow"
        color="whiteAlpha.600"
        size="lg"
      >
        {t('dont-show-again')}
      </Checkbox>
      {/* </VStack> */}
    </Modal>
  );
}

export default PromoModal;
