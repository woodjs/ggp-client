// import { TimeIcon } from '@chakra-ui/icons';
import { useTranslation } from 'next-i18next';
import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AiTwotoneShopping } from 'react-icons/ai';

export default function CollectionNFT({
  id,
  image,
  name,
  intervalPaymentDays,
  minPrice,
  minPercent,
  type,
}) {
  const router = useRouter();
  const { t } = useTranslation('store');
  return (
    <Card p="16px" borderRadius="24px" role="group" w="full">
      <Box w="full" pos="relative" mb="30px" maxH="263px" h="full">
        <Image
          src={image}
          objectFit="cover"
          w="full"
          h="full"
          borderRadius="12px"
        />

        <Center
          zIndex={1}
          borderRadius="12px"
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          transition=".3s"
          opacity="0"
          _groupHover={{
            opacity: '1',
          }}
          boxSize="full"
          bg="rgba(0,0,0,0.6)"
        >
          <Button onClick={() => router.push(`/account/collection/${id}`)}>
            <HStack>
              <AiTwotoneShopping />
              <Text>{t('show')}</Text>
            </HStack>
          </Button>
        </Center>
      </Box>

      <Stack spacing={1}>
        <HStack wrap="wrap">
          <Text fontWeight="bold" fontSize="20px">
            {name}
          </Text>
          {/* <Badge colorScheme="green">FARM</Badge>
          <Badge colorScheme="purple">EXCLUSIVE</Badge> */}
        </HStack>

        {type === 'income' && (
          <>
            <Text>
              {t('revenue-every')} {intervalPaymentDays} {t('days')}
            </Text>
            {minPrice && (
              <>
                <Flex w="full" justify="space-between">
                  <Text>{t('invest-from')}</Text>
                  <Text> ${minPrice}</Text>
                </Flex>
                <Flex w="full" justify="space-between">
                  <Text>{t('revenue-from')}</Text>
                  <Text>{minPercent}%</Text>
                </Flex>
              </>
            )}
          </>
        )}

        {/* <Text fontSize="xs">Ближайшая выплата по NFT: 01/01/2024</Text> */}
      </Stack>
    </Card>
  );
}
