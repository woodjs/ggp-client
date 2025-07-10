import { Tab, useColorModeValue } from '@chakra-ui/react';

function TabItem({ children }) {
  const bg = useColorModeValue('white', 'darkLight');
  return (
    <Tab
      display="flex"
      flexDirection="column"
      cursor="pointer"
      // px="23px"
      // py="26px"
      p="15px"
      borderRadius="16px"
      fontSize="xl"
      fontWeight="bold"
      w="full"
      color="brandGray.200"
      bg={bg}
      justify="center"
      alignItems="center"
      border="1px solid transparent"
      transition="0.3s"
      _selected={{
        borderColor: useColorModeValue('brandGreen.400', 'brandYellow'),
        '& svg': {
          fill: useColorModeValue('brandGreen.400', 'brandYellow'),
        },
      }}
      _hover={{
        borderColor: useColorModeValue('brandGreen.400', 'brandYellow'),
        '& svg': {
          fill: useColorModeValue('brandGreen.400', 'brandYellow'),
        },
      }}
      role="group"
    >
      {children}
    </Tab>
  );
}

export default TabItem;
