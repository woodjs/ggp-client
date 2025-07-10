// import { useCryptoWallet } from '@/hooks/useCryptoWallet';
// import { Button, HStack, Image, Text, useDisclosure } from '@chakra-ui/react';
// import {
//   useAddress,
//   useDisconnect,
//   useSDK,
//   useWalletConnect,
// } from '@thirdweb-dev/react';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import ModalCrypto from '../ModalCrypto/ModalCrypto';
// import ModalSign from './ModalSign';

// export default function ThirdwebButton() {
//   const router = useRouter();
//   // MODAL
//   const modalForm = useDisclosure();

//   // THIRDWEB
//   const disconnect = useDisconnect();
//   const address = useAddress();
//   const sdk = useSDK();
//   const connectWithWalletConnect = useWalletConnect();

//   const { auth, getNonce } = useCryptoWallet();

//   const [serverData, setServerData] = useState(null);
//   const [signature, setSignature] = useState(null);
//   const [isClicked, setIsClicked] = useState(false);

//   // console.log(address);
//   console.log(signature);

//   // Запрос на сервер
//   const request = async (sign, jwt, values) => {
//     const { login } = router.query;
//     let payload = { signature: sign, jwt };
//     if (values) {
//       payload = { ...payload, ...values };
//     }
//     if (login) {
//       payload = { ...payload, sponsorLogin: login };
//     }

//     return auth.mutateAsync(payload, {
//       onSuccess: (res) => {
//         window.dataLayer = window.dataLayer || [];
//         window.dataLayer.push({
//           event: values ? 'registration' : 'authorization',
//           user_id: res?.id,
//           track: 'walletConnect',
//         });
//       },
//     });
//   };

//   const handleRequest = async (sign) => {
//     if (!serverData.exist) return modalForm.onOpen();

//     return request(sign, serverData.jwt);
//   };

//   // Запрос на сервер с помощью модального окна
//   const handleClickModal = async (values) => {
//     request(signature, serverData.jwt, values);
//   };

//   // Запрос на получение nonce, jwt
//   const getServerData = async () => {
//     try {
//       const res = await getNonce(address);
//       setServerData(res);
//       setSignature(null);

//       return res;
//     } catch {
//       return setIsClicked(false);
//     }
//   };

//   // Если подключился кошелек
//   useEffect(() => {
//     if (!address) return;
//     if (serverData?.address === address) return;

//     // Выполняем запрос на сервер
//     getServerData();
//   }, [address, isClicked]);

//   useEffect(() => {
//     if (!isClicked || !serverData) return;

//     (async () => {
//       try {
//         if (!signature) {
//           const sign = await sdk.wallet.sign(serverData.nonce);
//           setSignature(sign);
//           await handleRequest(sign);

//           return true;
//         }

//         console.log('Запрос');
//         await handleRequest(signature);
//         return true;
//       } catch (e) {
//         return false;
//       } finally {
//         setIsClicked(false);
//       }
//     })();
//   }, [serverData, isClicked]);

//   return (
//     <>
//       <Button
//         variant="border"
//         fontWeight={400}
//         onClick={() => {
//           if (!address) return connectWithWalletConnect();
//           setIsClicked(true);
//           // return true;
//         }}
//         isLoading={isClicked}
//       >
//         <HStack>
//           <Image
//             src="/images/icons/walletconnect.png"
//             alt=""
//             w="26px"
//             h="26px"
//           />
//           <Text>WalletConnect</Text>
//         </HStack>
//       </Button>
//       <ModalCrypto
//         isOpen={modalForm.isOpen}
//         onClose={modalForm.onClose}
//         handleClick={handleClickModal}
//       />
//       {/* <ModalSign isOpen={true} /> */}
//     </>
//   );
// }
