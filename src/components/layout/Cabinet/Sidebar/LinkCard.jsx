import {
  Icon,
  Flex,
  Center,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

export default function LinkCard({
  name,
  icon,
  handleClick,
  cat = false,
  menuOpen,
  isCat,
  link,
}) {
  const router = useRouter();

  return (
    <Tooltip
      fontWeight="bold"
      borderRadius="16px"
      isDisabled={!!menuOpen}
      label={name}
      placement="right"
    >
      <Flex
        transition="all .3s"
        role="group"
        p="15px"
        position="relative"
        cursor="pointer"
        alignItems="center"
        onClick={handleClick}
        _hover={{
          background: useColorModeValue('brandGray.100', 'white'),
          color: 'black',
        }}
        borderRadius="16px"
        color="brandGray.200"
        bg={
          router.pathname === link &&
          useColorModeValue('brandGray.100', 'white')
        }
      >
        <Center
          borderRadius="50px"
          bg={useColorModeValue('white', 'brandGray.100')}
          transition="all .3s"
          // _groupHover={{ bg: 'brandGray.100' }}
          w="30px"
          height="30px"
        >
          <Icon
            w="20px"
            h="20px"
            as={icon}
            color={useColorModeValue('brandGreen.400', 'dark')}
          />
        </Center>
        <Text
          whiteSpace="nowrap"
          fontWeight="bold"
          opacity={menuOpen ? '1' : '0'}
          left="60px"
          position="absolute"
        >
          {name}
        </Text>
        {cat && menuOpen && (
          <Icon
            right="15px"
            pos="absolute"
            as={isCat ? ChevronUpIcon : ChevronDownIcon}
          />
        )}
      </Flex>
    </Tooltip>
  );
}
