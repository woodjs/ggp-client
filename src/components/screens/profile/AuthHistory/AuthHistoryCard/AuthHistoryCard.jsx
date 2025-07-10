import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { GoBrowser } from 'react-icons/go';
import Card from '../../../../Card/Card';
import DeviceIcon from '../../DeviceIcon';

/**
 * @typedef {import('../authHistory').HistoryItem} HistoryItem
 * @param {HistoryItem} props
 *
 */

function AuthHistoryCard({ title = null, browser, device, location, date }) {
  return (
    <Card w="full">
      {title && (
        <Box
          borderBottom="1px"
          borderColor="rgba(160, 174, 192, 0.5);"
          p="20px"
        >
          <Text fontWeight={700}>title</Text>
        </Box>
      )}
      <VStack w="full" alignItems="start" p="20px">
        <HStack w="full">
          <Text>Браузер</Text>
          <Box w="full" h="2px" backgroundColor="brandGray.100" />
          <HStack flexShrink={0}>
            <Icon boxSize="30px" as={GoBrowser} />
            <Text>{browser?.name}</Text>
          </HStack>
        </HStack>
        <HStack w="full">
          <Text>Устройство</Text>
          <Box w="full" h="2px" backgroundColor="brandGray.100" flexGrow={1} />
          <HStack flexShrink={0}>
            <DeviceIcon device={device?.type} />
            <Text>{device?.name}</Text>
          </HStack>
        </HStack>
        <HStack w="full">
          <Text>Локация</Text>
          <Box w="full" h="2px" backgroundColor="brandGray.100" flexGrow={1} />
          <Text flexShrink={0}>{location}</Text>
        </HStack>
        <HStack w="full">
          <Text>Последняя активность</Text>
          <Box w="full" h="2px" backgroundColor="brandGray.100" flexGrow={1} />
          <Text flexShrink={0}>{date}</Text>
        </HStack>
      </VStack>
    </Card>
  );
}

export default AuthHistoryCard;
