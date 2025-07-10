import { Circle, HStack, useColorModeValue } from '@chakra-ui/react';

function MyFarmCycles({ cycle }) {
  const cycles = [1, 2, 3, 4];
  const activeTextColor = useColorModeValue('white', 'dark');
  const activeBgColor = useColorModeValue('brandGreen.400', 'brandYellow');
  const textColor = useColorModeValue('dark', 'white');
  const bgColor = useColorModeValue('brandGray.100', 'dark');

  return (
    <HStack gap="10px">
      {cycles.map((cyclesItem) => (
        <Circle
          key={cyclesItem}
          fontSize="sm"
          size="30px"
          borderWidth="1px"
          borderColor={cyclesItem <= cycle ? 'transparent' : 'brandGray.200'}
          color={cyclesItem <= cycle ? activeTextColor : textColor}
          bg={cyclesItem <= cycle ? activeBgColor : bgColor}
        >
          {cyclesItem}
        </Circle>
      ))}
    </HStack>
  );
}

export default MyFarmCycles;
