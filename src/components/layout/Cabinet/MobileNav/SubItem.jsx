import { Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function SubItem({ handleClick, name, link }) {
  return (
    <NextLink href={link}>
      <Flex
        onClick={handleClick}
        p={3}
        fontSize="sm"
        fontWeight="bold"
        _hover={{ textDecor: 'none', bg: '#AEC8CA', color: '#fff' }}
        borderRadius="15px"
        // mb="16px"
      >
        {name}
      </Flex>
    </NextLink>
  );
}
