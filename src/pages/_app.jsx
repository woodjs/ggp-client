import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { appWithTranslation } from 'next-i18next';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// import {
//   EthereumClient,
//   w3mConnectors,
//   w3mProvider,
// } from '@web3modal/ethereum';
// import { Web3Modal } from '@web3modal/react';
// import { configureChains, createConfig, WagmiConfig } from 'wagmi';
// import { mainnet } from 'wagmi/chains';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@solana/wallet-adapter-react-ui/styles.css';

import ChakraProvider from '../app/providers/Chakra.provider';
import AuthProvider from '../app/providers/Auth.provider';
import { WalletConnectProvider } from '../app/providers/Wallet.provider';

// UI
import Cabinet from '../components/layout/Cabinet/Cabinet';
import ProgressBar from '../components/ProgressBar/ProgressBar';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

// const chains = [arbitrum, mainnet, polygon, goerli];
// const chains = [goerli];
// -------
// const chains = [mainnet];

// const projectId = '6c20c28f61e190e58efeee6bb3a0ca91';

// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, chains }),
//   publicClient,
// });
// const ethereumClient = new EthereumClient(wagmiConfig, chains);

function MyApp({ Component, pageProps, cookies }) {
  const router = useRouter();

  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'Gilroy';
          src: url('/fonts/gilroy-regular.ttf') format('truetype');
          font-style: normal;
          font-weight: 400;
        }
        @font-face {
          font-family: 'Gilroy';
          src: url('/fonts/Gilroy-Bold.ttf') format('truetype');
          font-style: normal;
          font-weight: 700;
        }
        @font-face {
          font-family: 'BuyanBold';
          src: url('/fonts/BuyanBold.ttf') format('truetype');
          font-style: normal;
          font-weight: 700;
        }
        :root {
          /* colors */
          --green: #35cb33;
          --dark: #0d0d0d;
          --graylight: #f8f8f8;
          --gray: #333333;
          --graytext: #f2f2f2;
        }
      `}</style>
      <DefaultSeo title="GGP" />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ChakraProvider cookies={cookies}>
            {/* <WagmiConfig config={wagmiConfig}>
             */}
            <WalletConnectProvider>
              <ProgressBar />
              {
                // eslint-disable-next-line no-nested-ternary

                router.pathname.startsWith('/account') ? (
                  <AuthProvider>
                    <Cabinet>
                      <Component {...pageProps} />
                    </Cabinet>
                  </AuthProvider>
                ) : (
                  <Component {...pageProps} />
                )
              }
              <ToastContainer theme="colored" limit={5} />
            </WalletConnectProvider>
            {/* 
						</WagmiConfig> */}
          </ChakraProvider>
        </Hydrate>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      {/* <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
    </>
  );
}

MyApp.getInitialProps = (data) => {
  const { ctx } = data;
  return {
    cookies: ctx?.req?.headers?.cookie || '',
  };
};

// export default MyApp;
export default appWithTranslation(MyApp);
