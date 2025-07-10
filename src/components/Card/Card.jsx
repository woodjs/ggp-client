import { Box, useColorModeValue } from '@chakra-ui/react';

/**
 *
 * @typedef {Object} CustomCardProps
 * @property {Boolean} [borderGold] - if true and colorMode is dark, border will be gold
 * @property {React.ReactNode} [children] - children
 *
 * @param {import("@chakra-ui/react").CardProps & CustomCardProps} props
 * @returns
 */
export default function Card({ borderGold, children, ...rest }) {
  return (
    <Box
      bg={useColorModeValue('white', '#2D3748')}
      borderRadius="16px"
      boxShadow="lg"
      boxSizing="border-box"
      {...rest}
    >
      {children}
    </Box>
  );
}
