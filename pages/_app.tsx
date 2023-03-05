import type { AppProps } from "next/app";

import { AuthProvider, SaasProvider } from "@saas-ui/react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  MathWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import { Layout } from "components/layout";

import theme from "../theme";
import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";

function MyApp({ Component, pageProps }: AppProps) {
  const { announcement, header, footer } = pageProps;

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new GlowWalletAdapter(),
      new MathWalletAdapter(),
    ],
    []
  );

  const endpoint = useMemo(() => clusterApiUrl("mainnet-beta"), []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <SaasProvider theme={theme}>
        <WalletProvider wallets={wallets} autoConnect>
          <Layout
            announcementProps={announcement}
            headerProps={header}
            footerProps={footer}
          >
            <Component {...pageProps} />
          </Layout>
        </WalletProvider>
      </SaasProvider>
    </ConnectionProvider>
  );
}

export default MyApp;
