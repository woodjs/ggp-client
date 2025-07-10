import { ethers } from 'ethers';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi';
import { ADDRESS_CONTRACT_NFT, ADDRESS_CRYPTOCURRENCY } from '../constant';
import abi from './abi';

export const useApprove = (amount) => {
  const { config } = usePrepareContractWrite({
    address: ADDRESS_CRYPTOCURRENCY,
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
    args: [ADDRESS_CONTRACT_NFT, ethers.utils.parseUnits(String(amount), 6)],
    enabled: Boolean(amount),
  });

  return useContractWrite(config);
};

export const useAllowance = () => {
  const { address } = useAccount();
  const { data, isLoading, isError, error, ...rest } = useContractRead({
    address: ADDRESS_CRYPTOCURRENCY,
    abi,
    functionName: 'allowance',
    args: [address, ADDRESS_CONTRACT_NFT],
    enabled: Boolean(address),
  });

  return {
    data:
      !isLoading && !isError
        ? Number(ethers.utils.formatUnits(data, 6))
        : undefined,
    ...rest,
  };
};
