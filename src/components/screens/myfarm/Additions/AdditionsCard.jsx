import { Card } from '@/components/Card';
import formatCurrency from '@/utils/formatCurrency';
import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

function AdditionsCard({
  title,
  description,
  image,
  onBuy,
  imageTransform,
  isBought,
  price,
}) {
  const brandColor = useColorModeValue('brandGreen.400', 'brandYellow');
  return (
    <Card
      css={{
        marginTop: '150px',
      }}
      borderColor={isBought ? brandColor : 'transparent'}
      borderWidth="2px"
      position="relative"
      w="full"
      maxW="350px"
      p="30px"
      pt="100px"
      role="group"
    >
      <VStack justify="space-between" h="full" w="full">
        <VStack>
          <Box
            userSelect="none"
            transition="all 0.35s cubic-bezier(0.58, 0.53, 0.3, 0.89)"
            _groupHover={{
              transform: 'translateY(-10px)',
            }}
            position={'absolute'}
            top="-150px"
          >
            <Image
              css={{
                aspectRatio: '1/1',
                transform: imageTransform,
              }}
              w="full"
              maxW="250px"
              maxH="250px"
              objectFit="contain"
              src={image}
            />
          </Box>

          <Text fontSize="3xl" fontWeight="bold" mb="30px">
            {title}
          </Text>
          <Text
            textAlign="center"
            fontSize="md"
            fontWeight="semibold"
            mb="30px"
          >
            {description}
          </Text>
        </VStack>
        <Box w="full">
          {isBought ? (
            <HStack justify="center">
              <Text
                color={brandColor}
                fontSize="2xl"
                fontWeight="bold"
                textAlign="center"
              >
                Куплено
              </Text>
              <CheckIcon color={brandColor} />
            </HStack>
          ) : (
            <HStack
              mt="10px"
              w="full"
              alignItems="center"
              justify="space-between"
            >
              <Text
                fontSize="2xl"
                textAlign="center"
                minW="40%"
                fontWeight="bold"
              >
                {formatCurrency(price)}
              </Text>
              <Button p="20px" w={{ base: 'full' }} onClick={onBuy}>
                Купить
              </Button>
            </HStack>
          )}
        </Box>
      </VStack>
    </Card>
  );
}

export default AdditionsCard;
