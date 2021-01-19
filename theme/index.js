import { extendTheme } from "@chakra-ui/react"

import styles from "./styles"
import theme from "./theme"

const config = {
    initialColorMode: "light",
    useSystemColorMode: false
}

const colors = {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  }

const overrides = {
    styles,
    theme,
    colors,
    config
}

export default extendTheme(overrides)