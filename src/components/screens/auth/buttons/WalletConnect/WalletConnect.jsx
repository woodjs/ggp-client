import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { Button, HStack, Image, Text, useDisclosure } from '@chakra-ui/react';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount, useSignMessage } from 'wagmi';

import { useCryptoWallet } from '@/hooks/useCryptoWallet';

import ModalCrypto from '../../ModalCrypto/ModalCrypto';

export default function WalletConnect() {
  const router = useRouter();
  const modalForm = useDisclosure();
  const { auth, getNonce } = useCryptoWallet();

  const { isOpen, open } = useWeb3Modal();
  const { address } = useAccount();

  const cachedAccount = useMemo(() => address, [address]);
  const [isClicked, setIsClicked] = useState(false);
  const [serverData, setServerData] = useState(null);
  const [signature, setSignature] = useState(null);

  // Запрос на сервер
  const request = async (sign, jwt, values) => {
    const { login } = router.query;
    let payload = { signature: sign, jwt };
    if (values) {
      payload = { ...payload, ...values };
    }
    if (login) {
      payload = { ...payload, sponsorLogin: login };
    }

    return auth.mutateAsync(payload, {
      onSuccess: (res) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: values ? 'registration' : 'authorization',
          user_id: res?.id,
          track: 'walletConnect',
        });
      },
    });
  };

  const { signMessageAsync } = useSignMessage({
    message: serverData?.nonce,
    onSuccess: (res) => {
      setSignature(res);
    },
  });

  // Запрос на получение nonce, jwt
  const getServerData = async () => {
    try {
      const res = await getNonce(cachedAccount);
      setServerData(res);
      setSignature(null);

      return res;
    } catch {
      return setIsClicked(false);
    }
  };

  // Функция для запроса на сервер или открытия модального окна
  const handleRequest = async (sign) => {
    if (!serverData.exist) return modalForm.onOpen();

    return request(sign, serverData.jwt);
  };

  // Запрос на сервер с помощью модального окна
  const handleClickModal = async (values) => {
    request(signature, serverData.jwt, values);
  };

  // Если пользователь подключил кошелек или его изменил, то обновляем данные с сервера
  useEffect(() => {
    if (!cachedAccount || !isClicked) return;
    if (serverData?.address === cachedAccount) return;
    getServerData();
  }, [cachedAccount, isClicked]);

  useEffect(() => {
    if (!serverData || !isClicked) return;
    (async () => {
      try {
        if (!signature) {
          const sign = await signMessageAsync();
          await handleRequest(sign);
          return true;
        }

        await handleRequest(signature);
        return true;
      } catch (e) {
        return false;
      } finally {
        setIsClicked(false);
      }
    })();
  }, [serverData, isClicked]);

  // Если пользоватле открыл web3modal и решил его сразу закрыть, то сбрасываем состояние
  useEffect(() => {
    if (!isClicked) return;
    if (!isOpen && !cachedAccount) {
      setIsClicked(false);
    }
  }, [isOpen]);

  return (
    <>
      <Button
        variant="border"
        fontWeight={400}
        onClick={() => {
          setIsClicked(true);
          if (!cachedAccount) return open();

          return true;
        }}
        isLoading={isClicked}
      >
        <HStack>
          <Image
            src="/images/icons/walletconnect.png"
            alt=""
            w="26px"
            h="26px"
          />
          <Text>WalletConnect</Text>
        </HStack>
      </Button>
      <ModalCrypto
        isOpen={modalForm.isOpen}
        onClose={modalForm.onClose}
        handleClick={handleClickModal}
      />
    </>
  );
}
