import {
  ADDRESS_CONTRACT_NFT,
  ADDRESS_CRYPTOCURRENCY,
} from '@/hooks/smart-contract/constant';
import { Button } from '@chakra-ui/react';
import { ethers } from 'ethers';
// import abi from '@/hooks/smart-contract/crypto-currency/abi';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['cabinet', 'landing'])),
  },
});

export default function TestPage() {
  const [isMintNFT, setIsMintNFT] = useState(false);
  const { address } = useAccount();
  // const { config } = usePrepareContractWrite({
  //   address: ADDRESS_CONTRACT_NFT,
  //   abi: [
  //     {
  //       inputs: [
  //         { internalType: 'address', name: 'recipient', type: 'address' },
  //         { internalType: 'string', name: 'uri', type: 'string' },
  //         { internalType: 'string', name: '_category', type: 'string' },
  //       ],
  //       name: 'mintNFT',
  //       outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //   ],
  //   functionName: 'mintNFT',
  //   args: [
  //     '0xDB6b1Ede7cB1B4F8ea620fb595bE0abECb2788f5',
  //     '0xDB6b1Ede7cB1B4F8ea620fb595bE0abECb2788f5',
  //     'line',
  //   ],
  //   // enabled: isMintNFT,
  // });

  // const approve = useContractWrite(config);
  // console.log(approve);
  const { config } = usePrepareContractWrite({
    address: '0xd97931ac426029a03f2bde7bfeb48b7119b01d06',
    abi: [
      {
        constant: false,
        inputs: [
          { name: '_spender', type: 'address' },
          { name: '_value', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    functionName: 'approve',
    args: [
      '0xa1de5772be59cb3dd5b57bab80d4ae18cd93365b',
      ethers.utils.parseUnits(String(1), 6),
    ],

    enabled: Boolean(isMintNFT),
  });

  const approve = useContractWrite(config);

  console.log(approve);

  // return <button onClick={data?.writeAsync}>write</button>;
  return (
    <>
      <Button onClick={() => setIsMintNFT(true)}>write</Button>
      <Button
        // disabled={!approve?.writeAsync}
        onClick={() => approve?.writeAsync()}
      >
        write2
      </Button>
    </>
  );
}
