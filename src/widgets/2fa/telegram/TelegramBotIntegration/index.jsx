import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  Button,
  HStack,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

import { useTelegram, useTelegramKey } from '@/entities/telegram';

export function ModalTelegramBotIntegration({
  isOpen,
  onClose,
  accessClose = true,
}) {
  const queryClient = useQueryClient();
  const { data, isLoading } = useTelegramKey();
  const { data: telegram, refetch } = useTelegram();

  useEffect(() => {
    let intervalId;
    if (!telegram?.isLinked) {
      intervalId = setInterval(() => {
        refetch();
      }, 10000);
    }

    if (telegram?.isLinked) {
      onClose();
      // toast.success('Бот успешно привязан');
      queryClient.invalidateQueries('protection-methods');
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [telegram?.isLinked]);

  if (isLoading) return null;

  return (
    <Modal isOpen={isOpen} onClose={accessClose ? onClose : console.log}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Активировать Telegram 2FA</ModalHeader>
        {accessClose && <ModalCloseButton />}
        <ModalBody pb={6}>
          <Text mb="30px" textAlign="center">
            Перейдите по ссылке нажав на кнопку ниже
          </Text>
          <Link target="_blank" href={data?.link}>
            <Button variant="outline" w="full">
              <HStack>
                <Image src="/images/icons/telegram.svg" />
                <Text>Telegram</Text>
              </HStack>
            </Button>
          </Link>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
