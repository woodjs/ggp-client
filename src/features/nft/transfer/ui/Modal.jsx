import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import {
  Alert,
  AlertIcon,
  Button,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Stack,
  Text,
  Image,
  VStack,
  Step,
  Stepper,
  useSteps,
  Progress,
  useColorMode,
} from '@chakra-ui/react';

import { Form2FA, useForm2FA } from '@/features/security/2fa';
import { AvatarAndLogin } from '@/widgets/profile/ui';
import { useNFTSend } from '../model';

export function TransferModalNFT({ isOpen, onClose, id, name, image }) {
  const { codes, onChange, isValidateForm } = useForm2FA();
  const { mutate } = useNFTSend();

  const { activeStep, setActiveStep } = useSteps({
    initialStep: 0,
  });

  const [login, setLogin] = useState('');
  const [loginError, setLoginError] = useState('');
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if (!login.length) return setLoginError('');
    if (!login) return setLoginError('required-login');
  }, [login]);

  useEffect(() => {
    setValidForm(isValidateForm());
  }, [codes]);

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const { t } = useTranslation('myfarm');

  const transferLabel = t('transfer-step-1');
  const confirmLabel = t('2fa-auth');

  const steps = [
    {
      label: transferLabel,
      content: (
        <Stack width="100%" align="center">
          <Image src={image} w="200px" borderRadius="16px" />
          <VStack align="flex-start" width="100%">
            {/* <Text>
               {name} #{id}
             </Text> */}
            {/* <Text>
               {t('balance')}: {balance}
             </Text> */}
            <Alert status="info" alignItems="flex-start">
              <AlertIcon />
              <Text whiteSpace="pre-line">{t('transfer-warning')}</Text>
            </Alert>
            <FormControl isInvalid={!!loginError}>
              <FormLabel fontWeight="bold">{t('transfer-by-login')}</FormLabel>
              <Input name="login" onChange={handleLoginChange} value={login} />
              <FormErrorMessage>{t(loginError)}</FormErrorMessage>
            </FormControl>
            <AvatarAndLogin login={login} />
            <HStack w="full" my="10px">
              <Button
                w="full"
                onClick={() => setActiveStep(1)}
                isDisabled={!login}
              >
                {t('next-step')}
              </Button>
            </HStack>
          </VStack>
        </Stack>
      ),
    },
    {
      label: confirmLabel,
      content: (
        <VStack
          justify="flex-start"
          align="center"
          spacing="18px"
          my={4}
          width="100%"
        >
          <Form2FA codes={codes} onChange={onChange} action="transfer-nft" />
          <Button w="full" onClick={() => setActiveStep(0)}>
            {t('reset')}
          </Button>
          <Button
            w="full"
            onClick={() =>
              mutate(
                { codes, nftId: id, loginRecieve: login },
                {
                  onSettled: () => {
                    onClose();
                  },
                }
              )
            }
            isDisabled={!validForm}
          >
            {t('transfer-btn')}
          </Button>
        </VStack>
      ),
    },
  ];

  const { colorMode } = useColorMode();
  const progressColor = colorMode === 'dark' ? 'yellow' : 'green';

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {t('transfer')} {name} #{id}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stepper activeStep={activeStep} width="100%">
            <VStack align="center" justify="flex-start" width="100%">
              <Progress
                colorScheme={progressColor}
                value={(activeStep + 1) * 50}
                position="absolute"
                height="3px"
                width="full"
                top="50px"
              />
              {steps.map((step, index) => (
                <Step key={step.label} width="100%">
                  <VStack width="100%">
                    <VStack width="100%">
                      {activeStep === index && step.content}
                    </VStack>
                  </VStack>
                </Step>
              ))}
            </VStack>
          </Stepper>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
