import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  Stack,
  Text,
  useClipboard,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export default function QRCodeForm({
  amount,
  currency,
  name,
  network,
  address,
  qrCode,
}) {
  const { t } = useTranslation('finance');
  const { hasCopied, onCopy } = useClipboard(address);
  return (
    <Box>
      <Center
        maxW="500px"
        w="full"
        mx="auto"
        flexDirection="column"
        textAlign="center"
      >
        <Text color="brandGray.200" fontWeight="bold">
          {t('payment-title-1')}{' '}
          <Text as="span" color={useColorModeValue('dark', 'white')}>
            {amount} {currency}
          </Text>{' '}
          {t('payment-title-2')}
        </Text>

        <Box w="full" mt="24px">
          <Text textAlign="left" fontWeight="bold" fontSize="sm">
            {t('payment-address', { name })}
          </Text>
          <Box
            my="10px"
            p="10px"
            borderRadius="6px"
            bg={useColorModeValue(
              'rgba(0,0,0,0.04)',
              'rgba(255, 255, 255, 0.04)'
            )}
          >
            {address}
          </Box>
          <Flex justify="flex-end">
            <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
          </Flex>
        </Box>

        <Image src={qrCode} alt="" boxSize="128px" mt="16px" />

        <Stack mt="50px">
          {currency !== 'USDT' && (
            <Alert status="info">
              <AlertIcon />
              <AlertDescription>
                Конвертация при пополнений производится по курсу{' '}
                <Link
                  href="https://www.coingecko.com/"
                  target="_blank"
                  textDecor="underline"
                >
                  coingecko.com
                </Link>
              </AlertDescription>
            </Alert>
          )}
          <Alert status="error" borderRadius="6px">
            <AlertIcon />
            <Box>
              <Text>
                {t('payment-alert-amount', {
                  amount,
                  currency,
                })}{' '}
                {t('payment-alert-refill')}
              </Text>
              <Text fontWeight="bold">
                {t('payment-alert-network', {
                  network,
                })}
              </Text>
            </Box>
          </Alert>
        </Stack>
      </Center>
    </Box>
  );
}
