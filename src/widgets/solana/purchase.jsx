import { useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { usePurchaseNFT } from './hooks/usePurchase';

export default function PurchaseTest() {
  const { buyNFT, loading } = usePurchaseNFT();
  const [nftCount, setNftCount] = useState(1);
  const [result, setResult] = useState(null);

  const handleBuy = async () => {
    setResult(null);
    const res = await buyNFT(Number(nftCount));
    setResult(res);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">🧪 Тестовая покупка NFT</h1>

      <div className="w-full flex flex-col items-center space-y-2">
        <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700" />

        <input
          type="number"
          min="1"
          value={nftCount}
          onChange={(e) => setNftCount(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 text-center focus:ring-2 focus:ring-purple-500"
          placeholder="Количество NFT"
        />

        <button
          onClick={handleBuy}
          disabled={loading}
          className={`w-full rounded-md py-2 font-semibold text-white ${
            loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {loading ? 'Обработка...' : 'Купить (тест)'}
        </button>
      </div>

      {result && (
        <div
          className={`mt-4 w-full p-3 rounded-lg ${
            result.success
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {result.success ? (
            <>
              <p>✅ Успешно отправлено!</p>
              <p>
                Tx Signature:{' '}
                <a
                  href={`https://explorer.solana.com/tx/${result.txSignature}?cluster=devnet`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {result.txSignature.slice(0, 12)}...
                </a>
              </p>
            </>
          ) : (
            <p>❌ Ошибка: {result.error}</p>
          )}
        </div>
      )}
    </div>
  );
}
