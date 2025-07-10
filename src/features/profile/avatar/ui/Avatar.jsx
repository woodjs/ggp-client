import {
  Avatar,
  Box,
  Center,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { IoMdReverseCamera } from 'react-icons/io';
import { useProfile } from '@/entities/profile';
import { useAvatar, validateUploadFile } from '../model';

export function AvatarCircleFeature() {
  const { data } = useProfile();
  const { mutate } = useAvatar();

  const fileInputRef = useRef(null);
  const handleClick = () => fileInputRef.current.click();
  const handleChange = (e) => {
    const file = e.target.files[0];

    if (validateUploadFile(file)) {
      mutate(file, {
        onSuccess: () => {
          fileInputRef.current.value = null;
        },
      });
    }
  };

  return (
    <Flex justify="center" onClick={handleClick} cursor="pointer">
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      <Box
        mt="100px"
        bg={useColorModeValue('brandGreen.400', 'brandYellow')}
        zIndex={2}
        p="5px"
        borderRadius="full"
        w="129px"
        h="129px"
        boxSizing="border-box"
      >
        <Avatar
          w="full"
          h="full"
          size="xl"
          src={data?.avatar}
          alt={"You're avatar"}
          border=""
          pos="relative"
          overflow="hidden"
          role="group"
        >
          <Center
            rounded="full"
            pos="absolute"
            top={0}
            left={0}
            w="full"
            h="full"
            bg="rgba(0,0,0,0.5)"
            opacity={0}
            _groupHover={{ opacity: 1 }}
            transition="0.3s"
          >
            <Icon as={IoMdReverseCamera} opacity="0.5" />
          </Center>
        </Avatar>
      </Box>
    </Flex>
  );
}
