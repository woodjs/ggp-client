/* eslint-disable import/no-extraneous-dependencies */
import { mode } from '@chakra-ui/theme-tools';

export const ButtonStyles = {
  baseStyle: {
    borderRadius: '6px',
    fontWeight: 700,
    boxSizing: 'border-box',
  },
  sizes: {
    sm: {
      fontSize: '10px',
      // px: '10px',
      // py: '29px',
    },
    md: {
      fontSize: '14px',
      // px: 6,
      // py: 4,
    },
  },
  variants: {
    border: (props) => ({
      border: '1px solid',
      borderColor: 'brandGray.200',
      bg: mode('white', 'darkLight')(props),
      color: 'brandGray.200',
      _hover: {
        bg: null,
        color: mode('#1B202B', 'lightDark')(props),
        borderColor: mode('#1B202B', 'lightDark')(props),
      },
      _active: {
        color: mode('white', 'darkLight')(props),
        bg: mode('brandGreen.400', 'brandYellow')(props),
        borderColor: 'transparent',
      },
    }),
    solid: (props) => ({
      bg: mode('brandGreen.400', 'brandYellow')(props),
      color: mode('white', 'darkLight')(props),
      _hover: {
        bg: null,
        opacity: 0.5,
      },
    }),
  },
  defaultProps: {
    size: 'md',
  },
};
