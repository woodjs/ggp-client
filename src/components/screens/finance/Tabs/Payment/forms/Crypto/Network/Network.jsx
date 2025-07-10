import { useState } from 'react';
import {
  Button,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export default function NetworkForm({ data, handleClick }) {
  const { t } = useTranslation();
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  return (
    <>
      <VStack alignItems="flex-start">
        {data.map((network) => (
          <HStack
            key={network.id}
            w="full"
            border="1px"
            borderColor={
              selectedNetwork && selectedNetwork.id === network.id
                ? useColorModeValue('brandGreen.400', 'brandYellow')
                : useColorModeValue('gray.200', 'whiteAlpha.300')
            }
            p="8px"
            cursor="pointer"
            transition="0.3s"
            _hover={{
              borderColor: useColorModeValue('brandGreen.400', 'brandYellow'),
            }}
            borderRadius="6px"
            onClick={() => setSelectedNetwork(network)}
          >
            <Image src={network.icon} boxSize="28px" />
            <Stack spacing="2px">
              <Text fontWeight="bold">{network.name}</Text>
              <Text>{network?.description}</Text>
            </Stack>
          </HStack>
        ))}
      </VStack>
      <Button
        w="full"
        mt="30px"
        onClick={() => {
          handleClick(selectedNetwork);
        }}
      >
        {t('global:confirm')}
      </Button>
    </>
  );
}
