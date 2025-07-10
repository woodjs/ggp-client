import Modal from '@/components/layout/Modal/Modal';
import {
  Box,
  Image,
  Stack,
  Text,
  //   useColorModeValue,
  useToken,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
// import SuccessParticles from './SuccessParticles';

function ModalSuccess({
  isOpen,
  onClose,
  image = '/images/store/compressed/bush.webp',
}) {
  const [brandYellow] = useToken('colors', ['brandYellow']);
  const brandColor = brandYellow;
  const { t } = useTranslation('store');
  //   const handleMouseMoveCard = (e) => {
  //     const { clientX, clientY } = e;
  //     const { left, top, width, height } = e.target.getBoundingClientRect();
  //     const x = (clientX - left) / width;
  //     const y = (clientY - top) / height;
  //     const rotateX = (y - 0.5) * 10;
  //     const rotateY = (x - 0.5) * -10;
  //     e.target.style.transform = `scale(1.0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  //     // setCardTransfom(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  //   };
  //   const handleMouseLeaveCard = (e) => {
  //     e.target.style.transform = 'scale(1)';
  //     // setCardTransfom('scale(1)');
  //   };
  if (!isOpen) return null;
  return (
    <Modal
      //   title={`Уважаемый ${data.name || 'партнер'}`}
      isOpen={isOpen}
      onClose={onClose}
      modalContentProps={{
        maxW: 'fit-content',
        bgImage: '/images/store/bg-card-success.png',
        bgSize: 'cover',
        p: { base: '10px', sm: '30px' },
        pr: { base: '10px', sm: '30px', md: '120px' },
      }}
    >
      <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        justify={{
          base: 'center',
          md: 'space-between',
        }}
        align={{ base: 'center', md: 'start' }}
        w="full"
        gap={{
          base: '10px',
          md: '10px 120px',
          lg: '10px 120px',
          xl: '10px 160px',
          '2xl': '10px 240px',
        }}
      >
        <VStack
          overflow="auto"
          maxH={{ md: '300px', lg: '500px' }}
          maxW={{ base: 'full', md: '300px', lg: '400px' }}
          w="full"
          h="full"
        >
          <Box>
            <Text
              textAlign="left"
              fontSize={{ base: 'xl', sm: '3xl' }}
              fontWeight="bold"
            >
              {t('modalSuccess.title')}
            </Text>
            <Text
              color={brandColor}
              fontWeight="bold"
              textAlign="left"
              fontSize={{ base: 'lg', sm: 'xl' }}
            >
              {t('modalSuccess.subtitle')}
            </Text>
          </Box>
          <VStack spacing={5} align="start" w="full" h="full">
            <Text
              textAlign="left"
              fontSize={{ base: 'md', sm: 'lg' }}
              dangerouslySetInnerHTML={{
                __html: t('modalSuccess.text-1', {
                  brandColor,
                }),
              }}
            />

            <Text textAlign="left" fontSize={{ base: 'md', sm: 'lg' }}>
              {t('modalSuccess.text-2')}
            </Text>
            <Text textAlign="left" fontSize={{ base: 'md', sm: 'lg' }}>
              {t('modalSuccess.text-3')}
            </Text>
            <Text
              color={brandColor}
              textAlign="left"
              fontSize={{ base: 'md', sm: 'lg' }}
            >
              {t('modalSuccess.text-4')}
            </Text>
          </VStack>
        </VStack>
        <Box
          css={{
            perspective: '800px',
          }}
          maxW={{ base: 'full', md: '250px', lg: '300px' }}
          w={{ base: '300px', md: '300px' }}
          position="relative"
        >
          {/* <SuccessParticles
            offsetDiapasonScale={[-0.2, 0.5]}
            offsetDiapasonY={[-100, 100]}
            offsetDiapasonX={[-100, 100]}
            duration={20000}
            particlesCount={60}
            delay={400}
          /> */}
          <Image
            position="absolute"
            maxW="200%"
            transform="translateX(-30%)"
            src="/images/store/card-success-leaves.png"
            zIndex={1}
          />
          <Image
            // onMouseMove={handleMouseMoveCard}
            // onMouseLeave={handleMouseLeaveCard}
            transition="transform .5s"
            transitionTimingFunction="cubic-bezier(0, 0.65, 0.2, 1)"
            zIndex={2}
            position="absolute"
            src={image}
          />
          <Image zIndex={2} opacity={0} src={image} />
        </Box>
      </Stack>
    </Modal>
  );
}

export default ModalSuccess;
