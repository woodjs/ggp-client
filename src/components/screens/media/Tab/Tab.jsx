import { Tab as ChakraTab } from '@chakra-ui/react';

function Tab({ children, ...props }) {
  return (
    <ChakraTab
      {...props}
      color="brandGray.200"
      fontWeight="bold"
      fontSize="24px"
      _selected={{
        color: 'inherit',
      }}
    >
      {children}
    </ChakraTab>
  );
}
export default Tab;
