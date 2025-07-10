import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  chakra,
  useBreakpointValue,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useTranslation } from 'next-i18next';

import { useBuyNFT } from '@/hooks/nft/useNFT';
import usePromocode from '@/hooks/user/usePromocode';

const videoData = {
  PART: {
    desktop: '/videos/store/16x9/part.mp4',
    mobile: '/videos/store/9x16/part.mp4',
  },
  BUSH: {
    desktop: '/videos/store/16x9/bush.mp4',
    mobile: '/videos/store/9x16/bush.mp4',
  },
  SHELF: {
    desktop: '/videos/store/16x9/shelf.mp4',
    mobile: '/videos/store/9x16/shelf.mp4',
  },
  SECTOR: {
    desktop: '/videos/store/16x9/sector.mp4',
    mobile: '/videos/store/9x16/sector.mp4',
  },
  RACK: {
    desktop: '/videos/store/16x9/rack.mp4',
    mobile: '/videos/store/9x16/rack.mp4',
  },
  RACK_XL: {
    desktop: '/videos/store/16x9/rack_xl.mp4',
    mobile: '/videos/store/9x16/rack_xl.mp4',
  },
  LINE: {
    desktop: '/videos/store/16x9/line.mp4',
    mobile: '/videos/store/9x16/line.mp4',
  },
  CONTAINER: {
    desktop: '/videos/store/16x9/container.mp4',
    mobile: '/videos/store/9x16/container.mp4',
  },
  HALL: {
    desktop: '/videos/store/16x9/hall.mp4',
    mobile: '/videos/store/9x16/hall.mp4',
  },
  'Apple Custard': {
    desktop: '/videos/store/16x9/apple_custard.mp4',
    mobile: '/videos/store/9x16/apple_custard.mp4',
  },
  'Gorilla Zkittlez': {
    desktop: '/videos/store/16x9/gorilla_zkittlez.mp4',
    mobile: '/videos/store/9x16/gorilla_zkittlez.mp4',
  },
  Granita: {
    desktop: '/videos/store/16x9/granita.mp4',
    mobile: '/videos/store/9x16/granita.mp4',
  },
  'Corleone Kush': {
    desktop: '/videos/store/16x9/korleone_kush.mp4',
    mobile: '/videos/store/9x16/korleone_kush.mp4',
  },
  'Miracle Cherry': {
    desktop: '/videos/store/16x9/miracle_cherry.mp4',
    mobile: '/videos/store/9x16/miracle_cherry.mp4',
  },
};

function PaymentModalV2({
  isOpen,
  onClose,
  data,
  chatLink = 'https://cp.puzzlebot.top/R65c1HzPXW',
}) {
  const [video, setVideo] = useState(null);
  const [videoMobile, setVideoMobile] = useState(null);

  const router = useRouter();
  const { t } = useTranslation('store');
  const [isLandscape] = useMediaQuery('(orientation: landscape)');
  const videoURL = useBreakpointValue({ base: videoMobile, md: video });
  const videoRef = useRef(null);
  const brandColor = useColorModeValue('brandGreen.400', 'brandYellow');
  const buyNft = useBuyNFT();

  const [isDisabled, setIsDisabled] = useState(false);
  const [voucher, setVoucher] = useState('');
  const [isApplied, setIsApplied] = useState(false);
  const promo = usePromocode(voucher);
  const [isPayed, setIsPayed] = useState(false);
  const [nftID, setNftID] = useState(null);
  const handleSuccess = (resData) => {
    if (!videoURL) {
      onClose();
      return;
    }
    setNftID(resData.id);
    setIsPayed(true);
    videoRef.current.volume = 0.01;
    videoRef.current.muted = false;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  useEffect(() => {
    if (!data) return;
    if (!videoData[data.name]) return;
    setVideo(videoData[data.name].desktop);
    setVideoMobile(videoData[data.name].mobile);
  }, [data]);

  useEffect(() => {
    if (!promo.data) return;
    setIsApplied(true);
  }, [promo.data]);
  const handleClose = () => {
    onClose();
    setIsPayed(false);
    if (nftID) router.push(`/account/myfarm/${nftID}`);
  };
  useEffect(() => {
    if (!voucher) {
      setIsApplied(false);
      promo.refetch();
    }
  }, [voucher]);

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay bgColor="rgba(0, 0, 0, 0.85)" />
      <ModalContent
        rounded="xl"
        overflow="hidden"
        my="15px"
        w={isPayed ? '90%' : 'w-fit'}
        maxW="1600px"
        p={isPayed ? 'auto' : '30px'}
      >
        {isPayed ? null : (
          <Stack
            flexDirection={{
              base: 'column',
              md: 'row',
            }}
            gap="30px 50px"
          >
            <Image
              maxW={{ base: '150px', md: '250px' }}
              m="auto"
              src={data.image}
            />
            <VStack maxW={{ md: '300px' }} spacing="16px" align="stretch">
              <Text fontSize="xl" fontWeight="bold">
                {t('modalPayment.title')}
              </Text>
              <Box>
                <Text fontSize="md" fontWeight="bold">
                  NFT {data.name}
                </Text>
                <Text>{t('modalPayment.desc')}</Text>
              </Box>

              <VStack spacing="8px" align="stretch">
                <Text fontSize="md" fontWeight="bold">
                  {t('modalPayment.promo.title')}
                </Text>
                <HStack>
                  <InputGroup>
                    <Input
                      css={{
                        '@keyframes onView': {
                          '0%': {
                            opacity: 1,
                          },
                          '100%': {
                            opacity: 1,
                          },
                        },
                        animation: 'onView .1s ease-in-out',
                      }}
                      onAnimationEnd={(e) => {
                        e.target.disabled = false;
                      }}
                      disabled
                      borderColor={isApplied && brandColor}
                      value={voucher}
                      autoFocus={false}
                      onChange={(e) => setVoucher(e.target.value)}
                      isReadOnly={isApplied || promo.isLoading}
                      placeholder={t('modalPayment.promo.placeholder')}
                      color={isApplied && brandColor}
                    />
                    <InputRightElement>
                      {isApplied && <Icon color={brandColor} as={CheckIcon} />}
                    </InputRightElement>
                  </InputGroup>
                  {!isApplied ? (
                    <Button
                      isLoading={isDisabled || promo.isLoading}
                      onClick={() => promo.refetch()}
                    >
                      {t('modalPayment.promo.button')}
                    </Button>
                  ) : (
                    <Button onClick={() => setVoucher('')}>
                      {t('modalPayment.promo.button-cancel')}
                    </Button>
                  )}
                </HStack>
              </VStack>
              <VStack spacing="8px" align="stretch">
                <Button
                  onClick={() => {
                    setIsDisabled(true);
                    buyNft.mutate(
                      {
                        nftId: data.id,
                        promocode: voucher,
                        plantingId: data.plantingId,
                      },
                      {
                        onSuccess: (res) => handleSuccess(res),
                        onSettled: () => setIsDisabled(false),
                      }
                    );
                  }}
                >
                  {t('modalPayment.button-payment')}
                </Button>
              </VStack>
            </VStack>
          </Stack>
        )}
        <chakra.video
          playsInline
          ref={videoRef}
          position={isPayed ? 'relative' : 'fixed'}
          w={isPayed ? '100%' : '10px'}
          top="-10000%"
          autoPlay
          muted
          controls={false}
          opacity={isPayed ? 1 : 0}
          poster="/images/store/bg-card-success.png"
          css={{
            '@keyframes fade-in': {
              '0%': {
                opacity: 0,
              },
              '100%': {
                opacity: 1,
              },
            },
            animation: 'fade-in 1.5s ease-in',
          }}
          onEnded={(e) => {
            e.target.currentTime -= 0.1;
          }}
          src={isLandscape ? video : videoURL}
        />
        {/* <Button
            //   bottom="8px"
            right="54px"
            top="8px"
            //   size="lg"
            //   right="8px"
            position="absolute"
            variant="ghost"
          >
            Чат партнеров
          </Button> */}
        <ModalCloseButton size="lg" />
        {isPayed && chatLink && (
          <Box
            bgColor="rgba(0, 0, 0, 0.7)"
            bgImage="url('/images/store/bg-card-success.png')"
            textAlign="center"
            position="absolute"
            p={{ base: '2', md: '4' }}
            rounded="lg"
            bottom="8px"
            ml="8px"
            w="calc(100% - 16px)"
            overflow="hidden"
          >
            {/* <SuccessParticles duration={10000} /> */}
            <Text fontWeight="bold">
              {t('modalSuccess.chat')}{' '}
              <Link
                href={chatLink}
                target="_blank"
                cursor="pointer"
                position="relative"
                color="brandYellow"
                whiteSpace="nowrap"
              >
                {t('modalSuccess.chat-link-text')}
                <Box
                  position="absolute"
                  top="1px"
                  right="-5px"
                  w="4px"
                  h="4px"
                  bgColor="brandYellow"
                  rounded="full"
                  css={{
                    '@keyframes pulse': {
                      '0%': {
                        transform: 'scale(1)',
                        opacity: 1,
                      },
                      '50%': {
                        transform: 'scale(1.5)',
                        opacity: 0.7,
                      },
                      '100%': {
                        transform: 'scale(1)',
                        opacity: 1,
                      },
                    },
                    animation: 'pulse 1.5s ease-in-out infinite',
                  }}
                />
              </Link>
            </Text>
          </Box>
        )}
      </ModalContent>
    </Modal>
  );
}

export default PaymentModalV2;
