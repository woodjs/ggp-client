import { useState, useEffect } from 'react';
import {
  HStack,
  PinInput,
  PinInputField,
  VStack,
  useClipboard,
  Text,
  Image,
  Alert,
  AlertIcon,
  Box,
} from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';
import { toast } from 'react-toastify';

import Modal from '@/components/layout/Modal/Modal';
import { useGA } from '@/hooks/user/useGA';

function ModalGA({ t, isOpen, onClose, handleConfirm }) {
  const [serverData, setServerData] = useState({});
  const { data, isLoading } = useGA(isOpen && !serverData.key);
  const [code, setCode] = useState(null);
  const { onCopy, setValue, hasCopied } = useClipboard(null);

  const validate = () => {
    if (code && code.length === 6) {
      return true;
    }
    return false;
  };
  const onConfirm = () => {
    if (validate()) {
      handleConfirm({ ga: code }, () => {
        setCode('');
      });
    }
  };

  useEffect(() => {
    if (data?.key) {
      setValue(data.key);
      setServerData(data);
    }
  }, [data]);

  useEffect(() => {
    if (hasCopied) {
      toast.success(t('ga-copy-key'));
    }
  }, [hasCopied]);

  if (isLoading) return null;

  return (
    <Modal
      size="xl"
      isOpen={isOpen}
      onClose={onClose}
      handleClick={onConfirm}
      title="Google 2FA"
      isDisabled={!validate()}
      isLoading={isLoading}
    >
      <VStack spacing="20px">
        <Image
          rounded="lg"
          css={{
            aspectRatio: '1/1',
          }}
          maxW="140px"
          objectFit="cover"
          src={serverData.qrcode ?? data?.qrcode}
        />
        <Text textAlign="center">{t('ga-qrcode')}</Text>
        <HStack
          borderColor="brandGray.200"
          borderWidth="1px"
          padding="10px"
          rounded="md"
          _active={{
            opacity: 0.8,
          }}
          onClick={onCopy}
          spacing="10px"
          alignItems="center"
          justifyContent="space-between"
          w="full"
          cursor="pointer"
        >
          <Box overflow="hidden">
            <Text fontWeight="bold" fontSize="14px">
              {serverData.key ?? data?.key}
            </Text>
          </Box>

          <CopyIcon />
        </HStack>

        <Alert rounded="md" status="warning">
          <AlertIcon />
          {t('ga-desc')}
        </Alert>

        <VStack w="fit-content">
          <Text fontSize="md" w="full">
            {t('ga-code')}
          </Text>
          <HStack>
            <PinInput size="md" onChange={setCode} type="numeric">
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </VStack>
      </VStack>
    </Modal>
  );
}

export default ModalGA;
