import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export function WithConnectWallet({ children }) {
  const { connected } = useWallet();

  return (
    <>
      {!connected && <WalletMultiButton />}
      {connected && children}
    </>
  );
}
