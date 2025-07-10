import { useEffect, useMemo, useState } from 'react';
import { Button, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { useWeb3Modal, Web3Button } from '@web3modal/react';
import { useAccount, useDisconnect, useSignMessage } from 'wagmi';
import { useCryptoWallet } from '@/hooks/useCryptoWallet';
import { toast } from 'react-toastify';
import StoreCardsContainer from '../screens/store/StoreCards/Cards.container';
import StoreCardsLocal from '../screens/store/StoreCards/CardsLocalBuy.container';

export default function ButtonCryptoWallet() {
  // const { isOpen, open } = useWeb3Modal();
  // const { disconnect } = useDisconnect();
  // const { connect, checkWallet, getNonce } = useCryptoWallet();
  const { address } = useAccount();
  // const cachedAccount = useMemo(() => address, [address]);
  // const [isClicked, setIsClicked] = useState(false);
  // const [serverData, setServerData] = useState(null);
  // const [signature, setSignature] = useState(null);

  // // Состояние можно ли выводить карточки для покупки
  // const [statusCards, setStatusCards] = useState(false);

  // // Запрос на сервер
  // const request = async (sign, jwt) => {
  //   const payload = { signature: sign, jwt };

  //   await connect.mutateAsync(payload);
  //   setStatusCards(true);
  // };

  // const { signMessageAsync } = useSignMessage({
  //   message: serverData?.nonce,
  //   onSuccess: (res) => {
  //     setSignature(res);
  //   },
  // });

  // // Запрос на получение nonce, jwt
  // const getServerData = async () => {
  //   try {
  //     const res = await getNonce(cachedAccount);
  //     setServerData(res);
  //     setSignature(null);

  //     return res;
  //   } catch {
  //     return setIsClicked(false);
  //   }
  // };

  // useEffect(() => {
  //   if (!cachedAccount) {
  //     disconnect();
  //     setStatusCards(false);
  //   }
  // }, [cachedAccount]);

  // // Если пользователь подключил кошелек или его изменил
  // useEffect(() => {
  //   if (!cachedAccount || !isClicked) return;

  //   // Проверяем принадлежит ли кошелек пользователю
  //   checkWallet(cachedAccount).then((res) => {
  //     const { user, exist, success } = res;

  //     if (user) {
  //       if (exist) return setStatusCards(true);
  //       if (!success) {
  //         toast.error('You are trying to link a wallet that is not yours');
  //         disconnect();
  //         setIsClicked(false);
  //         return false;
  //       }

  //       return setStatusCards(true);
  //     }

  //     // Подключаем кошелек
  //     return getServerData();
  //   });

  //   // if (serverData?.address === cachedAccount) return;
  //   // getServerData();
  // }, [cachedAccount, isClicked]);

  // useEffect(() => {
  //   if (!serverData || !isClicked) return;
  //   (async () => {
  //     try {
  //       if (!signature) {
  //         const sign = await signMessageAsync();
  //         await request(sign, serverData?.jwt);
  //         return true;
  //       }

  //       await request(signature, serverData?.jwt);
  //       return true;
  //     } catch (e) {
  //       return false;
  //     } finally {
  //       setIsClicked(false);
  //     }
  //   })();
  // }, [serverData, isClicked]);

  // useEffect(() => {
  //   if (!isClicked) return;
  //   if (!isOpen && !cachedAccount) {
  //     setIsClicked(false);
  //   }
  // }, [isOpen]);

  if (address) return <StoreCardsContainer />;

  return (
    <Stack spacing="30px">
      <Web3Button />
      <StoreCardsLocal />
    </Stack>
  );
}
