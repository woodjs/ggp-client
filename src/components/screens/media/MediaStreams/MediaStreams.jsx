import Modal from '@/components/layout/Modal/Modal';
import { AspectRatio, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import MediaStreamCard from './MediaStreamCard';

function MediaStreams({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [src, setSrc] = useState(null);
  const handleOpen = (newSrc) => {
    setSrc(newSrc);
    onOpen();
  };
  return (
    <SimpleGrid
      columns={{
        base: 1,
        sm: 2,
        md: 4,
        xl: 4,
        '2xl': 4,
      }}
      maxW="900px"
      spacing="20px"
    >
      {data.map((stream) => (
        <MediaStreamCard
          handleOpen={() => handleOpen(stream.link)}
          key={stream.id}
          {...stream}
        />
      ))}
      <Modal
        modalContentProps={{ w: 'full', maxW: '900px' }}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <AspectRatio
          mt="10px"
          overflow="hidden"
          borderRadius="16px"
          ratio={16 / 9}
        >
          <iframe
            title="Media stream"
            width="100%"
            height="100%"
            src={src}
            frameborder="0"
            allowfullscreen
          />
        </AspectRatio>
      </Modal>
    </SimpleGrid>
  );
}

export default MediaStreams;
