import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const theme = extendTheme({
  config: { useSystemColorMode: false, initialColorMode: "dark" },
  fonts: {
    body: `'Kumbh Sans', sans-serif`,
    heading: `'Kumbh Sans', sans-serif`,
  },
  colors: {
    discord: "#7289da",
  },
  shadows: {
    largeSoft: "rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;",
  },
  styles: {
    global: {
      "::selection": {
        color: "#fff",
        background: "purple.700",
      },
      "html, #__next": {
        height: "100%",
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
      },
      ".body": {
        // todo check how to do this without breaking the site
        // height: '100%', // Push footer to bottom
        overflowY: "scroll", // Always show scrollbar to avoid flickering
      },
      html: {
        scrollBehavior: "smooth",
      },
      "#nprogress": {
        pointerEvents: "none",
      },
      a: {
        borderColor: "pink.500",
      },
      "#nprogress .bar": {
        background: "purple.200",
        position: "fixed",
        zIndex: "1031",
        top: 0,
        left: 0,
        width: "100%",
        height: "2px",
      },
    },
  },
});
