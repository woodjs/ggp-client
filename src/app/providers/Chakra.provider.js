import { ChakraProvider, cookieStorageManagerSSR } from '@chakra-ui/react';
import { theme } from '@/shared/ui/styles/theme';

export default function Chakra({ cookies, children }) {
  const colorModeManager = cookieStorageManagerSSR(cookies);

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </ChakraProvider>
  );
}
