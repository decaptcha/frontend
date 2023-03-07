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
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import "./styles.css"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

function MyApp({ Component, pageProps }: AppProps) {
  const { announcement, header, footer } = pageProps;

  const network = WalletAdapterNetwork.Devnet;
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new GlowWalletAdapter(),
      new MathWalletAdapter(),
    ],
    []
  );

  const endpoint = useMemo(() => clusterApiUrl(network), []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <SaasProvider theme={theme}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Layout
              announcementProps={announcement}
              headerProps={header}
              footerProps={footer}
            >
              <Component {...pageProps} />
            </Layout>
          </WalletModalProvider>
        </WalletProvider>
      </SaasProvider>
    </ConnectionProvider>
  );
}

export default MyApp;
