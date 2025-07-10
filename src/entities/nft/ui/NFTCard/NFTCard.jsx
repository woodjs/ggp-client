import { Box, Flex, Image, Stack, Text, VStack } from '@chakra-ui/react';

export function NFTCard({
  name,
  image,
  css,
  attributes,
  isDisabled = false,
  isGift,
  Badge,
  Footer,
}) {
  return (
    <Stack spacing="20px" pos="relative" mb="10px">
      <Box>
        {isGift && (
          <Image
            src="/images/nft/gift.png"
            boxSize="60px"
            pos="absolute"
            right="-10px"
            top="-10px"
            zIndex={2}
          />
        )}
        <Box
          maxW="300px"
          w="full"
          h="full"
          overflow="hidden"
          borderRadius="24px"
          p="16px"
          style={{ background: css?.background }}
          opacity={isDisabled ? '0.5' : 1}
        >
          <VStack spacing="16px" w="full" h="full">
            <Box pos="relative">
              <Image
                src={image}
                maxH="270px"
                boxSize="full"
                borderRadius="12px"
                objectFit="cover"
              />
              {Badge}
            </Box>

            <Stack spacing="6px" p="8px" style={{ color: css?.color }} w="full">
              <Text
                fontFamily="BuyanBold"
                fontWeight="bold"
                // textTransform="uppercase"
                lineHeight="23px"
                minH="50px"
                letterSpacing="-2%"
                fontSize="23px"
                textAlign="center"
              >
                {name}
              </Text>
              {attributes.map((item, index) => (
                <Flex
                  w="full"
                  justify="space-between"
                  pb="8px"
                  borderBottom={
                    index + 1 === attributes.length
                      ? 'none'
                      : `1px solid ${css?.color}`
                  }
                  fontWeight="bold"
                  // fontSize="14px"
                >
                  <Text>{item.name}</Text>
                  <Text>{item.value}</Text>
                </Flex>
              ))}
            </Stack>
          </VStack>
        </Box>
      </Box>

      {Footer && <Stack spacing="16px">{Footer}</Stack>}
    </Stack>
  );
}
