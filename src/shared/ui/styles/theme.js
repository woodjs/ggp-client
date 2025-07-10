/* eslint-disable import/no-extraneous-dependencies */
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import { ButtonStyles as Button } from './buttonStyles';
import { InputStyles as Input } from './inputStyles';
import { SelectStyles as Select } from './selectStyles';
import { NumberInput } from './inputNumber';

const customTheme = {
  breakpoints: {
    xs: '22em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  config: {
    initialColorMode: 'dark',
  },
  fonts: {
    body: 'Gilroy, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  colors: {
    dark: '#171923',
    darkLight: '#2D3748',
    secondDark: '#374459',
    brandGray: {
      100: '#EDF2F7',
      300: '#f1f5fa',
      200: '#A0AEC0',
    },
    brandGreen: {
      100: '#8FB782',
      200: '#6AA05B',
      300: '#428834',
      400: '#017101',
    },
    lightDark: '#F8F9FA',
    brandYellow: '#FFDC3F',
    danger: '#E53E3E',
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('#171923', '#F8F9FA')(props),
        backgroundColor: mode('brandGray.100', 'dark')(props),
      },
    }),
  },
  components: {
    Button,
    Input,
    Select,
    NumberInput,
  },
};

export const theme = extendTheme(customTheme);
