import Modal from '@/components/layout/Modal/Modal';
import { useBuyNFT } from '@/hooks/nft/useNFT';
// import { useBalance } from '@/hooks/user/useBalance';
import usePromocode from '@/hooks/user/usePromocode';
// import formatNumber from '@/utils/formatNumber';
import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack,
  chakra,
  useBreakpointValue,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

function PaymentModal({
  isOpen,
  onClose,
  data,
  video,
  videoMobile,
  handleSuccess = () => {},
}) {
  const brandColor = useColorModeValue('brandGreen.400', 'brandYellow');
  const { t } = useTranslation('store');
  // const balance = useBalance();
  const buyNft = useBuyNFT();

  const [isDisabled, setIsDisabled] = useState(false);
  const [voucher, setVoucher] = useState('');
  const [isApplied, setIsApplied] = useState(false);
  const promo = usePromocode(voucher);

  useEffect(() => {
    if (!promo.data) return;
    setIsApplied(true);
  }, [promo.data]);

  useEffect(() => {
    if (!voucher) {
      setIsApplied(false);
      promo.refetch();
    }
  }, [voucher]);
  const [isLandscape] = useMediaQuery('(orientation: landscape)');
  const videoURL = useBreakpointValue({ base: videoMobile, md: video });

  return (
    <Modal
      modalContentProps={{
        maxW: '100%',
        w: 'fit-content',
      }}
      isOpen={isOpen}
      onClose={onClose}
    >
      <chakra.video
        autoPlay
        muted
        playsInline
        opacity="0"
        position="absolute"
        scrollMargin={isLandscape ? video : videoURL}
      />
      <Stack
        flexDirection={{
          base: 'column',
          md: 'row',
        }}
        gap="30px 50px"
      >
        <Image
          maxW={{ base: '150px', md: '250px' }}
          m="auto"
          src={data.image}
        />
        <VStack maxW={{ md: '300px' }} spacing="16px" align="stretch">
          <Text fontSize="xl" fontWeight="bold">
            {t('modalPayment.title')}
          </Text>
          <Box>
            <Text fontSize="md" fontWeight="bold">
              NFT {data.name}
            </Text>
            <Text>{t('modalPayment.desc')}</Text>
          </Box>
          {/* <VStack spacing="8px" align="stretch">
            <Text fontSize="md" fontWeight="bold">
              Способ оплаты
            </Text>
            <HStack>
              {paymentMethods.map((method) => (
                <Box
                  opacity={method.isDisabled ? 0.5 : 1}
                  _hover={
                    !method.isDisabled && {
                      opacity: 0.8,
                    }
                  }
                  borderWidth="1px"
                  borderRadius="md"
                  p="10px"
                  cursor={method.isDisabled ? 'not-allowed' : 'pointer'}
                  borderColor={method.isSelected ? brandColor : 'brandGray.200'}
                  onClick={() =>
                    !method.isDisabled && handleSelectPaymentMethod(method)
                  }
                  key={method.id}
                >
                  <Text>{method.name}</Text>
                </Box>
              ))}
            </HStack>
          </VStack> */}
          <VStack spacing="8px" align="stretch">
            <Text fontSize="md" fontWeight="bold">
              {t('modalPayment.promo.title')}
            </Text>
            <HStack>
              <InputGroup>
                <Input
                  borderColor={isApplied && brandColor}
                  value={voucher}
                  onChange={(e) => setVoucher(e.target.value)}
                  isReadOnly={isApplied || promo.isLoading}
                  placeholder={t('modalPayment.promo.placeholder')}
                  color={isApplied && brandColor}
                />
                <InputRightElement>
                  {isApplied && <Icon color={brandColor} as={CheckIcon} />}
                </InputRightElement>
              </InputGroup>
              {!isApplied ? (
                <Button
                  isLoading={isDisabled || promo.isLoading}
                  onClick={() => promo.refetch()}
                >
                  {t('modalPayment.promo.button')}
                </Button>
              ) : (
                <Button onClick={() => setVoucher('')}>
                  {t('modalPayment.promo.button-cancel')}
                </Button>
              )}
            </HStack>
          </VStack>
          <VStack spacing="8px" align="stretch">
            {/* <Box>
              <Text fontSize="md" fontWeight="bold">
                {t('modalPayment.price', { price: formatNumber(price) })}
              </Text>
              <Skeleton w="50%" h="14px" isLoaded={balance.isSuccess}>
                <Text fontSize="sm">
                  {t('modalPayment.balance', {
                    balance: formatNumber(balance.data?.usd || 0),
                  })}
                </Text>
              </Skeleton>
              {isApplied && (
                <Text fontSize="sm">
                  {t('modalPayment.discount', {
                    discount: `${formatNumber(
                      promo.promocode.amount
                    )}${getDiscountTypeText()}`,
                    code: promo.promocode.code,
                  })}
                </Text>
              )}
              {isApplied && (
                <Text fontSize="lg" fontWeight="bold">
                  {t('modalPayment.total', {
                    total: formatNumber(basePrice),
                  })}
                </Text>
              )}
            </Box> */}
            <Button
              onClick={() => {
                setIsDisabled(true);
                // handleSuccess({ id: 12 });
                buyNft.mutate(
                  {
                    nftId: data.id,
                    promocode: voucher,
                    plantingId: 1,
                  },
                  {
                    onSuccess: (res) => handleSuccess(res),
                    onSettled: () => setIsDisabled(false),
                  }
                );
              }}
            >
              {t('modalPayment.button-payment')}
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Modal>
  );
}

export default PaymentModal;
