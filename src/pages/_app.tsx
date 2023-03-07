import { useEffect, useMemo } from "react";
import type { AppProps } from "next/app";
import Router from "next/router";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import NProgress from "nprogress";
import splitbee from "@splitbee/web";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import { theme } from "../theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import dynamic from "next/dynamic";

import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  MathWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import "@solana/wallet-adapter-react-ui/styles.css";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const inIframe = () => window.location !== window.parent.location;

function App({ Component, pageProps, router }: AppProps) {
  const isTemplate = router.asPath.startsWith("/templates/");
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

  useEffect(() => {
    // Do not initialize splitbee for iframe previews
    if (!inIframe()) {
      splitbee.init();
    }

    // Necessary because otherwise 100% body height will break the template preview
    document.body.classList.add(isTemplate ? "template" : "body");
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <ChakraProvider theme={theme}>
        <ThemeEditorProvider>
          {isTemplate && <SEO />}
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
          </Head>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </WalletModalProvider>
          </WalletProvider>
        </ThemeEditorProvider>
      </ChakraProvider>
    </ConnectionProvider>
  );
}

export default App;