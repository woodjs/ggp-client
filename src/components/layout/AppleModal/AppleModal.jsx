import Modal from '@/components/layout/Modal/Modal';
import {
  Button,
  useDisclosure,
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

function AppleModal() {
  const { t } = useTranslation('landing');
  const { isOpen, onClose, onOpen } = useDisclosure();
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
    base: 'url(/images/promo-modal/appleModal.png)',
  });

  return (
    <Modal
      modalContentProps={{
        bgImage,
        bgSize: 'cover',
        position: 'relative',
        h: {
          base: 'fit-content',
          sm: '450px',
          md: '400px',
          lg: '400px',
        },
        w: '100%',
        maxW: {
          base: '90%',
          sm: '450px',
          md: '640px',
          lg: '640px',
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
      <VStack w="full">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={{ base: '20px', md: '50px' }}
          h={{ base: '100%', md: '60px' }}
          w="full"
        >
          <Image src="/images/full-logo-yellow.svg" w="150px" alt="pow logo" />
          <Timer />
        </Stack>
        <HStack
          align={{ base: 'center', md: 'flex-start' }}
          justifyContent="space-between"
          w="full"
          position="relative"
        >
          <Image
            position="inherit"
            right="30px"
            src="/images/promo-modal/appleGifts.png"
            w={{ base: '150px', xs: '200px', sm: '250px', md: '370px' }}
          />
          <VStack>
            <Text
              fontSize={{
                base: '33px',
                sm: '45px',
                md: '67px',
                lg: '67px',
              }}
              fontFamily="BuyanBold"
              h="fit-content"
              lineHeight={{ base: '70%', md: '90%' }}
              mt="0px"
            >
              {t('promo-buy-nft')}
            </Text>
            <Text
              fontSize={{
                base: '28px',
                sm: '38px',
                md: '58px',
                lg: '58px',
              }}
              fontFamily="BuyanBold"
              lineHeight={{ base: '70%', md: '90%' }}
            >
              {t('promo-win')}
            </Text>
            <Text
              fontSize={{
                base: '43px',
                sm: '60px',
                md: '93px',
                lg: '93px',
              }}
              fontFamily="BuyanBold"
              lineHeight={{ base: '70%', md: '90%' }}
              color="brandYellow"
            >
              {t('promo-apple')}
            </Text>
            <Button
              onClick={toRegister}
              mt="10px"
              w="full"
              maxW="200px"
              size={{ base: 'md', xs: 'lg' }}
              display={{ base: 'none', md: 'inline-flex' }}
            >
              {t('promo-participate')}
            </Button>
          </VStack>
        </HStack>
        <Button
          onClick={toRegister}
          mt="20px"
          w="full"
          py="7px"
          size={{ base: 'md', xs: 'lg' }}
          display={{ base: 'flex', md: 'none' }}
        >
          {t('promo-participate')}
        </Button>
      </VStack>
    </Modal>
  );
}

export default AppleModal;
