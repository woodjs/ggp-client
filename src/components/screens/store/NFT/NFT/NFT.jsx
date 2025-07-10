import { Button, Flex, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import formatCurrency from '@/utils/formatCurrency';
import { BsLockFill } from 'react-icons/bs';

// const animationKeyframes = keyframes`
//   100% { transform: scale(1); }
// `;

// const animation = `${animationKeyframes} 0.8s forwards`;
export default function NFT({
  image,
  price,
  unit,
  isDisabled,
  isLimited,
  handleClick,
}) {
  const { t } = useTranslation('store');
  // if (isDisabled) {
  //   return (
  //     <Stack
  //       spacing="20px"
  //       maxW={{
  //         base: '85%',
  //         sm: null,
  //       }}
  //       w={{ base: 'full', sm: '48%', md: '24%', lg: '19%' }}
  //       cursor="pointer"
  //       transition="0.3s"
  //       _hover={{
  //         transform: 'translateY(-10px) scale(1.02)',
  //       }}
  //       position="relative"
  //     >
  //       <Image opacity="0.5" src={image} w="full" objectFit="cover" />

  //       <Stack opacity="0.5">
  //         <Flex justify="space-between" w="full">
  //           <Text>{t('nfts.price')} </Text>
  //           <Text fontWeight="bold">{formatCurrency(price)}</Text>
  //         </Flex>
  //         {!isLimited && unit && (
  //           <Flex justify="space-between" w="full">
  //             <Text>{t('nfts.pots')}</Text>
  //             <Text fontWeight="bold">{unit}</Text>
  //           </Flex>
  //         )}
  //       </Stack>

  //       <Button w="full" onClick={handleClick} isDisabled>
  //         {t('nfts.buy')}
  //       </Button>
  //       <Icon
  //         color="#e6e6e6"
  //         as={BsLockFill}
  //         position="absolute"
  //         top="10%"
  //         left="50%"
  //         boxSize="40%"
  //         transform="translateX(-50%)"
  //       />
  //     </Stack>
  //   );
  // }
  return (
    <Stack
      spacing="20px"
      maxW={{
        base: '85%',
        sm: null,
      }}
      w={{ base: 'full', sm: '48%', md: '24%', lg: '19%' }}
      cursor="pointer"
      // transform="scale(0)"
      // animation={animation}
      // sx={{
      //   animationDelay: `${id * 0.3}s`,
      // }}
      transition="0.3s"
      _hover={{
        transform: 'translateY(-10px) scale(1.02)',
      }}
    >
      <Image src={image} w="full" objectFit="cover" />

      <Stack>
        <Flex justify="space-between" w="full">
          <Text>{t('nfts.price')} </Text>
          <Text fontWeight="bold">{formatCurrency(price)}</Text>
        </Flex>
        {!isLimited && unit && (
          <Flex justify="space-between" w="full">
            <Text>{t('nfts.pots')} </Text>
            <Text fontWeight="bold">{unit}</Text>
          </Flex>
        )}
        {isLimited && (
          <Flex justify="space-between" w="full">
            <Text>{t('nfts.quantity')}: </Text>
            <Text fontWeight="bold">{unit}</Text>
          </Flex>
        )}
      </Stack>

      <Button w="full" onClick={handleClick} isDisabled={isDisabled}>
        {t('nfts.buy')}
      </Button>
    </Stack>
  );
}
