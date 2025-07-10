import {
  Box,
  Center,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Category({
  name,
  icon,
  handleClick,
  isActive,
  isDisabled,
  subtitle,
}) {
  const activeColor = useColorModeValue('brandGreen.400', 'brandYellow');
  const [color, setColor] = useState(activeColor);

  useEffect(() => {
    if (!isActive) return setColor('brandGray.200');
    return setColor(activeColor);
  }, [isActive]);

  const props = {
    filter: isDisabled && 'blur(2px)',
  };

  if (!isDisabled) {
    props.onClick = handleClick;
  }

  return (
    <Box
      position="relative"
      borderRadius="12px"
      bgColor={useColorModeValue('white', 'darkLight')}
      h="full"
      maxH="150px"
      borderBottom="4px"
      borderColor={color}
      transition=".3s"
    >
      {/* <Box
        position="absolute"
        w="calc(100% - 1.5px)"
        ml="1px"
        h="50px"
        bgColor={color}
        bottom="-4px"
        rounded="15px"
        transition=".3s"
      /> */}
      <Box
        userSelect={isDisabled ? 'none' : 'auto'}
        position="relative"
        zIndex={2}
        rounded="12px"
        bg={useColorModeValue('white', 'darkLight')}
      >
        <Flex
          {...props}
          w="full"
          borderRadius="12px"
          justify="space-between"
          alignItems="center"
          p="20px"
          cursor="pointer"
          borderTop="0"
          // borderBottom="4px"
          borderColor={color}
          // Вернуть, когда добавится клубника!!!
          // -----------------------------------
          // _hover={
          //   !isActive && {
          //     transform: 'translateY(-5px)',
          //   }
          // }
          // -----------------------------------
        >
          <Box>
            <Text fontWeight="bold">{name}</Text>
            {subtitle && (
              <Text fontSize="sm" color="brandGray.200">
                {subtitle}
              </Text>
            )}
          </Box>
          <Center boxSize="40px" borderRadius="full">
            <Icon as={icon} w={6} h={6} transition=".3s" color={color} />
          </Center>
        </Flex>
      </Box>
    </Box>
  );
}
