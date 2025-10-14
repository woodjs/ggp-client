import bs58 from 'bs58';
import { protectedAPI } from '@/shared/api';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import { useState } from 'react';

export function usePurchaseNFT() {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [loading, setLoading] = useState(false);

  const buyNFT = async (nftCount) => {
    if (!publicKey) throw new Error('Wallet not connected');

    setLoading(true);
    try {
      // 1️⃣ Получаем nonce
      const { nonce } = await protectedAPI.get(
        `/solana/challenge?wallet=${publicKey.toBase58()}`
      );

      // 2️⃣ Подписываем nonce
      const encoded = new TextEncoder().encode(nonce);
      const signedMessage = await window.solana.signMessage(encoded, 'utf8');
      const signatureBase58 = bs58.encode(signedMessage.signature);

      // 3️⃣ Создаём заказ на сервере
      const orderRes = await protectedAPI.post('/solana/purchase', {
        walletAddress: publicKey.toBase58(),
        nftCount,
        signature: signatureBase58,
        message: nonce,
      });

      const { totalAmount, receiverWallet, memo, orderId } = orderRes;

      // 4️⃣ Создаём транзакцию SOL
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(receiverWallet),
          lamports: totalAmount * 1e9,
        })
      );

      // Добавляем memo
      const memoProgramId = new PublicKey(
        'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'
      );
      transaction.add({
        keys: [],
        programId: memoProgramId,
        data: Buffer.from(memo, 'utf8'),
      });

      // 5️⃣ Отправляем транзакцию
      const txSignature = await sendTransaction(transaction, connection);
      console.log('TX sent:', txSignature);

      // 6️⃣ Подтверждаем платёж на сервере
      const confirmRes = await protectedAPI.post('/solana/payment/confirm', {
        txSignature,
      });
      console.log('Payment confirmed:', confirmRes);

      setLoading(false);
      return { success: true, txSignature, orderId };
    } catch (err) {
      console.error(err);
      setLoading(false);
      return { success: false, error: err.message };
    }
  };

  return { buyNFT, loading };
}
