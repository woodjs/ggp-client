import { useEffect, useState } from 'react';
import { TbRuler2Off } from 'react-icons/tb';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { ADDRESS_CONTRACT_NFT } from './constant';
import { useAllowance, useApprove } from './crypto-currency/useСurrency';

/**
 *
 * @param {{
 *  ipfs: string;
 *  category: string;
 *  price: number;
 * }} payload
 * @returns
 */

export const useMintNFT = (payload) => {
  const { ipfs, category, price } = payload;
  const { address } = useAccount();

  // Initial state
  const [isInit, setIsInit] = useState(false);
  const [step, setStep] = useState(0); // 0 - nothing, 1 - approve, 2 - mint, 3 - done
  const [isMintNFT, setIsMintNFT] = useState(false);

  // Сколько нужно запросить крипты
  const [allowAmount, setAllowAmount] = useState(0);
  // Сколько разрешено
  const { data: allowAmountData, refetch: allowAmountRefetch } = useAllowance();
  const approve = useApprove(allowAmount);
  console.log(allowAmountData, allowAmount, 'Суммы для разрешения');
  console.log(approve);

  // console.log(step);
  // Функция для mint
  const { config } = usePrepareContractWrite({
    address: ADDRESS_CONTRACT_NFT,
    abi: [
      {
        inputs: [
          { internalType: 'address', name: 'recipient', type: 'address' },

          { internalType: 'string', name: 'uri', type: 'string' },
          { internalType: 'string', name: '_category', type: 'string' },
        ],
        name: 'mintNFT',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    functionName: 'mintNFT',
    args: [address, ipfs, category],
    enabled: isMintNFT,
  });

  const mint = useContractWrite(config);
  console.log(mint, 'MINT');

  const refetch = () => {
    console.log('Запускаем процесс покупки');
    allowAmountRefetch();
    setIsInit(true);
    setStep(1);
    return true;
  };

  useEffect(() => {
    if (!isInit) return;

    // Проверяем сколько нужно разрешить
    if (allowAmountData < price) {
      setAllowAmount(Number((price - allowAmountData).toFixed(2)));
      return;
    }

    console.log('Разрешать сумму не надо переходим сразу к mintNFT');
    // Отправляем транзакцию на mintNFT
    setIsMintNFT(true);
    setStep(2);
  }, [isInit]);

  return { refetch, setIsMintNFT, step, approve, mint };
};
// export const useMintNFT = (payload) => {
//   const { ipfs, category, price } = payload;
//   const { address } = useAccount();

//   // Initial state
//   const [data, setData] = useState(null);
//   const [dataHashMint, setDataHashMint] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [error, setError] = useState(false);
//   const [isInit, setIsInit] = useState(false);
//   const [step, setStep] = useState(0); // 0 - nothing, 1 - approve, 2 - mint, 3 - done

//   const [isMintNFT, setIsMintNFT] = useState(false);

//   // Функция для проверки allowance
//   // Сколько нужно запросить крипты
//   const [allowAmount, setAllowAmount] = useState(0);
//   // Сколько разрешено
//   const { data: allowAmountData, refetch: allowAmountRefetch } = useAllowance();
//   const {
//     data: approveData,
//     status: approveStatus,
//     writeAsync: approveWriteAsync,
//     isLoading: approveIsLoading,
//     isError: approveIsError,
//   } = useApprove(allowAmount);
//   // console.log(allowAmountData, allowAmount);

//   // Функция для mint
//   const { config } = usePrepareContractWrite({
//     address: ADDRESS_CONTRACT_NFT,
//     abi: [
//       {
//         inputs: [
//           { internalType: 'address', name: 'recipient', type: 'address' },
//           { internalType: 'string', name: 'uri', type: 'string' },
//           { internalType: 'string', name: '_category', type: 'string' },
//         ],
//         name: 'mintNFT',
//         outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
//         stateMutability: 'nonpayable',
//         type: 'function',
//       },
//     ],
//     functionName: 'mintNFT',
//     args: [address, ipfs, category],
//     enabled: isMintNFT,
//   });

//   const {
//     writeAsync: mintWriteAsync,
//     isLoading: mintIsLoading,
//     isError: mintIsError,
//     error: mintError,
//   } = useContractWrite(config);

//   console.log(mintIsLoading, mintIsError, mintError, mintWriteAsync);

//   const refetch = () => {
//     if (isInit) {
//       console.log('Процесс покупки уже был запущен');
//       return false;
//     }
//     console.log('Запускаем процесс покупки');
//     setIsLoading(true);
//     setIsInit(true);
//     return true;
//   };
//   const reset = () => {
//     setIsLoading(false);
//     setIsError(false);
//     setIsInit(false);
//     setStep(0);
//     setData(null);
//     setDataHashMint(null);
//     setError(null);
//   };

//   useEffect(() => {
//     if (!isInit) return;

//     // Проверяем сколько нужно разрешить
//     if (allowAmountData < price) {
//       setAllowAmount(Number((price - allowAmountData).toFixed(2)));
//       setStep(1);
//       return;
//     }

//     console.log('Разрешать сумму не надо переходим сразу к mintNFT');
//     // Отправляем транзакцию на mintNFT
//     setIsMintNFT(true);
//     setStep(2);
//   }, [isInit]);

//   useEffect(() => {
//     if (!allowAmount) return;
//     if (approveIsError) {
//       console.log('Ошибка в процессе разрешения');
//       setError('Error is approve');
//       setIsError(true);
//       return;
//     }
//     console.log(`Вызов функции`);
//     (async () => {
//       try {
//         const tx = await approveWriteAsync();
//         console.log(tx);
//         const txWait = await tx.wait();
//         console.log(txWait);
//         if (!txWait.status) {
//           console.log('Транзакция отклонена');
//           setError('Transaction is rejected');
//           setIsError(true);
//           return;
//         }

//         // Отправляем транзакцию на mintNFT
//         setIsMintNFT(true);
//         setStep(2);
//       } catch (e) {
//         console.log(`Ошибка: ${e.message}`);
//         setError(e.message);
//         setIsError(true);
//       }
//     })();
//   }, [allowAmount]);

//   useEffect(() => {
//     if (!isMintNFT) return;
//     if (mintIsLoading) return;
//     if (mintIsError) {
//       console.log('Ошибка в процессе mintNFT');
//       setError('Error is mintNFT');
//       setIsError(true);
//       return;
//     }

//     (async () => {
//       try {
//         const tx = await mintWriteAsync();
//         console.log(tx);
//         setDataHashMint(tx.hash);
//         const txWait = await tx.wait();
//         console.log(txWait);
//         if (!txWait.status) {
//           console.log('Транзакция отклонена');
//           setError('Transaction is rejected');
//           setIsError(true);
//           return;
//         }

//         console.log('Mint NFT success');
//         setData(txWait);
//         setStep(3);
//       } catch (e) {
//         console.log(`Ошибка: ${e.message}`);
//         setError(e.message);
//         setIsError(true);
//       }
//     })();
//   }, [isMintNFT]);

//   useEffect(() => {
//     if (!data) return;

//     console.log('Получили данные');
//     setIsLoading(false);
//   }, [data]);

//   useEffect(() => {
//     if (!isError) return;
//     setIsLoading(false);
//   }, [isError]);

//   return {
//     data,
//     dataHashMint,
//     isLoading,
//     isError,
//     error,
//     step,
//     refetch,
//     reset,
//     mintWriteAsync,
//     approveWriteAsync,
//   };
// };
