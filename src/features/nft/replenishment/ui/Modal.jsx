import { formatCurrency } from '@/shared/lib';
import { getPercentByAmount } from '@/shared/lib/dynamic-nft-calcs';
import { useTranslation } from 'next-i18next';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
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
import { useState } from 'react';
import { useReplenishmentNFT } from '../model';

export default function ModalReplenishment({
  isOpen,
  onClose,
  currentAmount,
  percent,
  nftId,
}) {
  const [amount, setAmount] = useState(10);
  const { t } = useTranslation('myfarm');
  const newPercent = getPercentByAmount(currentAmount + amount);
  const { mutate, isLoading } = useReplenishmentNFT();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t('modal-title')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Stack>
            <FormControl isInvalid={!amount}>
              <FormLabel>{t('modal-sum')}</FormLabel>
              <Input
                type="number"
                value={amount}
                onChange={(e) => {
                  if (!e.target.value) return setAmount('');
                  return setAmount(Number(e.target.value));
                }}
              />
              <FormErrorMessage>{t('modal-incorrect')}</FormErrorMessage>
            </FormControl>

            <Box>
              <Text color="brandGray.200" fontWeight="bold">
                {t('modal-current-sum')}
              </Text>
              <Text fontSize="18px">
                {formatCurrency({ amount: currentAmount, currency: 'USDT' })}
              </Text>
            </Box>

            <Box>
              <Text color="brandGray.200" fontWeight="bold">
                {t('modal-current-percent')}
              </Text>
              <Text fontSize="18px">{percent}%</Text>
            </Box>
            <Box>
              <Text color="brandGray.200" fontWeight="bold">
                {t('modal-new-percent')}
              </Text>
              <Text fontSize="18px">{newPercent * 100}%</Text>
            </Box>

            <Alert status="info">
              <AlertIcon />
              {t('modal-info')}
            </Alert>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button
            isLoading={isLoading}
            isDisabled={amount < 1}
            w="full"
            onClick={() =>
              mutate(
                {
                  amount,
                  nftId,
                },
                {
                  onSuccess: () => onClose(),
                }
              )
            }
          >
            {t('modal-top-up')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
