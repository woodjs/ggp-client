import { Image, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function NFTImage({ image }) {
  return (
    <Box position="relative">
      <motion.div
        initial={{
          height: '75%',
          transformOrigin: 'center',
        }}
        animate={{
          translateY: [10, 2, 15, 5, 10],
          translateX: [7, 0, 15, 0, 7],
          rotateY: [7, -2, 15, -9, 7],
          rotateX: [5, 5, 4, 5, 5],
          rotateZ: [-0.5, 1, -0.5, 1, -0.5],
        }}
        transition={{
          duration: 20,
          ease: 'easeInOut',
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <Image
          objectFit="contain"
          objectPosition="center"
          h="100%"
          w="100%"
          maxH={{ base: '400px', lg: '600px' }}
          src={image}
        />
      </motion.div>
      <Image
        filter="drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.25))"
        position="absolute"
        src="/images/myfarm/podium.png"
        w="full"
        bottom="0"
        h="65%"
        objectFit="contain"
      />
    </Box>
  );
}
