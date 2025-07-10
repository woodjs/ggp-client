import { ListItem, ListIcon, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
/**
 * @param {Object} props
 * @param {import(react-icons/lib).IconType} [props.icon] - icon
 * @param {String} [props.text] - text
 * @param {Function} [props.onClick] - onClick function
 * @returns
 */
export default function ProfileSidebarItem({ icon, text, onClick }) {
  return (
    <ListItem flexShrink={0} p="8px 16px" cursor="pointer" onClick={onClick}>
      <ListIcon
        as={icon}
        color={useColorModeValue('green.500', 'brandYellow')}
        w="24px"
        h="24px"
      />
      {text}
    </ListItem>
  );
}
