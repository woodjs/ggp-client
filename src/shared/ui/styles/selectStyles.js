/* eslint-disable import/no-extraneous-dependencies */
import { mode } from '@chakra-ui/theme-tools';
import { defineStyleConfig } from '@chakra-ui/react';

export const SelectStyles = defineStyleConfig({
  baseStyle: {
    field: {
      borderRadius: '6px',
      fontWeight: 400,
      boxSizing: 'border-box',
      cursor: 'pointer',
    },
  },
  variants: {
    filled: (props) => ({
      field: {
        bg: mode('white', 'darkLight')(props),
        border: '1px solid',
        borderColor: 'brandGray.200',
        color: 'brandGray.200',
        _focusVisible: {
          borderColor: mode('brandGreen.400', 'brandYellow')(props),
          color: mode('dark', 'brandGray.100')(props),
        },
        _invalid: {
          borderColor: 'danger',
          color: 'danger',
          boxShadow: 'none',
        },
      },
    }),
  },
  defaultProps: {
    variant: 'filled',
  },
});
