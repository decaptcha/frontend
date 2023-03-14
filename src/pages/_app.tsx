import { useEffect, useMemo } from "react";
import type { AppProps } from "next/app";
import Router from "next/router";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import NProgress from "nprogress";
import splitbee from "@splitbee/web";
import "@fontsource/kumbh-sans";

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
import CustomCursorManager from "@/components/CustomCursor/context/manager";
import CustomCursor from "@/components/CustomCursor";

import "../components/CustomCursor/style.scss";
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
              <CustomCursorManager>
                <div className="page-wrapper">
                  <CustomCursor />

                  <Header />
                  <Component {...pageProps} />
                  {/* <Footer /> */}
                </div>
              </CustomCursorManager>
            </WalletModalProvider>
          </WalletProvider>
        </ThemeEditorProvider>
      </ChakraProvider>
    </ConnectionProvider>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
