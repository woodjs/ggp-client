import {
  Box,
  Link,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  chakra,
  useBreakpointValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

function ModalVideoSuccess({
  isOpen,
  onClose,
  video = '/videos/store/16x9/container.mp4',
  videoMobile = '/videos/store/9x16/container.mp4',
  chatLink = 'https://cp.puzzlebot.top/R65c1HzPXW',
}) {
  const { t } = useTranslation('store');
  const [isLandscape] = useMediaQuery('(orientation: landscape)');
  const videoURL = useBreakpointValue({ base: videoMobile, md: video });
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bgColor="rgba(0, 0, 0, 0.85)" />
      <ModalContent
        transform="scale(0)"
        opacity={0}
        rounded="xl"
        overflow="hidden"
        my="15px"
        w="90%"
        maxW="1600px"
      >
        {/* <chakra.iframe
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
            aspectRatio: '16/9',
          }}
          src="https://www.youtube.com/embed/vhaqnndhGRw?autoplay=1&mute=1&loop=0&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          pointerEvents="none"
          w="full"
        /> */}
        <chakra.video
          autoPlay
          muted
          poster="/images/store/bg-card-success.png"
          onPlay={(e) => {
            e.target.volume = 0.2;
          }}
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
          w="full"
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
        {chatLink && (
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

export default ModalVideoSuccess;
