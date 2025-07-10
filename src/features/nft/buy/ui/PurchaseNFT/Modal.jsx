import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertIcon,
  Button,
  Checkbox,
  Flex,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useCollection } from '@/entities/collection-nft';

import { usePurchaseNFT } from '../../model';
// import PaymentModalV2 from '@/components/screens/store/NFT/PaymentModal/PaymentModalV2';

export function PurchaseModalNFT({
  isOpen,
  onClose,
  nft,
  currentPrice,
  plantingId,
}) {
  const router = useRouter();
  const { mutate, isLoading } = usePurchaseNFT();
  const { data } = useCollection(router.query.collectionId);
  const { t } = useTranslation('store');

  const additionPrice = useMemo(() => (nft.price * 10) / 100, []);
  const [price, setPrice] = useState(currentPrice);
  const [promocode, setPromocode] = useState('');
  const [buyData, setBuyData] = useState({
    nftId: nft.id,
  });

  const handleClick = () => {
    mutate(buyData, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  useEffect(() => {
    if (data?.parameters?.plantId) {
      setBuyData({
        ...buyData,
        insurance: true,
        reporting: true,
        plantingId,
      });
      setPrice((prev) => prev + (nft.price * 20) / 100);
    }
  }, []);

  return (
    <>
      {/* {true && <PaymentModalV2 isOpen onClose={() => {}} data={{ ...nft }} />} */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{nft.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack w="full">
              {nft.description && (
                <Alert status="info" alignItems="flex-start">
                  <AlertIcon />
                  <Text whiteSpace="pre-line">{nft.description}</Text>
                </Alert>
              )}

              {data?.parameters?.plantId && (
                <>
                  <Checkbox
                    size="md"
                    colorScheme="green"
                    defaultChecked
                    flex={1}
                    onChange={(e) => {
                      setBuyData({
                        ...buyData,
                        [e.target.name]: e.target.checked,
                      });

                      if (e.target.checked) {
                        setPrice(
                          (prevPrice) => prevPrice + (nft.price * 10) / 100
                        );
                      } else {
                        setPrice(
                          (prevPrice) => prevPrice - (nft.price * 10) / 100
                        );
                      }
                    }}
                  >
                    {t('insurance')} ({additionPrice} USDT)
                  </Checkbox>
                  <Checkbox
                    name="reporting"
                    size="md"
                    colorScheme="green"
                    defaultChecked
                    flex={1}
                    onChange={(e) => {
                      setBuyData({
                        ...buyData,
                        [e.target.name]: e.target.checked,
                      });

                      if (e.target.checked) {
                        setPrice(
                          (prevPrice) => prevPrice + (nft.price * 10) / 100
                        );
                      } else {
                        setPrice(
                          (prevPrice) => prevPrice - (nft.price * 10) / 100
                        );
                      }
                    }}
                  >
                    {t('reporting')} ({additionPrice} USDT)
                  </Checkbox>
                </>
                // <Accordion>
                //   <AccordionItem>
                //     <AccordionButton>
                //       <Checkbox
                //         size="md"
                //         colorScheme="green"
                //         defaultChecked
                //         flex={1}
                //       >
                //         Страховка (10 USDT)
                //       </Checkbox>
                //       <AccordionIcon />
                //     </AccordionButton>
                //     <AccordionPanel pb={4}>
                //       Защитит инвестиции в том маловероятном случае, если с
                //       растением что-то случится.
                //     </AccordionPanel>
                //   </AccordionItem>

                //   <AccordionItem>
                //     <AccordionButton>
                //       <Checkbox
                //         name="reporting"
                //         size="md"
                //         colorScheme="green"
                //         defaultChecked
                //         flex={1}
                //         onChange={(e) => console.log(e.target.checked)}
                //       >
                //         Отчетность (10 USDT)
                //       </Checkbox>
                //       <AccordionIcon />
                //     </AccordionButton>
                //     <AccordionPanel pb={4}>
                //       Вы сможете наблюдать за развитием ваших растений в личном
                //       кабинете.
                //     </AccordionPanel>
                //   </AccordionItem>
                // </Accordion>
              )}

              <Stack>
                <Text>{t('modalPayment.promo.title')}</Text>
                <HStack>
                  <Input
                    placeholder={t('modalPayment.promo.placeholder')}
                    value={promocode}
                    onChange={(e) => setPromocode(e.target.value)}
                  />
                  <Button
                    onClick={() => {
                      if (!promocode.length) return false;

                      setBuyData({ ...buyData, promocode });

                      return true;
                    }}
                  >
                    {t('modalPayment.promo.button')}
                  </Button>
                </HStack>
              </Stack>

              {nft.price && (
                <Flex justify="space-between">
                  <Text>{t('payment')}</Text>
                  <Text fontWeight="bold">{price} USDT</Text>
                </Flex>
              )}
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleClick} isLoading={isLoading} w="full">
              {nft.price ? 'Оплатить' : 'Получить'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
