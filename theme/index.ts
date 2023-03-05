import { extendTheme } from '@chakra-ui/react'
import { theme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

import '@fontsource/fira-code/variable.css'

const colors = {
  "black": "#0c1015",
  "gray": {
    "50": "#f9fafa",
    "100": "#f1f1f2",
    "200": "#e6e7e9",
    "300": "#d2d4d7",
    "400": "#a9adb2",
    "500": "#797f88",
    "600": "#4d5560",
    "700": "#2e3744",
    "800": "#19202b",
    "900": "#141a23"
  },
  "blue": {
    "50": "#f1f6fd",
    "100": "#cde0f6",
    "200": "#a8c8f0",
    "300": "#7fafe9",
    "400": "#5896e2",
    "500": "#337fdb",
    "600": "#226ac0",
    "700": "#1a5193",
    "800": "#154279",
    "900": "#113662"
  },
  "purple": {
    "50": "#f9f6fd",
    "100": "#e6daf8",
    "200": "#d3bef4",
    "300": "#b795ed",
    "400": "#a379e7",
    "500": "#8952e1",
    "600": "#7534db",
    "700": "#6022c2",
    "800": "#4f1ca0",
    "900": "#3b1577"
  },
  "pink": {
    "50": "#fdf5f9",
    "100": "#f8d9e7",
    "200": "#f3b9d3",
    "300": "#eb8db8",
    "400": "#e56ba2",
    "500": "#dc3782",
    "600": "#c4226c",
    "700": "#a11c58",
    "800": "#7e1645",
    "900": "#5d1033"
  },
  "red": {
    "50": "#fdf6f5",
    "100": "#f8d9d7",
    "200": "#f2b7b4",
    "300": "#ea8c87",
    "400": "#e5716b",
    "500": "#de4840",
    "600": "#c82b23",
    "700": "#a2231c",
    "800": "#891e18",
    "900": "#641612"
  },
  "orange": {
    "50": "#fdfaf6",
    "100": "#f9ebdb",
    "200": "#f1d4b1",
    "300": "#e7b273",
    "400": "#dc9239",
    "500": "#c47b22",
    "600": "#a5681d",
    "700": "#845317",
    "800": "#684112",
    "900": "#55350f"
  },
  "yellow": {
    "50": "#fefefc",
    "100": "#fbf9ea",
    "200": "#f4eec1",
    "300": "#ece191",
    "400": "#dfce49",
    "500": "#bba921",
    "600": "#95871a",
    "700": "#756914",
    "800": "#574f0f",
    "900": "#48410d"
  },
  "green": {
    "50": "#f5fdf9",
    "100": "#c6f5e0",
    "200": "#83e9bb",
    "300": "#26d988",
    "400": "#21be77",
    "500": "#1da366",
    "600": "#188755",
    "700": "#126942",
    "800": "#0f5636",
    "900": "#0c472c"
  },
  "teal": {
    "50": "#f1fcfc",
    "100": "#bff1f4",
    "200": "#83e4e9",
    "300": "#2cd1da",
    "400": "#21b2ba",
    "500": "#1c979e",
    "600": "#167b80",
    "700": "#116064",
    "800": "#0f5053",
    "900": "#0c4244"
  },
  "cyan": {
    "50": "#f4fbfd",
    "100": "#d0eef7",
    "200": "#bbe7f3",
    "300": "#a2deef",
    "400": "#53c2e1",
    "500": "#2ab4da",
    "600": "#23a2c5",
    "700": "#1d86a3",
    "800": "#176e86",
    "900": "#125568"
  },
  "primary": {
    "50": "#f1fcfc",
    "100": "#bff1f4",
    "200": "#83e4e9",
    "300": "#2cd1da",
    "400": "#21b2ba",
    "500": "#1c979e",
    "600": "#167b80",
    "700": "#116064",
    "800": "#0f5053",
    "900": "#0c4244"
  }
}
const styles = {
  global: (props: any) => ({
    html: {
      height: "100%"
    },
    '::selection':{
      color: 'primary.700',
      background: 'white'
    },
    body: {
      color: 'gray.900',
      bg: 'white',
      fontSize: 'lg',
      _dark: {
        color: 'white',
        bg: 'gray.900',
      },
    },
  }),
}

export default extendTheme(
  {
    fonts: {
      heading: 'FiraCodeVariable, monospace',
      body: 'FiraCodeVariable, monospace',
    },
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    colors,
    styles,
    fontSizes,
    components,
  },
  theme
)
