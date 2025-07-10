import { Helmet } from 'react-helmet';
import { Box, HStack, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import CabinetTitle from './Title';

export default function CabinetContent({
  children,
  title,
  bgImage,
  titleStyles,
  titleRightElement,
  ...rest
}) {
  const imageSrc = useColorModeValue(
    '/images/promo-modal/expansion/greenLights.svg',
    '/images/promo-modal/expansion/yellowLights.svg'
  );
  return (
    <>
      <Helmet>
        <body
          style={`background-image: url('${bgImage}'); background-size: cover; background-attachment: fixed`}
        />
      </Helmet>
      <Box
        pos="relative"
        pt="20px"
        pb="100px"
        px={{ base: '10px', xl: '30px' }}
        boxSizing="border-box"
        maxW="1300px"
        mx="auto"
        w="full"
        {...rest}
      >
        {title && (
          <HStack mb="60px" justify="space-between">
            <CabinetTitle {...titleStyles}>{title}</CabinetTitle>
            {titleRightElement}
          </HStack>
        )}
        {children}
      </Box>
    </>
  );
}
