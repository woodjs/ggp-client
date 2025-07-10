import { useColorModeValue } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';

export default function ProgressBar() {
  return (
    <NextNProgress
      color={useColorModeValue('#017101', '#FFDC3F')}
      options={{ showSpinner: false }}
    />
  );
}
