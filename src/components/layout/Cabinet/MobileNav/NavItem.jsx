import { Center, Flex, Icon } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function NavItem({
  index,
  firstIndex,
  lastIndex,
  name,
  icon,
  handleClick,
  isOpen,
  link,
  ...rest
}) {
  if (link)
    return (
      <NextLink href={link}>
        <Flex
          onClick={handleClick}
          data-group
          transition="0.3s"
          cursor="pointer"
          color="brandGray.200"
          align="center"
          {...rest}
        >
          <Center
            bg={isOpen ? '#EDF2F7' : 'white'}
            borderRadius="12px"
            w="35px"
            h="35px"
            transition="0.3s"
          >
            <Icon w="20px" h="20px" as={icon} />
          </Center>
        </Flex>
      </NextLink>
    );

  return (
    <Flex
      onClick={handleClick}
      data-group
      transition="0.3s"
      cursor="pointer"
      color="brandGray.200"
      align="center"
      {...rest}
    >
      <Center
        bg={isOpen ? '#EDF2F7' : 'white'}
        borderRadius="12px"
        w="35px"
        h="35px"
        transition="0.3s"
      >
        <Icon w="20px" h="20px" as={icon} />
      </Center>
    </Flex>
  );
}
