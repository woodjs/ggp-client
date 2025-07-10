import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import { Stack, Image, Text, Center, Box } from '@chakra-ui/react';

export default function Main() {
  return (
    <CabinetContent py={0}>
      <Stack
        px="6"
        py={{ base: '50px', xl: 6 }}
        pos="relative"
        direction={{ base: 'column', xl: 'row' }}
        spacing="50px"
        justifyContent="end"
        alignItems="center"
      >
        <Box
          left={0}
          pos={{ base: 'static', xl: 'absolute' }}
          fontSize={{ base: '5xl', '2xl': '6xl' }}
        >
          <Text>Инвестиции в производство</Text>
          <Text>каннабиса — мировой тренд</Text>
          {/* <Text */}
          {/*  fontWeight="bold" */}
          {/*  fontSize={{ base: '4xl', xl: '5xl', '2xl': '6xl' }} */}
          {/* > */}
          {/*  Инвестиции в производство каннабиса — мировой тренд */}
          {/* </Text> */}
        </Box>
        <Center w={{ base: '100%', xl: '50%' }}>
          <Image w="100%" src="/images/main/cannabis.png" />
        </Center>
      </Stack>
    </CabinetContent>
  );
}
