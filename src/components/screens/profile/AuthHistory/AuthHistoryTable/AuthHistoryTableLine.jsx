import { HStack, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import { GoBrowser } from 'react-icons/go';
import DeviceIcon from '../../DeviceIcon';

/**
 * @param {Object} props
 * @param {Boolean} [props.isLine] - is line or not
 * @param {Object} [props.browser] - browser object
 * @param {String} [props.browser.name] - browser name
 * @param {Object} [props.device] - device object
 * @param {String} [props.device.type] - device type
 * @param {String} [props.device.name] - device name
 * @param {String} [props.location] - location string
 * @param {String} [props.date] - date string
 * @returns
 */
function AuthHistoryTableLine({
  isLine = true,
  browser,
  device,
  location,
  date,
}) {
  return (
    <SimpleGrid borderTopWidth={isLine && '2px'} w="full" pt="20px" columns={4}>
      <HStack>
        <Icon boxSize="30px" as={GoBrowser} />
        <Text>{browser?.name}</Text>
      </HStack>
      <HStack>
        <DeviceIcon device={device?.type} />
        <Text>{device?.name}</Text>
      </HStack>
      <Text>{location}</Text>
      <Text>{date}</Text>
    </SimpleGrid>
  );
}

export default AuthHistoryTableLine;
